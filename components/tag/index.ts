import {Component, ComponentConstructor, TypeDefs, inject, createRef} from 'intact';
import {bind} from '../utils';
import template from './index.vdt';

export interface TagProps {
    type: string,
    closable: boolean,
    closed: boolean,
    disabled: boolean,
    size: string
}

const typeDefs: Required<TypeDefs<TagProps>> = {
    type: ['default', 'primary', 'danger', 'success', 'warning'],
    closable: Boolean,
    closed: Boolean,
    disabled: Boolean,
    size: ['large', 'default', 'small', 'mini']
};

const defaults = (): Partial<TagProps> => ({
    type: 'default',
    closable: false,
    closed: false,
    disabled: false,
    size: 'default',
});

export default class Tag<T extends TagProps = TagProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    static events = {
        close: true,
    };

    @bind
    private onClose(e: MouseEvent): void {console.log('onClose',e.target);
        e.stopPropagation();
        this.trigger('close', e);
        if (!e.defaultPrevented) {
            this.set('closed', true);
        }
    }
}

export {Tag};