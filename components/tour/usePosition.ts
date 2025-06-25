import { useInstance, RefObject, onMounted } from 'intact';
import type { Tour } from './tour';
import { Options as PositionOptions, position, Feedback } from '../position';

export function usePosition(
    stepRef: RefObject<HTMLDivElement>, 
    getTargetElement: (index?: number) => HTMLElement | null
) {
    const instance = useInstance() as Tour;

    instance.watch('value', (value) => {
        if (value !== undefined && value >= 0) {
            nextTick(() => updatePosition());
        }
    });

    instance.watch('visible', (visible) => {
        if (visible) {
            updatePosition();
        }
    }, {presented: true});

    onMounted(() => {
        updatePosition();
    });

    // get position options
    function getPositionOptions(index?: number): PositionOptions {
        const currentIndex = index !== undefined ? index : (instance.get('value') || 0);
        let positionConfig: PositionOptions | string | undefined;
        
        const { data } = instance.get();
        if (data && data[currentIndex]) {
            positionConfig = data[currentIndex].position;
        }
        
        if (!positionConfig && instance.steps.steps[currentIndex]) {
            positionConfig = instance.steps.steps[currentIndex].props?.position;
        }

        if (!positionConfig) {
            positionConfig = 'bottom';
        }

        if (typeof positionConfig === 'string') {
            switch (positionConfig) {
                case 'left':
                    return {my: 'right-20 center', at: 'left center', collision: 'flipfit'};
                case 'bottom':
                    return {my: 'center top+20', at: 'center bottom', collision: 'flipfit'};
                case 'right':
                    return {my: 'left+20 center', at: 'right center', collision: 'flipfit'};
                case 'top':
                default:
                    return {my: 'center bottom-20', at: 'center top', collision: 'flipfit'};
            }
        }

        return positionConfig;
    }

    // TODO 定义常量
    function getCenterPositionOptions(): PositionOptions {
        return {
            my: 'center center',
            at: 'center center',
            collision: 'none'
        };
    }

    // update position
    function updatePosition() {
        const stepElement = stepRef.value;
        if (!stepElement) return;

        const targetElement = getTargetElement();
        
        if (!targetElement) {
            // no target, position relative to window
            position(stepElement, {
                ...getCenterPositionOptions(),
                of: window,
                using: (feedback, pos) => {
                    instance.trigger('positioned', feedback);
                }
            });
            return;
        }

        // has target, position relative to target
        const positionOptions = getPositionOptions();
        position(stepElement, {
            ...positionOptions,
            of: targetElement,
            using: (feedback, pos) => {
                instance.trigger('positioned', feedback);
            }
        });
    }

    function nextTick(callback: () => void) {
        setTimeout(callback, 0);
    }

    return {
        getPositionOptions,
        updatePosition
    };
} 