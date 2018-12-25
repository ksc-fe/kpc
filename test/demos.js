import {render, mount, testDemos} from './utils';
import Vue from 'vue';

const req = require.context('~/components/', true, /demos\/.*index\.js$/);
const vueReq = require.context('~/components/', true, /demos\/.*index\.vue$/);

describe('Demos', () => {
    describe('Intact', () => {
        let demo;

        afterEach(() => {
            demo.destroy();
            document.body.removeChild(demo.element);
        });

        testDemos(req, (Demo) => {
            demo = mount(Demo);
            expect(demo.element.outerHTML).to.matchSnapshot();
        });
    });

    describe('Vue', () => {
        let demo;

        function wrap(Demo) {
            return class extends Intact {
                @Intact.template()
                static template = '<div><div class="vue"></div></div>';

                _mount() {
                    this.vue = new Vue({
                        el: this.element.querySelector('.vue'),
                        template: '<Demo />',
                        components: {Demo}
                    });
                }

                _destroy() {
                    this.vue.$destroy();
                }
            }
        }

        testDemos(vueReq, (Demo) => {
            demo = mount(wrap(Demo));
        });
    });
});

