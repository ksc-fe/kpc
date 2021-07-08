import {useInstance, onUnmounted} from 'intact';

export type Listener<T> = (newValue: T, oldValue: T) => void;

export type State<T> = {
    readonly value: T 
    set(value: T): void,
    listeners: Listener<T>[] | null,
}

export function useState<T>(value: T, isEqual?: (a: T, b: T) => boolean) {
    const instance = useInstance()!;
    const state: State<T> = {
        value,
        set(value: T) {
            const oldValue = state.value;
            if (isEqual) {
                if (isEqual(oldValue, value)) {
                    // @ts-ignore
                    state.value = value;
                    return;
                }
            } else {
                if (oldValue === value) return;
            }
            // @ts-ignore
            state.value = value;
            instance.forceUpdate();
            callListeners(state, value, oldValue);
        },
        listeners: null,
    };

    onUnmounted(() => state.listeners = null);

    return state;
}

export function watchState<T>(state: State<T>, callback: Listener<T>) {
    if (!state.listeners) state.listeners = [];
    state.listeners.push(callback);
}

function callListeners<T>(state: State<T>, newValue: T, oldValue: T) {
    const listeners = state.listeners;
    if (listeners) {
        for (let i = 0; i < listeners.length; i++) {
            listeners[i](newValue, oldValue);
        }
    }
}
