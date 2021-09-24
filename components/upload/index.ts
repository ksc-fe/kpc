import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import {useAccept} from './useAccept';
import {useUpload, UploadFileStatus} from './useUpload';
import {useFiles} from './useFiles';
import {bind} from '../utils';

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
};

const defaults = (): Partial<UploadProps> => ({
    files: [],
    type: 'select',
    autoUpload: true,
});

export class Upload extends Component<UploadProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private inputRef = createRef<HTMLInputElement>();
    private accept = useAccept();
    private upload = useUpload();
    private files = useFiles(this.accept.isValidType, this.upload);

    @bind
    selectFile() {
        if (!this.get('disabled')) {
            const input = this.inputRef.value!;
            input.value = '';
            input.click();
        }
    }

    @bind
    onInputChange(e: Event) {
        this.files.addFile((e.target as HTMLInputElement).files!);
    }
}
