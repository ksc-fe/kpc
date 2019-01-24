import {render, mount, testDemos, unmount} from './utils';
import Vue from 'vue';

const req = require.context('~/components/', true, /demos\/.*index\.js$/);
const vueReq = require.context('~/components/', true, /demos\/.*index\.vue$/);

describe('Demos', () => {
    let demo;

    afterEach(() => {
        unmount(demo);
    });

    describe('Intact', () => {
        testDemos(req, (Demo, done) => {
            demo = mount(Demo);
            setTimeout(() => {
                expect(demo.element.outerHTML).to.matchSnapshot();

                done();
            });
        });
    });

    describe('Vue', () => {
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

        testDemos(vueReq, (Demo, done) => {
            demo = mount(wrap(Demo));
            setTimeout(() => {
                expect(demo.element.outerHTML).to.matchSnapshot();

                done();
            });
        });
    });
});

