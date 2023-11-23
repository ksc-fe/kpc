import {Component, inject, provide} from 'intact';
import template from './template.vdt';
import {LAYOUT, getStyle, BODY} from './helpers';
import type {Layout} from './layout';
import {addStyle} from '../utils';
import { useConfigContext } from '../config';

export class Body extends Component {
    static template = template;

    private layout = inject<Layout>(LAYOUT)!;
    private config = useConfigContext();

    init() {
        provide(BODY, this);
    }

    private getClassNames() {
        const {className} = this.get();
        const { k } = this.config;
        return {
            [`${k}-layout-body`]: true,
            [className as string]: className,
        };
    }

    private getStyles() {
        const style = this.get<string>('style');
        const {hasFixedAside, asideWidth, hasFixedHeader, headerHeight} = this.layout.parse();

        if (!hasFixedAside && !hasFixedHeader) return style;

        return addStyle(style, {
            // FIXME: we must use padding instead of margin, otherwise the table's width is wired
            paddingLeft: hasFixedAside ? getStyle(asideWidth) : null, 
            marginTop: hasFixedHeader ? getStyle(headerHeight) : null,
        });
    }
}
