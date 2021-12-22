import {Component, createRef} from 'intact';
import template from './index.vdt';

export interface LayoutProps {
    version: string
}

export default class Layout<T extends LayoutProps = LayoutProps> extends Component<T> {
    static template = template;
    static defaults = (): Partial<LayoutProps> => ({
        version: 'v1.1.1'
    });
}
