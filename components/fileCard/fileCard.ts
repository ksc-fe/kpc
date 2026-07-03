import {Component, TypeDefs} from 'intact';
import template from './fileCard.vdt';
import {useConfigContext} from '../config';
import type {Events} from '../types';
import {useFileCard} from './useFileCard';
import type {ResolvedFileCardType} from './fileCardUtils';
import type {MediaMaskValue} from '../media';
import type {TooltipProps} from '../tooltip';

export type {ResolvedFileCardType} from './fileCardUtils';

export type FileCardType = 'file' | 'image' | 'video' | 'audio' | string;
export type FileCardStatus = 'default' | 'loading' | 'error' | 'done';
export type FileCardSize = 'mini' | 'small' | 'default' | 'large';
export type FileCardLoadingVariant = 'default' | 'flow';
export type FileCardNativeProps = Record<string, any>;

export type FileCardValue = {
    name?: string
    type?: FileCardType
    resolvedType: ResolvedFileCardType
    status: FileCardStatus
    src?: string
    poster?: string
    width?: string | number
    height?: string | number
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
    width?: string | number
    height?: string | number
    description?: string
    errorText?: string
    loadingText?: string
    byte?: number
    percent?: number
    loadingVariant?: FileCardLoadingVariant
    showPreview?: boolean
    showNameTooltip?: boolean
    nameTooltipProps?: TooltipProps
    showDelIcon?: boolean
    icon?: string
    size?: FileCardSize
    lazy?: boolean
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
    loading: FileCardValue
    description: null
    mask: FileCardMaskValue
}

const typeDefs: Required<TypeDefs<FileCardProps>> = {
    name: String,
    type: String,
    status: ['default', 'loading', 'error', 'done'],
    src: String,
    poster: String,
    width: [String, Number],
    height: [String, Number],
    description: String,
    errorText: String,
    loadingText: String,
    byte: Number,
    percent: Number,
    loadingVariant: ['default', 'flow'],
    showPreview: Boolean,
    showNameTooltip: Boolean,
    nameTooltipProps: Object,
    showDelIcon: Boolean,
    icon: String,
    size: ['mini', 'small', 'default', 'large'],
    lazy: Boolean,
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
    width: undefined,
    height: undefined,
    description: undefined,
    errorText: undefined,
    loadingText: undefined,
    byte: undefined,
    percent: undefined,
    loadingVariant: 'default',
    showPreview: true,
    showNameTooltip: false,
    nameTooltipProps: undefined,
    showDelIcon: false,
    icon: undefined,
    size: 'default',
    lazy: false,
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
