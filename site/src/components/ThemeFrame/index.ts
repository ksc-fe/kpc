import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';

export interface ThemeFrameProps {
    href: string
    width: string | number
    height: string | number
    style: any
}

const typeDefs: Required<TypeDefs<ThemeFrameProps>> = {
    href: String,
    width: [Number, String],
    height: [Number, String],
    style: Object
};


const defaults = (): Partial<ThemeFrameProps> => ({
    href: '',
    width: '',
    height: '',
    style: {}
});

export class ThemeFrame extends Component {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private frameRef = createRef<HTMLElement>();

    reRender(val?: any) {
        (this.frameRef.value as any).contentWindow.setValue(val);
    }

    mounted() {
        (this.frameRef.value as any).contentWindow.onload = () => {
            this.reRender();
        }
    }
}
