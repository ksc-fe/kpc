import {useInstance, createRef} from 'intact';
import {Slider} from './';
import type {Tooltip, TooltipProps} from '../tooltip/tooltip';
import {useReceive} from '../../hooks/useReceive';
import {State, watchState} from '../../hooks/useState';
import type {Value} from './useValue';

export function useTooltip(showValue: State<Value>) {
    const instance = useInstance() as Slider;
    const firstTooltipRef = createRef<Tooltip>();
    const secondTooltipRef = createRef<Tooltip>();
    const defaultTooltipProps: TooltipProps = {
        container: parentDom => parentDom, 
        hoverable: true,
        always: instance.get('always'),
    }

    let tooltipProps: TooltipProps = defaultTooltipProps;
    useReceive<Slider>(['always', 'tooltipProps'], () => {
        const {always, tooltipProps: props}= instance.get();
        tooltipProps = {
            ...defaultTooltipProps,
            always,
            ...props
        };
        if (always) {
            tooltipProps.value = true;
        }
    });

    instance.on('$changed:value', () => {
        if (instance.get('always')) {
            show();
        }
    });

    function getTooltipProps() {
        return tooltipProps;
    }

    function show() {
        if (!instance.get('showTooltip')) return;

        const first = firstTooltipRef.value!;
        const second = secondTooltipRef.value;
        first.show();
        first.position();
        if (second) {
            second.show();
            second.position();
        }
    }

    function hide() {
        firstTooltipRef.value!.hide(false);
        const second = secondTooltipRef.value;
        if (second) {
            second.hide(false);
        }
    }

    return {firstTooltipRef, secondTooltipRef, getTooltipProps, show, hide};
}
