import {render, mount, testDemos, unmount, wait} from './utils';
import Vue from 'vue';

const req = require.context('~/components/', true, /^((?!affix).)*\/demos\/.*index\.js$/);
const vueReq = require.context('~/components/', true, /^((?!affix).)*\/demos\/.*index\.vue$/);

describe('Demos', () => {
    let demo;

    afterEach(() => {
        unmount(demo);
    });

    describe('Intact', () => {
        testDemos(req, async (Demo) => {
            demo = mount(Demo);
            await wait(0);
            // force relayout
            document.body.offsetWidth;
            expect(demo.element.outerHTML).to.matchSnapshot();
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

        testDemos(vueReq, async (Demo) => {
            demo = mount(wrap(Demo));
            await wait(0);
            document.body.offsetWidth;
            expect(demo.element.outerHTML).to.matchSnapshot();
        });
    });
});

