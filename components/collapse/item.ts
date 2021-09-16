import {Component, TypeDefs, VNode, inject} from 'intact';
import Collapse, {COLLAPSE} from './index'
import template from './item.vdt';
import {bind} from '../utils';

interface CollapseItemProps {
    value: string
    title?: string | VNode
    disabled?: boolean
}

const typeDefs: Required<TypeDefs<CollapseItemProps>> = {
    value: String,
    title: [String, Object],
    disabled: Boolean,
};

export default class CollapseItem<T extends CollapseItemProps = CollapseItemProps> extends Component<T>{
    static template = template;
    static typeDefs = typeDefs;

    private collapse = inject<Collapse>(COLLAPSE)!;

    @bind
    toggle() {
        if (this.get('disabled')) return;
        this.collapse.changeValue(this.get('value'));
    }

    private onEnter() {
        this.trigger('show', this);
    }

    private onAfterLeave() {
        this.trigger('hide', this);
    }
}