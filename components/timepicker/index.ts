import {createVNode as h} from 'intact';
import {TimepickerProps, typeDefs} from './constants'
import {PanelPicker} from './panelPicker';
import {SelectPicker} from './selectPicker';

export function Timepicker(props: TimepickerProps) {
    if (props.step && !props.range) {
        return h(SelectPicker, props);
    }
    return h(PanelPicker, props);
}

export type {TimepickerProps};
