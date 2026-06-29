import {Component, TypeDefs} from 'intact';
import template from './media.vdt';
import type {Events} from '../types';
import {useConfigContext} from '../config';
import {useMedia} from './useMedia';
import type {Container} from '../portal';
import type {TooltipProps} from '../tooltip';
import type {
    MediaBlocks,
    MediaMaskValue,
    MediaNativeProps,
    MediaSizeValue,
    MediaStatus,
    MediaType,
    MediaValue,
    MediaViewerItem,
} from './types';

export type {
    MediaNativeProps,
    MediaBlocks,
    MediaMaskValue,
    MediaSize,
    MediaSizeValue,
    MediaStatus,
    MediaType,
    MediaValue,
    MediaViewerItem,
    ResolvedMediaType,
} from './types';

export interface MediaProps {
    name?: string
    type?: MediaType
    status?: MediaStatus
    src?: string
    poster?: string
    size?: MediaSizeValue
    width?: string | number
    height?: string | number
    showPreview?: boolean
    showNameTooltip?: boolean
    nameTooltipProps?: TooltipProps
    container?: Container
    lazy?: boolean
    imageProps?: MediaNativeProps
    videoProps?: MediaNativeProps
    audioProps?: MediaNativeProps
}

export interface MediaEvents {
    click: [MediaValue, MouseEvent]
    preview: [MediaViewerItem, MouseEvent]
    load: [MediaValue, Event]
    loadError: [MediaValue, Event]
}

const typeDefs: Required<TypeDefs<MediaProps>> = {
    name: String,
    type: String,
    status: ['default', 'loading', 'error', 'done'],
    src: String,
    poster: String,
    size: ['mini', 'small', 'default', 'large', String, Number],
    width: [String, Number],
    height: [String, Number],
    showPreview: Boolean,
    showNameTooltip: Boolean,
    nameTooltipProps: Object,
    container: [String, Function],
    lazy: Boolean,
    imageProps: Object,
    videoProps: Object,
    audioProps: Object,
};

const defaults = (): Partial<MediaProps> => ({
    name: undefined,
    type: undefined,
    status: 'default',
    src: undefined,
    poster: undefined,
    size: 'default',
    width: undefined,
    height: undefined,
    showPreview: true,
    showNameTooltip: false,
    nameTooltipProps: undefined,
    container: undefined,
    lazy: false,
    imageProps: undefined,
    videoProps: undefined,
    audioProps: undefined,
});

const events: Events<MediaEvents> = {
    click: true,
    preview: true,
    load: true,
    loadError: true,
};

export class Media extends Component<MediaProps, MediaEvents, MediaBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private config = useConfigContext();
    private media = useMedia();
}
