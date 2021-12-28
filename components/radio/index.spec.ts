import GroupDemo from '~/components/radio/demos/group';
import ValueDemo from '~/components/radio/demos/value';
import BasicDemo from '~/components/radio/demos/basic';
import {mount, unmount, dispatchEvent, wait} from 'test/utils';
import {Component} from 'intact';
import {Radio} from './';

describe('Radio', () => {
    afterEach(() => {unmount()});

    it('should get value correctly of group radios', async () => {
        const [instance, element] = mount(GroupDemo);

        const [first, second] = element.querySelectorAll<HTMLElement>('.k-radio');
        first.click();
        await wait();
        expect(instance.get('language')).be.eql('Javascript');
        second.click();
        await wait();
        expect(instance.get('language')).be.eql('C++');
        first.click();
        await wait();
        expect(instance.get('language')).be.eql('Javascript');
    });

    it('should get value correctly which set trueValue', async () => {
        const [instance, element] = mount(ValueDemo);

        const [first, second, third] = element.querySelectorAll<HTMLElement>('.k-radio');
        first.click();
        await wait();
        expect(instance.get('value1')).be.true;
        second.click();
        await wait();
        expect(instance.get('value2')).eql('checked');
        third.click();
        await wait();
        expect(instance.get('value3')).eql(instance.get('checkedValue'));
    });

    it('should check when press enter key for enabled radio', async () => {
        const [instance, element] = mount(BasicDemo);

        const [first, second] = element.querySelectorAll<HTMLElement>('.k-radio');
        dispatchEvent(first, 'keypress', {keyCode: 13});
        await wait();
        expect(first.className).include('k-checked');

        dispatchEvent(second, 'keypress', {keyCode: 13});
        await wait();
        expect(second.className).not.include('k-checked');
    });

    it('should only trigger change event once', async () => {
        const spy = sinon.spy();
        class Demo extends Component<{value: number}> {
            static template = `
                const {Radio} = this;
                <div>
                    <Radio v-for={[1, 2, 3]} 
                        trueValue={$value} 
                        name="name"
                        value={this.get('value')} 
                        ev-change={this.onChange}
                        disabled={$value === 3}
                    />
                </div>
            `;

            static defaults() {
                return {value: 1};
            }

            private Radio = Radio;

            onChange = (v: number) => {
                this.set('value', v); 
                spy(v);
            }
        } 

        const [instance, element] = mount(Demo);
        const [radio1, radio2, radio3] = element.querySelectorAll<HTMLElement>('.k-radio');
        radio2.click();
        await wait();
        expect(spy.callCount).to.eql(1);
        expect(spy.calledWith(2)).to.eql(true);

        radio2.click();
        await wait();
        expect(spy.callCount).to.eql(1);

        radio3.click();
        await wait();
        expect(spy.callCount).to.eql(1);
    });
});
