import GroupDemo from '~/components/radio/demos/group';
import ValueDemo from '~/components/radio/demos/value';
import BasicDemo from '~/components/radio/demos/basic';
import {mount, unmount, dispatchEvent} from 'test/utils';

describe('Radio', () => {
    let instance;

    afterEach(() => {
        unmount(instance);
    });

    it('should get value correctly of group radios', () => {
        instance = mount(GroupDemo);

        const [first, second] = instance.element.querySelectorAll('.k-radio');
        first.click();
        expect(instance.get('language')).be.eql('Javascript');
        second.click();
        expect(instance.get('language')).be.eql('C++');
        first.click();
        expect(instance.get('language')).be.eql('Javascript');
    });

    it('should get value correctly which set trueValue', () => {
        instance = mount(ValueDemo);

        const [first, second, third] = instance.element.querySelectorAll('.k-radio');
        first.click();
        expect(instance.get('value1')).be.true;
        second.click();
        expect(instance.get('value2')).eql('checked');
        third.click();
        expect(instance.get('value3')).eql(instance.get('checkedValue'));
    });

    it('should check when press enter key for enabled radio', () => {
        instance = mount(BasicDemo);

        const [first, second] = instance.element.querySelectorAll('.k-radio');
        dispatchEvent(first, 'keypress', {keyCode: 13});
        expect(first.className).include('k-checked');

        dispatchEvent(second, 'keypress', {keyCode: 13});
        expect(second.className).not.include('k-checked');
    });
});
