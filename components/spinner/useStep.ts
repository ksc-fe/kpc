import {useInstance, createRef} from 'intact';
import type {Spinner, SpinnerProps, StepObject, StepFunction} from './';
import {isUndefined} from 'intact-shared';

type Direction = 'increase' | 'decrease';
type GetStep = (value: number, direction?: Direction) => [number, number?] | number
export type NormalizedGetStep = (value: number, direction?: Direction) => [number, number];

export function useStep(defaultStep: number) {
    const instance = useInstance() as Spinner;
    const step = createRef<NormalizedGetStep>(() => {
        const {step, min} = instance.get();
        return [step as number, min as number];
    });

    instance.on('$receive:step', (v) => {
        const getStep = parseStep(v, defaultStep);
        step.value = (value: number, direction?: Direction) => {
            const step = getStep(value, direction);
            const min = instance.get('min')!;
            if (Array.isArray(step)) {
                return [step[0], isUndefined(step[1]) ? min : Math.max(min, step[1])];
            } else {
                return [step, min];
            }
        }
    });

    return step;
}

function parseStep(step: SpinnerProps['step'], defaultValue: number): GetStep {
    const type = typeof step;
    switch (type) {
        case 'number': return () => step as number;
        case 'object':
            const breakpoints = Object.keys(step as StepObject).map(i => {
                if (i === '$') {
                    return {key: i, value: Number.POSITIVE_INFINITY};
                }
                return {key: i, value: Number(i)};
            }).sort((a, b) => {
                return a.value - b.value;
            });
            return (value: number, direction?: Direction) => {
                for (let i = 0; i < breakpoints.length; i++) {
                    const breakpoint = breakpoints[i];
                    const prevBreakpoint = breakpoints[i - 1];
                    if (value < breakpoint.value) {
                        return [
                            (step as StepObject)[breakpoint.key as keyof StepObject],
                            prevBreakpoint && prevBreakpoint.value
                        ];
                    }
                    if (value === breakpoint.value) {
                        // we must detect the direction when it is a breakpoint
                        if (direction === 'increase') {
                            const nextBreakpoint = breakpoints[i + 1];
                            if (nextBreakpoint !== undefined) {
                                return [
                                    (step as StepObject)[nextBreakpoint.key as keyof StepObject],
                                    breakpoint.value
                                ];
                            }
                        }
                        return [
                            (step as StepObject)[breakpoint.key as keyof StepObject],
                            prevBreakpoint && prevBreakpoint.value
                        ];
                    }
                }
                return [defaultValue, undefined];
            };
        case 'function': return step as StepFunction;
        default: return () => defaultValue;
    }
}
