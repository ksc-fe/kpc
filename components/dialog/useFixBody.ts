import {useInstance, RefObject, onBeforeUnmount} from 'intact';
import type {BaseDialog} from './base';
import {position} from '../position';
import {scrollbarWidth} from '../position';
import {SHOW} from './constants';

type Hooks = {
    onStart?: (scrollBarWidth: number | undefined) => void
    onEnd?: () => void
}

const dialogs = new Set<BaseDialog>();
let originalStyle: string | null = null;
let hooks: Hooks | null = null; 

export function useFixBody(elementRef: RefObject<HTMLDivElement>) {
    const instance = useInstance() as BaseDialog;
    let fixedBody = false;

    instance.on(SHOW, onEnter);
    instance.on('afterClose', onAfterLeave);
    
    onBeforeUnmount(() => {
        if (fixedBody && instance.get('value')) {
            // maybe HIDE event has not triggered
            onClosed(instance);
        }
    });

    function onEnter() {
        if (instance.get('overlay')) {
            fixedBody = true;
            onOpen(instance);
        }
    }

    function onAfterLeave() {
        if (fixedBody) {
            fixedBody = false;
            onClosed(instance);
        }
    }
}

export function setHooks(h: Hooks | null) {
    hooks = h;
}

function onOpen(dialog: BaseDialog) {
    const body = document.body;
    if (dialogs.size === 0) {
        const bodyStyle = body.style;
        originalStyle = body.getAttribute('style');
        bodyStyle.overflow = 'hidden';

        const scrollBarWidth = shouldFixBody();
        if (scrollBarWidth) {
            bodyStyle.paddingRight = `${scrollBarWidth}px`;
        }
        if (hooks && hooks.onStart) {
            hooks.onStart(scrollBarWidth);
        }
    }
    dialogs.add(dialog);
}

function onClosed(dialog: BaseDialog) {
    const body = document.body;
    dialogs.delete(dialog);
    if (dialogs.size === 0) {
        if (originalStyle) {
            // console.log(originalStyle);
            body.setAttribute('style', originalStyle);
        } else {
            body.removeAttribute('style');
        }
        if (hooks && hooks.onEnd) {
            hooks.onEnd();
        }
    }
}

function shouldFixBody() {
    if (document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)) {
        return scrollbarWidth();
    }
}
