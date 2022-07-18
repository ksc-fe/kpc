import template from './index.vdt';
import {Component} from 'intact';
import Chroma from 'chroma-js';

interface ColorProcessProps {
    
}

export default class Index extends Component<ColorProcessProps> {
    static template = template;
    
    static defaults = (): Partial<ColorProcessProps> => ({});

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

}
