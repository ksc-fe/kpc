import template from './layout.vdt';
import {Component} from 'intact';
import {setTheme, bind, Dialog} from 'kpc';

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

let themeColor = colorList[0];

Dialog.setHooks({
    onStart(scrollBarWidth) {
        if (scrollBarWidth) {
            const header = document.querySelector<HTMLElement>('.k-layout-header');
            if (header) {
                header.style.paddingRight = `${scrollBarWidth}px`;
            }
        } 
    },
    onEnd() {
        const header = document.querySelector<HTMLElement>('.k-layout-header');
        if (header) {
            header.style.paddingRight = '0';
        }
    }
});

export default class Layout<T extends LayoutProps = LayoutProps> extends Component<T> {
    static template = template;
    
    static defaults = (): Partial<LayoutProps> => ({
        version: 'v1.1.1',
        themeColor: themeColor,
        colorList: colorList,
        showThemeColor: false,
        curLang: 'cn',
    });

    handleColorChange(color: string) {
        if(this.get('themeColor') !== color){
            this.set('themeColor', color);
            themeColor = color;
            this.set('showThemeColor', false);
            setTheme({
                color: {primary: color}
            });
            this.forceUpdate();
        }        
    }

    @bind
    showColorList() {
        this.set('showThemeColor', true);
    }
    
    @bind
    hideColorList() {
        this.set('showThemeColor', false);
    }

    setLang(langType: string) {
        this.set('curLang', langType);
    }
}
