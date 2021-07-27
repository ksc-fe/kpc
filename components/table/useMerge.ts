import {useInstance, Props} from 'intact';
import type {Table, TableRowKey} from './table';
import type {TableColumnProps} from './column';

export type TableMerge = (
    row: any,
    column: Props<TableColumnProps> | null,
    rowIndex: number,
    columnIndex: number
) => TableMergeConfig | undefined

export type TableMergeConfig = {
    colspan?: number
    rowspan?: number
}

export type TableGridItem = {
    render: boolean
    spans: TableMergeConfig | undefined
}

export type TableGrid = TableGridItem[][];

type RowStatus = {
    checked: boolean
    indeterminate: boolean
    disabled: boolean
    allDisabled: boolean
}

export function useMerge(
    getCols: () => Props<TableColumnProps>[],
    isChecked: (key: TableRowKey) => boolean,
    getAllKeys: () => TableRowKey[],
    isDisabledKey: (key: TableRowKey) => boolean,
) {
    const instance = useInstance() as Table;
    let grid: TableGrid = [];
    let allStatus: RowStatus[] = [];

    function handleSpans() {
        grid = [];

        const {merge, data, checkType} = instance.get();
        if (!data || !data.length || !merge) return;

        const cols = getCols();
        data.forEach((data, rowIndex) => {
            const currentRow: TableGridItem[] = [];
            grid.push(currentRow);

            let columnIndexOffset = 0;
            if (checkType !== 'none') {
                handleGridItem(currentRow, merge, data, null, rowIndex, 0); 
                columnIndexOffset = 1;
            }

            cols.forEach((props, columnIndex) => {
                handleGridItem(currentRow, merge, data, props, rowIndex, columnIndex + columnIndexOffset); 
            });
        });
    }

    function handleGridItem(
        currentRow: TableGridItem[],
        merge: TableMerge,
        data: any,
        column: Props<TableColumnProps> | null,
        rowIndex: number,
        columnIndex: number,
    ) {
        const prevCell = currentRow[columnIndex - 1];
        let tmp;
        if (prevCell && (tmp = prevCell.spans) && (tmp.colspan! > 1)) {
            currentRow.push({
                render: false,
                spans: {
                    rowspan: tmp.rowspan,
                    colspan: tmp.colspan! - 1,
                },
            });

            return;
        } 

        if (rowIndex > 0) {
            const prevRow = grid[rowIndex - 1];
            const aboveCell = prevRow[columnIndex]; 
            if (aboveCell && (tmp = aboveCell.spans) && (tmp.rowspan! > 1)) {
                currentRow.push({
                    render: false,
                    spans: {
                        rowspan: tmp.rowspan! - 1,
                        colspan: tmp.colspan
                    },
                });

                return;
            }
        }

        currentRow.push({
            render: true,
            spans: merge(data, column, rowIndex, columnIndex),
        });
    }

    function updateAllCheckedStatus() {
        allStatus = [];

        const {data, rowKey, checkType, merge} = instance.get();

        if (!data || !data.length) return;

        const allKeys = getAllKeys();
        allKeys.forEach((key) => {
            const disabled = isDisabledKey(key);
            allStatus.push({
                checked: isChecked(key),
                indeterminate: false,
                disabled, 
                allDisabled: disabled, 
            });
        });

        if (merge && checkType !== 'none') {
            data.forEach((data, rowIndex) => {
                const {spans, render} = grid[rowIndex][0];
                let rowspan;
                if (render && spans && (rowspan = spans.rowspan!) > 1) {
                    let enabledCheckedCount = 0;
                    let disabledCheckedCount = 0;
                    let disabledCount = 0;
                    for (let i = rowIndex; i < rowspan + rowIndex; i++) {
                        const status = allStatus[i];
                        if (isDisabledKey(allKeys[i])) {
                            disabledCount++;
                            if (status.checked) {
                                disabledCheckedCount++;
                            }
                        } else if (status.checked) {
                            enabledCheckedCount++;
                        }
                    }

                    const status = allStatus[rowIndex];
                    if (disabledCount === rowspan) {
                        // all rows are disabled
                        status.allDisabled = true;
                        if (disabledCheckedCount === rowspan) {
                            status.checked = true;
                        } else if (disabledCheckedCount > 0) {
                            status.indeterminate = true;
                        }
                    } else {
                        status.allDisabled = false;
                        if (enabledCheckedCount + disabledCount === rowspan) {
                            status.checked = true;
                        } else if (enabledCheckedCount > 0) {
                            status.indeterminate = true;
                        }
                    }
                }
            });
            console.log(allStatus);
        }
    }

    function onChangeChecked(rowIndex: number, v: boolean) {
        // should check or uncheck all grouped rows
        const checkType = instance.get('checkType');
        const checkedKeys = (instance.get('checkedKeys') || []).slice();
        const {spans} = grid[rowIndex][0];
        const allKeys = getAllKeys();
        let rowspan;

        // if is radio check, remove all enabled keys
        if (checkType === 'radio') {
            for (let i = 0; i < checkedKeys.length; i++) {
                const key = checkedKeys[i];
                if (isDisabledKey(key)) continue;
                checkedKeys.splice(i, 1);
                i--;
            }
        }

        if (spans && (rowspan = spans.rowspan!) > 1) {
            for (let i = rowIndex; i < rowspan + rowIndex; i++) {
                const status = allStatus[i];
                const key = allKeys[i];
                if (!status.disabled) {
                    const index = checkedKeys.indexOf(key);
                    if (v) {
                        if (index === -1) {
                            // if checked, but it is not in checkedKeys, add it,
                            // ohterwise do nothing
                            checkedKeys.push(key);
                        }
                    } else {
                        if (index > -1) {
                            checkedKeys.splice(index, 1);
                        }
                    }
                }
            } 
        }

        instance.set('checkedKeys', checkedKeys);
    }

    function getGrid() {
        return grid;
    }

    function getAllStatus() {
        return allStatus;
    }

    instance.on('$receive:children', handleSpans);
    instance.on('$receive:children', updateAllCheckedStatus);
    instance.on('$change:checkedKeys', updateAllCheckedStatus);

    return {getGrid, getAllStatus, onChangeChecked};
}
