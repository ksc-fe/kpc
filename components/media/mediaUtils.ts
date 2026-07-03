import {_$} from '../../i18n';
import type {MediaSize, MediaSizeValue, MediaType, ResolvedMediaType} from './types';

const IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp', 'svg', 'avif'];
const VIDEO_EXTENSIONS = ['mp4', 'mov', 'm4v', 'webm', 'mkv', 'avi'];
const AUDIO_EXTENSIONS = ['mp3', 'wav', 'ogg', 'm4a', 'aac', 'flac'];

function deriveNameFromSrc(src?: string) {
    if (!src) return '';

    const withoutHash = src.split('#')[0];
    const withoutQuery = withoutHash.split('?')[0];
    const segments = withoutQuery.split('/');

    return decodeURIComponent(segments[segments.length - 1] || '');
}

function guessExtension(type: MediaType | undefined, displayName: string) {
    const rawType = (type || '').toLowerCase().trim();
    if (rawType.includes('/')) {
        const [, ext] = rawType.split('/');
        if (ext && ext !== '*') return ext;
    }
    if (rawType && rawType !== 'image' && rawType !== 'video' && rawType !== 'audio') {
        return rawType.replace(/^\./, '');
    }

    const match = displayName.match(/\.([^.]+)$/);

    return match ? match[1].toLowerCase() : '';
}

// 优先使用 name；没有 name 时从 src 提取文件名，再兜底为未命名。
export function getMediaDisplayName(name?: string, src?: string) {
    return name || deriveNameFromSrc(src) || _$('未命名文件');
}

// 根据显式类型、MIME 或扩展名推断媒体类型，未知类型按图片展示。
export function resolveMediaType(type?: MediaType, name?: string, src?: string): ResolvedMediaType {
    const rawType = (type || '').toLowerCase().trim();
    if (rawType === 'image' || rawType.startsWith('image/')) return 'image';
    if (rawType === 'video' || rawType.startsWith('video/')) return 'video';
    if (rawType === 'audio' || rawType.startsWith('audio/')) return 'audio';

    const ext = guessExtension(type, getMediaDisplayName(name, src));
    if (IMAGE_EXTENSIONS.includes(ext)) return 'image';
    if (VIDEO_EXTENSIONS.includes(ext)) return 'video';
    if (AUDIO_EXTENSIONS.includes(ext)) return 'audio';

    return 'image';
}

export function isNamedMediaSize(size: MediaSizeValue | undefined): size is MediaSize {
    return size === 'mini' || size === 'small' || size === 'default' || size === 'large';
}

// 数字尺寸统一转成 px，字符串尺寸保持原样透传。
export function normalizeMediaLength(value?: string | number) {
    if (value === undefined || value === null || value === '') return undefined;
    if (typeof value === 'number') return `${value}px`;

    return value;
}

// 提取可计算的像素值，仅识别 number / 纯数字字符串 / px 字符串。
export function parseMediaPixelLength(value?: string | number) {
    if (value === undefined || value === null || value === '') return undefined;
    if (typeof value === 'number') return Number.isFinite(value) ? value : undefined;
    if (typeof value !== 'string') return undefined;

    const normalized = value.trim();
    if (!normalized) return undefined;

    if (/^-?\d+(\.\d+)?$/.test(normalized)) return Number(normalized);

    const pxMatch = normalized.match(/^(-?\d+(?:\.\d+)?)px$/i);

    return pxMatch ? Number(pxMatch[1]) : undefined;
}
