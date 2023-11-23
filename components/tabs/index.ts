import {Component, TypeDefs, provide} from 'intact';
import template from './index.vdt';
import {TABS} from './constants';
import {Sizes, sizes} from '../../styles/utils';
import {TabProps} from './tab';
import {useActiveBar} from './useActiveBar';
import {useScroll} from './useScroll';
import type {Events} from '../types';
import { useConfigContext } from '../config';

export * from './tab';

export interface TabsProps<T = any> {
    value?: T;
    vertical?: boolean;
    size?: Sizes;
    type?: 'default' | 'card' | 'flat-card';
    closable?: boolean;
    beforeChange?: (value: T) => boolean | Promise<boolean>;
}

export interface TabsEvents<T = any> {
    remove: [T];
}

const typeDefs: Required<TypeDefs<TabsProps>> = {
    value: null,
    vertical: Boolean,
    size: sizes,
    type: ['default', 'card', 'flat-card'],
    closable: Boolean,
    beforeChange: Function,
};

const defaults = (): Partial<TabsProps> => ({
    size: 'default',
    type: 'default',
});

const events: Events<TabsEvents> = {
    remove: true,
};

export class Tabs<T = any> extends Component<TabsProps<T>, TabsEvents<T>> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private activeBar = useActiveBar();
    private scroll = useScroll();
    private config = useConfigContext();

    init() {
        provide(TABS, this);
    }

    public async changeTab(tabProps: TabProps) {
        const {beforeChange} = this.get();
        if (beforeChange) {
            const ret = await beforeChange(tabProps.value);
            if (!ret) return;
        }
        // if exits 'to', we don't change the value,
        // but let the page to change it by passing the value prop
        if (!tabProps.to) {
            this.set('value', tabProps.value);
            // } else if (this.$router) {
            // this.$router.push(item.to);
        } else {
            window.location.href = tabProps.to as string;
        }
    }

    public remove(value: T) {
        this.trigger('remove', value);
    }
}
