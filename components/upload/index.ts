import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import {useAccept} from './useAccept';
import {useUpload, UploadFileStatus} from './useUpload';
import {useFiles} from './useFiles';
import {bind} from '../utils';
import {useDrag} from './useDrag';
import {useShowImage} from './useShowImage';
import type {RequestError} from './ajaxUploader';
import type {Events} from '../types';

export type {RequestError};

export interface UploadProps {
    accept?: string
    files?: UploadFile[]
    defaultFiles?: UploadFile[]
    maxSize?: number
    limit?: number
    autoUpload?: boolean
    beforeRemove?: BeforeCallback
    beforeUpload?: BeforeCallback
    data?: DataObject | DataFunction
    action?: string
    headers?: Record<string | number, string>
    name?: string 
    withCredentials?: boolean
    type?: 'select' | 'drag' | 'gallery'
    directory?: boolean
    disabled?: boolean
    multiple?: boolean
}

export interface UploadEvents {
    progress: [ProgressEvent, XMLHttpRequest, UploadFile, UploadFile[]]
    success: [any, XMLHttpRequest, UploadFile, UploadFile[]]
    error: [Error | RequestError, File[] | File | UploadFile, UploadFile[]]
}

export interface UploadBlocks {
    content: null
    children: null
    tip: null 
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

type BeforeCallback = (file: UploadFile, files: UploadFile[]) => Promise<boolean> | boolean
type DataObject = Record<string | number, any>
type DataFunction = (file: UploadFile) => DataObject

const typeDefs: Required<TypeDefs<UploadProps>> = {
    accept: String,
    files: Array,
    defaultFiles: Array,
    maxSize: Number,
    limit: Number,
    autoUpload: Boolean,
    beforeRemove: Function,
    beforeUpload: Function,
    data: Object,
    action: String,
    headers: Object,
    name: String,
    withCredentials: Boolean,
    type: ['select', 'drag', 'gallery'],
    directory: Boolean,
    disabled: Boolean,
    multiple: Boolean,
};

const defaults = (): Partial<UploadProps> => ({
    files: [],
    type: 'select',
    autoUpload: true,
});

const events: Events<UploadEvents> = {
    progress: true,
    success: true,
    error: true,
};

export class Upload extends Component<UploadProps, UploadEvents, UploadBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private inputRef = createRef<HTMLInputElement>();
    private accept = useAccept();
    private upload = useUpload();
    private files = useFiles(this.accept.isValidType, this.upload);
    private drag = useDrag(this.files.addFiles);
    private showImage = useShowImage();

    public submit() {
        this.get('files')!.forEach(file => {
            if (file.status === UploadFileStatus.NotReady) {
                this.upload(file);
            }
        });
    }

    @bind
    private selectFile() {
        if (!this.get('disabled')) {
            const input = this.inputRef.value!;
            input.value = '';
            input.click();
        }
    }

    @bind
    private onInputChange(e: Event) {
        this.files.addFiles((e.target as HTMLInputElement).files!);
    }
}
