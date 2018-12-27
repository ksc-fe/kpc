import StepDemo from '~/components/spinner/demos/step';
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
        next.click();
        expect(instance.element.innerHTML).to.matchSnapshot();
        prev.click();
        expect(instance.element.innerHTML).to.matchSnapshot();

        const input = instance.element.querySelector('.k-inner');
        input.value = '9.9';
        dispatchEvent(input, 'change');
        expect(instance.element.innerHTML).to.matchSnapshot();
        prev.click();
        expect(instance.element.innerHTML).to.matchSnapshot();

        input.value = '19.9';
        dispatchEvent(input, 'change');
        expect(instance.element.innerHTML).to.matchSnapshot();

        input.value = '-10';
        dispatchEvent(input, 'change');
        expect(instance.element.innerHTML).to.matchSnapshot();

        input.value = 'x19.9';
        // to make the _input eql 'x19.9', then lead change
        dispatchEvent(input, 'input');
        dispatchEvent(input, 'change');
        expect(instance.element.innerHTML).to.matchSnapshot();
    });
});
