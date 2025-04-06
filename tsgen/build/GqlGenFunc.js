"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGqlData = void 0;
const BaseUtils_1 = require("./utils/BaseUtils");
const GqlGenUtils_1 = require("./utils/GqlGenUtils");
const printer_1 = require("graphql/language/printer");
const Constants_1 = require("./utils/Constants");
const getGqlData = (astNode, config) => {
    const result = [];
    const inputNodeList = BaseUtils_1.extractInputObjectTypeNodeList(astNode);
    const businessObjectTypeNodeList = BaseUtils_1.extractBusinessObjectTypeNodeList(astNode);
    const embeddedObjectTypeNodeList = BaseUtils_1.extractEmbeddedObjectTypeNodeList(astNode);
    businessObjectTypeNodeList //.filter(f => !isDictionaryDefinition(f))
        .forEach(node => {
        const isDictionary = BaseUtils_1.isDictionaryDefinition(node);
        const fragment = GqlGenUtils_1.getFragment(node, businessObjectTypeNodeList, embeddedObjectTypeNodeList, true);
        const inputNode = BaseUtils_1.extractInputObjectTypeForObjectType(inputNodeList, node);
        const updateOrCreateMutationNode = inputNode ? GqlGenUtils_1.getUpdateOrCreateMutation(inputNode, isDictionary) : undefined;
        const createManyMutationNode = GqlGenUtils_1.getCreateManyMutation(node);
        const deleteManyInputNode = BaseUtils_1.extractInputObjectTypeForObjectType(inputNodeList, node, Constants_1.deleteManyInputTypePrefix);
        const deleteManyMutationNode = GqlGenUtils_1.getDeleteManyMutation(node, deleteManyInputNode);
        const businessObjectTypeGqlStr = printer_1.print(fragment)
            + "\n" + printer_1.print(GqlGenUtils_1.getSearchQuery(node))
            + "\n" + printer_1.print(GqlGenUtils_1.getGetMutation(node, isDictionary, "ForUpdate"))
            + (isDictionary ? "" : ("\n" + printer_1.print(GqlGenUtils_1.getCreateMutation(node))))
            + (isDictionary ? "" : ("\n" + printer_1.print(GqlGenUtils_1.getUpdateMutation(node))))
            + (isDictionary ? "" : ("\n" + printer_1.print(GqlGenUtils_1.getDeleteMutation(node))))
            + (isDictionary ? ("\n" + printer_1.print(updateOrCreateMutationNode)) : "");
        //                + ((updateOrCreateMutationNode) ? ("\n" + print(updateOrCreateMutationNode!)) : "")
        //                + ((createManyMutationNode && !isDictionary) ? ("\n" + print(createManyMutationNode!)) : "")
        //                + ((deleteManyMutationNode && !isDictionary) ? ("\n" + print(deleteManyMutationNode!)) : "")
        const nodeAggregateName = BaseUtils_1.extractNodeAggregateName(node);
        const resultAggregate = result.find(f => f.aggregateName === nodeAggregateName) ??
            result[result.push({ aggregateName: BaseUtils_1.extractEntityName(nodeAggregateName), aggregateEntityList: [] }) - 1];
        resultAggregate.aggregateEntityList.push({ entitiyName: BaseUtils_1.extractEntityName(node.name.value), gqlStr: businessObjectTypeGqlStr });
    });
    return result;
};
exports.getGqlData = getGqlData;
