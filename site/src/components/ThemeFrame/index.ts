import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';

export interface ThemeFrameProps {
    href: string
    width: string | number
    height: string | number
}

const typeDefs: Required<TypeDefs<ThemeFrameProps>> = {
    href: String,
    width: [Number, String],
    height: [Number, String]
};


const defaults = (): Partial<ThemeFrameProps> => ({
    href: '',
    width: '',
    height: ''
});

export class ThemeFrame extends Component {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private frameRef = createRef<HTMLElement>();

    reRender(val?: any) {
        console.log(val);
        (this.frameRef.value as any).contentWindow.setValue(val);
    }

    mounted() {
        (this.frameRef.value as any).contentWindow.onload = () => {
            this.reRender();
        }
    }
}
