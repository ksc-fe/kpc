import {useInstance, RefObject, remove} from 'intact';
import type {Dialog} from './';
import {position} from '../position';
import {SHOW} from './constants';

export function usePosition(elementRef: RefObject<HTMLDivElement>) {
    const instance = useInstance() as Dialog;

    instance.on(SHOW, center);
    instance.on('afterClose', onAfterLeave);
    instance.watch('container', () => {
        if (!instance.get('value')) return;
        center();
    }, { presented: true, inited: true });

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
        const element = elementRef.value;
        if (element) {
            // in `destroy` mode, the elementRef.value doesn't exist
            const style = element.style;
            style.left = style.top = '';
        }

        if (!instance.useAsComponent) {
            remove(instance.$vNode!, document.body, false);
        }
    }
}
