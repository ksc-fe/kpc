import {useInstance, Component, onBeforeMount, onBeforeUpdate, Props} from 'intact';

type ExtractProps<T extends Component> = T extends Component<infer P> ? Props<P> : never

export function useReceive<T extends Component>(
    props: (keyof ExtractProps<T>)[],
    callback: () => void,
    ignoreInit: boolean = false,
) {
    const instance = useInstance() as T;

    let shouldCall = false;
    props.forEach(prop => {
        instance.on(
            `$receive:${prop}`,
            (newValue: unknown, oldValue: unknown, init: boolean) => {
                if (ignoreInit && init) return;
                shouldCall = true; 
            }
        );
    });

    function call() {
        if (shouldCall) {
            callback();
            shouldCall = false;
        }
    }

    if (!ignoreInit) {
        onBeforeMount(call);
    }
    onBeforeUpdate(call);
}
