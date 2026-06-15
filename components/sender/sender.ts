import {Component, TypeDefs, createRef} from 'intact';
import template from './sender.vdt';
import {useConfigContext} from '../config';
import type {Events} from '../types';
import type {FileCardListItem} from '../fileCard';
import type {RequestError} from '../upload';
import {useSenderInput} from './useSenderInput';
import {useSenderUpload} from './useSenderUpload';
import {useAutoResize} from './useAutoResize';
import {useSenderDrag} from './useSenderDrag';
import {useSenderPaste} from './useSenderPaste';

export type SenderFileView = 'card' | 'media';
export type SenderUploadButton = 'toolbar' | 'list' | 'none';
export type SenderButtonTooltip = string | false;

export interface SenderButtonTooltipConfig {
    send?: SenderButtonTooltip
    stop?: SenderButtonTooltip
    upload?: SenderButtonTooltip
    listUpload?: SenderButtonTooltip
}

// 单个附件结构在 FileCardListItem 之上加一些上传态私有字段；对外仍按 FileCardListItem 序列化。
export interface SenderAttachment extends FileCardListItem {
    uid?: number | string
    raw?: File
    relativePath?: string
    /** 进行中的 XHR，用于删除时 abort */
    request?: { abort(): void } | null
}

// 透传给内部上传逻辑的子集，仅保留与发送场景相关的字段。
export interface SenderUploadProps {
    accept?: string
    multiple?: boolean
    directory?: boolean
    limit?: number
    maxSize?: number
    autoUpload?: boolean
    action?: string
    timeout?: number
    name?: string
    headers?: Record<string | number, string>
    data?: Record<string, any> | ((file: SenderAttachment) => Record<string, any>)
    mapAttachment?: (file: File, attachment: SenderAttachment) => Partial<SenderAttachment>
    withCredentials?: boolean
    beforeUpload?: (file: SenderAttachment, files: SenderAttachment[]) => boolean | Promise<boolean>
    beforeRemove?: (file: SenderAttachment, files: SenderAttachment[]) => boolean | Promise<boolean>
}

export interface SendButtonSlotParams {
    generating: boolean
    disabled: boolean
    stopDisabled: boolean
    loading: boolean
    send: () => void
    stopGenerate: () => void
}

export interface UploadButtonSlotParams {
    disabled: boolean
    reachLimit: boolean
    position: SenderUploadButton
    addFiles: (files: FileList | File[]) => void
    pickFiles: () => void
}

export interface MessageSendPayload {
    value: string
    attachments: SenderAttachment[]
}

export interface SenderProps {
    value?: string
    placeholder?: string
    disabled?: boolean
    inputDisabled?: boolean
    sendDisabled?: boolean
    stopDisabled?: boolean
    readonly?: boolean
    generating?: boolean
    loading?: boolean
    fileView?: SenderFileView
    uploadButton?: SenderUploadButton
    buttonTooltip?: SenderButtonTooltipConfig
    dragFile?: boolean
    pasteFile?: boolean
    /** 整个输入外框 `k-sender` 的宽度，数字会按 `px` 处理 */
    width?: number | string
    /** 整个输入外框 `k-sender-shell` 的最大高度（非文本域单宽），未传时默认 300 */
    maxHeight?: number | string
    attachments?: SenderAttachment[]
    uploadProps?: SenderUploadProps
    submitOnEnter?: boolean
    clearOnSend?: boolean
}

export interface SenderEvents {
    messageSend: [MessageSendPayload]
    stopGenerate: []
    pressEnter: [KeyboardEvent]
    focus: [FocusEvent]
    blur: [FocusEvent]
    attachmentClick: [SenderAttachment, MouseEvent]
    attachmentDelete: [SenderAttachment, MouseEvent]
    uploadProgress: [ProgressEvent, SenderAttachment]
    uploadSuccess: [any, SenderAttachment]
    uploadError: [Error | RequestError, SenderAttachment]
}

export interface SenderBlocks {
    header: null
    prefix: null
    beforeInput: null
    footer: null
    configure: null
    uploadButton: UploadButtonSlotParams
    sendButton: SendButtonSlotParams
}

const typeDefs: Required<TypeDefs<SenderProps>> = {
    value: String,
    placeholder: String,
    disabled: Boolean,
    inputDisabled: Boolean,
    sendDisabled: Boolean,
    stopDisabled: Boolean,
    readonly: Boolean,
    generating: Boolean,
    loading: Boolean,
    fileView: ['card', 'media'],
    uploadButton: ['toolbar', 'list', 'none'],
    buttonTooltip: Object,
    dragFile: Boolean,
    pasteFile: Boolean,
    width: [String, Number],
    maxHeight: [String, Number],
    attachments: Array,
    uploadProps: Object,
    submitOnEnter: Boolean,
    clearOnSend: Boolean,
};

const defaults = (): Partial<SenderProps> => ({
    value: '',
    placeholder: undefined,
    disabled: false,
    inputDisabled: false,
    sendDisabled: false,
    stopDisabled: false,
    readonly: false,
    generating: false,
    loading: false,
    fileView: 'card',
    uploadButton: 'toolbar',
    buttonTooltip: undefined,
    dragFile: false,
    pasteFile: false,
    width: 640,
    maxHeight: undefined,
    attachments: undefined,
    uploadProps: undefined,
    submitOnEnter: true,
    clearOnSend: true,
});

const events: Events<SenderEvents> = {
    messageSend: true,
    stopGenerate: true,
    pressEnter: true,
    focus: true,
    blur: true,
    attachmentClick: true,
    attachmentDelete: true,
    uploadProgress: true,
    uploadSuccess: true,
    uploadError: true,
};

export class Sender extends Component<SenderProps, SenderEvents, SenderBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private config = useConfigContext();
    private textareaRef = createRef<HTMLTextAreaElement>();
    private fileInputRef = createRef<HTMLInputElement>();
    private input = useSenderInput(this.textareaRef);
    private autoResize = useAutoResize(this.textareaRef);
    private upload = useSenderUpload(this.fileInputRef);
    private dragController = useSenderDrag(this.upload.addFiles);
    private pasteController = useSenderPaste(this.upload.addFiles);

    public focus() {
        this.textareaRef.value?.focus();
    }

    public blur() {
        this.textareaRef.value?.blur();
    }

    /** 主动触发发送，等价于点击发送按钮。生成中时不会触发。 */
    public submit() {
        this.input.send();
    }

    /** 清空输入框与附件列表，并中止进行中的上传；不影响 generating / loading 等受控状态。 */
    public clear() {
        this.set('value', '');
        const attachments = this.get('attachments');
        if (attachments && attachments.length > 0) {
            void this.upload.clearAttachments();
        }
    }

    /** 复用 Sender 内置上传逻辑添加本地文件，适合自定义附件弹窗确认后调用。 */
    public addFiles(files: FileList | File[]) {
        void this.upload.addFiles(files);
    }

    /** 主动触发停止生成，等价于点击生成中的停止按钮。 */
    public stopGenerate() {
        this.input.stopGenerate();
    }
}
