import Page from './index.vue';
import Vue from 'vue';
import 'pages/form/index.styl';

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
