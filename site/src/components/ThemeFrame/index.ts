import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';

export interface ThemeFrameProps {
    mainTitle: string
    subTitle: string
    href: string
}

const typeDefs: Required<TypeDefs<ThemeFrameProps>> = {
    mainTitle: String,
    subTitle: String,
    href: String
};


const defaults = (): Partial<ThemeFrameProps> => ({
    
});

export class ThemeFrame extends Component {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private frameRef = createRef<HTMLElement>()

    render() {
        (this.frameRef.value as any).contentWindow.refresh(this.get('children'))
    }

    mounted() {
        (this.frameRef.value as any).contentWindow.onload = this.render
    }
}
