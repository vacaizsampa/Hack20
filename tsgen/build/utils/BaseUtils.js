"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractEmbeddedObjectTypeNodeList = exports.extractNodeAggregateName = exports.extractEntityName = exports.extractNodeBusinessFieldList = exports.extractInputObjectTypeForObjectType = exports.extractInputObjectTypeNodeList = exports.extractBusinessObjectTypeNodeList = exports.isAggregateRootDefinition = exports.isDictionaryDefinition = exports.toUpperCaseFirstLetter = exports.toLowerCaseFirstLetter = void 0;
const Constants_1 = require("./Constants");
const toLowerCaseFirstLetter = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
};
exports.toLowerCaseFirstLetter = toLowerCaseFirstLetter;
const toUpperCaseFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.toUpperCaseFirstLetter = toUpperCaseFirstLetter;
const isDictionaryDefinition = (node) => {
    return !!(node.fields?.find(f => f.name.value === Constants_1.aggregateRootFieldName && f.type.kind === "NamedType" && f.type.name.value === Constants_1.rootDictionaryTypeName));
};
exports.isDictionaryDefinition = isDictionaryDefinition;
const extractAggregateRootField = (node) => {
    return node.fields?.find(f => f.name.value === Constants_1.aggregateRootFieldName);
};
const isAggregateRootDefinition = (node) => {
    return !extractAggregateRootField(node);
};
exports.isAggregateRootDefinition = isAggregateRootDefinition;
const isBusinessObjectTypeDefinition = (dn) => {
    return dn.kind === "ObjectTypeDefinition"
        && dn.name.value.startsWith(Constants_1.entityPrefix)
        && !(dn.name.value.startsWith(Constants_1.entityRefCollectionPrefix))
        && !(Constants_1.systemTypesList.includes(dn.name.value))
        && !(dn.name.value.endsWith(Constants_1.statusHistoryFieldPostfix))
        && !(dn.fields?.find(f => Constants_1.historySystemFields.includes(f.name.value)))
        && !(dn.fields?.find(f => Constants_1.eventSpecificFieldNameList.includes(f.name.value)));
};
const extractBusinessObjectTypeNodeList = (astNode) => {
    return astNode.definitions.filter(isBusinessObjectTypeDefinition);
};
exports.extractBusinessObjectTypeNodeList = extractBusinessObjectTypeNodeList;
const isInputObjectTypeDefinition = (dn) => {
    return dn.kind === "InputObjectTypeDefinition";
};
const extractInputObjectTypeNodeList = (astNode) => {
    return astNode.definitions.filter(isInputObjectTypeDefinition);
};
exports.extractInputObjectTypeNodeList = extractInputObjectTypeNodeList;
const extractInputObjectTypeForObjectType = (inputObjectTypeNodeList, objectTypeNode, inputPrefix) => {
    const prefixedNodeName = objectTypeNode.name.value;
    const nodeName = prefixedNodeName.substring(Constants_1.entityPrefix.length);
    return inputObjectTypeNodeList.find(n => n.name.value === `${inputPrefix ?? Constants_1.createInputTypePrefix}${nodeName}${Constants_1.inputTypePostfix}`);
};
exports.extractInputObjectTypeForObjectType = extractInputObjectTypeForObjectType;
const extractNodeBusinessFieldList = (node) => {
    return node.fields?.filter(f => !(Constants_1.systemFieldList.includes(f.name.value))) ?? [];
};
exports.extractNodeBusinessFieldList = extractNodeBusinessFieldList;
const extractEntityName = (name) => {
    if (name.startsWith(Constants_1.entityPrefix))
        return name.substring(Constants_1.entityPrefix.length);
    return name;
};
exports.extractEntityName = extractEntityName;
const extractNodeAggregateName = (node) => {
    if (exports.isAggregateRootDefinition(node))
        return node.name.value;
    const aggregateRootField = extractAggregateRootField(node);
    return aggregateRootField?.type.kind === "NamedType" ?
        aggregateRootField.type.name.value :
        "";
};
exports.extractNodeAggregateName = extractNodeAggregateName;
const isEmbeddedObjectTypeDefinition = (dn) => {
    return dn.kind === "ObjectTypeDefinition"
        && dn.name.value.startsWith(Constants_1.referencePrefix)
        && dn.fields ?
        dn.fields.map(f => f.name.value).filter(fn => !Constants_1.referenceFields.includes(fn)).length > 0
        : false;
};
const extractEmbeddedObjectTypeNodeList = (astNode) => {
    return astNode.definitions.filter(isEmbeddedObjectTypeDefinition);
};
exports.extractEmbeddedObjectTypeNodeList = extractEmbeddedObjectTypeNodeList;
