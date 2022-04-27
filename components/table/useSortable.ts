import {useInstance} from 'intact';
import {createContext} from '../context';
import type {Table, TableSortValue} from './table';

export const context = createContext();

export function useSortable() {
    const instance = useInstance() as Table;

    // if the same column has been clicked three times consecutively,
    // then let the third click to reset the sort
    let count = 0;
    function onChange(key: string) {
        let sort = {...instance.get('sort')} as TableSortValue;
        if (sort.key === key) {
            count++;
            if (count === 3) {
                sort = {};
            } else {
                sort.type = sort.type === 'desc' ? 'asc' : 'desc';
            }
        } else {
            count = 1;
            sort.key = key;
            if (!sort.type) sort.type = 'desc';
        }

        instance.set('sort', sort);
    }

    return {onChange};
}
