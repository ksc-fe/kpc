import {createVNode as h, Component} from 'intact';
import {TimepickerProps, TimepickerEvents, TimepickerBlocks, typeDefs} from './constants';
import {PanelPicker} from './panelPicker';
import {SelectPicker} from './selectPicker';

export type {TimepickerProps, TimepickerEvents, TimepickerBlocks};

export class Timepicker<
    Multipe extends boolean = false,
    Range extends boolean = false,
> extends Component<TimepickerProps<Multipe, Range>, TimepickerEvents, TimepickerBlocks<Range>> {
    static $doubleVNodes = true;
    static template(this: Timepicker) {
        const props = this.get();
        if (props.step && !props.range) {
            return h(SelectPicker, props as any);
        }
        return h(PanelPicker, props as any);
    }
    static typeDefs = typeDefs;
}

// declare class _Timepicker<
    // Multipe extends boolean = false,
    // Range extends boolean = false,
// > extends PanelPicker<Multipe, Range> { } 

// function Wrapper(props: TimepickerProps) {
    // if (props.step && !props.range) {
        // return h(SelectPicker, props);
    // }
    // return h(PanelPicker, props);
// }

// const functionalWrapper = (Component as any).functionalWrapper;
// export const Timepicker: typeof _Timepicker = functionalWrapper ?
    // functionalWrapper(Wrapper) : Wrapper;
