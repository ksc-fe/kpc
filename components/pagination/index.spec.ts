import BasicDemo from '~/components/pagination/demos/basic';
import GotoDemo from '~/components/pagination/demos/goto';
import CurrentDemo from '~/components/pagination/demos/current';
import DisableDemo from '~/components/pagination/demos/disable';
import {mount, unmount, dispatchEvent, wait} from '../../test/utils';

describe('Pagination', () => {
    // afterEach(() => unmount());

    it('basic test', async () => {
        const [instance, element] = mount(BasicDemo);

        const pagination = element.querySelector('.k-pagination') as HTMLElement;
        const btns = pagination.querySelectorAll<HTMLElement>('.k-btns .k-btn');
        const prev = btns[0];
        const next = btns[btns.length - 1];

        prev.click();
        await wait();
        expect(pagination.innerHTML).to.matchSnapshot();
        expect(instance.get('value1')).to.eql(1);
        next.click();
        next.click();
        await wait();
        expect(pagination.innerHTML).to.matchSnapshot();
        expect(instance.get('value1')).to.eql(3);
        prev.click();
        await wait();
        expect(pagination.innerHTML).to.matchSnapshot();
        expect(instance.get('value1')).to.eql(2);

        pagination.querySelector<HTMLElement>('.k-pagination-ellipsis')!.click();
        await wait();
        expect(pagination.innerHTML).to.matchSnapshot();
        expect(instance.get('value1')).to.eql(6);
        pagination.querySelector<HTMLElement>('.k-pagination-ellipsis')!.click();
        await wait();
        expect(pagination.innerHTML).to.matchSnapshot();
        expect(instance.get('value1')).to.eql(2);

        // change limit
        instance.refs.__test.set('limit', 20);
        await wait();
        expect(pagination.innerHTML).to.matchSnapshot();
        expect(instance.get('value1')).to.eql(1);
    });

    it('goto test', async () => {
        const [instance, element] = mount(GotoDemo);

        const input = element.querySelector('.k-input-inner') as HTMLInputElement;
        input.value = '45';
        dispatchEvent(input, 'change');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('value')).to.eql(20);

        input.value = '-10';
        dispatchEvent(input, 'change');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('value')).to.eql(1);
    });

    it('should trigger change event once', async () => {
        const fn = CurrentDemo.prototype._fetch2 = sinon.spy(function() {
            instance.forceUpdate();
        });
        const [instance, element] = mount(CurrentDemo);

        instance.set('value2', 2);
        await wait();
        expect(fn.callCount).to.eql(1);
        instance.set('limit', 50);
        await wait();
        expect(fn.callCount).to.eql(2);
        expect(fn.lastCall.lastArg).to.eql({value: 1, limit: 50});
    });

    it('should not goto disabled page', async () => {
        const [instance, element] = mount(DisableDemo);

        const input = element.querySelector('.k-input-inner') as HTMLInputElement;
        dispatchEvent(input, 'focus');
        input.value = '11';
        dispatchEvent(input, 'change');
        dispatchEvent(input, 'blur');
        await wait();
        expect(input.value).to.eql('10');
        expect(instance.get('value2')).to.eql(10);
    });
});
