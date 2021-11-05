import template from './index.vdt';
import {Tag, TagProps} from '../tag';

export type TipProps = TagProps

export class Tip extends Tag {
    static template = template;
}
