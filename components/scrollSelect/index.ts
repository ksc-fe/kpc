import {Component, TypeDefs, Children} from 'intact';
import template from './index.vdt';
import {bind, toggleArray} from '../utils';
import {useList} from './useList';
import {useTranslate} from './useTranslate';
import {useMouseEvents} from './useMouseEvents';
import { useConfigContext } from '../config';

export interface ScrollSelectProps<T = any> {
    value?: T 
    count?: number
    data?: Data<T>
    disabled?: boolean
    disable?: (v: T) => boolean 
}

export interface ScrollSelectEvents { }

export interface ScrollSelectBlocks {
    append: null
}

export type DataItem<T = any> = {
    value: T 
    label: Children 
}

type Data<T> = DataItem<T>[] | ((v: T) => DataItem<T>[])

const typeDefs: Required<TypeDefs<ScrollSelectProps>> = {
    value: null,
    count: Number,
    data: [Array, Function],
    disabled: Boolean,
    disable: Function,
};

const defaults = (): Partial<ScrollSelectProps> => ({
    count: 19, 
    data: [],
});

export class ScrollSelect<T = any> extends Component<ScrollSelectProps<T>, ScrollSelectEvents, ScrollSelectBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private list = useList();
    private translate = useTranslate();
    private mouseEvents = useMouseEvents(
        this.translate.translate,
        this.list,
    );
    private config = useConfigContext();
}
