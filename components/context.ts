import {Component, provide, inject, createRef, RefObject, Props} from 'intact';
import {isNullOrUndefined} from 'intact-shared';

interface ProviderProps<T> {
    value?: T 
}

let id = 0;
export function createContext<T = any>(defaultValue?: T) {
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

    class Consumer extends Component {
        static template = consumertemplate;

        private ref =  inject(injectionKey) as RefObject<T | undefined>;
    }

    return {Provider, Consumer};
}

function providerTemplate(this: Component) {
    return this.props.children;
}

function consumertemplate(this: Component & {ref: RefObject<any>}) {
    return (this.props.children as unknown as Function)(this.ref.value);
}

// Maybe like legency context api of React
// Error: Can not use it in multiple instances.
// export function createContext<T = any>(defaultValue?: T) {
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
