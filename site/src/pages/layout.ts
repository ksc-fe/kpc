import template from './layout.vdt';
import {Component} from 'intact';
import {setTheme} from 'kpc';

export interface LayoutProps {
    version: string
    themeColor: string
    colorList: string[]
    showThemeColor: boolean
    curLang: string
}

const colorList = [
    '#0191EA',
    '#FF7F22',
    '#2238FF'
];

export default class Layout<T extends LayoutProps = LayoutProps> extends Component<T> {
    static template = template;
    static defaults = (): Partial<LayoutProps> => ({
        version: 'v1.1.1',
        themeColor: colorList[0],
        colorList: colorList,
        showThemeColor: false,
        curLang: 'cn'
    });

    handleColorChange(color: string) {
        if(this.get('themeColor') !== color){
            this.set('themeColor', color);
            this.set('showThemeColor', false);
            setTheme({
                color: {primary: color}
            });
            this.forceUpdate();
        }        
    }

    showColorList() {
        this.set('showThemeColor', true);
    }

    setLang(langType: string) {
        this.set('curLang', langType);
    }
}
