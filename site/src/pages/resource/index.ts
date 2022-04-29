import template from './index.vdt';
import Layout from '../layout';
import {Link} from '../../components/link';

export const getAxure = (): void => {
    location.href = 'https://damife.ks3-cn-beijing.ksyuncs.com/kpc/KingDesign-Axure.zip';
};

export const getSketch = (): void => {
    location.href = 'https://damife.ks3-cn-beijing.ksyuncs.com/kpc/KingDesign-Sketch.zip';
};

export const getFigma = (): void => {
    window.open('https://www.figma.com/file/Uo5AKEmBXT4HOD41CDWliK/King-Design-V1.0.0?node-id=0%3A1');
};

export const getWeights = (): void => {
    location.href = 'https://damife.ks3-cn-beijing.ksyuncs.com/kpc/度量工具.xlsx';
}

export default class Index extends Layout {
    static template = template;

    static defaults() {
        return {
            ...Layout.defaults(),
        }
    }

    goDoc(link: string) {
        Link.to(link);
    }
};
