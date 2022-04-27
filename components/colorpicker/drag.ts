import {Component} from 'intact';
import template from './drag.vdt';
import {useDrag} from './useDrag';

interface ColorpickerDragProps {
    value: number
    max: number
    onStart: () => void
    onEnd: () => void
}

interface ColorpickerDragEvents {
    click: []
}

export class ColorpickerDrag extends Component<ColorpickerDragProps, ColorpickerDragEvents> {
    static template = template;

    private drag = useDrag();
}
