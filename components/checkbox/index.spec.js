import GroupDemo from '~/components/checkbox/demos/group';
import ValueDemo from '~/components/checkbox/demos/value';
import BasicDemo from '~/components/checkbox/demos/basic';
import {mount, unmount, dispatchEvent, getElement} from 'test/utils';
import Checkbox from 'kpc/components/checkbox';
import Intact from 'intact';

describe('Checkbox', () => {
    let instance;

    afterEach(() => {
        unmount(instance);
    });

    it('should get value correctly of group checkboxes', () => {
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

    it('should check when press enter key for enabled checkbox', () => {
        instance = mount(BasicDemo);

        const [first, second] = instance.element.querySelectorAll('.k-checkbox');
        dispatchEvent(first, 'keypress', {keyCode: 13});
        expect(first.className).include('k-checked');

        dispatchEvent(second, 'keypress', {keyCode: 13});
        expect(second.className).not.include('k-checked');
    });

    it('should only trigger change event once', () => {
        const spy = sinon.spy();
        class Demo extends Intact {
            @Intact.template()
            static template = `
                <div>
                    <Checkbox v-for={{ [1, 2, 3] }} 
                        trueValue={{ value }} 
                        name="name"
                        value={{ self.get('value') }} 
                        ev-change={{ self.onChange }}
                        disabled={{ value === 3 }}
                    />
                </div>
            `;

            defaults() {
                this.Checkbox = Checkbox;
                return {value: [1]};
            }

            onChange(v) {
                this.set('value', v); 
                spy(v);
            }
        } 

        instance = mount(Demo);
        const [checkbox1, checkbox2, checkbox3] = instance.element.querySelectorAll('.k-checkbox');
        checkbox2.click();
        expect(spy.callCount).to.eql(1);
        expect(spy.calledWith([1, 2])).to.eql(true);

        checkbox1.click();
        expect(spy.callCount).to.eql(2);
        expect(spy.calledWith([2])).to.eql(true);

        checkbox3.click();
        expect(spy.callCount).to.eql(2);
    });

});
