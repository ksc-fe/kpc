import {render, mount} from './utils';
import Vue from 'vue';

const req = require.context('~/components/', true, /demos\/.*index\.js$/);
const vueReq = require.context('~/components/', true, /demos\/.*index\.vue$/);

describe('Demos', () => {
    describe('Intact', () => {
        let demo;

        afterEach(() => {
            demo.destroy();
        });

        req.keys().forEach(item => {
            const paths = item.split('/');
            const name = paths[1];
            const type = paths[3];
            const Demo = req(item).default;

            it(`${name[0].toUpperCase()}${name.substring(1)} ${type}`, () => {
                demo = render(Demo);
                expect(demo.element.outerHTML).to.matchSnapshot();
            });
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
        vueReq.keys().forEach(item => {
            const paths = item.split('/');
            const name = paths[1];
            const type = paths[3];
            const Demo = vueReq(item).default;


            it(`${name[0].toUpperCase()}${name.substring(1)} ${type}`, () => {
                demo = mount(wrap(Demo));
                console.log(demo.element.innerHTML);
                // expect(demo.element.outerHTML).to.matchSnapshot();
            });
        });
    });
});

