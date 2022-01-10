import ClearableDemo from '~/components/rate/demos/clearable';
import BasicDemo from '~/components/rate/demos/basic';
import DisabledDemo from '~/components/rate/demos/disabled';
import {mount, unmount, dispatchEvent, wait} from 'test/utils';

describe('Rate', () => {
    afterEach(() => unmount());

    it('should change value on click', async () => {
        const [instance, element] = mount(BasicDemo);

        const [rate1, rate2] = element.querySelectorAll<HTMLElement>('.k-rate');

        const [first1, second1] = rate1.querySelectorAll<HTMLElement>('.k-rate-item:nth-child(4) > div');
        first1.click();
        expect(instance.get('value1')).to.eql(4);
        second1.click();
        expect(instance.get('value1')).to.eql(4);

        // should fix value
        instance.set('value1', 3.5);
        await wait();
        expect(instance.get('value1')).to.eql(4);

        // half
        const [first2, second2] = rate2.querySelectorAll<HTMLElement>('.k-rate-item:nth-child(4) > div');
        first2.click();
        expect(instance.get('value2')).to.eql(3.5);
        second2.click();
        expect(instance.get('value2')).to.eql(4);

        // enter
        const first = rate1.querySelector('.k-rate-first') as HTMLElement;
        dispatchEvent(first, 'mouseenter');
        await wait();
        expect(rate1.querySelectorAll('.k-full')).to.have.lengthOf(1);
        expect(rate1.innerHTML).to.matchSnapshot();
        // leave
        dispatchEvent(rate1, 'mouseleave');
        await wait();
        expect(rate1.querySelectorAll('.k-full')).to.have.lengthOf(4);
        expect(rate1.innerHTML).to.matchSnapshot();
    });

    it('should clear value when click again on the clearable component', () => {
        const [instance, element] = mount(ClearableDemo);

        const first = element.querySelector('.k-rate-first') as HTMLElement;
        first.click();
        expect(instance.get('value')).to.eql(1);

        first.click();
        expect(instance.get('value')).to.eql(0);
    });

    it('disabled', async () => {
        const [instance, element] = mount(DisabledDemo);

        const first = element.querySelector('.k-rate-first') as HTMLElement;
        first.click();
        await wait();
        expect(element.querySelectorAll('.k-full')).to.have.lengthOf(2);
        dispatchEvent(first, 'mouseenter');
        await wait();
        expect(element.querySelectorAll('.k-full')).to.have.lengthOf(2);
        // leave
        dispatchEvent(element, 'mouseleave');
        await wait();
        expect(element.querySelectorAll('.k-full')).to.have.lengthOf(2);
    });
});
