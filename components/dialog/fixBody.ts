import {scrollbarWidth} from '../position';

let amount = 0;
let originalStyle: string | null = null;

export function onOpen() {
    const body = document.body;
    if (!amount) {
        const bodyStyle = body.style;
        originalStyle = body.getAttribute('style');
        bodyStyle.overflow = 'hidden';

        const scrollBarWidth = shouldFixBody();
        if (scrollBarWidth) {
            bodyStyle.paddingRight = `${scrollBarWidth}px`;
        }
    }
    amount++;
}

export function onClosed() {
    const body = document.body;
    amount--; 
    if (!amount) {
        if (originalStyle) {
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
