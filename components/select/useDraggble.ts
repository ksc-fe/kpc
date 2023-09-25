import { useInstance } from 'intact';
import type {Select } from './select';
import {swap} from '../utils';
import type { TagsDragEndParam } from '../tag';

export function useDraggable() {
    const instance = useInstance() as Select<any, true>;

    return function onEnd({key, from, to}: TagsDragEndParam) {
        instance.set('value', swap(instance.get('value')!, from, to));
    }
}
