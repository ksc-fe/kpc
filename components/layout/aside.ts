import {Component, TypeDefs, inject} from 'intact';
import type {MenuProps} from '../menu'
import {themes, getCollapseWidth} from './styles';
import template from './aside.vdt';
import {ROOT_LAYOUT, getStyle, defaultWidth} from './helpers';
import type {Layout} from './layout';
import {addStyle} from '../utils';
import { useConfigContext } from '../config';
import { isNullOrUndefined } from 'intact-shared';

export interface AsideProps { 
    collapse?: boolean
    fixed?: boolean
    theme?: MenuProps['theme']
    width?: number | string
    collapsedWidth?: number | string
}

const typeDefs: Required<TypeDefs<AsideProps>> = {
    collapse: Boolean,
    fixed: Boolean,
    theme: themes,
    width: [Number, String],
    collapsedWidth: [Number, String],
};

const defaults = (): Partial<AsideProps> => ({
    theme: 'dark',
    width: defaultWidth,
});

export class Aside extends Component<AsideProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private rootLayout = inject<Layout>(ROOT_LAYOUT)!;
    private config = useConfigContext();

    private getStyles() {
        const {fixed, width, collapse, collapsedWidth} = this.get();
        const style = addStyle(this.get<string>('style'), {
            width: !collapse ?
                getStyle(width!) :
                isNullOrUndefined(collapsedWidth) ?
                    getCollapseWidth() : getStyle(collapsedWidth),
        });

        if (!fixed) return style; 

        const {hasFixedHeader, headerHeight} = this.rootLayout.parse();

        if (!hasFixedHeader) return style; 

        return addStyle(style, {
            top: getStyle(headerHeight),
        });
    }
}
