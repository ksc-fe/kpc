import {useInstance, createRef, onMounted, RefObject, watch} from 'intact';
import type {Input, HTMLInputTypes} from './';
import {useState} from '../../hooks/useState';
import { useReceive } from '../../hooks/useReceive';

export function useShowPassword() {
    const instance = useInstance() as Input;
    const isShow = useState(false);
    const type = useState<HTMLInputTypes | undefined>(undefined);
    const showIcon = useState(false);

    instance.on('$receive:type', (_type) => {
        type.set(_type);
    });

    useReceive<Input>(['type', 'showPassword'], () => {
        const { showPassword, type } = instance.get();
        showIcon.set(type === 'password' && !!showPassword);
    });

    function toggleShow() {
        isShow.set(!isShow.value);
        type.set(isShow.value ? 'text' : 'password');
    }

    return { isShow, type, toggleShow, showIcon };
}
