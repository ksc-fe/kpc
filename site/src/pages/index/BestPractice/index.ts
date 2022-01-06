import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import vue_logo from '../../../imgs/vue_logo.png';
import vue_logo_active from '../../../imgs/vue_logo_active.png';
import react_logo from '../../../imgs/react_logo.png';
import react_logo_active from '../../../imgs/react_logo_active.png';
import {ThemeFrame} from '../../../components/ThemeFrame';
import {bind} from 'components/utils';

type SupportLang = {
    title: string 
    src: any
    activeSrc: any
    isActive: boolean
    codeTemplate: Function
};

const vueTemplate = 
`<div>
    placeholder1
    placeholder2
</div>`

const reactTemplate = 
`export default class Demo extends React.Component {
    render() {
        return (
            <div>
                placeholder1
                placeholder2
            </div>
        )
    }
}`

const templateMap = {
    vue: vueTemplate,
    react: reactTemplate
}

const getTemplate = (type: 'vue' | 'react'): Function => {    
    return (buttonStatus: string, contentInput: string, iconPosition: string) => {
        const isLeft =  iconPosition == 'left';
        const button = `<Button type="BUTTON_TYPE">BUTTON_CONTENT</Button>`
            .replace('BUTTON_TYPE', buttonStatus)
            .replace('BUTTON_CONTENT', contentInput);
        const icon = `<Icon class="icon ion-plus"></Icon>`;

        const placeholder1 = isLeft ? icon : button;
        const placeholder2 = isLeft ? button : icon;
        const tmp = templateMap[type];
        return tmp
            .replace('placeholder1', placeholder1)
            .replace('placeholder2', placeholder2);
    }
}

export interface BestPracticeProps {
    codeContent: string
    contentInput: string
    iconPosition: string
    buttonStatus: string
    buttonRadius: number
    buttonRadiusMax: number
    buttonRadiusMin: number
    supportList: SupportLang[]
}

export interface BestPracticeEvents {
    setFrameValue: [string]
}

const typeDefs: Required<TypeDefs<BestPracticeProps>> = {
    codeContent: String,
    contentInput: String,
    iconPosition: String,
    buttonStatus: String,
    buttonRadius: Number,
    buttonRadiusMax: Number,
    buttonRadiusMin: Number,
    supportList: Array
};

const defaults = (): Partial<BestPracticeProps> => ({
    codeContent: '',
    contentInput: 'Button',
    iconPosition: 'left',
    buttonStatus: 'primary',
    buttonRadius: 2,
    buttonRadiusMax: 20,
    buttonRadiusMin: 0,
    supportList: [
        {
            title: 'Vue',
            src: vue_logo,
            activeSrc: vue_logo_active,
            isActive: true,
            codeTemplate: getTemplate('vue')

        },
        {
            title: 'React',
            src: react_logo,
            activeSrc: react_logo_active,
            isActive: false,
            codeTemplate: getTemplate('react')
        }
    ]
});

export class BestPractice extends Component<BestPracticeProps, BestPracticeEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private iframeBoxRef = createRef<ThemeFrame>();

    init() {
        const handleValueChange = () => this.setFrameValue();
        this.watch('iconPosition', handleValueChange);
        this.watch('contentInput', handleValueChange);
        this.watch('buttonStatus', handleValueChange);
        this.watch('buttonRadius', handleValueChange);
    }

    setFrameValue(primaryColor?: string) {
        const {iconPosition, contentInput, buttonStatus, buttonRadius} = this.get();
        const theme: any = {
            iconPosition,
            contentInput,
            buttonStatus,
            buttonRadius
        };

        if(primaryColor) {
            theme.primary = primaryColor;
        }
        
        this.iframeBoxRef.value?.reRender(theme);
        this.setCode();
    }

    setCode() {
        const {iconPosition, contentInput, buttonStatus} = this.get();
        const active = this.get('supportList').find((item: SupportLang) => item.isActive)!;
        const code = active.codeTemplate(buttonStatus, contentInput, iconPosition);
        this.set('codeContent', code);
    }

    handleLanguageClick(curLang: SupportLang) {
        const {supportList} = this.get();
        const tmp = supportList.map((item: SupportLang) => {
            item.isActive = false;
            return item;
        });
        this.set('supportList', tmp);

        curLang.isActive = true;
        this.setCode();
    }

    @bind
    handleCodeBoxReady() {
        this.setCode();
    }
}
