import template from './index.vdt';
import {Tag, TagProps, TagEvents, TagBlocks} from '../tag/base';

export interface TipProps extends TagProps { }

export interface TipEvents extends TagEvents { }

export interface TipBlocks extends TagBlocks {
    title: null
    close: null
}

export class Tip extends Tag<TipProps, TipEvents, TipBlocks> {
    static template = template;
}
