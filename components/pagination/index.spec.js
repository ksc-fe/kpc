import BasicDemo from '~/components/pagination/demos/basic';
import GotoDemo from '~/components/pagination/demos/goto';
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
});
