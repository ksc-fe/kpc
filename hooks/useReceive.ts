import {useInstance, Component, onBeforeMount, onBeforeUpdate} from 'intact';

type Props<T extends Component> = T extends Component<infer P> ? P : never

export function useReceive<T extends Component>(props: (keyof Props<T>)[], callback: () => void) {
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
