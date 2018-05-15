import BasicDemo from '~/components/input/demos/basic';
import {mount, dispatchEvent} from 'test/utils';

describe('Input', () => {
    let instance;

    afterEach(() => {
        instance.destroy();
        document.body.removeChild(instance.element);
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
