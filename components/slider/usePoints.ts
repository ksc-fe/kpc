import {useInstance} from 'intact';
import type {Slider, SliderProps} from './';
import {useState, State, watchState} from '../../hooks/useState';
import type {NormalizedGetStep} from '../spinner/useStep';
import {error} from 'intact-shared';
import {Value} from './useValue';

type Point = {
    value: number
    style: Style 
    active: boolean
}
type Style = {
    left: string
}

export function usePoints(
    showValue: State<Value>,
    getStep: NormalizedGetStep
) {
    const instance = useInstance() as Slider;
    let points: Point[] = []; 

    instance.on('$receive:points', v => {
        if (v === true) {
            makeStepPoints();
        } else if (Array.isArray(v)) {
            addStyle(v);
        } else {
            points = [];
        }
    });

    watchState(showValue, addActive);

    function makeStepPoints() {
        const {max, min, step} = instance.get() as Required<SliderProps>;
        if (!step) {
            if (process.env.NODE_ENV !== 'production') {
                error('[Slider]: Step cannot be 0 if you want to show step points.');
            }
            return;
        }

        const results: number[] = [];
        let i = min; 
        while (true) {
            const [step] = getStep(i, 'increase');
            i = i + step;
            if (Number(i.toFixed(10)) >= max) {
                break;
            }
            results.push(i);
        }
        addStyle(results);
    }

    function addStyle(values: number[]) {
        const {min, max} = instance.get() as Required<SliderProps>;
        const total = max - min;
        points = values.map(point => {
            return {
                value: point,
                style: {
                    left: ((point - min) / total * 100) + '%'
                },
                active: false,
            } 
        });
        addActive();
    } 

    function addActive() {
        const {range} = instance.get();
        const value = showValue.value;
        points.forEach(point => {
            point.active = !range ?
                point.value <= (value as number) :
                point.value >= (value as [number, number])[0] &&
                point.value <= (value as [number, number])[1];
        });
    }

    return () => points;
}
