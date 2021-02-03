import {createApp, render} from 'vue';
import Button from '~/components/button/demos/basic/index.vue';
import {mount, testDemos, unmount, wait, nextFrame, renderVue, unmountVue} from '@/test/utils';
import Intact from 'intact';
import {matchSnapshot} from 'chai-karma-snapshot';
import mx from '../components/diagram/mxgraph/mx';
import Kpc from '../index';

chai.use(matchSnapshot);
mx.mxClient.IS_POINTER = false;

const req = require.context('~/components/', true, /^((?!(affix|code)).)*\/demos\/.*next\.vue$/);

// spec file
const specContext = require.context('../../../components/', true, /index\.vue-next\.spec\.js/);
specContext.keys().forEach(specContext);

describe('Unit test for kpc-vue-next', () => {
    it('use kpc', async () => {
        const vm = renderVue({
            template: '<k-button @click="show">test</k-button>',
            methods: {
                show() {
                    this.$message.success('Hello!');
                }
            }
        }, app => {
            app.use(Kpc);
        });

        await wait(0);
        vm.$el.click();
        expect(document.querySelector('.k-message').textContent).to.eql('Hello!');
        unmountVue(vm);
    });

    describe('Demos', () => {
        let container;

        afterEach(() => {
            render(null, container);
            document.body.removeChild(container);
        });

        testDemos(req, async Demo => {
            mount((_container) => {
                container = _container;
                return createApp({
                    template: '<Demo />',
                    components: {Demo}
                }).mount(_container);
            });
            await wait();
            expect(container.innerHTML).to.matchSnapshot();
        });
    });
});
