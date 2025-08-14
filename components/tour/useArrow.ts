import {useInstance, createRef, nextTick} from 'intact';
import { Tour } from './tour';
import {Feedback} from '../position';
import {useState} from '../../hooks/useState';
import {clamp} from '../utils';

export function useArrow() {
    const instance = useInstance() as Tour;
    const arrowType = useState<string | null>(null);
    const arrowRef = createRef<HTMLElement>();

    // 监听positioned事件
    instance.on('positioned', (feedback: Feedback) => {
        updateArrow(feedback);
    });

    // update arrow position and type
    function updateArrow(feedback: Feedback) {
        if (!instance.get('showArrow')) return;

        arrowType.set(feedback[feedback.important]);
        
        nextTick(() => {
            if (instance.$unmounted) return;

            const arrow = arrowRef.value!;
            const {target, element} = feedback;
            
            if (feedback.important === 'vertical') {
                // vertical important, adjust horizontal position
                const arrowWidth = arrow.offsetWidth;
                let left = target.left - element.left + (target.width - arrowWidth) / 2;
                left = clamp(left, 1, element.width - 1 - arrowWidth);
                arrow.setAttribute('style', `left: ${left}px`);
            } else {
                // horizontal important, adjust vertical position
                const arrowHeight = arrow.offsetHeight;
                let top = target.top - element.top + target.height / 2 - arrowHeight / 2;
                top = clamp(top, 1, element.height - 1 - arrowHeight);
                arrow.setAttribute('style', `top: ${top}px`);
            }
        });
    }

    return {arrowType, arrowRef};
} 