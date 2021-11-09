import {Component, TypeDefs} from 'intact';
import {bind} from '../utils';
import template from './index.vdt';
import {sizes, Sizes} from '../../styles/utils';

export interface TagProps {
    type?: Sizes
    closable?: boolean
    closed?: boolean
    disabled?: boolean
    size?: Sizes
    border?: 'solid' | 'dashed' | 'none'
}

export interface TagEvents {
    close: [MouseEvent]
}

const typeDefs: Required<TypeDefs<TagProps>> = {
    type: ['default', 'primary', 'danger', 'success', 'warning'],
    closable: Boolean,
    closed: Boolean,
    disabled: Boolean,
    size: sizes,
    border: ['solid', 'dashed', 'none'],
};

const defaults = (): Partial<TagProps> => ({
    type: 'default',
    size: 'default',
    border: 'solid',
});

export class Tag extends Component<TagProps, TagEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    @bind
    private onClose(e: MouseEvent): void {
        e.stopPropagation();
        this.trigger('close', e);
        if (!e.defaultPrevented) {
            this.set('closed', true);
        }
    }
}
