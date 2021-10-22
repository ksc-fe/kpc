import {Component} from 'intact';
import template from './drag.vdt';
import {useDrag} from './useDrag';

interface ColorpickerDragProps {
    value: number
    max: number
    onStart: () => void
    onEnd: () => void
}

export class ColorpickerDrag extends Component<ColorpickerDragProps> {
    static template = template;

    private drag = useDrag();
}
