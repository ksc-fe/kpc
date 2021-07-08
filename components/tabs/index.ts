import {Component, TypeDefs, provide} from 'intact';
import template from './index.vdt';
import {TABS} from './constants';
import {Sizes, sizes} from '../../styles/utils';
import {TabProps} from './tab';
import {useActiveBar} from './useActiveBar';
import {useScroll} from './useScroll';

export interface TabsProps {
    value: any
    vertical: boolean
    size: Sizes
    type: 'default' | 'card' | 'border-card' | 'no-border-card'
    closable: boolean
    beforeChange: Function
}

const typeDefs: Required<TypeDefs<TabsProps>> = {
    value: null,
    vertical: Boolean,
    size: sizes,
    type: ['default', 'card', 'border-card', 'no-border-card'],
    closable: Boolean,
    beforeChange: Function,
};

const defaults = (): Partial<TabsProps> => ({
    size: 'default',
    type: 'default',
});

export class Tabs extends Component<TabsProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private activeBar = useActiveBar();
    private scroll = useScroll();

    init() {
        provide(TABS, this);
    }

    async changeTab(tabProps: TabProps) {
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
}

export * from './tab';
