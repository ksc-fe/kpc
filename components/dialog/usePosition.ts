import {useInstance, RefObject, remove, onBeforeUnmount} from 'intact';
import type {Dialog} from './';
import {position} from '../position';
import {onOpen, onClosed} from './fixBody';

export function usePosition(elementRef: RefObject<HTMLDivElement>) {
    const instance = useInstance() as Dialog;
    let fixedBody = false;

    instance.on('open', onEnter);
    
    onBeforeUnmount(() => {
        if (fixedBody && instance.get('value')) {
            onClosed();
        }
    });

    function onEnter() {
        if (instance.get('overlay')) {
            fixedBody = true;
            onOpen();
        }
        center();
    }

    function center() {
        position(elementRef.value!, {
            // ensure title visible always
            using: (feedback, position) => {
                const height = feedback.element.height;
                const scrollTop = window.pageYOffset;
                const outerHeight = window.document.documentElement.clientHeight;
                if (height > outerHeight) {
                    position.top = scrollTop;
                }
            },
            // let dialog padding top half of padding bottom
            my: 'center center+16%',
            at: 'center center-16%'
        });
    }

    function onAfterLeave() {
        if (fixedBody) {
            fixedBody = false;
            onClosed();
        }
        clearPosition();
        if (!instance.useAsComponent) {
            remove(instance.$vNode!, document.body, false);
        }
    }

    function clearPosition() {
        const style = elementRef.value!.style;
        style.left = style.top = '';
    }

    return {onAfterLeave};
}
