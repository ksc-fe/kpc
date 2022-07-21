import template from './index.vdt';
import {Component} from 'intact';
import Chroma from 'chroma-js';
import {Message, Dialog} from 'kpc';

interface ColorProcessProps {
    inputColor: string,
    theme: string,
    colorType: string,
    pickerColor: string,
    contrastMenu: boolean,
    preColor: string,
    bacColor: string
}

export default class Index extends Component<ColorProcessProps> {
    static template = template;

    private color = ''
    
    static defaults = (): Partial<ColorProcessProps> => ({
        inputColor: '#0091EA',
        theme: 'light',
        colorType: 'HEX',
        pickerColor: '#0091EA',
        contrastMenu: false,
        preColor: '#fd0009',
        bacColor: '#d1d1d1'
    });

    _palette(color: string, level: number) {
        const [h, s, b] = Chroma(color).hsv();
        const deS = s < 0.1 ? 0 : (s - 0.1) / 4;
        const inS = (1 - s) / 4;
        const deB = (1 - b) / 4;
        const inB = b <= 0.4 ? 0 : (b - 0.4) / 4;

        if (level < 0 && level >= -4)
            return Chroma.hsv(h + level, s + level * deS, b - level * deB).hex();
        else if (level > 0 && level <= 4)
            return Chroma.hsv(h + level, s + level * inS, b - level * inB).hex();
        else
            return color;
    }
    _changeColor(e: InputEvent) {
        const target = e.target as HTMLInputElement;
        const value = target.value.trim();
        if (/#[0-9A-Fa-f]{6}/i.test(value)) {
            console.log(target.value)
            this.set('inputColor', target.value);
        } else {
            Message.error('请输入hex格式颜色值');
        }
    }
    _changeTheme(val: string) {
        this.set('theme', val);
    }
    _changeColorType(val: string) {
        this.set('colorType', val);
    }
    _changeContrastShow(val: boolean) {
        this.set('contrastMenu', val);
    }
    _switchColor() {
        let temp = this.get('preColor');
        this.set('preColor', this.get('bacColor'));
        this.set('bacColor', temp);

    }
}
