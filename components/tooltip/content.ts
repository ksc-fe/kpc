import {createRef, nextTick, Children, VNode} from 'intact';
import {DropdownMenu} from '../dropdown';
import template from './content.vdt';
import {bind, clamp} from '../utils';

export interface TooltipContentProps {
    _arrow?: string
}

export default class TooltipContent<T extends TooltipContentProps = TooltipContentProps> extends DropdownMenu<T> {
    static template = template;

    private arrowRef = createRef<HTMLElement>();
    private isEmptyChildren: boolean = true;

    init() {
        super.init();

        this.on('$receive:children', (vNodes: Children) => {
            this.isEmptyChildren = isEmptyChildren(vNodes);
        });
    }

    @bind
    onEnter() {
        const feedback = this.dropdown!.position();

        if (!this.dropdown!.get('showArrow')) return;

        this.set('_arrow', feedback[feedback.important]);
        nextTick(() => {
            if (this.$unmounted) return;

            const arrow = this.arrowRef.value!;
            const {target, element} = feedback;
            if (feedback.important === 'vertical') {
                const arrowWidth = arrow.offsetWidth;
                let left;
                if (feedback.horizontal === 'center') {
                    left = (element.width - arrowWidth) / 2;
                } else {
                    left = target.left - element.left + (target.width - arrowWidth) / 2;
                }
                left = clamp(left, 1, element.width - 1 - arrowWidth);
                arrow.setAttribute('style', `left: ${left}px`);
            } else {
                const arrowHeight = arrow.offsetHeight;
                let top;
                if (feedback.vertical === 'center') {
                    top = (element.height - arrowHeight) / 2;
                } else {
                    top = target.top - element.top + target.height / 2 - arrowHeight / 2;
                }
                top = clamp(top, 1, element.height - 1 - arrowHeight);
                arrow.setAttribute('style', `top: ${top}px`);
            }
        });
    }

    @bind
    protected onMouseEnter(e: MouseEvent) {
        if (this.dropdown!.get('hoverable')) {
            this.dropdown!.show();
        }
        this.trigger('mouseenter', e);
    }
}

function isEmptyChildren(vNodes: Children): boolean {
    if (!vNodes) return true;
    if (Array.isArray(vNodes)) {
        return vNodes.every(vNode => isEmptyChildren(vNode));
    }
    if ((vNodes as VNode).type === 1) {
        return !(vNodes as VNode).children;
    }

    return false;
};
