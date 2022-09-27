import template from './index.vdt';
import Layout from '../layout';

export default class Index extends Layout {
    static template = template;

    static defaults = () => {
        return {
            ...Layout.defaults()
        }
    };

    handleDownLoad() {
        location.href = 'https://damife.ks3-cn-beijing.ksyuncs.com/kpc/Kingsoft_Cloud_Font.ttf';
    }
}
