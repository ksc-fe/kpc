import {useInstance, onBeforeMount, onBeforeUpdate} from 'intact';
import type {Slider} from './';
import {State} from '../../hooks/useState';
import {Value} from './useValue';

type Style = Record<string, string>;

export function useStyles(showValue: State<Value>) {
    const instance = useInstance() as Slider;
    let barStyle: Style;
    let thumbFirstStyle: Style;
    let thumbSecondStyle: Style;

    function updateStyle() {
        const {max, min, range} = instance.get();
        const total = max! - min!;

        if (total > 0) {
            if (range) {
                const [first, second] = showValue.value as [number, number];
                barStyle = {
                    width: toPercent(Math.abs(second - first), total),
                    left: toPercent(Math.min(first, second) - min!, total),
                };
                thumbFirstStyle = {
                    left: toPercent(first - min!, total),
                };
                thumbSecondStyle = {
                    left: toPercent(second - min!, total),
                };
            } else {
                const percent = toPercent(showValue.value as number - min!, total);
                barStyle = {
                    width: percent, 
                };
                thumbFirstStyle = {
                    left: percent,
                };
            }
        } else {
            barStyle = {width: '100%', left: '0'};
            thumbFirstStyle = {left: '100%'};
            thumbSecondStyle = {left: '0'};
        }
    }

    onBeforeUpdate(updateStyle);
    onBeforeMount(updateStyle);

    return () => ({barStyle, thumbFirstStyle, thumbSecondStyle});
}

function toPercent(value: number, total: number) {
    return value / total * 100 + '%';
}
