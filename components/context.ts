import {Component, provide, inject, createRef, RefObject, Props, ComponentConstructor} from 'intact';
import {isNullOrUndefined} from 'intact-shared';

export interface ProviderProps<T> {
    value?: T 
}

export interface ConsumerProps<T> {
    defaultValue?: T
}

type ProviderConstructor<T> = ComponentConstructor<Component<ProviderProps<T>>> 
type ConsumerConstructor<T> = ComponentConstructor<Component<ConsumerProps<T>>> 

let id = 0;
export function createContext<T = any>(defaultValue?: T): {Provider: ProviderConstructor<T>, Consumer: ConsumerConstructor<T>} {
    const injectionKey = `$Context-${id++}`;

    class Provider extends Component<ProviderProps<T>> {
        static template = providerTemplate;

        private ref = createRef<T | undefined>();

        init(props: ProviderProps<T> | null) {
            const value = props && props.value;
            const ref = this.ref;
            ref.value = isNullOrUndefined(value) ? defaultValue : value;
            provide(injectionKey, ref);

            this.on('$receive:value', v => ref.value = v);
        }
    }

    class Consumer extends Component<ConsumerProps<T>> {
        static template = consumerTemplate;

        private ref = inject(injectionKey, null);
    }

    return {Provider, Consumer};
}

function providerTemplate(this: Component) {
    return this.$props.children;
}

function consumerTemplate(this: Component & {ref: RefObject<any>}) {
    const ref = this.ref;
    const props = this.$props as any;
    const value = ref && ref.value || props && props.value;
    return (this.$props.children as unknown as Function)(value);
}

// Maybe like legency context api of React
// Error: Can not use it in multiple instances.
// export function Context<T = any>(defaultValue?: T) {
    // let data: T | undefined;

    // function Provider({value, children}: Props<ProviderProps<T>>) {
        // data = value;
        // return children; 
    // }

    // function Consumer({children}: Props<{}>) {
        // return (children as unknown as Function)(data);
    // }

    // return {Provider, Consumer};
// }
