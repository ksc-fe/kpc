import {onMounted, onUnmounted, provide, inject, getCurrentInstance, Component} from 'intact';

export interface ComponentSupportRecord<T extends Component = Component> extends Component {
    items: T[]
};
const RECORD_COMPONENT = 'RecordComponent';

export function useRecordParent() {
    const instance = getCurrentInstance() as ComponentSupportRecord;
    provide(RECORD_COMPONENT, instance);
    instance!.items = [];
}

export function useRecordItem() {
    const parent = inject<ComponentSupportRecord>(RECORD_COMPONENT)!;
    const instance = getCurrentInstance();
    onMounted(() => {
        parent.items.push(instance!);
    });

    onUnmounted(() => {
        const items = parent.items;
        items.splice(items.indexOf(instance!), 1);
    });

    return parent;
}
