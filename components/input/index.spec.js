import BasicDemo from '~/components/input/demos/basic';
import {mount, unmount, dispatchEvent} from 'test/utils';

describe('Input', () => {
    let instance;

    afterEach(() => {
        unmount(instance);
    });

    it('basic test', () => {
        instance = mount(BasicDemo); 

        const input = instance.element.querySelector('input');
        instance.refs.__test.focus();
        input.value = 'test';
        dispatchEvent(input, 'input');
        expect(instance.get('value')).eql('test');

        instance.refs.__test.select();
    });
});
