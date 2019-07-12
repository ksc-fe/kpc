import Intact from 'intact';
import template from './index.vdt';
import Dialog from '../dialog';
import { findParentComponent } from '../utils';
import './index.styl';


export default class Drawer extends Dialog {
    @Intact.template()
    static template = template;

    static propTypes = {
        ...Dialog.propTypes,
        placement: String,
    }
        
    defaults() {
        return {
            ...super.defaults(),
            placement: 'right',
        }
    }

    _center() {}

    _dragStart(e) {}
}

export {Drawer};
