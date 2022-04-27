import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import {setTheme} from 'kpc';

type BgThemeType = 'light' | 'dark';
export type BgThemeValue = {
    bgColor: string
    cardBgColor: string
    menuColor: string
    cardTextColor: string
}
interface BgTheme {
    dark: BgThemeValue
    light: BgThemeValue
}

type ThemeType = 'New Era' | 'Ocean' | 'Techno' | 'burset 62';
export type ThemeValue = {
    mainColor: string
    textColor: string
    collectionsColor: string
    opacity: number
}
interface Theme {
    [index: string]: ThemeValue
}

interface ColorProcessProps {
    asideWidth: number
    headerHeight: number
    bgTheme: BgTheme
    curBgTheme: BgThemeType
    theme: Theme
    curTheme: ThemeType
}

const typeDefs: Required<TypeDefs<ColorProcessProps>> = {
    asideWidth: Number,  
    headerHeight: Number,
    bgTheme: Object,
    curBgTheme: String,
    theme: Object,
    curTheme: String
};

const defaults = (): Partial<ColorProcessProps> => ({
    asideWidth: 350,
    headerHeight: 100,
    bgTheme: {
        dark: {
            bgColor: '#000000',
            cardBgColor: '#3D3D3D',
            menuColor: '#202020',
            cardTextColor: '#ffffff'
        },
        light: {
            bgColor: '#E9E9E9',
            cardBgColor: '#FFFFFF',
            menuColor: '#FFFFFF',
            cardTextColor: '#000000'
        }
    },
    curBgTheme: 'dark',

    theme: {
        'New Era': {
            mainColor: '#6E64E0',
            textColor: '#ffffff',
            collectionsColor: '#ffffff',
            opacity: 0.7
        },
        'Ocean': {
            mainColor: '#258AE8',
            textColor: '#ffffff',
            collectionsColor: '#ffffff',
            opacity: 0.7
        },
        'Techno': {
            mainColor: '#25E8D0',
            textColor: '#000000',
            collectionsColor: '#000000',
            opacity: 0.5
        },
        'burset 62': {
            mainColor: 'linear-gradient(165.2deg, #E83025 10.45%, #FF7A00 78.4%)',
            textColor: '#ffffff',
            collectionsColor: '#000000',
            opacity: 0.7
        }
    },
    curTheme: 'New Era'
});

export default class extends Component<ColorProcessProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    init() {
        (window as any).setValue = (target?: {bgTheme: BgThemeType, theme: ThemeType}) => {
            if(target) {
                this.set('curBgTheme', target.bgTheme);
                this.setColor(target.theme);
            }
        }
    }

    getDefaultProps() {
        const curTheme = this.get('theme')[this.get('curTheme')];
        const curBgTheme = this.get('bgTheme')[this.get('curBgTheme')];

        return {
            menu: {
                bgColor: curBgTheme.menuColor,
                fontSize: '32px',
                item: {
                    height: '69px',
                    hoverColor: curTheme.textColor,
                    activeBgColor: curTheme.mainColor
                }
            },
            layout: {
                bgColor: curTheme.mainColor
            },
            card: {
                padding: 0,
                bgColor: curBgTheme.cardBgColor
            }
        };
    }

    setThemeViaProps() {
        // set style via props
        this.setValue(this.getDefaultProps());
    }

    setColor(themeName: string) {
        this.set('curTheme', <ThemeType>themeName);
        this.setThemeViaProps();
    }

    setValue(theme?: any) {
        setTheme(theme);
        this.forceUpdate();
    }

    mounted() {
        this.setColor(this.get('curTheme'));
    }
}
