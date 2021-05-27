import {RefObject, onMounted, onUnmounted} from 'intact';

export function useDocumentClick(ref: RefObject<Element>, callback: Function) {
    const onDocumentClick = (e: MouseEvent) => {
        const target = e.target as Element;
        const elem = ref.value!;
        if (target === elem || elem.contains(target)) return;

        callback();
    };

    onMounted(() => {
        document.addEventListener('click', onDocumentClick);
    });

    onUnmounted(() => {
        document.removeEventListener('click', onDocumentClick);
    });
}
