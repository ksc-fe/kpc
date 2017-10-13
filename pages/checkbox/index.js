import template from './index.vdt';

export default class extends Intact {
    get template() { return template; }

    defaults() {
        return {
            languages: []
        }
    }
}

if (module.hot) {
    module.hot.accept();
}
