import {useInstance, createRef, nextTick} from 'intact';
import { Tour } from './tour';

export function useNavigation(getTotalSteps: () => number) {
    const instance = useInstance() as Tour;
    
    async function prev() {
        const { value, beforeChange } = instance.get();
        if (value === undefined || value <= 0) return;

        if (beforeChange) {
            const canChange = await beforeChange(value - 1);
            if (canChange === false) return;
        }

        instance.set('value', value - 1);
        instance.trigger('prev', value - 1);
    }

    async function next() {
        const { value, beforeChange } = instance.get();
        if (value === undefined) return;

        const steps = getTotalSteps();
        
        if (value >= steps - 1) {
            finish();
            return;
        }

        if (beforeChange) {
            const canChange = await beforeChange(value + 1);
            if (canChange === false) return;
        }

        instance.set('value', value + 1);
        instance.trigger('next', value + 1);
    }

    function finish() {
        instance.trigger('finish');
        instance.set('visible', false);
    }

    return {prev, next, finish};
} 