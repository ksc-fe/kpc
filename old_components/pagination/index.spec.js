import BasicDemo from '~/components/pagination/demos/basic';
import GotoDemo from '~/components/pagination/demos/goto';
import CurrentDemo from '~/components/pagination/demos/current';
import {mount, unmount, dispatchEvent} from 'test/utils';

describe('Pagination', () => {
    let instance;

    afterEach(() => {
        unmount(instance);
        instance = null;
    });

    it('basic test', () => {
        instance = mount(BasicDemo);

        const pagination = instance.element.querySelector('.k-pagination');
        const btns = pagination.querySelectorAll('.k-btns .k-btn');
        const prev = btns[0];
        const next = btns[btns.length - 1];

        prev.click();
        expect(pagination.innerHTML).to.matchSnapshot();
        next.click();
        next.click();
        expect(pagination.innerHTML).to.matchSnapshot();
        prev.click();
        expect(pagination.innerHTML).to.matchSnapshot();

        pagination.querySelector('.k-ellipsis').click();
        expect(pagination.innerHTML).to.matchSnapshot();
        pagination.querySelector('.k-ellipsis').click();
        expect(pagination.innerHTML).to.matchSnapshot();

        // change limit
        instance.refs.__test.set('limit', 20);
        expect(pagination.innerHTML).to.matchSnapshot();
    });

    it('goto test', () => {
        instance = mount(GotoDemo);

        const input = instance.element.querySelector('.k-inner');
        input.value = 45;
        dispatchEvent(input, 'change');
        expect(instance.element.innerHTML).to.matchSnapshot();

        input.value = '-10';
        dispatchEvent(input, 'change');
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('should trigger change event once', () => {
        const fn = CurrentDemo.prototype._fetch2 = sinon.spy(function() {
            this.update();
        });
        instance = mount(CurrentDemo);

        instance.set('current2', 2);
        expect(fn.callCount).to.eql(1);
        instance.set('limit', 50);
        expect(fn.callCount).to.eql(2);
        expect(fn.lastCall.lastArg).to.eql({current: 1, limit: 50});
    });
});
