import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import {useStyle} from './useStyle';
import { useConfigContext } from '../config';

export interface AffixProps {
    top?: number
    bottom?: number
    exclude?: (data: ExcludeParam) => boolean
    shouldFix?: (data: ShouldFixParam) => boolean
}

export interface AffixEvents {
    change: [boolean]
}

export type ExcludeParam = {
    offsetTop?: number,
    offsetBottom?: number,
    top: number,
    bottom: number,
    width: number,
    height: number,
}

export type ShouldFixParam = {
    offsetTop?: number,
    offsetBottom?: number,
    viewportHeight?: number
}

const typeDefs: Required<TypeDefs<AffixProps>> = {
    top: Number,
    bottom: Number,
    exclude: Function,
    shouldFix: Function,
};

export class Affix extends Component<AffixProps, AffixEvents> {
    static template = template;
    static typeDefs = typeDefs;

    private elementRef = createRef<HTMLElement>();
    private style = useStyle(this.elementRef);
    private config = useConfigContext();
}
