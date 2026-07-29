import {_$} from '../../i18n';

export type ResolvedFileCardType = 'file' | 'image' | 'video' | 'audio';

export const IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp', 'svg', 'avif'];
export const VIDEO_EXTENSIONS = ['mp4', 'mov', 'm4v', 'webm', 'mkv', 'avi'];
export const AUDIO_EXTENSIONS = ['mp3', 'wav', 'ogg', 'm4a', 'aac', 'flac'];

export function formatBytes(bytes: number) {
    if (!bytes) return '0 B';

    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let value = bytes;
    let unitIndex = 0;

    while (value >= 1024 && unitIndex < units.length - 1) {
        value /= 1024;
        unitIndex++;
    }

    const fixed = value >= 10 || unitIndex === 0 ? 0 : 1;

    return `${value.toFixed(fixed)} ${units[unitIndex]}`;
}

export function deriveNameFromSrc(src: string) {
    if (!src) return '';

    const withoutHash = src.split('#')[0];
    const withoutQuery = withoutHash.split('?')[0];
    const segments = withoutQuery.split('/');

    return decodeURIComponent(segments[segments.length - 1] || '');
}

export function getFileCardDisplayName(name: string | undefined, src: string | undefined) {
    return name || deriveNameFromSrc(src || '') || _$('未命名文件');
}

// 文件名拆成主体和后缀，便于只让主体部分省略。
export function splitFileName(name: string) {
    const index = name.lastIndexOf('.');
    if (index <= 0 || index >= name.length - 1) {
        return {prefix: name, suffix: ''};
    }

    return {
        prefix: name.slice(0, index),
        suffix: name.slice(index),
    };
}

export function guessFileExtension(rawTypeIn: string | undefined, fileName: string) {
    const rawType = (rawTypeIn || '').toLowerCase().trim();
    if (rawType.includes('/')) {
        const [kind, ext] = rawType.split('/');
        if (kind && ext && ext !== '*') return ext;
    }
    if (rawType === 'folder') return '';
    if (rawType && rawType !== 'file' && rawType !== 'image' && rawType !== 'video' && rawType !== 'audio') {
        return rawType.replace(/^\./, '');
    }

    const match = fileName.match(/\.([^.]+)$/);

    return match ? match[1].toLowerCase() : '';
}

// 优先尊重显式 type；未指定时再从展示名和 src 推断资源类型。
export function resolveFileCardType(
    rawTypeIn: string | undefined,
    displayName: string,
    src?: string
): ResolvedFileCardType {
    const rawType = (rawTypeIn || '').toLowerCase().trim();
    if (rawType === 'file') return 'file';
    if (rawType === 'folder') return 'file';
    if (rawType === 'image' || rawType.startsWith('image/')) return 'image';
    if (rawType === 'video' || rawType.startsWith('video/')) return 'video';
    if (rawType === 'audio' || rawType.startsWith('audio/')) return 'audio';
    if (IMAGE_EXTENSIONS.includes(rawType)) return 'image';
    if (VIDEO_EXTENSIONS.includes(rawType)) return 'video';
    if (AUDIO_EXTENSIONS.includes(rawType)) return 'audio';

    const ext = guessFileExtension(rawTypeIn, displayName);
    if (IMAGE_EXTENSIONS.includes(ext)) return 'image';
    if (VIDEO_EXTENSIONS.includes(ext)) return 'video';
    if (AUDIO_EXTENSIONS.includes(ext)) return 'audio';

    const srcExt = src ? guessFileExtension(undefined, deriveNameFromSrc(src)) : '';
    if (IMAGE_EXTENSIONS.includes(srcExt)) return 'image';
    if (VIDEO_EXTENSIONS.includes(srcExt)) return 'video';
    if (AUDIO_EXTENSIONS.includes(srcExt)) return 'audio';

    return 'file';
}

export function fileBadgeClassName(ext: string, resolvedType: ResolvedFileCardType) {
    if (['pdf'].includes(ext)) return 'pdf';
    if (['doc', 'docx', 'pages', 'txt', 'md', 'rtf'].includes(ext)) return 'doc';
    if (['xls', 'xlsx', 'csv', 'numbers'].includes(ext)) return 'sheet';
    if (['ppt', 'pptx', 'key'].includes(ext)) return 'slide';
    if (['zip', 'rar', '7z', 'tar', 'gz'].includes(ext)) return 'archive';
    if (resolvedType === 'image') return 'image';
    if (resolvedType === 'video') return 'video';
    if (resolvedType === 'audio') return 'audio';

    return 'default';
}
