import {Component, TypeDefs} from 'intact';
import template from './list.vdt';
import {useConfigContext} from '../config';
import type {Events} from '../types';
import type {FileCardProps, FileCardSize, FileCardValue} from './fileCard';
import {useFileCardList} from './useFileCardList';

export interface FileCardListItem extends FileCardProps {
    key?: string | number
}

export interface FileCardListProps {
    items?: FileCardListItem[]
    size?: FileCardSize
    overflow?: 'wrap' | 'scrollX' | 'scrollY'
    deleteable?: boolean
    showNameTooltip?: boolean
}

export interface FileCardListBlocks {
    extension: null
}

export interface FileCardListEvents {
    preview: [FileCardListItem, MouseEvent]
    delete: [FileCardListItem, MouseEvent]
    click: [FileCardListItem, MouseEvent]
}

const typeDefs: Required<TypeDefs<FileCardListProps>> = {
    items: Array,
    size: ['mini', 'small', 'default', 'large'],
    overflow: ['wrap', 'scrollX', 'scrollY'],
    deleteable: Boolean,
    showNameTooltip: Boolean,
};

const defaults = (): Partial<FileCardListProps> => ({
    items: [],
    size: 'default',
    overflow: 'wrap',
    deleteable: false,
    showNameTooltip: false,
});

const events: Events<FileCardListEvents> = {
    preview: true,
    delete: true,
    click: true,
};

export class FileCardList extends Component<FileCardListProps, FileCardListEvents, FileCardListBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private config = useConfigContext();
    private list = useFileCardList();
}
