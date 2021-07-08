import {Component, provide, inject} from 'intact';
import {isNullOrUndefined} from 'intact-shared';

interface ProviderProps {
    value?: any
}

let id = 0;
export function createContext(defaultValue?: any) {
    const injectionKey = `$Context-${id++}`;

    class Provider extends Component<ProviderProps> {
        static template = providerTemplate;

        init(props: ProviderProps | null) {
            const value = props && props.value;
            provide(injectionKey, isNullOrUndefined(value) ? defaultValue : value);
        }
    }

    class Consumer extends Component {
        static template = consumertemplate;

        private value: any = null;

        init() {
            this.value = inject(injectionKey);
        }
    }

    return {Provider, Consumer};
}

function providerTemplate(this: Component) {
    return this.props.children;
}

function consumertemplate(this: Component & {value: any}) {
    return (this.props.children as unknown as Function)(this.value);
}
