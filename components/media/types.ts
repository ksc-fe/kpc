import type {Media} from './media';

export type MediaType = 'image' | 'video' | 'audio' | string;
export type ResolvedMediaType = 'image' | 'video' | 'audio';
export type MediaSize = 'mini' | 'small' | 'default' | 'large';
export type MediaStatus = 'default' | 'loading' | 'error' | 'done';
export type MediaNativeProps = Record<string, any>;
export type MediaSizeValue = MediaSize | string | number;

export interface MediaValue {
    name?: string
    type?: MediaType
    resolvedType: ResolvedMediaType
    status: MediaStatus
    src?: string
    poster?: string
    size: MediaSizeValue
}

export interface MediaViewerItem extends MediaValue {
    name: string
}

export interface MediaMaskValue extends MediaValue {
    canPreview: boolean
    preview: (event: any) => void
}

export interface MediaBlocks {
    loading: MediaValue
    error: MediaValue
    mask: MediaMaskValue
}

export interface MediaGroupItemApi {
    canPreview: () => boolean
    getViewerItem: () => MediaViewerItem
}

export interface MediaGroupContextValue {
    register: (media: Media, api: MediaGroupItemApi) => void
    unregister: (media: Media) => void
    open: (media: Media) => void
}
