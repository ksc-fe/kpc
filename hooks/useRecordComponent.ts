import {onMounted, onUnmounted, provide, inject, useInstance, Component} from 'intact';

const RECORD_COMPONENT = 'RecordComponent';

export function useRecordParent<T = Component, V = any>(key: string, useMap: true): Map<T, V>
export function useRecordParent<T = Component>(key?: string, useMap?: false): T[]
export function useRecordParent(key: string = RECORD_COMPONENT, useMap: boolean = false): any {
    const items = useMap ? new Map() : []
    provide(key, items);
    return items;
}

export function useRecordItem<T extends Component = Component>(key?: string) : T[];
export function useRecordItem<T>(key?: string, item?: T): T[];
export function useRecordItem<T, V>(key: string, item: T, value: V): Map<T, V>;
export function useRecordItem<T, V>(
    key: string = RECORD_COMPONENT,
    item: any = useInstance(),
    value?: V,
): any {
    const items = inject(key);

    if (items) {
        onMounted(() => {
            if (value === undefined) {
                (items as T[]).push(item);
            } else {
                (items as Map<T, V>).set(item, value);
            }
        });
        // items.push(item);
        onMounted(() => {
        });

        onUnmounted(() => {
            if (value === undefined) {
                (items as T[]).splice((items as T[]).indexOf(item), 1);
            } else {
                (items as Map<T, V>).delete(item);
            }
        });
    }

    return items;
}
