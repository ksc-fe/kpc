import {Component, TypeDefs, inject} from 'intact';
import template from './tab.vdt';
import {TABS} from './constants';
import type {Tabs} from './';
import {bind} from '../utils';
import { useConfigContext } from '../config';

export interface TabProps {
    value?: any
    disabled?: boolean
    to?: string | object
    closable?: boolean
}

export interface TabEvents {
    click: [MouseEvent]
}

const typeDefs: Required<TypeDefs<TabProps>> = {
    value: null,
    disabled: Boolean,
    to: [String, Object],
    closable: Boolean,
};

export class Tab extends Component<TabProps, TabEvents> {
    static template = template;

    private tabs = inject<Tabs>(TABS)!;
    private config = useConfigContext();

    @bind
    private onClick(e: MouseEvent) {
        if (this.get('disabled')) {
            e.preventDefault();
        } else {
            this.tabs.changeTab(this.get());
            this.trigger('click', e);
        }
    }

    @bind
    private remove(e: MouseEvent) {
        e.stopPropagation();
        this.tabs.remove(this.get('value'));
    }
}
