import BasicDemo from '~/components/cascader/demos/basic';
import CustomDemo from '~/components/cascader/demos/custom';
import ChangeOnSelectDemo from '~/components/cascader/demos/changeOnSelect';
import LoadDataDemo from '~/components/cascader/demos/loadData';
import FilterDemo from '~/components/cascader/demos/filterable';
import {mount, unmount, dispatchEvent, getElement, getElements, wait} from 'test/utils';

describe('Cascader', () => {
    let instance;

    afterEach(async () => {
        unmount(instance);
        await wait(400);
    });

    it('basic test', async () => {
        instance = mount(BasicDemo);

        const select = instance.element.querySelector('.k-wrapper');
        select.click();
        const dropdown1 = getElement('.k-cascader-dropdown');
        const [item1, item2] = dropdown1.querySelectorAll('.k-item');
        item2.click();
        await wait(1);
        expect(dropdown1.innerHTML).to.matchSnapshot();
        const dropdown2 = getElement('.k-cascader-dropdown');
        const [item11, item12] = dropdown2.querySelectorAll('.k-item');
        item12.click();
        await wait(1);
        const dropdown3 = getElement('.k-cascader-dropdown');
        const [item21, item22] = dropdown3.querySelectorAll('.k-item');
        item22.click();
        await wait(1);
        expect(instance.element.innerHTML).to.matchSnapshot();

        select.click();
        const [_dropdown1, _dropdown2, _dropdown3] = getElements('.k-cascader-dropdown');
        expect(_dropdown1.innerHTML).to.matchSnapshot();
        expect(_dropdown2.innerHTML).to.matchSnapshot();
        expect(_dropdown3.innerHTML).to.matchSnapshot();
    });

    it('custom label', () => {
        instance = mount(CustomDemo);

        const cascader = instance.vdt.vNode.children;
        cascader.set('value', ['beijing', 'haidian']);
        expect(instance.element.innerHTML).to.matchSnapshot();
        cascader.set('value', ['hunan', 'yueyang', 'yueyangxian']);
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('change on select', () => {
        instance = mount(ChangeOnSelectDemo);

        const select = instance.element.querySelector('.k-wrapper');
        select.click();
        const dropdown1 = getElement('.k-cascader-dropdown');
        const [item1, item2] = dropdown1.querySelectorAll('.k-item');
        item2.click();
        expect(instance.element).to.matchSnapshot();
    });

    it('load data asychronously', async () => {
        instance = mount(LoadDataDemo);

        const select = instance.element.querySelector('.k-wrapper');
        select.click();
        const dropdown1 = getElement('.k-cascader-dropdown');
        const [item1, item2] = dropdown1.querySelectorAll('.k-item');
        item2.click();
        await wait(1);
        const dropdown2 = getElement('.k-cascader-dropdown');
        expect(dropdown2.innerHTML).to.matchSnapshot();

        await wait(1500);
        expect(dropdown2.innerHTML).to.matchSnapshot();
    });

    it('filter', () => {
        instance = mount(FilterDemo);

        const input = instance.element.querySelector('.k-inner');

        // should show layer when input empty string
        input.value = ' ';
        dispatchEvent(input, 'input');
        const dropdown = getElement('.k-cascader-dropdown');
        expect(dropdown.innerHTML).to.matchSnapshot();

        input.value = '长沙';
        dispatchEvent(input, 'input');
        const dropdown1 = getElement('.k-cascader-filterable-dropdown');
        expect(dropdown1.innerHTML).to.matchSnapshot();

        // should show no-data layer
        input.value = 'xxx';
        dispatchEvent(input, 'input');
        expect(dropdown1.innerHTML).to.matchSnapshot();

        input.value = '岳阳';
        dispatchEvent(input, 'input');
        expect(dropdown1.innerHTML).to.matchSnapshot();

        dropdown1.querySelector('.k-item').click();
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('no data for init data', () => {
        instance = mount(BasicDemo);

        const [, select] = instance.element.querySelectorAll('.k-wrapper');
        dispatchEvent(select, 'click');
        const dropdown = getElement('.k-cascader-dropdown');
        expect(dropdown.innerHTML).to.matchSnapshot();
    });
});
