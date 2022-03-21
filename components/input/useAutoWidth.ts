import {useInstance, createRef, onMounted} from 'intact';
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
            const _width = fakeRef.value!.offsetWidth || 1;
            const elem = fakeRef.value!;

            setTimeout(() => {
                console.log(elem);
                console.log(JSON.stringify(fakeRef.value!.getBoundingClientRect()));
                console.log(getComputedStyle(fakeRef.value!).font);
                console.log(JSON.stringify(getComputedStyle(fakeRef.value!)));
                width.set(_width);
            } , 100);
        }
    }

    return {fakeRef, width};
}
