import template from './index.vdt';
import {Tag, TagProps} from '../tag';

export interface TipProps extends TagProps { }

export class Tip<T extends TipProps = TipProps> extends Tag<T> {
    static template = template;
}
