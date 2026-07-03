import {Component, TypeDefs} from 'intact';
import template from './bubbleList.vdt';
import {useConfigContext} from '../config';
import type {Events} from '../types';
import type {BubbleProps} from '../bubble';
import {useBubbleList} from './useBubbleList';

export type BubbleListKey = string | number;

export interface BubbleListRoleConfig extends Partial<BubbleProps> {
    className?: string
    style?: any
    onTyping?: (
        renderedContent: string,
        currentContent: string,
        item: BubbleListItem,
        index: number
    ) => void
    onTypingComplete?: (content: string, item: BubbleListItem, index: number) => void
}

export interface BubbleListItem extends Partial<BubbleProps> {
    key?: BubbleListKey
    role?: string
    className?: string
    style?: any
    onTyping?: BubbleListRoleConfig['onTyping']
    onTypingComplete?: BubbleListRoleConfig['onTypingComplete']
    [key: string]: any
}

export type BubbleListRoleMap = Record<
    string,
    BubbleListRoleConfig | ((item: BubbleListItem, index: number) => BubbleListRoleConfig)
>;

export interface BubbleListProps {
    items?: BubbleListItem[]
    itemKey?: string | ((item: BubbleListItem, index: number) => BubbleListKey)
    autoScroll?: boolean
    autoScrollThreshold?: number
    maxHeight?: number | string
    historyTriggerOffset?: number
    hasMoreHistory?: boolean
    loadingHistory?: boolean
    roles?: BubbleListRoleMap
    scrollBehavior?: 'auto' | 'smooth'
    showScrollToBottom?: boolean
}

export interface BubbleListSlotParams {
    item: BubbleListItem
    mergedItem: BubbleListItem
    index: number
    key: BubbleListKey
    isFirst: boolean
    isLast: boolean
    isAtBottom: boolean
}

export interface HistoryLoadingSlotParams {
    loadingHistory: boolean
    hasMoreHistory: boolean
}

export interface ScrollToBottomSlotParams {
    isAtBottom: boolean
    scrollToBottom: () => void
}

export interface BubbleListEvents {
    loadHistory: []
    scroll: [Event]
    scrollBottomChange: [boolean]
    autoScrollChange: [boolean]
    typing: [BubbleListItem, string, string, number]
    typingComplete: [BubbleListItem, string, number]
}

export interface BubbleListBlocks {
    header: null
    listFooter: null
    empty: null
    historyLoading: HistoryLoadingSlotParams
    scrollToBottom: ScrollToBottomSlotParams
    item: BubbleListSlotParams
    avatar: BubbleListSlotParams
    roleName: BubbleListSlotParams
    beforeContent: BubbleListSlotParams
    attachments: BubbleListSlotParams
    content: BubbleListSlotParams
    bottom: BubbleListSlotParams
    loading: BubbleListSlotParams
    footer: BubbleListSlotParams
    extra: BubbleListSlotParams
}

const typeDefs: Required<TypeDefs<BubbleListProps>> = {
    items: Array,
    itemKey: [String, Function],
    autoScroll: Boolean,
    autoScrollThreshold: Number,
    maxHeight: [Number, String],
    historyTriggerOffset: Number,
    hasMoreHistory: Boolean,
    loadingHistory: Boolean,
    roles: Object,
    scrollBehavior: ['auto', 'smooth'],
    showScrollToBottom: Boolean,
};

const defaults = (): Partial<BubbleListProps> => ({
    items: [],
    itemKey: undefined,
    autoScroll: true,
    autoScrollThreshold: 80,
    maxHeight: undefined,
    historyTriggerOffset: 24,
    hasMoreHistory: false,
    loadingHistory: false,
    roles: undefined,
    scrollBehavior: 'auto',
    showScrollToBottom: true,
});

const events: Events<BubbleListEvents> = {
    loadHistory: true,
    scroll: true,
    scrollBottomChange: true,
    autoScrollChange: true,
    typing: true,
    typingComplete: true,
};

export class BubbleList extends Component<BubbleListProps, BubbleListEvents, BubbleListBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private config = useConfigContext();
    private bubbleList = useBubbleList();

    // 对外只暴露滚动能力，具体 DOM 和贴底状态由 useBubbleList 维护。
    public scrollToBottom(behavior?: ScrollBehavior) {
        this.bubbleList.scrollToBottom(behavior);
    }

    public scrollToTop(behavior?: ScrollBehavior) {
        this.bubbleList.scrollToTop(behavior);
    }

    public scrollToKey(key: BubbleListKey, behavior?: ScrollBehavior) {
        this.bubbleList.scrollToKey(key, behavior);
    }

    public isAtBottom() {
        return this.bubbleList.isAtBottom();
    }
}
