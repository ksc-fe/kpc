import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import { useConfigContext } from '../config';

export interface DividerProps {
    borderType?: 'solid' | 'dashed' | 'dotted' | 'double',
    position?: 'left' | 'right' | 'center',
    type?: 'vertical' | 'horizontal',
    theme?: 'light' | 'dark',
    margin?: 'large' | 'default' | 'small' | 'none' | number,
}

const typeDefs: Required<TypeDefs<DividerProps>> = {
    borderType: ['solid', 'dashed', 'dotted', 'double'],
    position: ['left', 'right', 'center'],
    type: ['vertical', 'horizontal'],
    theme: ['light', 'dark'],
    margin: ['large', 'default', 'small', 'none', Number]
};

const defaults = (): Partial<DividerProps> => ({
    borderType: 'solid',
    position: 'center',
    type: 'horizontal',
    theme: 'light',
    margin: 'default'
});

export class Divider extends Component<DividerProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private config = useConfigContext();
}

