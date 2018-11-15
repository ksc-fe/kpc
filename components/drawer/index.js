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
        closeabled: Boolean
    }
        
    defaults() {
        return {
            ...super.defaults(),
            _appear: false,
            placement: 'right',
            overlay: true,
            closeabled: true
        }
    }

    _init() {
        this.on('$changed:value', (c, isShow) => {
            if (isShow) {
                this.trigger('open');
                this._addDocumentEvents();
                this._center();
            } else {
                this.trigger('close');
            }
        });
    }

    _addDocumentEvents() {
        if(!this.get('closeabled')) return;
        // const parent = findParentComponent(Drawer, this, true);
        // if(!parent) {
            this.timer = setTimeout(() => {
                document.addEventListener('click', this._onDocumentClick);
            }, 0)
        // }
    }

    _onDocumentClick(e) {
        const target = e.target;
        const drawer = this.dialog;
        if(drawer === target || drawer.contains(target)) return;
        this.close();
    }
    
    _removeDocumentEvents() {
        // const parent = findParentComponent(Drawer, this, true);
        // if(!parent)  {
            document.removeEventListener('click', this._onDocumentClick);
        // }
    }

    _center() {}

    _dragStart(e) {}
   
    close() {
        super.close();
        this._removeDocumentEvents();
    }

    _destroy() {
        super._destroy();
        clearTimeout(this.timer)
        this._removeDocumentEvents();
    }

}

export {Drawer};
