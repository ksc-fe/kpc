import {Component, TypeDefs, findDomFromVNode, VNode, nextTick} from 'intact';
import {isArray} from 'intact-shared';
import {bind} from '../utils';
import {makeStyles} from './styles';
import {theme} from '../../styles/theme';
import { useConfigContext } from '../config';

export interface WaveProps {
    disabled?: boolean
    color?: string
    inset?: string
}

const typeDefs: Required<TypeDefs<WaveProps>> = {
    disabled: Boolean,
    color: String,
    inset: String,
};

const defaults = (): Partial<WaveProps> => ({
    color: theme.color.primary,
    inset: '-1px'
});

export class Wave extends Component<WaveProps> {
    static typeDefs = typeDefs;
    static defaults = defaults;
    static template = function(this: Wave) {
        const children = this.get('children') as VNode;
        if (process.env.NODE_ENV !== 'production') {
            if (!children || (isArray(children) && children.length > 1)) {
                throw new Error('Wave must receive only one Element children');
            }
        }
        return children;
    };

    private instance: HTMLElement | null = null;
    private className!: string;
    private timer: number = 0;
    private config = useConfigContext();

    private initClassName() {
        const {color, inset} = this.get();
        this.className = makeStyles(color || theme.color.primary, inset!, this.config.k);
    }

    @bind
    mounted() {
        const children = this.get('children') as VNode;
        const node = findDomFromVNode(children, true) as HTMLElement;
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
        this.initClassName();

        const {instance} = this;
        const {disabled} = this.get();
        const node = e.target as HTMLElement;

        // 点击输入框中的icon时，此时输入框不需要动效
        const isInput = instance!.classList.contains('k-input-wrapper');
        if (disabled || isInput && node!.classList.contains(this.config.cls('icon'))) return;

        this.resetAnimation();
      
        instance!.addEventListener('animationend', this.resetAnimation);
        this.timer = window.setTimeout(() => {
            instance!.classList.add(this.className);
        });
    }

    @bind
    resetAnimation() {
        const node = this.instance;
        if (!node) return;

        node.classList.remove(this.className);
        node.removeEventListener('animationend', this.resetAnimation);
        clearTimeout(this.timer);
    }
}
