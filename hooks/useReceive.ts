import {useInstance, Component, onBeforeMount, onBeforeUpdate, Props} from 'intact';

type ExtractProps<T extends Component> = T extends Component<infer P> ? Props<P> : never

export function useReceive<T extends Component>(props: (keyof ExtractProps<T>)[], callback: () => void) {
    const instance = useInstance() as T;

    let shouldCall = false;
    props.forEach(prop => {
        instance.on(`$receive:${prop}`, () => {
            shouldCall = true; 
        });
    });

    function call() {
        if (shouldCall) {
            callback();
            shouldCall = false;
        }
    }

    onBeforeMount(call);
    onBeforeUpdate(call);
}
