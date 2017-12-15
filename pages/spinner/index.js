import template from './index.vdt';

export default class extends Intact {
    get template() { return template; }
    defaults() {
        return {
            rangeValue: 8
        }
    }
}

if (module.hot) {
    module.hot.accept();
}
