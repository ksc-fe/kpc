import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class Spin extends Intact {
    @Intact.template()
    static template = template;

    static blocks = ['canvas'];

    static propTypes = {
        size: ['large', 'default', 'small', 'mini'],
        center: Boolean,
        overlay: Boolean,
    };

    defaults() {
        return {
            size: 'default',
            center: false,
            overlay: false,
        };
    }
}

export {Spin};
