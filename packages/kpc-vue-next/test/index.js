import {createApp} from 'vue';
// import {Button} from '../components/button';
import Button from '~/components/button/demos/basic/index.vue';
import {render, mount, testDemos, unmount, wait, nextFrame} from '../../../test/utils';
import Intact from 'intact';

const req = require.context('~/components/', true, /^((?!(affix|code)).)*\/demos\/.*index\.vue$/);

describe('Unit test for kpc-vue-next', () => {
    let demo;

    // afterEach(() => unmount(demo));

    testDemos(req, async Demo => {
        demo = mount((container) => {
            return createApp({
                template: '<Demo />',
                components: {Demo}
            }).mount(container);
        });
    });

    // it('test', () => {
        // const container = document.createElement('div');
        // document.body.appendChild(container);
        // createApp({
            // template: '<Button>test</Button>',
            // components: {
                // Button
            // }
        // }).mount(container);
    // });
});
