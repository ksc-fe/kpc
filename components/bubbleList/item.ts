import {Component, TypeDefs} from 'intact';
import template from './item.vdt';
import {useConfigContext} from '../config';
import type {BubbleRenderSlots} from '../bubble';
import type {BubbleList, BubbleListItem as BubbleListItemData} from './bubbleList';

export interface BubbleListItemProps {
    item: BubbleListItemData
    index: number
    list: BubbleList
    slotRenderers?: BubbleRenderSlots
}

export interface BubbleListItemBlocks {
}

const typeDefs: Required<TypeDefs<BubbleListItemProps>> = {
    item: Object,
    index: Number,
    list: Object,
    slotRenderers: Object,
};

export class BubbleListItem extends Component<BubbleListItemProps, {}, BubbleListItemBlocks> {
    static template = template;
    static typeDefs = typeDefs;

    private config = useConfigContext();
}
