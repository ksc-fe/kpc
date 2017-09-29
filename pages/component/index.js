import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    get template() { return template; }

    _init() {

    }

    clickDisabled() {
        console.log('click disabled');
    }

    click() {
        console.log('click');
    }

    loading(name) {
        this.set(name, true);
        setTimeout(() => {
            this.set(name, false);
        }, 5000);
    }
}
