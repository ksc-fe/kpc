import {useInstance, RefObject, onBeforeUnmount} from 'intact';
import type {BaseDialog} from './base';
import {position} from '../position';
import {scrollbarWidth} from '../position';
import {SHOW} from './constants';

const dialogs = new Set<BaseDialog>();
let originalStyle: string | null = null;

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
    }
}

function shouldFixBody() {
    if (document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)) {
        return scrollbarWidth();
    }
}
