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
        const hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?aa5d6c6aa599cec1ea7a22bb84ec1010";
        const s = document.getElementsByTagName("script")[0]; 
        s.parentNode!.insertBefore(hm, s);
    }
}
