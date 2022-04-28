import template from './index.vdt';
import Layout from '../layout';
import {Link} from '../../components/link';

export default class Index extends Layout {
    static template = template;

    static defaults() {
        return {
            ...Layout.defaults(),

            curImgList: [],

            showImgBox: false
        }
    }

    handleImgClick(info: any) {
        this.set('curImgList', info.templateList);
        this.set<boolean>('showImgBox', true);
    }

    handleBoxClose() {
        this.set<boolean>('showImgBox', false);
    }

    downloadSketch(info: any) {
        location.href = `https://damife.ks3-cn-beijing.ksyuncs.com/kpc/${info.downloadFileName}`;
    }
}
