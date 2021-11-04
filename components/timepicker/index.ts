import {createVNode as h, Component} from 'intact';
import {TimepickerProps, typeDefs} from './constants'
import {PanelPicker} from './panelPicker';
import {SelectPicker} from './selectPicker';

export type {TimepickerProps};

function _Timepicker(props: TimepickerProps) {
    if (props.step && !props.range) {
        return h(SelectPicker, props);
    }
    return h(PanelPicker, props);
}

const functionalWrapper = (Component as any).functionalWrapper;
export const Timepicker = functionalWrapper ? functionalWrapper(_Timepicker) : _Timepicker;
