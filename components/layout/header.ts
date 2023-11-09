import {Component, TypeDefs, inject} from 'intact';
import template from './template.vdt';
import {addStyle} from '../utils';
import {isNumber} from 'intact-shared';
import {makeHeaderStyles, themes} from './styles';
import type {MenuProps} from '../menu';
import {defaultHeight, ROOT_LAYOUT, getStyle} from './helpers';
import type {Layout} from './layout';

export interface HeaderProps { 
    fixed?: boolean
    height?: number | string
    style?: string | Record<string, string>
    theme?: MenuProps['theme']
    blur?: boolean
    boxShadow?: boolean
}

const typeDefs: Required<TypeDefs<HeaderProps>> = {
    fixed: Boolean,
    height: [Number, String],
    style: [String, Object],
    theme: themes,
    blur: Boolean,
    boxShadow: Boolean,
};

const defaults = (): Partial<HeaderProps> => ({
    height: defaultHeight,
    theme: 'dark',
});

export class Header extends Component<HeaderProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private rootLayout = inject<Layout>(ROOT_LAYOUT)!;

    private getClassNames() {
        const {className, fixed, theme, blur, boxShadow} = this.get();
        return {
            'k-layout-header': true,
            'k-fixed': fixed,
            'k-blur': blur,
            'k-box-shadow': boxShadow,
            [`k-${theme!}`]: true,
            [className as string]: className,
            [makeHeaderStyles()]: true,
        };
    }

    private getStyles() {
        const {style, height} = this.get();
        const {hasFixedAside, asideWidth} = this.rootLayout.parse();

        return addStyle(style, {
            height: getStyle(height!),
            left: hasFixedAside ? getStyle(asideWidth) : null,
        });
    }
}
