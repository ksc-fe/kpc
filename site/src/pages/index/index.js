import Intact from 'intact';
import template from './index.vdt';
import Layout from '../layout';
import './index.styl';

export default class extends Layout {
    @Intact.template()
    static template = template;

    _mount() {
        window.onmousewheel = function (e) {
            var a = e;
            // debugger
        }
    }
}
