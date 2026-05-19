import {Component, TypeDefs} from 'intact';
import template from './bubble.vdt';
import {useConfigContext} from '../config';
import type {Events} from '../types';
import {useBubbleDisplay} from './useBubbleDisplay';

export interface BubbleTyping {
    interval?: number
    step?: number
}

export interface BubbleRenderSlots {
    avatar?: Function
    roleName?: Function
    beforeContent?: Function
    attachments?: Function
    content?: Function
    bottom?: Function
    footer?: Function
    loading?: Function
    extra?: Function
}

export type BubbleRenderSlotName = keyof BubbleRenderSlots;
const BUBBLE_RENDER_SLOT_NAMES: BubbleRenderSlotName[] = [
    'avatar',
    'roleName',
    'beforeContent',
    'attachments',
    'content',
    'bottom',
    'footer',
    'loading',
    'extra',
];

export interface BubbleProps {
    content?: string | number
    placement?: 'start' | 'middle' | 'end'
    avatar?: string | boolean
    roleName?: string
    loading?: boolean
    streaming?: boolean
    variant?: 'filled' | 'outlined' | 'plain'
    shape?: 'round' | 'square' | 'corner'
    maxWidthString?: string
    typing?: boolean | BubbleTyping
}

interface BubbleInternalProps extends BubbleProps {
    slotRenderers?: BubbleRenderSlots
}

export interface BubbleEvents {
    typing: [string, string]
    typingComplete: [string]
}

export interface BubbleBlocks {
    avatar: null
    roleName: null
    beforeContent: null
    attachments: null
    content: null
    bottom: null
    footer: null
    loading: null
    extra: null
}

const typeDefs: Required<TypeDefs<BubbleProps>> = {
    content: [String, Number],
    placement: ['start', 'middle', 'end'],
    avatar: [Boolean, String],
    roleName: String,
    loading: Boolean,
    streaming: Boolean,
    variant: ['filled', 'outlined', 'plain'],
    shape: ['round', 'square', 'corner'],
    maxWidthString: String,
    typing: [Boolean, Object],
};
const internalTypeDefs: Required<TypeDefs<BubbleInternalProps>> = {
    ...typeDefs,
    slotRenderers: Object,
};

const defaults = (): Partial<BubbleProps> => ({
    placement: 'start',
    avatar: false,
    roleName: undefined,
    loading: false,
    streaming: false,
    variant: 'filled',
    shape: 'square',
    maxWidthString: '640px',
    typing: false,
});

const events: Events<BubbleEvents> = {
    typing: true,
    typingComplete: true,
};

export class Bubble extends Component<BubbleInternalProps, BubbleEvents, BubbleBlocks> {
    static template = template;
    static typeDefs = internalTypeDefs;
    static defaults = defaults;
    static events = events;

    private config = useConfigContext();
    private display = useBubbleDisplay();

    // React/Vue 包装层通过 slotRenderers 传入插槽，Intact 原生插槽仍走 $blocks。
    private getSlotRenderer(name: BubbleRenderSlotName) {
        const slotRenderers = this.get('slotRenderers');
        return slotRenderers && slotRenderers[name] ? slotRenderers[name] : undefined;
    }

    private getSlotRenderers(): BubbleRenderSlots {
        return BUBBLE_RENDER_SLOT_NAMES.reduce((slotRenderers, name) => {
            const renderer = this.getSlotRenderer(name);
            if (renderer) {
                slotRenderers[name] = renderer;
            }

            return slotRenderers;
        }, {} as BubbleRenderSlots);
    }

    mounted() {
        this.display.onMounted();
    }

    beforeUnmount() {
        this.display.onBeforeUnmount();
    }
}
