import { useInstance, onMounted, nextTick, VNode, createVNode as h, directClone } from 'intact';
import { useState, watchState } from '../../hooks/useState';
import type { Tour } from './tour';
import type { TourStepProps } from './step';
import { TourStep } from './step';
import { isComponentVNode, eachChildren } from '../utils';
import { isNullOrUndefined } from 'intact-shared';

export function useSteps() {
    const instance = useInstance() as Tour;
    const steps: any[] = [];
    const targetElements = new Map<number, HTMLElement | null>();
    const currentStep = useState<TourStepProps | undefined>(undefined);

    instance.on('$receive:children' as any, collectSteps);

    instance.watch('value', (value) => {
        if (value !== undefined && value >= 0) {
            updateCurrentStep(value);
        }
    });

    instance.watch('data', () => {
        targetElements.clear();
        updateCurrentStep(instance.get('value') || 0);
    });

    onMounted(() => {
        updateCurrentStep(instance.get('value') || 0);
    });

    /**
     * 收集子组件步骤
     */
    function collectSteps(children: VNode | VNode[]) {
        steps.length = 0;
        if (!children) return;

        const childrenArray = Array.isArray(children) ? children : [children];
        childrenArray.forEach(child => {
            if (child && isComponentVNode(child, TourStep)) {
                steps.push(child);
            }
        });
    }

    // normalize steps data, unify data and children
    function normalize(): VNode[] {
        const { data, children } = instance.get();
        const normalizedSteps: VNode[] = [];
        
        // handle declarative children
        if (children) {
            let index = 0;
            eachChildren(children, vNode => {
                if (isComponentVNode(vNode, TourStep)) {
                    const clonedVNode = directClone(vNode);
                    const props = {
                        ...vNode.props
                    };
                    
                    // ensure each step has a key
                    if (isNullOrUndefined(props.key)) {
                        props.key = `step-${index}`;
                    }
                    
                    clonedVNode.props = props;
                    clonedVNode.key = props.key;
                    normalizedSteps.push(clonedVNode);
                    index++;
                }
            });
        }
        
        // handle data data, convert to TourStep component
        if (data && Array.isArray(data)) {
            data.forEach((stepData: TourStepProps & { key?: string }, index: number) => {
                const stepVNode = h(TourStep, {
                    key: stepData.key || `data-step-${index}`,
                    title: stepData.title,
                    content: stepData.content,
                    target: stepData.target,
                    position: stepData.position,
                    ...stepData
                });
                stepVNode.key = stepData.key || `data-step-${index}`;
                normalizedSteps.push(stepVNode);
            });
        }
        
        return normalizedSteps;
    }

   
    // 获取当前步骤的组件
    function getCurrentStepChild(): VNode | null {
        const currentValue = instance.get('value') || 0;
        const normalizedSteps = normalize();
        return normalizedSteps[currentValue] || null;
    }

    function updateCurrentStep(index: number) {
        const { data } = instance.get();
        
        if (data && data[index]) {
            currentStep.set(data[index]);
            return;
        }
        
        if (steps[index]) {
            const props = steps[index].props || {};
            currentStep.set({
                title: props.title,
                content: props.content,
                target: props.target,
                position: props.position
            });
            return;
        }
        
        currentStep.set(undefined);
    }

    function getTotalSteps(): number {
        const { data } = instance.get();
        return steps.length || (data || []).length;
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
        currentStep,
        getTotalSteps,
        getTargetElement,
        normalize,
        getCurrentStepChild
    };
} 