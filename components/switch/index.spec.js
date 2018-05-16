import BasicDemo from '~/components/switch/demos/basic';
import {mount, unmount, dispatchEvent} from 'test/utils';

describe('Switch', () => {
    let instance;

    afterEach(() => {
        // unmount(instance);
    });

    it('basic test', () => {
        instance = mount(BasicDemo);


    });
});
