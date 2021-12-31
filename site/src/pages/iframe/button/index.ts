import {Component, TypeDefs} from 'intact';
import {setTheme} from 'kpc';
import template from './index.vdt';

type ButtonProps = {
    buttonRadius: number
    buttonStatus: string
    contentInput: string
    iconPosition: string
}

export interface IframeBtnProps {
    buttonRadius: number
    buttonStatus: string
    contentInput: string
    iconPosition: string
}

const typeDefs: Required<TypeDefs<IframeBtnProps>> = {
    buttonRadius: Number,
    buttonStatus: String,
    contentInput: String,
    iconPosition: String,
};

const defaults = (): Partial<IframeBtnProps> => ({
    buttonRadius: 2,
    buttonStatus: 'primary',
    contentInput: 'Button',
    iconPosition: 'left'
});

export default class extends Component<IframeBtnProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    init() {
        (window as any).setValue = this.setValue.bind(this);
    }

    setValue(val: ButtonProps) {
        const { buttonRadius, buttonStatus, contentInput, iconPosition } = this.get();

        const target = val
            ? val
            : {
                buttonRadius,
                buttonStatus,
                contentInput,
                iconPosition
            }
            
        this.set('buttonRadius', target.buttonRadius);
        this.set('buttonStatus', target.buttonStatus);
        this.set('contentInput', target.contentInput);
        this.set('iconPosition', target.iconPosition);
        
        setTheme({
            button: {
                borderRadius: `${target.buttonRadius}px`
            }
        })
    }
}
