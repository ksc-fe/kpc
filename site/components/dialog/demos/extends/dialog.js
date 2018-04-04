import Dialog from 'kpc/components/dialog';
import template from './dialog.vdt';

export default class extends Dialog {
    @Intact.template()
    static template = template;

    defaults() {
        return {...super.defaults(), title: 'Extends Dialog'};
    }

    ok() {
        this.showLoading();
        setTimeout(() => {
            this.close();
            this.trigger("ok", 'test');
        }, 2000);
    }
}