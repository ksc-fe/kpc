import BasicDemo from '~/components/treeSelect/demos/basic';
import {mount, unmount, dispatchEvent, wait} from 'test/utils';

describe('TreeSelect', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('should select value correctly', () => {
        instance = mount(BasicDemo);

        const trigger = instance.element.querySelector('.k-wrapper');
        trigger.click();
    });
});
