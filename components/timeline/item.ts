import {Component, TypeDefs} from 'intact';
import template from './item.vdt';
import {Sizes} from '../types';

export interface TimelineItemProps {
    type?: 'primary' | 'success' | 'danger' | 'warning'
    size?: Sizes
}

const typeDefs: Required<TypeDefs<TimelineItemProps>> = {
    type: ['primary', 'success', 'danger', 'warning'],
    size: ['large', 'default', 'small', 'mini'],
};

const defaults = (): Partial<TimelineItemProps> => ({
    type: 'primary',
    size: 'default',
})

export class TimelineItem<T extends TimelineItemProps = TimelineItemProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}