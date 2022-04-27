import {useInstance, createRef, onBeforeUnmount, nextTick} from 'intact';
import {TooltipContent} from './content';
import {Tooltip} from './tooltip';
import {Feedback} from '../position';
import {useState} from '../../hooks/useState';
import {clamp} from '../utils';

export function useArrow() {
    const instance = useInstance() as TooltipContent;
    const arrowType = useState<string | null>(null);
    const arrowRef = createRef<HTMLElement>();

    instance.dropdown!.on('positioned', updateArrow);
    onBeforeUnmount(() => {
        instance.dropdown!.off('positioned', updateArrow);
    });

    function updateArrow(feedback: Feedback) {
        if (!(instance.dropdown as Tooltip).get('showArrow')) return;

        arrowType.set(feedback[feedback.important]);
        // we must calcuate style after set arrow type and view has updated
        nextTick(() => {
            if (instance.$unmounted) return;

            const arrow = arrowRef.value!;
            const {target, element} = feedback;
            if (feedback.important === 'vertical') {
                const arrowWidth = arrow.offsetWidth;
                let left;
                // if (feedback.horizontal === 'center') {
                    // left = (element.width - arrowWidth) / 2;
                // } else {
                    left = target.left - element.left + (target.width - arrowWidth) / 2;
                // }
                left = clamp(left, 1, element.width - 1 - arrowWidth);
                arrow.setAttribute('style', `left: ${left}px`);
            } else {
                const arrowHeight = arrow.offsetHeight;
                let top;
                // if (feedback.vertical === 'center') {
                    // top = (element.height - arrowHeight) / 2;
                // } else {
                    top = target.top - element.top + target.height / 2 - arrowHeight / 2;
                // }
                top = clamp(top, 1, element.height - 1 - arrowHeight);
                arrow.setAttribute('style', `top: ${top}px`);
            }
        });
    }

    return {arrowType, arrowRef};
}
