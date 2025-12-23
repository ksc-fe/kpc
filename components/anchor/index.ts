import {Component, TypeDefs, provide, Children} from 'intact';
import template from './index.vdt';
import {ANCHOR} from './constants';
import {Sizes, sizes} from '../../styles/utils';
import {useScroll} from './useScroll';
import type {Events} from '../types';
import { useConfigContext } from '../config';
import {AnchorLink} from './link';
import {eachChildren, isComponentVNode} from '../utils';
import type { AnchorLinkProps } from './link';

export * from './link';

export interface AnchorProps {
    value?: string;
    offset?: number;
    container?: string | HTMLElement;
    threshold?: number;
    vertical?: boolean;
    size?: Sizes;
    duration?: number;
}

export interface AnchorEvents {
    change: [string];
    click: [MouseEvent, AnchorLinkProps];
}

const typeDefs: Required<TypeDefs<AnchorProps>> = {
    value: String,
    offset: Number,
    container: [String, Object],
    threshold: Number,
    vertical: Boolean,
    size: sizes,
    duration: Number,
};

const defaults = (): Partial<AnchorProps> => ({
    offset: 0,
    threshold: 50,
    vertical: true,
    size: 'default',
    duration: 700,
});

const events: Events<AnchorEvents> = {
    change: true,
    click: true,
};

export class Anchor extends Component<AnchorProps, AnchorEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private scroll = useScroll();
    public config = useConfigContext();
    private links: string[] = [];
    private cleanup?: () => void;
    // 标记是否是滚动触发的 value 变化
    private isSettingFromScroll = false;
    // 元素引用缓存，避免重复的 getElementById 调用
    private elementCache = new Map<string, HTMLElement | null>();

    init() {
        provide(ANCHOR, this);

        this.scroll.setIsSettingFromScroll = (value: boolean) => {
            this.isSettingFromScroll = value;
        };
        
        this.watch('value', (newValue, oldValue) => {
            if (newValue !== oldValue && newValue !== undefined && newValue !== null) {
                this.trigger('change', newValue as string);
                // 只有非滚动触发的 value 变化才 scrollTo
                // 即：用户点击 tab 或外部 set 时才会 scrollTo
                if (!this.isSettingFromScroll) {
                    const element = this.getTargetElement(newValue);
                    // 元素存在且可见
                    if (element && element.getClientRects().length > 0) {
                        this.scroll.scrollTo(element);
                    }
                }
            }
        }, {inited: true});
    }

    mounted() {
        this.updateLinks();
        this.cleanup = this.scroll.init();
    }

    beforeUnmount() {
        if (this.cleanup) {
            this.cleanup();
        }
        // 清理元素缓存
        this.elementCache.clear();
    }

    updated() {
        this.updateLinks();
    }

    private updateLinks() {
        const links: string[] = [];
        const children = this.get('children') as Children;
        
        // 递归收集所有层级的 AnchorLink 的 href
        const collectLinks = (children: Children) => {
            if (!children) return;
            
            eachChildren(children, (vNode) => {
                if (isComponentVNode(vNode, AnchorLink)) {
                    const props = vNode.props || {};
                    if (props.href) {
                        links.push(props.href);
                    }
                    if (vNode.props && vNode.props.children) {
                        collectLinks(vNode.props.children);
                    }
                }
            });
        };
        
        collectLinks(children);
        this.links = links;
        
        // 清理不在当前链接列表中的缓存
        this.elementCache.forEach((_, href) => {
            if (!links.includes(href)) {
                this.elementCache.delete(href);
            }
        });
    }

    public getLinks(): string[] {
        return this.links;
    }

    public getTargetElement(href: string): HTMLElement | null {
        if (!href) return null;
        
        if (this.elementCache.has(href)) {
            return this.elementCache.get(href)!;
        }
        
        const id = href.startsWith('#') ? href.slice(1) : href;
        const element = document.getElementById(id);
        
        this.elementCache.set(href, element);
        
        return element;
    }

}

