import {useInstance} from 'intact';

export type State<T> = {
    readonly value: T 
    set(value: T): void
}

export function useState<T>(value: T) {
    const instance = useInstance()!;
    const state: State<T> = {
        value,
        set(value: T) {
            if (state.value === value) return;
            // @ts-ignore
            state.value = value;
            instance.forceUpdate();
        }
    };

    return state;
}
