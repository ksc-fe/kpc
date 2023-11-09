import {Component, TypeDefs, inject, provide} from 'intact';
import template from './template.vdt';
import {makeLayoutStyles} from './styles';
import {addStyle} from '../utils';
import {ROOT_LAYOUT, LAYOUT, getStyle, BODY} from './helpers';
import {useParse} from './useParse';
import type { Body } from './body';

export class Layout extends Component {
    static template = template;

    public parse = useParse();
    public layout = inject<Layout | null>(LAYOUT, null);
    private body = inject<Body | null>(BODY, null);

    init() {
        provide(LAYOUT, this);
        if (!this.layout) {
            provide(ROOT_LAYOUT, this);
        }
    }

    private getClassNames() {
        const {className, children} = this.get();
        const {hasAside} = this.parse();
        return {
            'k-layout': true,
            [`k-has-aside`]: hasAside,
            [makeLayoutStyles()]:  true,
            [className as string]: className,
        };
    }

    private getStyles() {
        const style = this.get<string>('style');
        const layout = this.layout;
        if (!layout || this.body) return style;

        const {hasFixedHeader, headerHeight, hasFixedAside, asideWidth} = layout.parse();
        if (!hasFixedHeader && !hasFixedAside) return style;

        // add margin-top if the parent layout has fixed header
        return addStyle(style, {
            marginTop: hasFixedHeader ? getStyle(headerHeight) : null,
            paddingLeft: hasFixedAside ? getStyle(asideWidth) : null,
        });
    }
}
