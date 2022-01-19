import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import type {StepObject, StepFunction, SpinnerProps} from '../spinner';
import type {TooltipProps} from '../tooltip';
import {useStep} from '../spinner/useStep';
import {useValue, Value} from './useValue';
import {useDraggable} from './useDraggable';
import {useStyles} from './useStyles';
import {useKeyboard} from './useKeyboard';
import {useClick} from './useClick';
import {usePoints} from './usePoints';
import {Marks, useMarks} from './useMarks';
import {useTooltip} from './useTooltip';
import type {Events} from '../types';

export interface SliderProps<Range extends boolean = boolean> {
    max?: number
    min?: number
    value?: Value<Range>
    range?: Range 
    unit?: string
    showEnd?: boolean
    showInput?: boolean
    step?: number | StepObject | StepFunction
    points?: number[] | boolean
    marks?: Marks
    disabled?: boolean
    showTooltip?: boolean
    always?: boolean
    animate?: boolean
    tooltipProps?: TooltipProps
    spinnerProps?: SpinnerProps
    forceStep?: boolean
}

export type SliderMarks = Marks;

export interface SliderEvents<Range extends boolean = boolean> {
    change: [Value<Range>, Value<Range>]
}

export interface SliderBlocks<Range extends boolean = boolean> {
    tooltip: Value<Range>
}

const typeDefs: Required<TypeDefs<SliderProps>> = {
    max: Number,
    min: Number,
    value: [Number, Array],
    range: Boolean,
    unit: String,
    showEnd: Boolean,
    showInput: Boolean,
    step: [Number, Object, Function],
    points: [Array, Boolean],
    marks: Object,
    disabled: Boolean,
    showTooltip: Boolean,
    always: Boolean,
    animate: Boolean,
    tooltipProps: Object,
    spinnerProps: Object,
    forceStep: Boolean,
};

const defaultStep = 1;
const defaults = (): Partial<SliderProps> => ({
    max: 100,
    min: 0,
    value: 0,
    unit: '',
    showEnd: true,
    showInput: true,
    step: defaultStep,
    animate: true,
    forceStep: true,
});

const events: Events<SliderEvents> = {
    change: true,
};

export class Slider<
    Range extends boolean = false 
> extends Component<SliderProps<Range>, SliderEvents<Range>, SliderBlocks<Range>> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private step = useStep<Slider>(defaultStep);
    private value = useValue(
        this.step,
        () => this.draggable.dragging.value
    );
    private tooltip = useTooltip(this.value.showValue);
    private draggable = useDraggable(
        this.value.showValue,
        this.value.fixValue,
        this.value.triggerChangeEvent,
        this.tooltip.show,
    );
    private styles = useStyles(this.value.showValue);
    private keyboard = useKeyboard(
        this.step,
        this.draggable.getNewValue,
        this.value.fixValue,
        this.draggable.isFirst,
        this.draggable.dragging,
        this.value.triggerChangeEvent,
    );
    private click = useClick(
        this.draggable.getSlidingValue,
        this.value.fixValue,
        this.value.showValue,
        this.value.setValue,
    );
    private points = usePoints(
        this.value.showValue,
        this.step
    );
    private marks = useMarks();
}
