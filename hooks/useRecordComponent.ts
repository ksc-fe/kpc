import {onMounted, onUnmounted, provide, inject, useInstance, Component} from 'intact';

const RECORD_COMPONENT = 'RecordComponent';

export function useRecordParent<T = Component>(key: string = RECORD_COMPONENT) {
    const items: T[] = [];
    provide(key, items);
    return items;
}

export function useRecordItem<T extends Component = Component>(key?: string) : T[];
export function useRecordItem<T>(key?: string, item?: T): T[];
export function useRecordItem<T = Component>(
    key: string = RECORD_COMPONENT,
    item: any = useInstance()
) {
    const items = inject<T[]>(key);

    if (items) {
        // onMounted(() => items.push(item));
        items.push(item);
        onUnmounted(() => items.splice(items.indexOf(item), 1));
    }

    return items;
}
