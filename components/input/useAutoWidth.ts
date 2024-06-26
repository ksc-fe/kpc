import {useInstance, createRef, onMounted, nextTick} from 'intact';
import type {Input} from './';
import {useState} from '../../hooks/useState';

export function useAutoWidth() {
    const instance = useInstance() as Input;
    const fakeRef = createRef<HTMLDivElement>();
    const width = useState<number>(0);

    instance.watch('value', adjustWidth, {inited: true, presented: true});
    instance.watch('placeholder', adjustWidth, {inited: true, presented: true});
    onMounted(adjustWidth);

    function adjustWidth() {
        if (instance.get('autoWidth')) {
            nextTick(() => {
                const fakeElem = fakeRef.value;
                if (isVisible(fakeElem)) {
                    const _width = fakeElem!.offsetWidth || 1;
                    width.set(_width);
                }
            });
        }
    }

    return {fakeRef, width};
}

function isVisible(elem: HTMLDivElement | null) {
    return elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
}
