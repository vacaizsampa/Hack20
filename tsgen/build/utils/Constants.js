"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrefix = exports.updateOrCreatePrefix = exports.deletePrefix = exports.updatePrefix = exports.createPrefix = exports.searchPrefix = exports.generatedFragmentPostfix = exports.historySystemFields = exports.systemFieldList = exports.mandatoryFieldList = exports.systemTypesList = exports.statusTypeName = exports.rootDictionaryTypeName = exports.primitiveTypeList = exports.inputTypePostfix = exports.deleteManyInputTypePrefix = exports.createInputTypePrefix = exports.statusHistoryFieldPostfix = exports.eventSpecificFieldNameList = exports.aggregateRootFieldName = exports.statusHistoryFieldName = exports.referenceFields = exports.referencePostfix = exports.referencePrefix = exports.enumCollectionPrefix = exports.enumPrefix = exports.entityCollectionPrefix = exports.entityRefCollectionPrefix = exports.entityPrefix = void 0;
exports.entityPrefix = "_E_";
exports.entityRefCollectionPrefix = "_E_Rci";
exports.entityCollectionPrefix = "_EC_";
exports.enumPrefix = "_EN_";
exports.enumCollectionPrefix = "_ENC_";
exports.referencePrefix = "_G_";
exports.referencePostfix = "Reference";
exports.referenceFields = ["entityId", "entity"];
exports.statusHistoryFieldName = "statusHistory";
exports.aggregateRootFieldName = "aggregateRoot";
exports.eventSpecificFieldNameList = ["currentAutInfo", "creationTimestamp"];
exports.statusHistoryFieldPostfix = "HObjectStatus";
exports.createInputTypePrefix = "_Create";
exports.deleteManyInputTypePrefix = "_DeleteMany";
exports.inputTypePostfix = "Input";
exports.primitiveTypeList = ["String", "Int", "Float", "Boolean", "ID", "BigDecimal", "_Date", "_DateTime"];
exports.rootDictionaryTypeName = "RootDictionary";
exports.statusTypeName = "Status";
exports.systemTypesList = [
    exports.rootDictionaryTypeName, "Stakeholder", "Status", "StatusGraph", "SysAdminSettings",
    "SysOperation", "SysCheckSelect", "SysParamAddition", "SysRootSecurity", "SysRequestControl"
].map(t => exports.entityPrefix.concat(t));
exports.mandatoryFieldList = ['id', '__typename'];
exports.systemFieldList = [
    "_calc", "aggVersion", "chgCnt", "lastChangeDate", "ownerId",
    "type", "SysCheckSelect", "SysParamAddition", "SysRootSecurity", "sysIdPrefix"
];
exports.historySystemFields = ["sysChangeUser", "sysStatusUpdated"];
exports.generatedFragmentPostfix = "Attributes";
exports.searchPrefix = "search";
exports.createPrefix = "create";
exports.updatePrefix = "update";
exports.deletePrefix = "delete";
exports.updateOrCreatePrefix = "updateOrCreate";
exports.getPrefix = "get";
