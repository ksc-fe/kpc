import { createContext } from '../context';
import { EMPTY_OBJ } from 'intact';

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
