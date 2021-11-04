import {useInstance} from 'intact';
import type {Progress, ProgressProps} from './index';
import {useState} from '../../hooks/useState';
import {isFunction, isString, isArray} from 'intact-shared';

export function useColor() {
    const instance = useInstance() as Progress;
    const backGroundColor = useState<ProgressProps['color']>(undefined);

    function setColor() {
        const {percent, color} = instance.get();
        if (!color) return;

        if (isFunction(color)) {
            backGroundColor.set(color.call(self, percent!));
        } else if (isArray(color)) {
            const item = color.find((v) => v.percent === percent);
            if (item && item.color) {
                backGroundColor.set(item.color);
            }
        } else if (isString(color)){
            backGroundColor.set(color);
        }
    }

    instance.on('$receive:color', setColor);
    instance.watch('percent', setColor);

    return backGroundColor;
}
