import {useInstance, onMounted, findDomFromVNode} from 'intact';
import type {ScrollSelect} from './index';
import {useState} from '../../hooks/useState';
import {scrollSelect} from './styles';

export function useTranslate() {
    const instance = useInstance() as ScrollSelect;
    const translate = useState<number>(0);

    let deltaY: number = 0;
    onMounted(() => {
        const element = findDomFromVNode(instance.$lastInput!, true) as HTMLElement
        const rollback = ensureVisible(element);
        const {deltaY} = getInitMeta(instance, element);
        rollback(); 

        translate.set(deltaY);
    });

    return {translate};
}

export function getInitMeta(
    instance: ScrollSelect,
    element: HTMLElement = findDomFromVNode(instance.$lastInput!, true) as HTMLElement
) {
    const count = instance.get('count');
    const height = element.offsetHeight; 
    const itemHeight = getItemHeight();
    const deltaY = -(Math.floor(count / 2) * itemHeight - (height - itemHeight) / 2);

    return {deltaY, itemHeight};
}

export function getItemHeight() {
    return parseInt(scrollSelect.item.height, 10); 
}

function ensureVisible(element: HTMLElement) {
    const hiddenParents: Element[] = [];
    const oldStyles: (string | null)[] = [];
    const styles = {position: 'absolute', visibility: 'hidden', display: 'block'};
    let parent: HTMLElement | null = element;
    do {
        const display = window.getComputedStyle(parent).display;
        if (display === 'none') {
            hiddenParents.push(parent);
            oldStyles.push(parent.getAttribute('style'));
            for (const style in styles) {
                parent.style[style as any] = styles[style as keyof typeof styles];
            }
        }
        parent = parent.parentElement;
    } while (parent);

    return () => {
        hiddenParents.forEach((parent, index) => {
            const style = oldStyles[index];
            if (style !== null) {
                parent.setAttribute('style', style);
            } else {
                parent.removeAttribute('style');
            }
        });
    }
}
