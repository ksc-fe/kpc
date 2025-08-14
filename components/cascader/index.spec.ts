import BasicDemo from '~/components/cascader/demos/basic';
import CustomDemo from '~/components/cascader/demos/custom';
import ChangeOnSelectDemo from '~/components/cascader/demos/changeOnSelect';
import LoadDataDemo from '~/components/cascader/demos/loadData';
import FilterDemo from '~/components/cascader/demos/filterable';
import {mount, unmount, dispatchEvent, getElement, getElements, wait} from '../../test/utils';
import {Cascader} from './';
import {Component} from 'intact';

describe('Cascader', () => {
    afterEach(async () => {
        unmount();
        await wait(500);
    });

    it('basic test', async function() {
        const [instance, element] = mount(BasicDemo);

        const select = element.querySelector('.k-cascader') as HTMLElement;
        select.click();
        await wait();
        const dropdown1 = getElement('.k-cascader-menu')!;
        const [item1, item2] = dropdown1.querySelectorAll<HTMLElement>(':scope > .k-dropdown-item');
        item2.click();
        await wait();
        expect(dropdown1.innerHTML).to.matchSnapshot();
        const dropdown2 = getElement('.k-cascader-menu')!;
        const [item11, item12] = dropdown2.querySelectorAll<HTMLElement>(':scope > .k-dropdown-item');
        item12.click();
        await wait();
        const dropdown3 = getElement('.k-cascader-menu')!;
        const [item21, item22] = dropdown3.querySelectorAll<HTMLElement>(':scope > .k-dropdown-item');
        item22.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('value')).to.eql(['hunan', 'yueyang', 'yueyangxian']);

        select.click();
        await wait();
        const [_dropdown1, _dropdown2, _dropdown3] = getElements('.k-cascader-menu');
        expect(_dropdown1.innerHTML).to.matchSnapshot();
        expect(_dropdown2.innerHTML).to.matchSnapshot();
        expect(_dropdown3.innerHTML).to.matchSnapshot();
    });

    it('custom label', async () => {
        const [instance, element] = mount(CustomDemo);

        instance.set('value', ['beijing', 'haidian']);
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        instance.set('value', ['hunan', 'yueyang', 'yueyangxian']);
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('change on select', async () => {
        const [instance, element] = mount(ChangeOnSelectDemo);

        const select = element.querySelector('.k-cascader') as HTMLElement;
        select.click();
        await wait();
        const dropdown1 = getElement('.k-cascader-menu')!;
        const [item1, item2] = dropdown1.querySelectorAll<HTMLElement>(':scope > .k-dropdown-item');
        item2.click();
        await wait();
        expect(instance.get('value')).to.eql(['hunan'])

        item1.click();
        await wait();
        expect(instance.get('value')).to.eql(['beijing'])
    });

    it('load data asychronously', async () => {
        const [instance, element] = mount(LoadDataDemo);

        element.click();
        await wait();
        const dropdown1 = getElement('.k-cascader-menu')!;
        const [item1, item2] = dropdown1.querySelectorAll<HTMLElement>(':scope > .k-dropdown-item');
        item2.click();
        await wait();
        const dropdown2 = getElement('.k-cascader-menu')!;
        expect(dropdown2.innerHTML).to.matchSnapshot();
        expect(dropdown2.innerText).to.eql('');

        await wait(1500);
        expect(dropdown2.innerHTML).to.matchSnapshot();
        expect(dropdown2.innerText).to.not.eql('');

        const [item21, item22] = dropdown2.querySelectorAll<HTMLElement>(':scope > .k-dropdown-item');
        item22.click();
        await wait();
        const dropdown3 = getElement('.k-cascader-menu')!;
        expect(dropdown3.innerHTML).to.matchSnapshot();
        expect(dropdown3.innerText).to.eql('无数据');
    });

    it('filter', async () => {
        const [instance, element] = mount(FilterDemo);

        const input = element.querySelector<HTMLInputElement>('.k-input-inner')!;
        // show menu
        input.click();
        await wait();

        // FIXME: maybe we should show no-data layer
        // should show layer when input empty string
        // input.value = ' ';
        // dispatchEvent(input, 'input');
        // await wait();
        // const dropdown = getElement('.k-cascader-menu')!;
        // expect(dropdown.innerHTML).to.matchSnapshot();
        // expect(dropdown.innerText).to.eql('北京\n湖南');

        input.value = '长沙';
        dispatchEvent(input, 'input');
        await wait();
        const dropdown1 = getElement('.k-cascader-filter')!;
        expect(dropdown1.innerHTML).to.matchSnapshot();
        expect(dropdown1.innerText).to.eql('湖南 / 长沙市 / 岳麓区');

        // should show no-data layer
        input.value = 'xxx';
        dispatchEvent(input, 'input');
        await wait();
        expect(dropdown1.innerHTML).to.matchSnapshot();
        expect(dropdown1.innerText).to.eql('无匹配数据');

        input.value = '岳阳';
        dispatchEvent(input, 'input');
        await wait();
        expect(dropdown1.innerHTML).to.matchSnapshot();
        expect(dropdown1.childElementCount).to.eql(2);

        dropdown1.querySelector<HTMLElement>('.k-dropdown-item')!.click();
        await wait();
        expect(instance.get('value')).to.eql(['hunan', 'yueyang', 'yueyanglou']);

        // show again to test the position
        input.click();
        await wait();
        const [_dropdown1, _dropdown2, _dropdown3] = getElements('.k-cascader-menu')!;
        expect(_dropdown1.style.top).not.eql('0px');
        expect(_dropdown2.style.top).not.eql('0px');
        expect(_dropdown3.style.top).not.eql('0px');
    });

    it('no data for init data', async () => {
        const [instance, element] = mount(BasicDemo);

        const [, select] = element.querySelectorAll<HTMLElement>('.k-cascader');
        dispatchEvent(select, 'click');
        await wait();
        const dropdown = getElement('.k-cascader-menu')!;
        expect(dropdown.innerHTML).to.matchSnapshot();
        expect(dropdown.innerText).to.eql('无数据');
    });

    it('duplicated sub data', async () => {
        class Demo extends Component {
            static template = `const {Cascader} = this; <Cascader data={this.get('data')} v-model="value" />`;
            static defaults() {
                return {
                    value: ['beijing', 'haidian'],
                    data: [
                        {
                            value: 'beijing',
                            label: '北京',
                            children: [
                                {
                                    value: 'haidian',
                                    label: '海淀区'
                                },
                            ]
                        },
                        {
                            value: 'hunan',
                            label: '湖南',
                            children: [
                                {
                                    value: 'haidian',
                                    label: '海淀区'
                                },
                            ]
                        },
                    ]
                }
            }
            private Cascader = Cascader;
        }

        const [instance, element] = mount(Demo);
        dispatchEvent(element, 'click');
        await wait();

        const [dropdown1, dropdown2] = getElements('.k-cascader-menu');
        const [item1, item2] = dropdown1.querySelectorAll(':scope > .k-dropdown-item');
        expect(item1.classList.contains('k-selected')).to.be.true;
        expect(item2.classList.contains('k-selected')).to.be.false;
        const [item21] = dropdown2.querySelectorAll(':scope > .k-dropdown-item');
        expect(item21.classList.contains('k-selected')).to.be.true;

        dispatchEvent(item2, 'click');
        await wait();

        const dropdown3 = getElement('.k-cascader-menu')!;
        const [item31] = dropdown3.querySelectorAll(':scope > .k-dropdown-item');
        expect(item31.classList.contains('k-selected')).to.be.false;

        dispatchEvent(item31, 'click');
        await wait();
        
        expect(instance.get('value')).to.eql(['hunan', 'haidian']);
        expect(element.textContent).to.eql('湖南 / 海淀区');
    });

    it('specify fields', async () => {
        class Demo extends Component {
            static template = `
                const {Cascader} = this;
                <Cascader data={this.get('data')}
                    v-model="value"
                    fields={{value: 'v', label: 'l', children: 'c'}}
                />
            `;
            static defaults() {
                return {
                    value: [],
                    data: [
                        {
                            v: 'beijing',
                            l: '北京',
                            c: [
                                {
                                    v: 'haidian',
                                    l: '海淀区'
                                },
                            ]
                        },
                        {
                            v: 'hunan',
                            l: '湖南',
                            c: [
                                {
                                    v: 'haidian',
                                    l: '海淀区'
                                },
                            ]
                        },
                    ]
                }
            }
            private Cascader = Cascader;
        }

        const [instance, element] = mount(Demo);
        const select = element;
        select.click();
        await wait();
        const dropdown1 = getElement('.k-cascader-menu')!;
        const [item1] = dropdown1.querySelectorAll<HTMLElement>(':scope > .k-dropdown-item');
        item1.click();
        await wait();
        expect(dropdown1.innerHTML).to.matchSnapshot();
        const dropdown2 = getElement('.k-cascader-menu')!;
        const [item11,] = dropdown2.querySelectorAll<HTMLElement>(':scope > .k-dropdown-item');
        item11.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('value')).to.eql(['beijing', 'haidian']);
    });

    it('should select correct value', async () => {
         class Demo extends Component {
            static template = `
                const {Cascader} = this;
                <Cascader data={this.get('data')} v-model="value" />
            `;
            static defaults() {
                return {
                    value: ['beijing', 'haidian'],
                    data: [
                        {
                            value: 'beijing',
                            label: '北京',
                            children: [
                                {
                                    value: 'haidian',
                                    label: '海淀区'
                                },
                            ]
                        },
                        {
                            value: 'hunan',
                            label: '湖南',
                        },
                    ]
                }
            }
            private Cascader = Cascader;
        }

        const [instance, element] = mount(Demo);
        dispatchEvent(element, 'click');
        await wait();

        const [dropdown1, dropdown2] = getElements('.k-cascader-menu');
        const [item1, item2] = dropdown1.querySelectorAll(':scope > .k-dropdown-item');
        dispatchEvent(item2, 'click');
        await wait();
        expect(instance.get('value')).to.eql(['hunan']);
    });

    it('should only show submenu while the root menu will show', async () => {
        const [instance, element] = mount(FilterDemo);
        instance.set('values', [['beijing', 'haidian']]);
        await wait();

        const [, dom] = element.querySelectorAll<HTMLDivElement>('.k-cascader');

        dispatchEvent(dom, 'click');
        await wait();

        const input = dom.querySelector<HTMLInputElement>('.k-input-inner')!;

        // should show layer when input empty string
        input.value = 's';
        dispatchEvent(input, 'input');
        await wait();

        document.body.click();
        await wait();

        expect(getElement('.k-cascader-menu')).to.not.exist;
    });
});
