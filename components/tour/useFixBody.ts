import {useInstance, onBeforeUnmount} from 'intact';
import type {Tour} from './tour';

export function useFixBody() {
    const instance = useInstance() as Tour;
    let originalStyle: string | null = null;
    let fixedBody = false;

    instance.watch('visible', (visible) => {
        if (visible) {
            onOpen();
        } else {
            onClosed();
        }
    });
    
    onBeforeUnmount(() => {
        if (fixedBody) {
            onClosed();
        }
    });

    function onOpen() {
        if (fixedBody) return;
        
        const body = document.body;
        originalStyle = body.getAttribute('style');
        const bodyStyle = body.style;
        
        // save scroll position
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        bodyStyle.overflow = 'hidden';
        bodyStyle.position = 'fixed';
        bodyStyle.top = `-${scrollTop}px`;
        bodyStyle.width = '100%';
        
        fixedBody = true;
    }

    function onClosed() {
        if (!fixedBody) return;
        
        const body = document.body;
        const scrollTop = Math.abs(parseInt(body.style.top) || 0);
        
        if (originalStyle) {
            body.setAttribute('style', originalStyle);
        } else {
            body.removeAttribute('style');
        }
        
        // restore scroll position
        window.scrollTo(0, scrollTop);
        
        fixedBody = false;
        originalStyle = null;
    }

    return {onOpen, onClosed};
} 