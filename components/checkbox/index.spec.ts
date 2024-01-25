import {findDomFromVNode, Component} from 'intact';
import GroupDemo from '~/components/checkbox/demos/group';
import ValueDemo from '~/components/checkbox/demos/value';
import BasicDemo from '~/components/checkbox/demos/basic';
import {mount, unmount, dispatchEvent, getElement, wait} from '../../test/utils';
import {Checkbox} from './';
import {bind} from '../utils';

describe('Checkbox', () => {
    afterEach(() => unmount());

    it('should get value correctly of group checkboxes', async () => {
        const [instance, element] = mount(GroupDemo);

        const [first, second] = Array.from<HTMLElement>(element.querySelectorAll('.k-checkbox'));
        first.click();
        await wait();
        expect(instance.get('languages')).be.eql(['Javascript']);
        second.click();
        await wait();
        expect(instance.get('languages')).be.eql(['Javascript', 'C++']);
        first.click();
        await wait();
        expect(instance.get('languages')).be.eql(['C++']);
    });

    it('should get value correctly of checkbox which set trueValue and falseValue', async () => {
        const [instance, element] = mount(ValueDemo);

        const [first, second, third] = Array.from<HTMLElement>(element.querySelectorAll('.k-checkbox'));

        first.click();
        await wait();
        expect(instance.get('value1')).be.true;
        first.click();
        await wait();
        expect(instance.get('value1')).be.false;

        second.click();
        await wait();
        expect(instance.get('value2')).be.eql('checked');
        second.click();
        await wait();
        expect(instance.get('value2')).be.false;

        third.click();
        await wait();
        expect(instance.get('value3')).be.eql(instance.get('checkedValue'));
        third.click();
        await wait();
        expect(instance.get('value3')).be.eql(0);
    });

    it('should check when press enter key for enabled checkbox', async () => {
        const [instance, element] = mount(BasicDemo);

        const [first, second] = Array.from<HTMLElement>(element.querySelectorAll('.k-checkbox'));
        dispatchEvent(first, 'keypress', {keyCode: 13});
        await wait();
        expect(first.className).include('k-checked');

        dispatchEvent(second, 'keypress', {keyCode: 13});
        await wait();
        expect(second.className).not.include('k-checked');
    });

    it('should only trigger change event once', async () => {
        const spy = sinon.spy();
        class Demo extends Component<{value: number[]}> {
            static template = `
                const {Checkbox} = this;
                <div>
                    <Checkbox v-for={[1, 2, 3]} 
                        trueValue={$value} 
                        name="name"
                        value={this.get('value')} 
                        ev-change={this.onChange}
                        disabled={$value === 3}
                    />
                </div>
            `;

            static defaults = () => ({
                value: [1]
            });

            private Checkbox = Checkbox;

            @bind
            onChange(v: number[]) {
                this.set('value', v); 
                spy(v);
            }
        } 

        const [instance, element] = mount(Demo);
        const [checkbox1, checkbox2, checkbox3] = Array.from(element.querySelectorAll<HTMLElement>('.k-checkbox'));
        checkbox2.click();
        await wait();
        expect(spy.callCount).to.eql(1);
        expect(spy.calledWith([1, 2])).to.eql(true);

        checkbox1.click();
        await wait();
        expect(spy.callCount).to.eql(2);
        expect(spy.calledWith([2])).to.eql(true);

        checkbox3.click();
        await wait();
        expect(spy.callCount).to.eql(2);
    });
});
