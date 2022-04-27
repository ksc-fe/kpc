import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import {bind} from 'kpc/components/utils';
import {ThemeFrame} from '../../../components/ThemeFrame';

interface ColorItem {
    color: string
    name: string
}

export interface ColorProcessProps {
    colorList: ColorItem[]
    curColor: string
    iframeWidth: number
    iframeHeight: number
    iframeScale: number
    curThemeType: string
}

const typeDefs: Required<TypeDefs<ColorProcessProps>> = {
    colorList: Array,
    curColor: String,
    iframeWidth: Number,
    iframeHeight: Number,
    iframeScale: Number,
    curThemeType: String
};

const defaults = (): Partial<ColorProcessProps> => ({
    colorList: [
        {
            color: '#6E64E0',
            name: 'New Era'
        },
        {
            color: '#258AE8',
            name: 'Ocean'
        },
        {
            color: '#25E8D0',
            name: 'Techno'
        },
        {
            color: 'linear-gradient(165.2deg, #E83025 10.45%, #FF7A00 78.4%)',
            name: 'burset 62'
        },
    ],
    curColor: 'New Era',
    iframeWidth: 1920,
    iframeHeight: 1010,
    iframeScale: 1,
    curThemeType: 'dark'
});

export class ColorProcess extends Component<ColorProcessProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private iframeBoxRef = createRef<ThemeFrame>();

    private cpBoxRef = createRef<HTMLElement>();

    private curColor: string = '';

    @bind
    handleColorClick(item: ColorItem) {
        this.set('curColor', item.name);
        this.setTheme();
    }

    @bind
    handleThemeTypeChange(themeType: string) {
        if(this.curColor !== themeType) {
            this.curColor = themeType;
            this.set('curThemeType', themeType);
            this.setTheme();
        }
    }

    setTheme() {
        const {curThemeType, curColor} = this.get();
        this.iframeBoxRef.value?.reRender({
            bgTheme: curThemeType,
            theme: curColor
        });
    }

    mounted() {
        const scale = this.cpBoxRef.value!.offsetWidth / this.get('iframeWidth');
        this.set('iframeScale', scale);
    }
}
