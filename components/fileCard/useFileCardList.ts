import {useInstance} from 'intact';
import {useConfigContext} from '../config';
import type {FileCardList, FileCardListItem} from './list';
import type {FileCardValue} from './fileCard';

export function useFileCardList() {
    const instance = useInstance() as FileCardList;
    const config = useConfigContext();

    function getClassNameObj() {
        const {k} = config;
        const overflow = instance.get('overflow');

        return {
            [`${k}-file-card-list`]: true,
            [`${k}-file-card-list-${overflow}`]: true,
        };
    }

    function getItemKey(item: FileCardListItem, index: number) {
        return item.key !== undefined ? item.key : `${item.name || 'file'}-${index}`;
    }

    function getItemSize(item: FileCardListItem) {
        return item.size || instance.get('size') || 'default';
    }

    function shouldShowDelete(item: FileCardListItem) {
        if (item.showDelIcon !== undefined) {
            return !!item.showDelIcon;
        }

        return !!instance.get('deleteable');
    }

    function shouldShowNameTooltip(item: FileCardListItem) {
        if (item.showNameTooltip !== undefined) {
            return !!item.showNameTooltip;
        }

        return !!instance.get('showNameTooltip');
    }

    function onItemPreview(item: FileCardListItem, _value: FileCardValue, e: MouseEvent) {
        instance.trigger('preview', item, e);
    }

    function onItemDelete(item: FileCardListItem, _value: FileCardValue, e: MouseEvent) {
        instance.trigger('delete', item, e);
    }

    function onItemClick(item: FileCardListItem, _value: FileCardValue, e: MouseEvent) {
        instance.trigger('click', item, e);
    }

    return {
        getClassNameObj,
        getItemKey,
        getItemSize,
        shouldShowDelete,
        shouldShowNameTooltip,
        onItemPreview,
        onItemDelete,
        onItemClick,
    };
}
