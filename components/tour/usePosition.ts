import { useInstance, RefObject, onMounted, nextTick } from 'intact';
import type { Tour } from './tour';
import { Options as PositionOptions, position, Feedback } from '../position';

const CENTER_POSITION_OPTIONS: PositionOptions = {
    my: 'center center',
    at: 'center center',
    collision: 'none'
};

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

    // update position
    function updatePosition() {
        const stepElement = stepRef.value;
        if (!stepElement) return;

        const targetElement = getTargetElement();
        
        const positionOptions = targetElement ? getPositionOptions() : CENTER_POSITION_OPTIONS;
        const ofElement = targetElement || window;
        
        position(stepElement, {
            ...positionOptions,
            of: ofElement,
            using: (feedback, pos) => {
                instance.trigger('positioned', feedback);
            }
        });
    }

    return {
        getPositionOptions,
        updatePosition
    };
} 