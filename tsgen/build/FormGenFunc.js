"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormData = void 0;
const Basic_1 = require("./utils/types/Basic");
const BaseUtils_1 = require("./utils/BaseUtils");
const Constants_1 = require("./utils/Constants");
// import { getMainMenuFC, getAggMenuFC } from './formgen-templates/antd/FCTmpl'
const { SIMPLE, ON_INSTANCE } = Basic_1.MutationKind;
const isQueryOperationDefinition = (dn) => {
    return dn.kind === "OperationDefinition" && dn.operation === "query";
};
const extractQueryOperationDefinitionList = (dnList) => {
    return dnList.filter(isQueryOperationDefinition);
};
const isMutationOperationDefinition = (dn) => {
    return dn.kind === "OperationDefinition" && dn.operation === "mutation";
};
const extractMutationOperationDefinitionList = (dnList) => {
    return dnList.filter(isMutationOperationDefinition);
};
const isFragmentDefinition = (dn) => {
    return dn.kind === "FragmentDefinition";
};
const extractFragmentDefinitionList = (dnList) => {
    return dnList.filter(isFragmentDefinition);
};
const isDsElemsField = (sn) => {
    return sn.kind === "Field" && sn.name.value === "elems";
};
const extractFirstSelectionList = (fieldNode) => {
    const elemsNodes = fieldNode.selectionSet?.selections.filter(isDsElemsField);
    if (elemsNodes && elemsNodes.length > 0)
        return elemsNodes[0].selectionSet?.selections;
};
// FIELD
const extractTypeName = (typeNode) => {
    if (typeNode.kind == "NamedType") {
        return typeNode.name.value;
    }
    if (typeNode.kind == "NonNullType") {
        return extractTypeName(typeNode.type);
    }
};
const extractFieldTypeName = (queryType, fieldNode, businessObjectTypeNodeList, embeddedObjectTypeNodeList) => {
    if (queryType.startsWith(Constants_1.referencePrefix) && queryType.endsWith(Constants_1.referencePostfix))
        return queryType;
    const typedNode = businessObjectTypeNodeList.find(n => n.name.value === queryType)?.fields?.find(f => f.name.value === fieldNode.name.value)?.type
        ?? embeddedObjectTypeNodeList.find(n => n.name.value === queryType)?.fields?.find(f => f.name.value === fieldNode.name.value)?.type;
    if (typedNode)
        return extractTypeName(typedNode);
};
const extractTypedField = (queryType, fieldNode, fragmentDefinitionList, businessObjectTypeNodeList, embeddedObjectTypeNodeList, typedFieldList) => {
    if (!typedFieldList.find(tf => tf.fieldName === fieldNode.name.value)) {
        const fieldTypeName = extractFieldTypeName(queryType, fieldNode, businessObjectTypeNodeList, embeddedObjectTypeNodeList);
        if (fieldTypeName) {
            typedFieldList.push({
                fieldAlias: fieldNode.alias?.value ?? fieldNode.name.value,
                fieldName: fieldNode.name.value,
                fieldPath: fieldNode.name.value,
                fieldType: (fieldTypeName.startsWith(Constants_1.referencePrefix) && fieldNode.selectionSet) ?
                    extractTypedFieldList(fieldTypeName, fieldNode.selectionSet.selections, fragmentDefinitionList, businessObjectTypeNodeList, embeddedObjectTypeNodeList) :
                    fieldTypeName
            });
        }
    }
};
const extractTypedFieldList = (queryType, selectionNodeList, fragmentDefinitionList, businessObjectTypeNodeList, embeddedObjectTypeNodeList) => {
    const typedFieldList = [];
    selectionNodeList.forEach(sn => {
        if (sn.kind === "FragmentSpread") {
            const fragmentDefenition = fragmentDefinitionList.find(fd => fd.name.value === sn.name.value);
            fragmentDefenition?.selectionSet.selections.forEach(fd => {
                if (fd.kind === "Field")
                    extractTypedField(queryType, fd, fragmentDefinitionList, businessObjectTypeNodeList, embeddedObjectTypeNodeList, typedFieldList);
            });
        }
        else if (sn.kind === "Field") {
            extractTypedField(queryType, sn, fragmentDefinitionList, businessObjectTypeNodeList, embeddedObjectTypeNodeList, typedFieldList);
        }
    });
    return typedFieldList;
};
const getQueryList = (documentNode, businessObjectTypeNodeList, embeddedObjectTypeNodeList) => {
    const result = [];
    const queryOperationDefinitionList = extractQueryOperationDefinitionList(documentNode.definitions);
    const fragmentDefinitionList = extractFragmentDefinitionList(documentNode.definitions);
    queryOperationDefinitionList.forEach(qod => {
        qod.selectionSet.selections.forEach(sn => {
            if (sn.kind === "Field") {
                const firstSelectionList = extractFirstSelectionList(sn);
                if (firstSelectionList) {
                    const entityName = sn.name.value.substring(Constants_1.searchPrefix.length);
                    const queryType = Constants_1.entityPrefix.concat(entityName);
                    const typedFieldList = extractTypedFieldList(queryType, firstSelectionList, fragmentDefinitionList, businessObjectTypeNodeList, embeddedObjectTypeNodeList);
                    result.push({
                        queryAlias: sn.alias?.value ?? sn.name.value,
                        queryName: sn.name.value,
                        queryType: queryType,
                        fieldList: typedFieldList
                    });
                }
            }
        });
    });
    return result;
};
// INPUT
const extractInputObjectTypeFieldList = (inputObjectType, inputObjectTypeNodeList, businessObjectTypeNodeList, path) => {
    const inputObjectTypeName = extractTypeName(inputObjectType);
    const result = [];
    if (inputObjectTypeName) {
        inputObjectTypeNodeList
            .find(inputObjectType => inputObjectType.name.value === inputObjectTypeName)?.fields
            ?.forEach(inputObjectTypeField => {
            const inputName = inputObjectTypeField.name.value;
            const objectField = businessObjectTypeNodeList?.fields?.find(f => f.name.value === inputName);
            const fieldType = (objectField) ? extractTypeName(objectField.type) : undefined;
            const fieldTypeName = extractTypeName(inputObjectTypeField.type) ?? "";
            result.push({
                inputName: inputName,
                inputPath: "",
                inputRefTypeName: { refAggName: "", refEntityName: fieldType ?? "" },
                inputType: (Constants_1.primitiveTypeList.includes(fieldTypeName) || fieldTypeName.startsWith(Constants_1.enumPrefix)) ?
                    fieldTypeName :
                    extractInputObjectTypeFieldList(inputObjectTypeField.type, inputObjectTypeNodeList, businessObjectTypeNodeList, "")
            });
        });
    }
    return result;
};
const extractVariableTypedInput = (variableDefinition, inputObjectTypeNodeList, businessObjectTypeNodeList, inputPath) => {
    const variableTypeName = extractTypeName(variableDefinition.type) ?? "";
    const inputName = variableDefinition.variable.name.value;
    // const objectField = businessObjectTypeNodeList?.fields?.find(f => f.name.value === inputName)
    // const fieldType = (objectField) ? extractTypeName(objectField.type) : undefined
    const result = {
        inputName: inputName,
        inputPath: inputPath ?? "",
        inputRefTypeName: { refAggName: "", refEntityName: "" },
        inputType: Constants_1.primitiveTypeList.includes(variableTypeName) ? variableTypeName : extractInputObjectTypeFieldList(variableDefinition.type, inputObjectTypeNodeList, businessObjectTypeNodeList, "")
    };
    return result;
};
const getMutationList = (entityName, documentNode, inputObjectTypeNodeList, fragmentDefinitionList, businessObjectTypeNodeList, embeddedObjectTypeNodeList) => {
    const result = [];
    const mutationOperationDefinitionList = extractMutationOperationDefinitionList(documentNode.definitions);
    mutationOperationDefinitionList.forEach(md => {
        const mutationSelections = mutationOperationDefinitionList.find(_md => _md.name?.value == "getFor" + BaseUtils_1.toUpperCaseFirstLetter(md.name?.value ?? ""))?.selectionSet.selections;
        const packetSelections = (mutationSelections && mutationSelections.length > 0) && mutationSelections[0].kind === "Field" ? mutationSelections[0].selectionSet?.selections : undefined;
        const querySelections = (packetSelections && packetSelections.length > 0) && packetSelections[0].kind === "Field" ? packetSelections[0].selectionSet?.selections : undefined;
        //const queryFirstSelection = (querySelections && querySelections?.length > 0) ? querySelections[0] : undefined 
        const mutationName = md.name?.value ?? "";
        const mutation = {
            mutationAlias: md.name?.value ?? "",
            mutationName: mutationName,
            mutationType: (mutationName.startsWith(Constants_1.createPrefix) ? SIMPLE : ON_INSTANCE),
            //            fcStr: "",//md,
            inputList: [],
            getQueryFieldList: (querySelections && querySelections?.length > 0) ? (extractTypedFieldList(Constants_1.entityPrefix.concat(entityName), querySelections, fragmentDefinitionList, businessObjectTypeNodeList, embeddedObjectTypeNodeList)) : []
        };
        md.variableDefinitions?.forEach(vd => {
            mutation.inputList.push(extractVariableTypedInput(vd, inputObjectTypeNodeList, businessObjectTypeNodeList.find(f => f.name.value === Constants_1.entityPrefix.concat(entityName))));
        });
        result.push(mutation);
    });
    return result;
};
const isCollectionField = (dn) => {
    if (extractTypeName(dn.type)?.startsWith(Constants_1.entityCollectionPrefix))
        return true;
    return false;
};
const extractEntityRefList = (parentEntityName, fdn, businessObjectTypeNodeList) => {
    const fieldName = extractTypeName(fdn.type);
    const typeName = fieldName ? fieldName.substring(Constants_1.entityCollectionPrefix.length) : "";
    const boFields = businessObjectTypeNodeList
        .find(x => x.name.value === Constants_1.entityPrefix.concat(typeName))?.fields;
    const backRefereceAttributeName = boFields ?
        boFields.find(f => extractTypeName(f.type) === parentEntityName && f.name.value !== Constants_1.aggregateRootFieldName)?.name.value : "";
    return {
        isCollection: true,
        fieldType: typeName ? typeName : "",
        fieldName: fdn.name.value,
        backRefereceAttributeName: backRefereceAttributeName
    };
};
const extractEntityListWithChildEntityList = (businessObjectTypeNodeList) => {
    return businessObjectTypeNodeList.map(bo => {
        const entityName = bo.name.value.substring(Constants_1.entityPrefix.length);
        return {
            entityName: entityName,
            childEntityRefList: bo.fields ?
                bo.fields.filter(x => extractTypeName(x.type)?.startsWith(Constants_1.entityCollectionPrefix))
                    .map(x => extractEntityRefList(entityName, x, businessObjectTypeNodeList))
                : []
        };
    });
    return [];
};
const getFormData = (astNode, documents, config) => {
    const businessObjectTypeNodeList = BaseUtils_1.extractBusinessObjectTypeNodeList(astNode);
    const embeddedObjectTypeNodeList = BaseUtils_1.extractEmbeddedObjectTypeNodeList(astNode);
    const inputObjectTypeNodeList = BaseUtils_1.extractInputObjectTypeNodeList(astNode);
    const aggTabList = [];
    const entityListWithChildEntityList = extractEntityListWithChildEntityList(businessObjectTypeNodeList);
    documents.forEach(doc => {
        const locationTail = doc.location.split("/").slice(-2);
        // todo error handling
        const aggName = locationTail[0];
        const entityName = locationTail[1].split(".").slice(-2)[0];
        const resultTab = aggTabList.find(f => f.aggName === aggName) ??
            aggTabList[aggTabList.push({ aggName: aggName, entityList: [] }) - 1];
        resultTab.entityList.push({
            name: entityName,
            queryList: getQueryList(doc.document, businessObjectTypeNodeList, embeddedObjectTypeNodeList),
            mutationList: getMutationList(entityName, doc.document, inputObjectTypeNodeList, extractFragmentDefinitionList(doc.document.definitions), businessObjectTypeNodeList, embeddedObjectTypeNodeList),
            childEntityRefList: entityListWithChildEntityList.find(e => e.entityName == entityName)?.childEntityRefList ?? []
        });
    });
    aggTabList.forEach(a => {
        a.entityList.forEach(e => {
            e.mutationList.forEach(m => {
                m.inputList.forEach(i => {
                    // todo: absolute input parameters trash!!!! Fix Fix Fix!!!!!! Immediate!!!
                    if (typeof i.inputType !== "string") {
                        i.inputType.forEach(it => {
                            const refEntityName = it.inputRefTypeName.refEntityName;
                            if (refEntityName !== "") {
                                const realEntityName = (refEntityName.startsWith(Constants_1.referencePrefix) && refEntityName.endsWith(Constants_1.referencePostfix)) ?
                                    refEntityName.substring(Constants_1.referencePrefix.length).slice(0, -Constants_1.referencePostfix.length) : refEntityName;
                                it.inputRefTypeName.refAggName = aggTabList.find(a => a.entityList.find(e => e.name === realEntityName))?.aggName ?? "";
                            }
                        });
                    }
                });
            });
        });
    });
    const result = {
        aggList: aggTabList
    };
    return JSON.stringify(result, null, 2);
};
exports.getFormData = getFormData;
