import {Component, inject, provide} from 'intact';
import template from './template.vdt';
import {LAYOUT, getStyle, BODY} from './helpers';
import type {Layout} from './layout';
import {addStyle} from '../utils';

export class Body extends Component {
    static template = template;

    private layout = inject<Layout>(LAYOUT)!;

    init() {
        provide(BODY, this);
    }

    private getClassNames() {
        const {className} = this.get();
        return {
            'k-layout-body': true,
            [className as string]: className,
        };
    }

    private getStyles() {
        const style = this.get<string>('style');
        const {hasFixedAside, asideWidth, hasFixedHeader, headerHeight} = this.layout.parse();

        if (!hasFixedAside && !hasFixedHeader) return style;

        return addStyle(style, {
            marginLeft: hasFixedAside ? getStyle(asideWidth) : null, 
            marginTop: hasFixedHeader ? getStyle(headerHeight) : null,
        });
    }
}
