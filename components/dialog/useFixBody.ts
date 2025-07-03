import {useInstance, RefObject} from 'intact';
import type {BaseDialog} from './base';
import {useFixBody as useFixBodyHook, setHooks as setFixBodyHooks} from '../../hooks/useFixBody';
import {SHOW} from './constants';

type Hooks = {
    onStart?: (scrollBarWidth: number | undefined) => void
    onEnd?: () => void
}

export function useFixBody(elementRef: RefObject<HTMLDivElement>) {
    const instance = useInstance() as BaseDialog;
    
    const fixBodyHook = useFixBodyHook();

    instance.on(SHOW, onEnter);
    instance.on('afterClose', onAfterLeave);

    function onEnter() {
        if (instance.get('overlay')) {
            fixBodyHook.onOpen();
        }
    }

    function onAfterLeave() {
        fixBodyHook.onClose();
    }
}

export function setHooks(h: Hooks | null) {
    setFixBodyHooks(h);
}
