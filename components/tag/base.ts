import {Component, TypeDefs} from 'intact';
import {bind} from '../utils';
import template from './index.vdt';
import {sizes, Sizes} from '../../styles/utils';
import type {Events, Colors} from '../types';
import { useConfigContext } from '../config';
import { useColor } from './useColor';

export interface TagProps {
    type?: Colors 
    color?: Colors | 'purple' | 'teal' | 'blue' | 'yellow' | string 
    closable?: boolean
    closed?: boolean
    disabled?: boolean
    size?: Sizes
    border?: 'solid' | 'dashed' | 'none'
}

export interface TagEvents {
    close: [MouseEvent]
}

export interface TagBlocks { }

export const typeDefs: Required<TypeDefs<TagProps>> = {
    type: ['default', 'primary', 'danger', 'success', 'warning'],
    color: String,
    closable: Boolean,
    closed: Boolean,
    disabled: Boolean,
    size: sizes,
    border: ['solid', 'dashed', 'none'],
};

const defaults = (): Partial<TagProps> => ({
    type: 'default',
    size: 'default',
    border: 'none',
});

const events: Events<TagEvents> = {
    close: true,
};

export class Tag<
    T extends TagProps = TagProps,
    E extends TagEvents = TagEvents,
    B extends TagBlocks = TagBlocks,
> extends Component<T, E, B> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private config = useConfigContext();
    private tagColor = useColor();

    @bind
    private onClose(e: MouseEvent): void {
        e.stopPropagation();

        if (this.get('disabled')) return;

        this.trigger('close', e);
        if (!e.defaultPrevented) {
            this.set('closed', true);
        }
    }
}
