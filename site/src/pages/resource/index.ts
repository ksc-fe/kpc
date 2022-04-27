import template from './index.vdt';
import Layout from '../layout';
import {Link} from '../../components/link';

export const getAxure = (): void => {
    Link.to('https://damife.ks3-cn-beijing.ksyuncs.com/kpc/KingDesign.rplib');
};

export const getSketch = (): void => {
    Link.to('https://damife.ks3-cn-beijing.ksyuncs.com/kpc/KingDesing-1.4.1.sketch');
};

export const getFigma = (): void => {
    Link.to('https://www.figma.com/file/Uo5AKEmBXT4HOD41CDWliK/King-Design-V1.0.0?node-id=0%3A1');
};

export const getWeights = (): void => {
    Link.to('https://damife.ks3-cn-beijing.ksyuncs.com/kpc/度量工具.xlsx');
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
