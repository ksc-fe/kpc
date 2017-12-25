import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    get template() { return template; }

    defaults() {
        return {
            city: 'beijing'
        };
    }

    _init() {
        console.log('aaaabb')
    }

    clickDisabled() {
        console.log('click disabled');
    }

    click() {
        console.log('click3');
    }

    loading(name) {
        this.set(name, true);
        // setTimeout(() => {
            // this.set(name, false);
        // }, 5000);
    }
}
