import { createContext, ProviderProps } from '../context';
import { EMPTY_OBJ } from 'intact';
import {makeIconStyles} from '../../styles/fonts/iconfont';

export interface ConfigProps {
    classNamePrefix?: string 
}

const {
    Provider: ConfigProvider,
    Consumer: ConfigConsumer,
    useContext,
} = createContext<ConfigProps>(EMPTY_OBJ);

function useConfigContext() {
    const config = useContext();

    return {
        cls: (name: string) => `${config.value!.classNamePrefix || 'k'}-${name}`,
        get k() { return config.value!.classNamePrefix || 'k' },
    }
}

export {
    ConfigProvider,
    ConfigConsumer,
    useConfigContext,
}
