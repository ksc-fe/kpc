import Dialog from 'kpc/components/dialog';
import template from './dialog.vdt';

export default class extends Dialog {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            ...super.defaults(),
            title: 'Async Open Dialog'
        };
    }

    _init() {
        // call super method firstly
        super._init();

        // return a promise
        return new Promise((resolve, reject) => {
            // mock api
            setTimeout(() => {
                resolve({name: 'KPC'});
            }, 2000);
        }).then(data => {
            this.set('name', data.name);
        });
    }
}