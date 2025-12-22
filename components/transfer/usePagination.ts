import {useInstance, createRef} from 'intact';
import type {Transfer} from './index';
import type {Model} from './useFilter';
import {useState} from '../../hooks/useState';
import {Pagination, PaginationChangeData} from '../pagination';
import {isObject} from 'intact-shared';
import { useReceive } from '../../hooks/useReceive';

const defaultPagination = Pagination.defaults();

export function usePagination() {
    const instance = useInstance() as Transfer;

    const leftValue = useState<number>(defaultPagination.value!);
    const leftLimit = useState<number>(defaultPagination.limit!);
    const rightValue = useState<number>(defaultPagination.value!);
    const rightLimit = useState<number>(defaultPagination.limit!);
    
    const leftPaginationRef = createRef<Pagination>();
    const rightPaginationRef = createRef<Pagination>();

    useReceive<Transfer>(['pagination'], () => {
        const pagination = instance.get('pagination');
        if (isObject(pagination)) {
            if (pagination.value !== undefined) {
                leftValue.set(pagination.value);
                rightValue.set(pagination.value);
            }
            if (pagination.limit !== undefined) {
                leftLimit.set(pagination.limit);
                rightLimit.set(pagination.limit);
            }
        }
    });

    instance.watch('leftKeywords', () => {
        leftValue.set(1);;
    });
    instance.watch('rightKeywords', () => {
        rightValue.set(1);
    });
    
    // 计算分页数据
    function getPagedData(model: Model, allData: any[]) {
        if (!instance.get('pagination')) {
            return allData;
        }
        
        const value = model === 'left' ? leftValue.value : rightValue.value;
        const limit = model === 'left' ? leftLimit.value : rightLimit.value;
        const totalPages = Math.ceil(allData.length / limit) || 1;
        
        // 如果当前页超出总页数，跳转到最后一页
        let currentPage = value;
        if (currentPage > totalPages && totalPages > 0) {
            currentPage = totalPages;
            if (model === 'left') {
                leftValue.set(currentPage);
            } else {
                rightValue.set(currentPage);
            }
        }
        
        // 切片数据
        const index = (currentPage - 1) * limit;
        return allData.slice(index, index + limit);
    }
    
    function onChange(model: Model, data: PaginationChangeData) {       
        if (model === 'left') {
            leftValue.set(data.value);
            leftLimit.set(data.limit);
        } else {
            rightValue.set(data.value);
            rightLimit.set(data.limit);
        }
        // 触发分页事件
        instance.trigger('page', model, data);
    }
    
    return {
        getPagedData,
        leftValue,
        leftLimit,
        rightValue,
        rightLimit,
        onChange,
        leftPaginationRef,
        rightPaginationRef,
    };
}

