import ClearableDemo from '~/components/rate/demos/clearable';
import BasicDemo from '~/components/rate/demos/basic';
import DisabledDemo from '~/components/rate/demos/disabled';
import {mount, unmount, dispatchEvent} from 'test/utils';

describe('Rate', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('should change value on click', () => {
        instance = mount(BasicDemo);

        const [rate1, rate2] = instance.element.querySelectorAll('.k-rate');

        const [first1, second1] = rate1.querySelectorAll('.k-item:nth-child(4) > div');
        first1.click();
        expect(instance.get('value1')).to.eql(4);
        second1.click();
        expect(instance.get('value1')).to.eql(4);

        // should fix value
        instance.set('value1', 3.5);
        expect(instance.get('value1')).to.eql(4);

        // half
        const [first2, second2] = rate2.querySelectorAll('.k-item:nth-child(4) > div');
        first2.click();
        expect(instance.get('value2')).to.eql(3.5);
        second2.click();
        expect(instance.get('value2')).to.eql(4);

        // enter
        const first = rate1.querySelector('.k-first');
        dispatchEvent(first, 'mouseenter');
        expect(rate1.innerHTML).to.matchSnapshot();
        // leave
        dispatchEvent(rate1, 'mouseleave');
        expect(rate1.innerHTML).to.matchSnapshot();
    });

    it('should clear value when click again on the clearable component', () => {
        instance = mount(ClearableDemo);

        const first = instance.element.querySelector('.k-first');
        first.click();
        expect(instance.get('value')).to.eql(1);

        first.click();
        expect(instance.get('value')).to.eql(0);
    });

    it('disabled', () => {
        instance = mount(DisabledDemo);

        const first = instance.element.querySelector('.k-first');
        first.click();
        expect(instance.element.innerHTML).to.matchSnapshot();
        dispatchEvent(first, 'mouseenter');
        expect(instance.element.innerHTML).to.matchSnapshot();
        // leave
        dispatchEvent(instance.element, 'mouseleave');
        expect(instance.element.innerHTML).to.matchSnapshot();
    });
});
