import GroupDemo from '~/components/radio/demos/group';
import ValueDemo from '~/components/radio/demos/value';
import BasicDemo from '~/components/radio/demos/basic';
import {mount, unmount, dispatchEvent} from 'test/utils';
import Intact from 'intact';
import Radio from 'kpc/components/radio';

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

    it('should only trigger change event once', () => {
        const spy = sinon.spy();
        class Demo extends Intact {
            @Intact.template()
            static template = `
                <div>
                    <Radio v-for={{ [1, 2, 3] }} 
                        trueValue={{ value }} 
                        name="name"
                        value={{ self.get('value') }} 
                        ev-change={{ self.onChange }}
                        disabled={{ value === 3 }}
                    />
                </div>
            `;

            defaults() {
                this.Radio = Radio;
                return {value: 1};
            }

            onChange(v) {
                this.set('value', v); 
                spy(v);
            }
        } 

        instance = mount(Demo);
        const [radio1, radio2, radio3] = instance.element.querySelectorAll('.k-radio');
        radio2.click();
        expect(spy.callCount).to.eql(1);
        expect(spy.calledWith(2)).to.eql(true);

        radio2.click();
        expect(spy.callCount).to.eql(1);

        radio3.click();
        expect(spy.callCount).to.eql(1);
    });
});
