import {useInstance} from 'intact';
import {useState} from '../../hooks/useState';
import {Rate} from './index';

export function useActiveValue() {
    const instance = useInstance() as Rate;
    const activeValue = useState<number>(0);

    instance.on('$receive:value', v => {
        if (!instance.get('half')) v = Math.round(v!);
        instance.set('value', v);
        activeValue.set(v!);
    });

    function onClick(value: number) {
        if (instance.get('disabled')) return;

        // clear the value when click again on the clearable component
        if (instance.get('clearable') && instance.get('value') === value) {
            value = 0;
        }

        instance.set('value', value);
        activeValue.set(value);
    }

    function onMouseEnter(value: number) {
        if (instance.get('disabled')) return;

        activeValue.set(value);
    }

    function onMouseLeaveComponent(e: MouseEvent) {
        instance.trigger('mouseleave', e);

        if (instance.get('disabled')) return;

        activeValue.set(instance.get('value')!);
    }

    return {activeValue, onClick, onMouseEnter, onMouseLeaveComponent};
}
