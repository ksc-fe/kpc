import { Component, TypeDefs, createRef } from 'intact';
import template from './index.vdt';
import { useEllipsis } from './useEllipsis';
import { useConfigContext } from '../config';
import { Options } from '../position';

export type Position = Options;
export interface EllipsisProps {
    maxLines?: number,
    tooltipDisabled?: boolean,
    position?: Position | 'left' | 'bottom' | 'right' | 'top',
    tooltipClass?: string,
    theme?: 'light' | 'dark',
}

const typeDefs: Required<TypeDefs<EllipsisProps>> = {
    maxLines: Number,
    tooltipDisabled: Boolean,
    position: [Object, 'left', 'bottom', 'right', 'top'],
    tooltipClass: String,
    theme: ['light', 'dark'],
};

const defaults = (): Partial<EllipsisProps> => ({
    tooltipDisabled: false,
    theme: 'light'
});

export class Ellipsis extends Component<EllipsisProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public ellipsisRef = createRef<HTMLDivElement>();

    private ellipsis = useEllipsis(this.ellipsisRef);

    private config = useConfigContext();
}

