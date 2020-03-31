import {render, mount, testDemos, unmount, wait, nextFrame} from './utils';
import Vue from 'vue';
import Intact from 'intact';

const req = require.context('~/components/', true, /^((?!(affix)).)*\/demos\/.*index\.js$/);
const vueReq = require.context('~/components/', true, /^((?!(affix)).)*\/demos\/.*index\.vue$/);

describe('Demos', () => {
    let demo;

    afterEach(() => {
        unmount(demo);
    });

    describe('Intact', () => {
        testDemos(req, async (Demo) => {
            demo = mount(Demo);
            await nextFrame();
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
            await nextFrame();
            expect(demo.element.outerHTML).to.matchSnapshot();
        });
    });
});

