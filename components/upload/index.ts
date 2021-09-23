import {Component, TypeDefs} from 'intact';
import template from './index.vdt';

export interface UploadProps {
    accept?: string
    files?: UploadFile[]
    defaultFiles?: UploadFile[]
    maxSize?: number
    limit?: number
    autoUpload?: boolean
    beforeRemove?: BeforeRemove
}

export type UploadFile = {
    status: UploadFileStatus
    type?: string
    size?: number
    name: string
    percent: number
    uid: number
    raw: File | UploadFile 
    url?: string
    request?: any
}

export enum UploadFileStatus {
    Done,
    Ready,
    NotReady,
    Uploading,
}

type BeforeRemove = (file: UploadFile, files: UploadFile[]) => Promise<boolean> | boolean

const typeDefs: Required<TypeDefs<UploadProps>> = {
    accept: String,
    files: Array,
    defaultFiles: Array,
    maxSize: Number,
    limit: Number,
    autoUpload: Boolean,
    beforeRemove: Function,
};

const defaults = (): Partial<UploadProps> => ({
    files: [],
});

export class Upload extends Component<UploadProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}
