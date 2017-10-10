import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    get template() { return template; }

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
        setTimeout(() => {
            this.set(name, false);
        }, 5000);
    }
}

if (module.hot) {
    module.hot.accept();
    // module.hot.data.Page = module.exports;
    // console.log(module.hot.data.Page);
    // module.hot.dispose((data) => {
        // data.Page = module.exports.default;
        // console.log('==============', data.Page)
    // })
}
