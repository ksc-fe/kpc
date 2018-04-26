import Vue from 'vue';

global.Vue = Vue;

export default function(Page) {
    return class extends Intact {
        get template() { return '<div><div class="vue"></div></div>'; }

        _mount() {
            this.vue = new Vue({
                el: this.element.querySelector('.vue'),
                template: '<Page ref="page" />',
                components: { Page }
            });
        }

        _destroy() {
            this.vue.$destroy();
        }
    }
}
