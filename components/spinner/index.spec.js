import StepDemo from '~/components/spinner/demos/step';
import PrecisionDemo from '~/components/spinner/demos/precision';
import {mount, unmount, dispatchEvent} from 'test/utils';

describe('Spinner', () => {
    let instance;

    afterEach(() => {
        unmount(instance);
        instance = null
    });

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
});
