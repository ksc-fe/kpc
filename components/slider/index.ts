import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import type {StepObject, StepFunction, SpinnerProps} from '../spinner';
import type {TooltipProps} from '../tooltip';
import {useStep} from '../spinner/useStep';
import {useValue} from './useValue';
import {useDraggable} from './useDraggable';
import {useStyles} from './useStyles';
import {useKeyboard} from './useKeyboard';
import {useClick} from './useClick';
import {usePoints} from './usePoints';
import {Marks, useMarks} from './useMarks';

export interface SliderProps {
    max?: number
    min?: number
    value?: number | [number, number]
    isRange?: boolean
    unit?: string
    isShowEnd?: boolean
    isShowInput?: boolean
    step?: number | StepObject | StepFunction
    points?: number[] | boolean
    marks: Marks
    disabled?: boolean
    isShowTooltip?: boolean
    always?: boolean
    animate?: boolean
    tooltipProps?: TooltipProps
    spinnerProps?: SpinnerProps
}

const typeDefs: Required<TypeDefs<SliderProps>> = {
    max: Number,
    min: Number,
    value: [Number, Array],
    isRange: Boolean,
    unit: String,
    isShowEnd: Boolean,
    isShowInput: Boolean,
    step: [Number, Object, Function],
    points: [Array, Boolean],
    marks: Object,
    disabled: Boolean,
    isShowTooltip: Boolean,
    always: Boolean,
    animate: Boolean,
    tooltipProps: Object,
    spinnerProps: Object,
};

const defaultStep = 1;
const defaults = (): Partial<SliderProps> => ({
    max: 100,
    min: 0,
    value: 0,
    unit: '',
    isShowEnd: true,
    isShowInput: true,
    step: defaultStep,
    animate: true,
});

export class Slider extends Component<SliderProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private step = useStep<Slider>(defaultStep);
    private value = useValue(
        this.step,
        () => this.draggable.dragging.value
    );
    private draggable = useDraggable(
        this.value.showValue,
        this.value.fixValue,
        this.value.triggerChangeEvent,
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
