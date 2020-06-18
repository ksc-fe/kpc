import StepDemo from '~/components/spinner/demos/step';
import PrecisionDemo from '~/components/spinner/demos/precision';
import {mount, unmount, dispatchEvent} from 'test/utils';
import {Spinner} from 'kpc/components/spinner';
import Intact from 'intact';
import FormatterDemo from '~/components/spinner/demos/formatter';

describe('Spinner', () => {
    let instance;

    // afterEach(() => {
        // unmount(instance);
        // instance = null
    // });

    it('step/max/min test', () => {
        instance = mount(StepDemo);

        const [prev, next] = instance.element.querySelectorAll('.k-btn');
        const input = instance.element.querySelector('.k-inner');
        next.click();
        expect(instance.element.innerHTML).to.matchSnapshot();
        expect(input.value).to.eql('1.2');
        prev.click();
        expect(instance.element.innerHTML).to.matchSnapshot();
        expect(input.value).to.eql('0');

        input.value = '9.9';
        dispatchEvent(input, 'change');
        expect(instance.element.innerHTML).to.matchSnapshot();
        expect(input.value).eql('9.9');
        prev.click();
        expect(instance.element.innerHTML).to.matchSnapshot();
        expect(input.value).eql('8.7');

        input.value = '19.9';
        dispatchEvent(input, 'change');
        expect(instance.element.innerHTML).to.matchSnapshot();
        expect(input.value).eql('10');

        input.value = 'x19.9';
        // to make the _input eql 'x19.9', then lead change
        dispatchEvent(input, 'input');
        dispatchEvent(input, 'change');
        expect(instance.element.innerHTML).to.matchSnapshot();
        expect(input.value).to.eql('10');

        input.value = '-10';
        dispatchEvent(input, 'change');
        expect(instance.element.innerHTML).to.matchSnapshot();
        expect(input.value).to.eql('0');

        // should not disable btns, when value is between min and max
        input.value = '9.9';
        dispatchEvent(input, 'change');
        next.click();
        expect(input.value).to.eql('10');
        expect(instance.element.innerHTML).to.matchSnapshot();
        input.value = '0.1';
        dispatchEvent(input, 'change');
        prev.click();
        expect(input.value).to.eql('0');
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('precision', () => {
        instance = mount(PrecisionDemo);

        expect(instance.element.innerHTML).to.matchSnapshot();

        const [spinner1, spinner2] = instance.element.querySelectorAll('.k-spinner');
        const input1 = spinner1.querySelector('.k-inner');
        input1.value = '0.6';
        dispatchEvent(input1, 'input');
        dispatchEvent(input1, 'change');
        expect(spinner1.innerHTML).to.matchSnapshot();
        expect(input1.value).to.eql('1');
        expect(instance.get('value1')).to.eql(1);

        const input2 = spinner2.querySelector('.k-inner');
        expect(input2.value).to.eql('0.0');
        input2.value = '0.61';
        dispatchEvent(input2, 'input');
        dispatchEvent(input2, 'change');
        expect(input2.value).to.eql('0.6');
    });

    it('should change value as long as the input is valid', () => {
        instance = mount(PrecisionDemo);

        const input = instance.element.querySelector('input');
        input.value = '01';
        dispatchEvent(input, 'input');
        expect(instance.get('value1')).to.eql(1);

        input.value = 'xx';
        dispatchEvent(input, 'input');
        expect(instance.get('value1')).to.eql(1);

        input.value = '100';
        dispatchEvent(input, 'input');
        expect(instance.get('value1')).to.eql(10);
    });

    it('should log error when max < min', () => {
         class Component extends Intact {
            @Intact.template()
            static template = `<Spinner min={{ 20 }}
                max={{ 0 }}
                step={{ undefined }}
                value={{ 1 }}
            />`;
            _init() {
                this.Spinner = Spinner;
            }
        }
        instance = mount(Component);
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('should format value', () => {
        instance = mount(FormatterDemo);

        const [input1, input2] = instance.element.querySelectorAll('input');
        expect(input1.value).to.eql('￥1,000');
        expect(input2.value).to.eql('增长率 78%');

        // increase / decrease
        const increase = instance.element.querySelector('.k-left');
        increase.click();
        expect(input1.value).to.eql('￥999');
        const decrease = instance.element.querySelectorAll('.k-right')[1];
        decrease.click();
        expect(input2.value).to.eql('增长率 79%');

        // input
        input1.value = 9999
        dispatchEvent(input1, 'input');
        expect(input1.value).to.eql('￥9,999');
        expect(instance.get('money')).to.eql(9999);

        input2.value = 99
        dispatchEvent(input2, 'input');
        expect(input2.value).to.eql('99');
        expect(instance.get('percent')).to.eql(99);
        dispatchEvent(input2, 'change');
        expect(input2.value).to.eql('增长率 99%');
    });

    it('should trigger change event correctly', () => {
        const onChange = sinon.spy(v => console.log(v));
         class Component extends Intact {
            @Intact.template()
            static template = `<Spinner
                ev-change={{ self._onChange }}
            />`;
            _init() {
                this.Spinner = Spinner;
            }
            _onChange(v) {
                onChange(v);
            }
        }
        instance = mount(Component);

         // increase / decrease
        const increase = instance.element.querySelector('.k-left');
        increase.click();
        expect(onChange.callCount).to.eql(1);
        expect(onChange.calledWith(-1)).to.be.true;
        const decrease = instance.element.querySelector('.k-right');
        decrease.click();
        expect(onChange.callCount).to.eql(2);
        expect(onChange.calledWith(0)).to.be.true;

        const input = instance.element.querySelector('input');
        dispatchEvent(input, 'focus');
        input.value = 1;
        dispatchEvent(input, 'input');
        input.value = 12;
        dispatchEvent(input, 'input');
        dispatchEvent(input, 'change');
        expect(onChange.callCount).to.eql(3);
        expect(onChange.calledWith(12)).to.be.true;
    });
});
