import {TagProps, TagEvents, TagBlocks, Tag as BaseTag} from './base';

export * from './tags';

export type {TagProps, TagEvents, TagBlocks}

// export declare class _Tag extends BaseTag<
    // TagProps,
    // TagEvents,
    // TagBlocks
// > { }

// export const Tag = BaseTag as typeof _Tag;

export class Tag extends BaseTag<
    TagProps,
    TagEvents,
    TagBlocks
> { }
