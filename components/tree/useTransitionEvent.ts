import {useInstance} from 'intact';
import {expandAnimationCallbacks} from '../utils';

// for TreeSelect to refresh position
export function useTransitionEvent() {
    const instance = useInstance()!;
    const {onAfterEnter, onAfterLeave} = expandAnimationCallbacks;
   
    return {
        ...expandAnimationCallbacks,
        onAfterEnter(el: HTMLElement) {
            instance.trigger('transitionEnd');
            onAfterEnter(el);
        },
        onAfterLeave(el: HTMLElement) {
            instance.trigger('transitionEnd');
            onAfterLeave(el);
        }
    };
}
