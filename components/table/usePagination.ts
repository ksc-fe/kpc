import {useInstance, createRef} from 'intact';
import type {Table, TableRowKey, TableCheckType} from './table';
import {useState} from '../../hooks/useState';
import {Pagination, PaginationChangeData} from '../pagination';
import {isObject} from 'intact-shared';
import { useReceive } from '../../hooks/useReceive';

const defaultPagination = Pagination.defaults();

export function usePagination() {
    const instance = useInstance() as Table<any, TableRowKey, TableCheckType>
    const data = useState<any[] | undefined>(instance.get('data'));   
    const value = useState<number>(defaultPagination.value!);
    const limit = useState<number>(defaultPagination.limit!);
    const paginationRef =  createRef<Pagination>(); // for unit test

    useReceive<Table>(['data', 'pagination'], () => {
        handleData();
    });

    function handleData() {
        let { data: _data, pagination } = instance.get();

        if (!_data) {
            data.set(undefined);
            return;
        }

        if (!pagination) {
            data.set(_data);
            return;
        }

        if (isObject(pagination)) {
            if (pagination.value) {
                value.set(pagination.value);
            }
            if (pagination.limit) {
                limit.set(pagination.limit);
            }
        }

        updateDataByPage();
    }

    function updateDataByPage() {
        const { data: _data } = instance.get();
        const index = (value.value - 1) * limit.value; 
        data.set(_data!.slice(index,  index + limit.value));
    }

    function onChange(data: PaginationChangeData) {
        const { pagination } = instance.get();

        value.set(data.value);
        limit.set(data.limit);
        updateDataByPage();

        if (isObject(pagination)) {
            instance.set('pagination', {
                ...pagination,
                value: value.value,
                limit: limit.value,
            });
        }

        instance.trigger('changePage', data);
    }

    return { data, value, limit, onChange, paginationRef };
}
