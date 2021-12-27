import {Component, TypeDefs, createRef, nextTick} from 'intact';
import template from './index.vdt';
import vue_logo from '../../../imgs/vue_logo.png';
import vue_logo_active from '../../../imgs/vue_logo_active.png';
import react_logo from '../../../imgs/react_logo.png';
import react_logo_active from '../../../imgs/react_logo_active.png';
import {ThemeFrame} from '../../../components/ThemeFrame';

// console.log = (log => {
//     return a => {
//         console.clear()
//         log(a)
//     }
// })(console.log)

type SupportLang = {
    title: string 
    src: any
    activeSrc: any
    isActive: boolean
};

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
    codeContent: 'hello world',
    contentInput: 'Button',
    iconPosition: 'left',
    buttonStatus: 'primary',
    buttonRadius: 2,
    buttonRadiusMax: 24,
    buttonRadiusMin: 0,
    supportList: [
        {
            title: 'Vue',
            src: vue_logo,
            activeSrc: vue_logo_active,
            isActive: true
        },
        {
            title: 'React',
            src: react_logo,
            activeSrc: react_logo_active,
            isActive: false
        }
    ]
});

export class BestPractice extends Component<BestPracticeProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private iframeBoxRef = createRef<ThemeFrame>();

    init() {
        const handleValueChange = () => {
            const {iconPosition, contentInput, buttonStatus, buttonRadius} = this.get();
            this.iframeBoxRef.value?.reRender({
                iconPosition,
                contentInput,
                buttonStatus,
                buttonRadius
            })
        }
        this.watch('iconPosition', handleValueChange)
        this.watch('contentInput', handleValueChange)
        this.watch('buttonStatus', handleValueChange)
        this.watch('buttonRadius', handleValueChange)
    }

    handleLanguageClick(curLang: SupportLang) {
        const {supportList} = this.get();
        const tmp = supportList.map((item: SupportLang) => {
            item.isActive = false;
            return item;
        });
        this.set('supportList', tmp);

        curLang.isActive = true;
    }
    
    handlePositionChange(position: string) {
        // this.iframeBoxRef.value?.reRender();
    }
}
