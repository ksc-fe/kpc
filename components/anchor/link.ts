import {Component, TypeDefs, inject, provide, VNode} from 'intact';
import template from './link.vdt';
import {ANCHOR, ANCHOR_LINK_LEVEL} from './constants';
import type {Anchor} from './';
import {bind} from '../utils';
import { useConfigContext } from '../config';

export interface AnchorLinkProps {
    href?: string;
    title?: string | VNode;
    disabled?: boolean;
}

const typeDefs: Required<TypeDefs<AnchorLinkProps>> = {
    href: String,
    title: [String, VNode],
    disabled: Boolean,
};

export class AnchorLink extends Component<AnchorLinkProps> {
    static template = template;
    static typeDefs = typeDefs;

    private anchor = inject<Anchor>(ANCHOR)!;
    private config = useConfigContext();
    private level = inject<number>(ANCHOR_LINK_LEVEL, 0);

    init() {
        provide(ANCHOR_LINK_LEVEL, this.level + 1);
    }

    @bind
    private onClick(e: MouseEvent) {
        const { title, href, disabled } = this.get();
        if (href) {
            this.anchor.trigger('click', e, { title, href, disabled });
        }
    }

    public getLevel(): number {
        return this.level;
    }
}

