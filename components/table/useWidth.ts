import {useInstance, RefObject, onMounted, VNodeComponentClass, createRef} from 'intact';
import type {Table, TableRowKey} from './table';
import type {TableColumn} from './column';
import {useState} from '../../hooks/useState';
import {scrollbarWidth} from '../position';
import {useResizeObserver} from './useResizeObserver';

const hasLocalStorage = typeof localStorage !== 'undefined';

export function useWidth(
    scrollRef: RefObject<HTMLElement>,
    getColumns: () => VNodeComponentClass<TableColumn>[][],
) {
    const instance = useInstance() as Table;
    const tableRef = createRef<HTMLElement>();
    const widthMap = useState<Record<TableRowKey, number>>({}); 
    const tableWidth = useState<number | null>(null);

    initWidthFromStore();

    onMounted(() => checkTableWidth(true));
    useResizeObserver(scrollRef, () => checkTableWidth(false));

    // if exist widthStoreKey, we get the default width from localStorage
    function initWidthFromStore() {
        const {widthStoreKey} = instance.get();
        if (widthStoreKey && hasLocalStorage) {
            const data = localStorage.getItem(widthStoreKey);
            if (data) {
                try {
                    const {map, width} = JSON.parse(data);
                    if (map) {
                        widthMap.set(map);
                    }
                    if (width) {
                        tableWidth.set(width);
                    }
                } catch (e) {

                }
            }
        }
    }

    function storeWidth() {
        // store width if has widthStoreKey
        const {widthStoreKey} = instance.get();
        if (widthStoreKey) {
            localStorage.setItem(widthStoreKey, JSON.stringify({
                map: widthMap.value,
                width: tableWidth.value,
            }));
        }
    }

    function checkTableWidth(isMount: boolean) {
        checkColumnMinWidth(false);
        const {resizable, type} = instance.get();

        if (resizable) {
            const hasBorder = type === 'grid' || type === 'border';
            const _tableWidth = tableRef.value!.offsetWidth;
            const container = scrollRef.value!;
            let containerWidth = container.offsetWidth + (hasBorder ? -2 : 0);
            // detect whether the table has vertical scrollbar or not
            if (container.scrollHeight > container.clientHeight) {
                containerWidth = containerWidth - scrollbarWidth();
            }

            if (_tableWidth < containerWidth) {
                tableWidth.set(isMount ? null : containerWidth);

                storeWidth();
            }
        }
    }

    function checkColumnMinWidth(isStop: boolean) {
        let shouldUpdate = false;
        getColumns().forEach(rowColumns => {
            rowColumns.forEach(column => {
                const {key, minWidth} = column.props!;
                if (minWidth) {
                    const width = column.children!.elementRef.value!.offsetWidth; 
                    if (width < minWidth) {
                        widthMap.value[key] = minWidth;
                        shouldUpdate = true;
                    }
                }
            });
        });
        if (shouldUpdate) {
            instance.forceUpdate(() => {
                // check again because it may affect other columns
                if (!isStop) {
                    // only check one more time, because sometimes we can not fix the width of column, #473
                    // e.g. table display: none;
                    checkColumnMinWidth(true);
                }
            });
        }
    }

    function getWidth(key: TableRowKey) {
        const width = widthMap.value[key];
        // if (width === 'auto') return width;
        if (width) return `${width}px`;
        return null;
    }

    return {tableRef, tableWidth, widthMap, storeWidth, getWidth};
}
