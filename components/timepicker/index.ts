import {createVNode as h, Component} from 'intact';
import {TimepickerProps, TimepickerEvents, TimepickerBlocks} from './constants';
import {PanelPicker} from './panelPicker';
import {SelectPicker} from './selectPicker';

export type {TimepickerProps, TimepickerEvents, TimepickerBlocks};

declare class _Timepicker extends PanelPicker { } 

function Wrapper(props: TimepickerProps) {
    if (props.step && !props.range) {
        return h(SelectPicker, props);
    }
    return h(PanelPicker, props);
}

const functionalWrapper = (Component as any).functionalWrapper;
export const Timepicker: typeof _Timepicker = functionalWrapper ?
    functionalWrapper(Wrapper) : Wrapper;
