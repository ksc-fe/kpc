import {Component, TypeDefs} from 'intact';
import {bind} from '../utils';
import template from './index.vdt';
import {sizes, Sizes} from '../../styles/utils';

export interface TagProps {
    type: Sizes,
    closable: boolean,
    disabled: boolean,
    size: Sizes
}

const typeDefs: Required<TypeDefs<TagProps>> = {
    type: ['default', 'primary', 'danger', 'success', 'warning'],
    closable: Boolean,
    disabled: Boolean,
    size: sizes
};

const defaults = (): Partial<TagProps> => ({
    type: 'default',
    size: 'default',
});

export class Tag<T extends TagProps = TagProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    @bind
    private onClose(e: MouseEvent): void {
        e.stopPropagation();
        this.trigger('close', e);
    }
}
