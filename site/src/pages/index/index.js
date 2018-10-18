import Intact from 'intact';
import template from './index.vdt';
import Layout from '../layout';
import './index.styl';

export default class extends Layout {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            current: 'one'
        }
    }

    _mount() {
        const self = this;
        window.onmousewheel = function (e) {
            let data = e.wheelDelta || 0;
            if (data > 0) {
                self.set('current', 'one');
            } else if (data < 0) {
                self.set('current', 'two');
            }
            // debugger
        }
    }

    _destroy() {
        window.onmousewheel = null;
    }
}
