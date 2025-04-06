import { DocumentNode } from 'graphql';
import { FormGenConfig } from './utils/types/Basic';
export declare const getFormData: (astNode: DocumentNode, documents: {
    location: string;
    document: DocumentNode;
}[], config: FormGenConfig) => string;
