import GroupDemo from '~/components/checkbox/demos/group';
import ValueDemo from '~/components/checkbox/demos/value';
import {mount, dispatchEvent, getElement} from 'test/utils';

describe('Checkbox', () => {
    let instance;

    afterEach(() => {
        instance.destroy();
        document.body.removeChild(instance.element);
    });

    it('should get value correctly of checkbox group', () => {
        instance = mount(GroupDemo);

        const [first, second] = instance.element.querySelectorAll('.k-checkbox');
        // dispatchEvent(first, 'click');
        first.click();
        expect(instance.get('languages')).be.eql(['Javascript']);
        second.click();
        expect(instance.get('languages')).be.eql(['Javascript', 'C++']);
        first.click();
        expect(instance.get('languages')).be.eql(['C++']);
    });

    it('should get value correctly of checkbox which set trueValue and falseValue', () => {
        instance = mount(ValueDemo);

        const [first, second, third] = instance.element.querySelectorAll('.k-checkbox');

        first.click();
        expect(instance.get('value1')).be.true;
        first.click();
        expect(instance.get('value1')).be.false;

        second.click();
        expect(instance.get('value2')).be.eql('checked');
        second.click();
        expect(instance.get('value2')).be.false;

        third.click();
        expect(instance.get('value3')).be.eql(0);
        third.click();
        expect(instance.get('value3')).be.eql(instance.get('uncheckedValue'));
    });
});
