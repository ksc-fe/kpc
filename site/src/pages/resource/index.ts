import template from './index.vdt';
import Layout from '../layout';
import {Link} from '../../components/link';

export const getAxure = (): void => {
    Link.to('https://damife.ks3-cn-beijing.ksyuncs.com/kpc/KingDesign.rplib');
};

export const getSketch = (): void => {
    Link.to('https://damife.ks3-cn-beijing.ksyuncs.com/kpc/KingDesing-1.4.1.sketch');
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
