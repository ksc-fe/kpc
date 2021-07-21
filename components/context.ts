import {Component, provide, inject, createRef, RefObject} from 'intact';
import {isNullOrUndefined} from 'intact-shared';

interface ProviderProps<T> {
    value?: T 
}

let id = 0;
export function createContext<T = any>(defaultValue?: T) {
    const injectionKey = `$Context-${id++}`;
    const ref = createRef<T | undefined>();

    class Provider extends Component<ProviderProps<T>> {
        static template = providerTemplate;

        init(props: ProviderProps<T> | null) {
            const value = props && props.value;
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
