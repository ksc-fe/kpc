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
        overlay: Boolean,
        closable: Boolean
    }
        
    defaults() {
        return {
            ...super.defaults(),
            placement: 'right',
            overlay: true,
            closable: true
        }
    }

    _onOpen() {
        super._onOpen();
        this._addDocumentEvents();
    }

    _onClose() {
        super._onClose();
        clearTimeout(this.timer);
        this._removeDocumentEvents();
    }

    _addDocumentEvents() {
        if(!this.get('closable')) return;
        // in vue the click event of trigger element
        // will propagate to document immediately
        // and this will lead close the layer
        this.timer = setTimeout(() => {
            document.addEventListener('click', this._onDocumentClick, true);
        });
    }

    _onDocumentClick(e) {
        const target = e.target;
        const drawer = this.dialog;
        if(drawer === target || drawer.contains(target)) return;
        this.close();
    }
    
    _removeDocumentEvents() {
        document.removeEventListener('click', this._onDocumentClick, true);
    }

    _center() {}

    _dragStart(e) {}
}

export {Drawer};
