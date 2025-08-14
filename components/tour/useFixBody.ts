import {useInstance} from 'intact';
import type {Tour} from './tour';
import {useFixBody as useFixBodyHook} from '../../hooks/useFixBody';

export function useFixBody() {
    const instance = useInstance() as Tour;
    
    const fixBodyHook = useFixBodyHook();

    instance.watch('visible', (visible) => {
        if (visible) {
            fixBodyHook.onOpen();
        } else {
            fixBodyHook.onClose();
        }
    });

    return {
        onOpen: fixBodyHook.onOpen,
        onClosed: fixBodyHook.onClose
    };
}