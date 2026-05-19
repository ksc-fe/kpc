import {Component, TypeDefs} from 'intact';
import template from './fileCard.vdt';
import {useConfigContext} from '../config';
import type {Events} from '../types';
import {useFileCard} from './useFileCard';
import type {ResolvedFileCardType} from './fileCardUtils';
import type {MediaMaskValue} from '../media';

export type {ResolvedFileCardType} from './fileCardUtils';

export type FileCardType = 'file' | 'image' | 'video' | 'audio' | string;
export type FileCardStatus = 'default' | 'loading' | 'error' | 'done';
export type FileCardSize = 'mini' | 'small' | 'default' | 'large';
export type FileCardNativeProps = Record<string, any>;

export type FileCardValue = {
    name?: string
    type?: FileCardType
    resolvedType: ResolvedFileCardType
    status: FileCardStatus
    src?: string
    poster?: string
    description?: string
    errorText?: string
    loadingText?: string
    byte?: number
    percent?: number
    size: FileCardSize
}

export type FileCardMaskValue = FileCardValue & {
    canPreview?: MediaMaskValue['canPreview']
    preview?: MediaMaskValue['preview']
};

export interface FileCardProps {
    name?: string
    type?: FileCardType
    status?: FileCardStatus
    src?: string
    poster?: string
    description?: string
    errorText?: string
    loadingText?: string
    byte?: number
    percent?: number
    showPreview?: boolean
    showNameTooltip?: boolean
    showDelIcon?: boolean
    icon?: string
    size?: FileCardSize
    imageProps?: FileCardNativeProps
    videoProps?: FileCardNativeProps
    audioProps?: FileCardNativeProps
}

export interface FileCardEvents {
    click: [FileCardValue, MouseEvent]
    preview: [FileCardValue, MouseEvent]
    delete: [FileCardValue, MouseEvent]
}

export interface FileCardBlocks {
    icon: null
    description: null
    mask: FileCardMaskValue
}

const typeDefs: Required<TypeDefs<FileCardProps>> = {
    name: String,
    type: String,
    status: ['default', 'loading', 'error', 'done'],
    src: String,
    poster: String,
    description: String,
    errorText: String,
    loadingText: String,
    byte: Number,
    percent: Number,
    showPreview: Boolean,
    showNameTooltip: Boolean,
    showDelIcon: Boolean,
    icon: String,
    size: ['mini', 'small', 'default', 'large'],
    imageProps: Object,
    videoProps: Object,
    audioProps: Object,
};

const defaults = (): Partial<FileCardProps> => ({
    name: undefined,
    type: undefined,
    status: 'default',
    src: undefined,
    poster: undefined,
    description: undefined,
    errorText: undefined,
    loadingText: undefined,
    byte: undefined,
    percent: undefined,
    showPreview: true,
    showNameTooltip: false,
    showDelIcon: false,
    icon: undefined,
    size: 'default',
    imageProps: undefined,
    videoProps: undefined,
    audioProps: undefined,
});

const events: Events<FileCardEvents> = {
    click: true,
    preview: true,
    delete: true,
};

export class FileCard extends Component<FileCardProps, FileCardEvents, FileCardBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private config = useConfigContext();
    private model = useFileCard();
}
