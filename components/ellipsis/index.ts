import { Component, TypeDefs, createRef } from 'intact';
import template from './index.vdt';
import { useEllipsis } from './useEllipsis';
import { useConfigContext } from '../config';
import { Options } from '../position';

export type Position = Options;
export interface EllipsisProps {
    maxLines?: number,
    disabled?: boolean,
    position?: Position | 'left' | 'bottom' | 'right' | 'top',
    theme?: 'light' | 'dark',
    hoverable?: boolean
}

const typeDefs: Required<TypeDefs<EllipsisProps>> = {
    maxLines: Number,
    disabled: Boolean,
    position: [Object, 'left', 'bottom', 'right', 'top'],
    theme: ['light', 'dark'],
    hoverable: Boolean
};

const defaults = (): Partial<EllipsisProps> => ({
    disabled: false,
    theme: 'light',
    hoverable: false
});

export class Ellipsis extends Component<EllipsisProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private ellipsis = useEllipsis();

    private config = useConfigContext();
}

