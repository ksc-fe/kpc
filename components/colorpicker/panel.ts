import {Component, TypeDefs} from 'intact';
import template from './panel.vdt';
import {useValue} from './useValue';
import {usePointer} from './usePointer';
import {useInput} from './useInput';

export interface ColorpickerPanelProps {
    value: string
    presets?: string[]
}

export class ColorpickerPanel extends Component<ColorpickerPanelProps> {
    static template = template;

    private value = useValue();
    private pointer = usePointer(
        this.value.hsv,
        this.value.format,
    );
    private input = useInput(
        this.value.hsv,
        this.value.rgb,
        this.value.hsl,
    );
}
