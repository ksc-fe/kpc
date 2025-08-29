import StepDemo from '~/components/spinner/demos/step';
import PrecisionDemo from '~/components/spinner/demos/precision';
import {mount, unmount, dispatchEvent, wait, fakeError} from '../../test/utils';
import {Spinner} from '../spinner';
import {Component} from 'intact';
import FormatterDemo from '~/components/spinner/demos/formatter';
import ForceStepDemo from '~/components/spinner/demos/forceStep';
import DynamicStepDemo from '~/components/spinner/demos/dynamicStep';

describe('Spinner', () => {
    afterEach(() => unmount());

    it('step/max/min test', async () => {
        const [instance, element] = mount(StepDemo);

        const [prev, next] = element.querySelectorAll<HTMLElement>('.k-btn');
        const input = element.querySelector('.k-input-inner') as HTMLInputElement;
        next.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(input.value).to.eql('1.2');
        prev.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(input.value).to.eql('0');

        input.value = '9.9';
        dispatchEvent(input, 'change');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(input.value).eql('9.9');
        prev.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(input.value).eql('8.7');

        input.value = '19.9';
        dispatchEvent(input, 'change');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(input.value).eql('10');

        input.value = 'x19.9';
        // to make the _input eql 'x19.9', then lead change
        dispatchEvent(input, 'input');
        dispatchEvent(input, 'change');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(input.value).to.eql('10');

        input.value = '-10';
        dispatchEvent(input, 'change');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(input.value).to.eql('0');

        // should not disable btns, when value is between min and max
        input.value = '9.9';
        dispatchEvent(input, 'change');
        next.click();
        await wait();
        expect(input.value).to.eql('10');
        expect(element.innerHTML).to.matchSnapshot();
        input.value = '0.1';
        dispatchEvent(input, 'change');
        prev.click();
        await wait();
        expect(input.value).to.eql('0');
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('precision', async () => {
        const [instance, element] = mount(PrecisionDemo);

        const [spinner1, spinner2] = element.querySelectorAll<HTMLElement>('.k-spinner');
        const input1 = spinner1.querySelector('.k-input-inner') as HTMLInputElement;
        input1.value = '0.6';
        dispatchEvent(input1, 'input');
        dispatchEvent(input1, 'change');
        await wait();
        expect(spinner1.innerHTML).to.matchSnapshot();
        expect(input1.value).to.eql('1');
        expect(instance.get('value1')).to.eql(1);

        const input2 = spinner2.querySelector('.k-input-inner') as HTMLInputElement;
        // expect(input2.value).to.eql('0.0');
        input2.value = '0.61';
        dispatchEvent(input2, 'input');
        dispatchEvent(input2, 'change');
        await wait();
        expect(input2.value).to.eql('0.6');
    });

    it('should change value as long as the input is valid', async () => {
        const [instance, element] = mount(PrecisionDemo);

        const input = element.querySelector('input') as HTMLInputElement;
        input.value = '01';
        dispatchEvent(input, 'input');
        await wait();
        expect(instance.get('value1')).to.eql(1);

        input.value = 'xx';
        dispatchEvent(input, 'input');
        await wait();
        expect(instance.get('value1')).to.eql(1);

        input.value = '100';
        dispatchEvent(input, 'input');
        await wait();
        expect(instance.get('value1')).to.eql(10);
    });

    it('should log error when max < min', () => {
         class Demo extends Component {
            static template = `
                const {Spinner} = this;
                <Spinner min={20}
                    max={0}
                    step={undefined}
                    value={1}
                />
            `;
            private Spinner = Spinner;
        }
        const test = fakeError();
        const [instance, element] = mount(Demo);
        expect(element.innerHTML).to.matchSnapshot();
        test('[Spinner] min must less than or equal to max, but got min: 20 max: 0')
    });

    it('should format value', async () => {
        const [instance, element] = mount(FormatterDemo);

        const [input1, input2] = element.querySelectorAll<HTMLInputElement>('input');
        expect(input1.value).to.eql('￥1,000');
        expect(input2.value).to.eql('增长率 78%');

        // increase / decrease
        const increase = element.querySelector('.k-left') as HTMLElement;
        increase.click();
        await wait();
        expect(input1.value).to.eql('￥999');
        const decrease = element.querySelectorAll<HTMLElement>('.k-right')[1];
        decrease.click();
        await wait();
        expect(input2.value).to.eql('增长率 79%');

        // input
        input1.value = '9999';
        dispatchEvent(input1, 'input');
        dispatchEvent(input1, 'change');
        await wait();
        expect(input1.value).to.eql('￥9,999');
        expect(instance.get('money')).to.eql(9999);

        input2.value = '99';
        dispatchEvent(input2, 'input');
        dispatchEvent(input1, 'change');
        await wait();
        expect(input2.value).to.eql('99');
        expect(instance.get('percent')).to.eql(99);
        dispatchEvent(input2, 'change');
        await wait();
        expect(input2.value).to.eql('增长率 99%');
    });

    it('should trigger change event correctly', async () => {
        const onChange = sinon.spy((v: number) => console.log(v));
         class Demo extends Component {
            static template = `
                const {Spinner} = this;
                <Spinner ev-change={this._onChange} />
            `;
            private Spinner = Spinner;
            _onChange(v: number) {
                onChange(v);
            }
        }
        const [instance, element] = mount(Demo);

         // increase / decrease
        const increase = element.querySelector('.k-left') as HTMLElement;
        increase.click();
        expect(onChange.callCount).to.eql(1);
        expect(onChange.calledWith(-1)).to.be.true;
        const decrease = element.querySelector('.k-right') as HTMLElement;
        decrease.click();
        expect(onChange.callCount).to.eql(2);
        expect(onChange.calledWith(0)).to.be.true;

        const input = element.querySelector('input') as HTMLInputElement;
        dispatchEvent(input, 'focus');
        input.value = '1';
        dispatchEvent(input, 'input');
        input.value = '12';
        dispatchEvent(input, 'input');
        dispatchEvent(input, 'change');
        await wait();
        expect(onChange.callCount).to.eql(3);
        expect(onChange.calledWith(12)).to.be.true;
    });

    it('should be min + step * n', async () => {
        const [instance, element] = mount(ForceStepDemo);

        const [prev, next] = element.querySelectorAll<HTMLElement>('.k-btn');
        const input = element.querySelector('.k-input-inner') as HTMLInputElement;

        input.value = '1';
        dispatchEvent(input, 'change');
        await wait();
        expect(instance.get('value1')).to.eql(1.2);

        input.value = '9.9';
        dispatchEvent(input, 'change');
        await wait();
        expect(instance.get('value1')).to.eql(9.6);

        input.value = '10';
        dispatchEvent(input, 'change');
        await wait();
        expect(instance.get('value1')).to.eql(10);

        prev.click();
        await wait();
        expect(instance.get('value1')).to.eql(8.4);
    });

    it('forceStep without min value', async () => {
        class Demo extends Component {
            static template = `const {Spinner} = this;
                <Spinner step={1} v-model="value" forceStep />
            `;
            static defaults() {
                return {value: 1};
            }
            private Spinner = Spinner;
        }
        const [instance, element] = mount(Demo);
        expect(instance.get('value')).to.eql(1);

        instance.set<number>('value', -1);
        await wait();
        expect(instance.get('value')).to.eql(-1);
    });

    it('dynamic step', async () => {
        const [instance, element] = mount(DynamicStepDemo);

        const btns = element.querySelectorAll<HTMLElement>('.k-btn');

        async function test(index: number) {
            const [prev, next] = index === 1 ? btns : Array.from(btns).slice(2);
            const model = `value${index}`;

            prev.click();
            await wait();
            expect(instance.get(model)).to.eql(-1);

            instance.set<number>(model, -5);
            await wait();
            prev.click();
            await wait();
            expect(instance.get(model)).to.eql(-10);

            next.click();
            await wait();
            expect(instance.get(model)).to.eql(-5);

            next.click();
            await wait();
            expect(instance.get(model)).to.eql(-4);

            instance.set<number>(model, 5);
            await wait();
            next.click();
            await wait();
            expect(instance.get(model)).to.eql(10);

            prev.click();
            await wait();
            expect(instance.get(model)).to.eql(5);

            prev.click();
            await wait();
            expect(instance.get(model)).to.eql(4);
        }

        await test(1);
        // test(2);
    });

    it('should set correct value with dynamic step when min is not equal 0', async () => {
        class Demo extends Component {
            static template = `const {Spinner} = this; <Spinner min={30}
                max={500}
                step={{100: 10, 500: 50}}
                v-model="value"
                forceStep
            />`;
            static defaults() {
                return {value: 100};
            }
            private Spinner = Spinner;
        }
        const [instance, element] = mount(Demo);
        const [prev, next] = element.querySelectorAll<HTMLElement>('.k-btn');
        next.click();
        await wait();
        expect(instance.get('value')).to.eql(150);
        prev.click();
        await wait();
        expect(instance.get('value')).to.eql(100);
        prev.click();
        await wait();
        expect(instance.get('value')).to.eql(90);
    });
});
