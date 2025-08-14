import { useInstance, onMounted } from 'intact';
import type { Tour } from './tour';
import type { TourStepProps } from './step';
import { TourStep } from './step';
import { isComponentVNode } from '../utils';

export function useSteps() {
    const instance = useInstance() as Tour;
    const steps: any[] = [];
    const targetElements = new Map<number, HTMLElement | null>();

    instance.on('$receive:children' as any, collectSteps);

    instance.watch('data', () => {
        targetElements.clear();
    });

    /**
     * 收集子组件步骤
     */
    function collectSteps(children: any) {
        steps.length = 0;
        if (!children) return;

        const childrenArray = Array.isArray(children) ? children : [children];
        childrenArray.forEach(child => {
            if (child && isComponentVNode(child, TourStep)) {
                steps.push(child);
            }
        });
    }

    function getTotalSteps(): number {
        const { data, children } = instance.get();
        if (children) {
            return steps.length;
        }
        return (data || []).length;
    }

    // get current step target element
    function getTargetElement(index?: number): HTMLElement | null {
        const currentIndex = index !== undefined ? index : (instance.get('value') || 0);
        if (targetElements.has(currentIndex)) {
            return targetElements.get(currentIndex) || null;
        }

        let target: string | HTMLElement | undefined;
        
        // get target from data
        const data = instance.get('data');
        if (data && data[currentIndex]) {
            target = data[currentIndex].target;
        }
        
        // get target from children
        if (!target && steps[currentIndex]) {
            target = steps[currentIndex].props?.target;
        }

        if (!target) return null;

        let element: HTMLElement | null = null;
        if (typeof target === 'string') {
            element = document.querySelector(target);
        } else {
            element = target;
        }

        targetElements.set(currentIndex, element);
        return element;
    }

    return {
        steps,
        collectSteps,
        getTotalSteps,
        getTargetElement
    };
} 