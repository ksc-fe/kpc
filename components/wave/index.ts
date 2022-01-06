import {Component, TypeDefs, findDomFromVNode, VNode} from 'intact';
import {isArray} from 'intact-shared';
import {bind} from '../utils';

const animatingName = 'kpc-click-animating';

function isHidden(element: HTMLElement) {
    return !element || element.offsetParent === null || element.hidden;
}

function isNotGrey(color: string) {
    const match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
    if (match && match[1] && match[2] && match[3]) {
      return !(match[1] === match[2] && match[2] === match[3]);
    }
    return true;
}

export interface WaveProps {
    disabled?: boolean
}

const typeDefs: Required<TypeDefs<WaveProps>> = {
    disabled: Boolean,
};

export class Wave extends Component<WaveProps> {
    static typeDefs = typeDefs;
    static template = function(this: Wave) {
        const children = this.get('children') as VNode;
        console.log(children)
        if (process.env.NODE_ENV !== 'production') {
            if (!children || (isArray(children) && children.length > 1)) {
                throw new Error('Wave must receive one Element children');
            }
        }
        return children;
    };

    private instance: Element | null = null;

    @bind
    mounted() {
        const children = this.get('children') as VNode;
        const node = findDomFromVNode(children, true) as Element;
        if (!node || node.nodeType !== 1) {
            return;
        }

        this.instance = node;
        node.addEventListener('click', this.onClick);
    }

    beforeUnmount() {
        if (this.instance) {
            this.instance!.removeEventListener('click', this.onClick);
        }
        this.resetAnimation();
    }

    @bind
    private onClick(e: Event) {
        const {instance} = this;
        const {disabled} = this.get();
        if (disabled ||
            instance!.getAttribute('disabled') || 
            instance!.className.indexOf('disabled') >= 0 ||
            isHidden(e.target as HTMLElement)) {
            return;
        }

        this.resetAnimation();
        // Input is not border, so set to defalut border color
        const isInput = instance?.classList.contains('k-input');
        if (!isInput) {
            const getNodeComputedStyle = getComputedStyle(instance!);
            const borderWidth = getNodeComputedStyle.getPropertyValue('border-top-width') || 
            getNodeComputedStyle.getPropertyValue('border-width');
            if (borderWidth === '0px') return;

            const borderColor = getNodeComputedStyle.getPropertyValue('border-top-color') ||
                getNodeComputedStyle.getPropertyValue('border-color') ||
                getNodeComputedStyle.getPropertyValue('background-color');
            // Not white or transparent 
            if (
                borderColor &&
                borderColor !== '#ffffff' &&
                borderColor !== 'rgb(255, 255, 255)' &&
                isNotGrey(borderColor) &&
                !/rgba\((?:\d*, ){3}0\)/.test(borderColor) && // any transparent rgba color
                borderColor !== 'transparent'
            ) {
                document.documentElement.style.setProperty('--var-wave-color', borderColor);
            }
        }

        instance!.addEventListener('animationend', this.resetAnimation);
        instance!.setAttribute(animatingName, 'true');
    }

    @bind
    resetAnimation() {
        document.documentElement.style.removeProperty('--var-wave-color');
        this.instance?.removeEventListener('animationend', this.resetAnimation);
        this.instance?.setAttribute(animatingName, 'false');
    }
}
