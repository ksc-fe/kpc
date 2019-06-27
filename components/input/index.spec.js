import BasicDemo from '~/components/input/demos/basic';
import {mount, unmount, dispatchEvent} from 'test/utils';
import SearchDemo from '~/components/input/demos/search';

describe('Input', () => {
    let instance;

    afterEach(() => {
        unmount(instance);
    });

    it('basic test', () => {
        instance = mount(BasicDemo); 

        const input = instance.element.querySelector('input');
        instance.refs.__test.focus();
        input.value = 'test';
        dispatchEvent(input, 'input');
        expect(instance.get('value')).eql('test');

        instance.refs.__test.select();
    });

    it('search input', () => {
        const onSearch = sinon.spy();
        SearchDemo.prototype._search = onSearch;

        instance = mount(SearchDemo);

        expect(instance.element.innerHTML).to.matchSnapshot();
        const btn = instance.element.querySelector('.k-btn');

        btn.click();
        expect(instance.element.innerHTML).to.matchSnapshot();

        const input = instance.element.querySelector('input');
        input.value = 'test';
        dispatchEvent(input, 'input');
        expect(instance.element.innerHTML).to.matchSnapshot();

        const form = instance.element.querySelector('form');
        dispatchEvent(form, 'submit');
        expect(onSearch.callCount).to.eql(1);

        btn.click();
        expect(onSearch.callCount).to.eql(2);
        expect(instance.element.innerHTML).to.matchSnapshot();

        document.body.click();
        expect(instance.element.innerHTML).to.matchSnapshot();
    });
});
