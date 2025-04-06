"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeleteManyMutation = exports.getCreateManyMutation = exports.getUpdateOrCreateMutation = exports.getDeleteMutation = exports.getUpdateMutation = exports.getCreateMutation = exports.getGetMutation = exports.getSearchQuery = exports.getFragment = void 0;
const Constants_1 = require("./Constants");
const BaseUtils_1 = require("./BaseUtils");
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const getInnerReferenceFragmentField = (fdn, businessObjectTypeNodeList, embeddedObjectTypeNodeList, simpleMode) => {
    const fieldNodeType = fdn.type.kind === "NonNullType" ? fdn.type.type : fdn.type;
    if (fieldNodeType.kind === "NamedType") {
        const innerReferenceName = fieldNodeType.name.value;
        const businessObjectTypeNode = businessObjectTypeNodeList.find(n => Constants_1.entityPrefix.concat(innerReferenceName) === n.name.value);
        if (businessObjectTypeNode) {
            if ((!simpleMode)) {
                const businessFieldList = BaseUtils_1.extractNodeBusinessFieldList(businessObjectTypeNode);
                const businessFieldListStr = getFragmentFieldListStr(businessFieldList, businessObjectTypeNodeList, embeddedObjectTypeNodeList, true);
                return `
                ${fdn.name.value} {
                      ${businessFieldListStr}
                }
                `;
            }
            else {
                return `
                ${fdn.name.value} {
                  id
                }
                `;
            }
        }
    }
};
const getChildListFragmentField = (fdn, businessObjectTypeNodeList, embeddedObjectTypeNodeList, simpleMode) => {
    if (fdn.type.kind === "NonNullType"
        && fdn.type.type.kind === "NamedType"
        && fdn.type.type.name.value.startsWith(Constants_1.entityCollectionPrefix)
        && fdn.name.value !== Constants_1.statusHistoryFieldName) {
        const entityName = fdn.type.type.name.value.substring(Constants_1.entityCollectionPrefix.length);
        const businessObjectTypeNode = businessObjectTypeNodeList.find(n => Constants_1.entityPrefix.concat(entityName) === n.name.value);
        if (!simpleMode && businessObjectTypeNode) {
            const businessFieldList = BaseUtils_1.extractNodeBusinessFieldList(businessObjectTypeNode);
            const businessFieldListStr = getFragmentFieldListStr(businessFieldList, businessObjectTypeNodeList, embeddedObjectTypeNodeList, true);
            return `
              ${fdn.name.value} {
                elems {
                  ${businessFieldListStr}
                }
              }
            `;
        }
    }
};
const getEnumFragmentField = (fdn) => {
    const fieldNodeType = fdn.type.kind === "NonNullType" ? fdn.type.type : fdn.type;
    if (fieldNodeType.kind === "NamedType"
        && fieldNodeType.name.value.startsWith(Constants_1.enumPrefix))
        return `${fdn.name.value}`;
};
const getEnumCollectionFragmentField = (fdn) => {
    if (fdn.type.kind === "NonNullType"
        && fdn.type.type.kind === "NamedType"
        && fdn.type.type.name.value.startsWith(Constants_1.enumCollectionPrefix))
        return `
        ${fdn.name.value} {
            elems 
          }
        `;
};
const getReferenceFragmentField = (fdn, businessObjectTypeNodeList, embeddedObjectTypeNodeList, simpleMode) => {
    if (fdn.type.kind === "NonNullType"
        && fdn.type.type.kind === "NamedType"
        && fdn.type.type.name.value.startsWith(Constants_1.referencePrefix)
        && fdn.type.type.name.value.endsWith(Constants_1.referencePostfix)) {
        const referenceName = fdn.type.type.name.value.substring(Constants_1.referencePrefix.length).slice(0, -Constants_1.referencePostfix.length);
        const businessObjectTypeNode = businessObjectTypeNodeList.find(n => Constants_1.entityPrefix.concat(referenceName) === n.name.value);
        if ((!simpleMode) && businessObjectTypeNode) {
            const businessFieldList = BaseUtils_1.extractNodeBusinessFieldList(businessObjectTypeNode);
            const businessFieldListStr = getFragmentFieldListStr(businessFieldList, businessObjectTypeNodeList, embeddedObjectTypeNodeList, true);
            return `
                ${fdn.name.value} {
                    entity {
                      ${businessFieldListStr}
                    }
                }
                `;
        }
        else {
            return `
            ${fdn.name.value} {
              entityId
            }
            `;
        }
    }
};
const getEmbeddedFragmentField = (fdn, embeddedObjectTypeNodeList) => {
    if (fdn.type.kind === "NonNullType"
        && fdn.type.type.kind === "NamedType"
        && fdn.type.type.name.value.startsWith(Constants_1.referencePrefix)) {
        const fieldTypeName = fdn.type.type.name.value;
        const embeddedObjectTypeNode = embeddedObjectTypeNodeList.find(n => n.name.value === fieldTypeName);
        if (embeddedObjectTypeNode
            && embeddedObjectTypeNode.fields
            && embeddedObjectTypeNode.fields.length > 0) {
            const embeddedObjectFieldNameList = embeddedObjectTypeNode.fields.map(f => f.name.value);
            return `
                    ${fdn.name.value} {
                        ${embeddedObjectFieldNameList.join("\n")}
                    }
            `;
        }
    }
};
const getStatusFragmentField = (fdn) => {
    if (fdn.type.kind === "NamedType" && fdn.type.name.value === Constants_1.statusTypeName) {
        return `
        ${fdn.name.value}{code}
        `;
    }
};
const getPrimitiveFragmentField = (fdn) => {
    const fieldNodeType = fdn.type.kind === "NonNullType" ? fdn.type.type : fdn.type;
    if (fieldNodeType.kind === "NamedType"
        && Constants_1.primitiveTypeList.includes(fieldNodeType.name.value))
        return `
        ${fdn.name.value}
        `;
};
const getFragmentFieldListStr = (businessFieldList, businessObjectTypeNodeList, embeddedObjectTypeNodeList, simpleMode) => {
    const businessFieldListStr = businessFieldList.map(f => {
        return getInnerReferenceFragmentField(f, businessObjectTypeNodeList, embeddedObjectTypeNodeList, simpleMode)
            ?? getChildListFragmentField(f, businessObjectTypeNodeList, embeddedObjectTypeNodeList, simpleMode)
            ?? getEnumFragmentField(f)
            ?? getEnumCollectionFragmentField(f)
            ?? getReferenceFragmentField(f, businessObjectTypeNodeList, embeddedObjectTypeNodeList, simpleMode)
            ?? getEmbeddedFragmentField(f, embeddedObjectTypeNodeList)
            ?? getStatusFragmentField(f)
            ?? getPrimitiveFragmentField(f)
            ?? "";
    }).join('\n');
    return businessFieldListStr;
};
const getFragment = (node, businessObjectTypeNodeList, embeddedObjectTypeNodeList, simpleMode) => {
    const basicFieldNameList = ['id', '__typename'];
    const businessFieldListStr = basicFieldNameList.join("\n").concat(getFragmentFieldListStr(BaseUtils_1.extractNodeBusinessFieldList(node).filter(n => !basicFieldNameList.includes(n.name.value)), businessObjectTypeNodeList, embeddedObjectTypeNodeList, simpleMode));
    const prefixedNodeName = node.name.value;
    const nodeName = prefixedNodeName.substring(Constants_1.entityPrefix.length);
    return graphql_tag_1.default `fragment ${nodeName}${Constants_1.generatedFragmentPostfix} on ${prefixedNodeName} {\n${businessFieldListStr}}`;
};
exports.getFragment = getFragment;
const getSearchQuery = (node) => {
    const prefixedNodeName = node.name.value;
    const nodeName = prefixedNodeName.substring(Constants_1.entityPrefix.length);
    return graphql_tag_1.default `query search${nodeName}($cond: String){ search${nodeName}(cond: $cond){elems{...${nodeName}${Constants_1.generatedFragmentPostfix}}}}`;
};
exports.getSearchQuery = getSearchQuery;
const getGetMutation = (node, isDictionary, namePrefix) => {
    const prefixedNodeName = node.name.value;
    const nodeName = prefixedNodeName.substring(Constants_1.entityPrefix.length);
    return graphql_tag_1.default `
        mutation get${namePrefix}${nodeName}($id: ID!){
            ${isDictionary ? "packet: dictionaryPacket" : "packet"}{
                get${nodeName}(id:$id){
                    ...${nodeName}${Constants_1.generatedFragmentPostfix}
                }
            }
        }`;
};
exports.getGetMutation = getGetMutation;
const getCreateMutation = (node) => {
    const prefixedNodeName = node.name.value;
    const nodeName = prefixedNodeName.substring(Constants_1.entityPrefix.length);
    return graphql_tag_1.default `
        mutation create${nodeName}($input: _Create${nodeName}Input!){
            packet{
                create${nodeName}(input:$input){
                    ...${nodeName}${Constants_1.generatedFragmentPostfix}
                }
            }
        }`;
};
exports.getCreateMutation = getCreateMutation;
const getUpdateMutation = (node) => {
    const prefixedNodeName = node.name.value;
    const nodeName = prefixedNodeName.substring(Constants_1.entityPrefix.length);
    return graphql_tag_1.default `
        mutation update${nodeName}($input: _Update${nodeName}Input!){
            packet{
                update${nodeName}(input:$input){
                    ...${nodeName}${Constants_1.generatedFragmentPostfix}
                }
            }
        }`;
};
exports.getUpdateMutation = getUpdateMutation;
const getDeleteMutation = (node) => {
    const prefixedNodeName = node.name.value;
    const nodeName = prefixedNodeName.substring(Constants_1.entityPrefix.length);
    return graphql_tag_1.default `
        mutation delete${nodeName}($id: ID!){
            packet{
                delete${nodeName}(id:$id)
            }
        }`;
};
exports.getDeleteMutation = getDeleteMutation;
const getUpdateOrCreateMutation = (inputNode, isDictionary) => {
    if (!(inputNode.fields?.find(f => f.name.value === "id" && f.type.kind === "NonNullType"))) {
        return;
    }
    const inputNodeName = inputNode.name.value;
    const prefixedNodeName = inputNodeName.substring(0, inputNodeName.length - Constants_1.inputTypePostfix.length);
    const nodeName = prefixedNodeName.substring(Constants_1.createInputTypePrefix.length);
    const packetName = isDictionary ? "dictionaryPacket" : "packet";
    return graphql_tag_1.default `
        mutation updateOrCreate${nodeName}($input: _Create${nodeName}Input!){
            ${packetName}{
                updateOrCreate${nodeName}(input:$input){
                    returning{
                        ...${nodeName}${Constants_1.generatedFragmentPostfix}
                    }
                }
            }
        }`;
};
exports.getUpdateOrCreateMutation = getUpdateOrCreateMutation;
const getCreateManyMutation = (node) => {
    if (!(node.fields?.find(f => f.name.value === Constants_1.aggregateRootFieldName))) {
        return;
    }
    const prefixedNodeName = node.name.value;
    const nodeName = prefixedNodeName.substring(Constants_1.entityPrefix.length);
    return graphql_tag_1.default `
        mutation createMany${nodeName}($input: [_Create${nodeName}Input!]!){
            packet{
                createMany${nodeName}(input:$input)
            }
        }`;
};
exports.getCreateManyMutation = getCreateManyMutation;
const getDeleteManyMutation = (node, inputNode) => {
    if (!(node.fields?.find(f => f.name.value === Constants_1.aggregateRootFieldName))) {
        return;
    }
    const prefixedNodeName = node.name.value;
    const nodeName = prefixedNodeName.substring(Constants_1.entityPrefix.length);
    if (inputNode) {
        return graphql_tag_1.default `
        mutation deleteMany${nodeName}($input: [_DeleteMany${nodeName}Input!]!){
            packet{
                deleteMany${nodeName}(input:$input)
            }
        }`;
    }
    else {
        return graphql_tag_1.default `
        mutation deleteMany${nodeName}($ids: [ID!]!){
            packet{
                deleteMany${nodeName}(ids:$ids)
            }
        }`;
    }
};
exports.getDeleteManyMutation = getDeleteManyMutation;
