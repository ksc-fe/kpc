import { useInstance } from "intact";
import { useDocumentClick } from "../../hooks/useDocumentClick";
import type {Tour} from './tour';

export function useMaskClosable() {
    const tour = useInstance() as Tour;
    const [addDocumentClick, removeDocumentClick] = useDocumentClick(tour.tourRef, (e) => {
        const maskClosable = tour.get('maskClosable');
        if (maskClosable) {
            // 检查点击的是否是当前目标元素或其子元素
            const targetElement = tour.steps.getTargetElement();
            if (targetElement && (e.target === targetElement || targetElement.contains(e.target as Node))) {
                return; // 点击的是目标元素，不关闭
            }
            tour.navigation.finish();
        }
    }, true);

    tour.watch('visible', (visible: boolean | undefined) => {
        if (visible) {
            addDocumentClick();
        } else {
            removeDocumentClick();
        }
    });
}