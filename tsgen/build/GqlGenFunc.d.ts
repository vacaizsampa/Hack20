import { DocumentNode } from 'graphql';
import { GeneratedGqlForAggregate } from './utils/types/Basic';
export declare const getGqlData: (astNode: DocumentNode, config: {
    entityList: string[];
}) => GeneratedGqlForAggregate[];
