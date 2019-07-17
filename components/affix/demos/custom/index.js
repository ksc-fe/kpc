export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class extends Intact {
    @Intact.template()
    static template = template;

    _shouldFix() {
        // when scroll top greater than or equal to 100
        // fix it at 150px from top
        return window.pageYOffset >= 100;
    }

    _exclude() {
        // when this demo is not in the viewport
        // don't fix it
        const {top} = this.refs.node.getBoundingClientRect();
        const viewport = document.documentElement.clientHeight;

        return top > viewport; 
    }
}