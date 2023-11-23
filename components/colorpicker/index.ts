import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {sizes, Sizes} from '../../styles/utils';
import {Container} from '../portal';
import {Dropdown, DropdownProps} from '../dropdown';
import { useConfigContext } from '../config';

export interface ColorpickerProps {
    value: string
    presets?: string[]
    size?: Sizes
    disabled?: boolean
    container?: Container
    show?: boolean
    position?: DropdownProps['position']
}

export interface ColorpickerEvents { }

const typeDefs: Required<TypeDefs<ColorpickerProps>> = {
    value: {
        type: String,
        required: true,
    },
    presets: Array,
    size: sizes,
    disabled: Boolean,
    container: [Function, String],
    show: Boolean,
    position: Dropdown.typeDefs.position,
};

const defaults = (): Partial<ColorpickerProps> => ({
    presets: [
        '#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321',
        '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2',
        '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'
    ], 
    size: 'default',
    position: {collision: 'fit'},
});

export class Colorpicker extends Component<ColorpickerProps, ColorpickerEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private config = useConfigContext();
}
