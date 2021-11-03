import {findDomFromVNode, Component} from 'intact';
import GroupDemo from '~/components/checkbox/demos/group';
import ValueDemo from '~/components/checkbox/demos/value';
import BasicDemo from '~/components/checkbox/demos/basic';
import {mount, unmount, dispatchEvent, getElement} from 'test/utils';
import {Checkbox} from 'kpc/components/checkbox';
// import Intact from 'intact';
import {bind} from 'kpc/components/utils';

describe('Checkbox', () => {
    afterEach((done) => {
        unmount();
        setTimeout(done, 500);
    });

    it('should get value correctly of group checkboxes', () => {
        const [instance, element] = mount(GroupDemo);

        const [first, second] = Array.from<HTMLElement>(element.querySelectorAll('.k-checkbox'));
        // dispatchEvent(first, 'click');
        first.click();
        expect(instance.get('languages')).be.eql(['Javascript']);
        second.click();
        expect(instance.get('languages')).be.eql(['Javascript', 'C++']);
        first.click();
        expect(instance.get('languages')).be.eql(['C++']);
    });

    it('should get value correctly of checkbox which set trueValue and falseValue', () => {
        const [instance, element] = mount(ValueDemo);

        const [first, second, third] = Array.from<HTMLElement>(element.querySelectorAll('.k-checkbox'));

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
        const [instance, element] = mount(BasicDemo);

        const [first, second] = Array.from<HTMLElement>(element.querySelectorAll('.k-checkbox'));
        dispatchEvent(first, 'keypress', {keyCode: 13});
        expect(first.className).include('k-checked');

        dispatchEvent(second, 'keypress', {keyCode: 13});
        expect(second.className).not.include('k-checked');
    });

    //TODO: modify
    it('should only trigger change event once', () => {
        const spy = sinon.spy();
        class Demo extends Component<{value: number[]}> {
            static template = `
                <div>
                    <Checkbox v-for={{ [1, 2, 3] }} 
                        trueValue={{ $value }} 
                        name="name"
                        value={{ self.get('value') }} 
                        ev-change={{ self.onChange }}
                        disabled={{ $value === 3 }}
                    />
                </div>
            `;

            static defaults = () => ({
                value: [1]
            });

            private Checkbox: any;

            init() {
                this.Checkbox = Checkbox;
            }
            // defaults() {
            //     this.Checkbox = Checkbox;
            //     return {value: [1]};
            // }

            @bind
            onChange(v: number[]) {
                this.set('value', v); 
                spy(v);
            }
        } 

        const [instance, element] = mount(Demo);
        const [checkbox1, checkbox2, checkbox3] = Array.from(element.querySelectorAll('.k-checkbox'));
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
