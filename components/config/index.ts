import { createContext, ProviderProps } from '../context';
import { EMPTY_OBJ, Component } from 'intact';

export interface ConfigProps {
    classNamePrefix?: string,
    disableWave?: boolean,
}

const {
    Provider,
    Consumer: ConfigConsumer,
    useContext,
} = createContext<ConfigProps>(EMPTY_OBJ);

function useConfigContext() {
    const config = useContext();

    return {
        cls: (name: string) => `${config.value!.classNamePrefix || 'k'}-${name}`,
        get k() { return config.value!.classNamePrefix || 'k' },
        get disableWave() { return config.value!.disableWave || false }
    }
}

/**
 * for vue/react type checking
 */
export declare class _ConfigProvider extends Component<ProviderProps<ConfigProps>> { }
export const ConfigProvider = Provider as typeof _ConfigProvider;

export {
    ConfigConsumer,
    useConfigContext,
}
