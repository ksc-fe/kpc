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
    window.open('https://www.figma.com/design/btu7XtMqeIhsZ4unwpPYzv/KingDesign-%E5%86%85%E9%83%A8%E7%BB%84%E4%BB%B6%E5%BA%932025?node-id=0-1&t=RoveOf4SZwKAZcT5-1');
};

export const getDesign = (): void => {
    window.open('https://js.design/resourceDetails?id=62c6c0834835c771da15dfe0&source=ksd&plan=web');
};

export const getWeights = (): void => {
    location.href = 'https://damife.ks3-cn-beijing.ksyuncs.com/kpc/度量工具.xlsx';
};

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
