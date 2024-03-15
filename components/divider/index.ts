import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import { useConfigContext } from '../config';

export interface DividerProps {
    dashed?: boolean,
    position?: 'left' | 'right' | 'center',
    type?: 'vertical' | 'horizontal',
    theme?: 'light' | 'dark' | 'white',
    marginSize?: 'large' | 'default' | 'small' | 'none',
    margin?: string | number
}

const typeDefs: Required<TypeDefs<DividerProps>> = {
    dashed: Boolean,
    position: ['left', 'right', 'center'],
    type: ['vertical', 'horizontal'],
    theme: ['light', 'dark', 'white'],
    marginSize: ['large', 'default', 'small', 'none'],
    margin: [String, Number]
};

const defaults = (): Partial<DividerProps> => ({
    position: 'center',
    type: 'horizontal',
    theme: 'light',
    marginSize: 'default'
});

export class Divider extends Component<DividerProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private config = useConfigContext();
}

