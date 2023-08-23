import BasicDemo from '~/components/input/demos/basic';
import {mount, unmount, dispatchEvent, wait} from '../../test/utils';
import SearchDemo from '~/components/input/demos/search';
import FrozenDemo from '~/components/input/demos/frozen';
import AutoRowsDemo from '~/components/input/demos/autoRows';

describe('Input', () => {
    afterEach(() => {unmount()});

    it('basic test', async () => {
        const [instance, element] = mount(BasicDemo); 

        const input = element.querySelector('input') as HTMLInputElement;
        instance.refs.__test.focus();
        input.value = 'test';
        dispatchEvent(input, 'input');
        await wait();
        expect(instance.get('value')).eql('test');

        instance.refs.__test.select();
    });

    it('search input', async () => {
        const onSearch = sinon.spy();
        SearchDemo.prototype.search = onSearch;

        const [instance, element] = mount(SearchDemo);

        expect(element.innerHTML).to.matchSnapshot();
        const btn = element.querySelector('.k-btn') as HTMLElement;

        btn.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        const input = element.querySelector('input') as HTMLInputElement;
        input.value = 'test';
        dispatchEvent(input, 'input');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        const form = element.querySelector('form') as HTMLFormElement;
        dispatchEvent(form, 'submit');
        await wait();
        expect(onSearch.calledWith('test')).to.be.true;

        btn.click();
        await wait();
        expect(onSearch.callCount).to.eql(2);
        expect(onSearch.calledWith('test')).to.be.true;
        expect(element.innerHTML).to.matchSnapshot();

        document.body.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('should frozen value on input', async () => {
        const [instance, element] = mount(FrozenDemo);

        const [input1, input2] = element.querySelectorAll<HTMLInputElement>('input');
        dispatchEvent(input2, 'focus');
        input2.value = '#123';
        dispatchEvent(input2, 'input');

        await wait();
        expect(input1.value).to.eql('#112233');
        expect(input2.value).to.eql('#123');

        dispatchEvent(input2, 'blur');
        await wait();
        expect(input2.value).to.eql('#112233');
    });

    it('should auto expand or shrink textarea', async () => {
        const [instance, element] = mount(AutoRowsDemo);
        const [textarea1, textarea2] = element.querySelectorAll('textarea');
        // const lineHeight = parseInt(getComputedStyle(textarea1).lineHeight);

        instance.set<string>('value1', 'a\nb');
        await wait();
        expect(textarea1.style.height).to.eql('50px');

        instance.set<string>('value1', 'a');
        await wait();
        expect(textarea1.style.height).to.eql('32px');

        instance.set<string>('value2', 'a');
        await wait();
        expect(textarea2.style.height).to.eql('68px');

        instance.set<string>('value2', 'a\nb\nc')
        await wait();
        expect(textarea2.style.height).to.eql('68px');

        instance.set<string>('value2', 'a\nb\nc\nd')
        await wait();
        expect(textarea2.style.height).to.eql('86px');

        instance.set<string>('value2', 'a\nb\nc\nd\ne\nf\ng\nh')
        await wait();
        expect(textarea2.style.height).to.eql('104px');
    });
});
