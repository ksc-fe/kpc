import {useInstance, createRef, onMounted, RefObject, watch} from 'intact';
import type {Input} from './';
import {useState} from '../../hooks/useState';
import { isObject } from 'intact-shared';

export function useAutoRows(inputRef: RefObject<HTMLInputElement>) {
    const instance = useInstance() as Input;
    const height = useState<number>(0);

    let lineHeight: number;
    let paddingTop: number;
    let paddingBottom: number;
    let isBorderBox: boolean;

    function getStyles() {
        if (instance.get('type') === 'textarea') {
            const styles = getComputedStyle(inputRef.value!);

            lineHeight = parseInt(styles.lineHeight); 
            paddingTop = parseInt(styles.paddingTop); 
            paddingBottom = parseInt(styles.paddingBottom); 
            isBorderBox = styles.boxSizing === 'border-box';
        }
    }

    onMounted(getStyles);
    instance.watch('type', getStyles, { presented: true });

    instance.watch('value', adjust, {inited: true, presented: true});
    instance.watch('placeholder', adjust, {inited: true, presented: true});
    instance.watch('rows', adjust, {inited: true, presented: true});
    onMounted(adjust);
    
    function adjust() {
        const { rows, type } = instance.get();
        if (type === 'textarea' && (rows === 'auto' || isObject(rows))) {
            const textarea = inputRef.value!;
            const originheight = textarea.style.height; 
            // we shuold remove height before get scrollHeight,
            // otherwise we cannot shrink the height when we remove the text
            textarea.style.height = '';
            const scrollHeight = textarea.scrollHeight;
            const lines = (scrollHeight - paddingTop - paddingBottom) / lineHeight;
            textarea.style.height = originheight;

            let actualLines = lines;
            if (rows !== 'auto') {
                const { min, max } = rows;
                if (min && lines <= min) {
                    actualLines = min;
                }
                if (max && lines >= max) {
                    actualLines = max;
                }
            }
            height.set(lineHeight * actualLines + (isBorderBox ? paddingTop + paddingBottom + 2 /* border */ : 0));

            return;
        }

        height.set(0);
    }

    return height;
}
