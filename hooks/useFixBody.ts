import {useInstance, onBeforeUnmount} from 'intact';
import {scrollbarWidth} from '../components/position';

type Hooks = {
    onStart?: (scrollBarWidth: number | undefined) => void
    onEnd?: () => void
}

const instances = new Set<any>();
let originalStyle: string | null = null;
let hooks: Hooks | null = null; 

export function useFixBody() {
    const instance = useInstance()!;
    let fixedBody = false;
    
    onBeforeUnmount(() => {
        if (fixedBody) {
            onClosed(instance);
        }
    });

    function onOpen() {
        if (!fixedBody) {
            fixedBody = true;
            onOpened(instance);
        }
    }

    function onClose() {
        if (fixedBody) {
            fixedBody = false;
            onClosed(instance);
        }
    }

    return {
        onOpen,
        onClose,
        get isFixed() {
            return fixedBody;
        }
    };
}

export function setHooks(h: Hooks | null) {
    hooks = h;
}

function onOpened(instance: any) {
    const body = document.body;
    if (instances.size === 0) {
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
    instances.add(instance);
}

function onClosed(instance: any) {
    const body = document.body;
    instances.delete(instance);
    if (instances.size === 0) {
        if (originalStyle) {
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