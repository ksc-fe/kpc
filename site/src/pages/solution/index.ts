import template from './index.vdt';
import Layout from '../layout';

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
}
