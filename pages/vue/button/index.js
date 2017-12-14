import Page from './index.vue';
import Vue from 'vue';

export default class extends Intact {
    get template() { return '<div></div>'; }

    _mount() {
        new Vue({
            el: this.element,
            template: '<Page />',
            components: {Page}
        });
    }
}

if (module.hot) {
    module.hot.accept();
}
