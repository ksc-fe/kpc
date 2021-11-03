import {Component, TypeDefs, Children} from 'intact';
import template from './index.vdt';
import {bind, toggleArray} from '../utils';
import {useList} from './useList';
import {useTranslate} from './useTranslate';
import {useMouseEvents} from './useMouseEvents';

export interface ScrollSelectProps {
    value?: any
    count?: number
    data?: Data
    disabled?: boolean
    disable?: (v: any) => boolean 
}

export type DataItem = {
    value: any
    label: Children 
}

type Data = DataItem[] | ((v: any) => DataItem[])

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

export class ScrollSelect<T extends ScrollSelectProps = ScrollSelectProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private list = useList();
    private translate = useTranslate();
    private mouseEvents = useMouseEvents(
        this.translate.translate,
        this.list,
    );
}
