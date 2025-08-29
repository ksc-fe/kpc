import {Component} from 'intact';
import BasicDemo from '~/components/menu/demos/basic';
import CollapseDemo from '~/components/menu/demos/collapse';
import AccordionDemo from '~/components/menu/demos/accordion';
import CollapseArrowDemo from '~/components/menu/demos/showCollapseArrow';
import HorizontalDemo from '~/components/menu/demos/horizontal';
import {mount, unmount, dispatchEvent, getElement, wait} from '../../test/utils';
import {Menu, MenuItem} from './';

describe('Menu', () => {
    afterEach(() => unmount());

    it('expand and shrink sub menu', async () => {
        const [instance, element] = mount(BasicDemo);

        await wait();

        // shrink
        const title = element.querySelector('.k-expanded .k-menu-item-title') as HTMLElement;
        title.click();
        await wait(500);
        expect(element.outerHTML).to.matchSnapshot();
        expect(instance.get('expandedKeys')).to.eql([]);

        title.click();
        await wait(500);
        expect(element.outerHTML).to.matchSnapshot();
        expect(instance.get('expandedKeys')).to.eql(['3']);
    });

    it('select', async () => {
        const [instance, element] = mount(CollapseDemo);

        instance.set('collapse', false);
        await wait();

        expect(element.innerHTML).to.matchSnapshot();

        const [title, disabledTitle] = element.querySelectorAll<HTMLElement>('.k-menu-body .k-menu-item-title');
        title.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        expect(instance.get('selectedKey')).to.eql('1');
        disabledTitle.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        expect(instance.get('selectedKey')).to.eql('1');

        const subTitle = element.querySelector('.k-expanded .k-menu .k-menu-body .k-menu-item-title') as HTMLElement;
        subTitle.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        expect(instance.get('selectedKey')).to.eql('3-1');

        // clear
        instance.set('selectedKey', '');
        await wait();
        expect(element.querySelector('.k-highlighted')).to.be.null;
    });

    it('collapse', async () => {
        const [instance, element] = mount(CollapseDemo);

        instance.set('collapse', true);
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        // show sub menu
        const title = element.querySelector('.k-menu-body .k-menu-item:nth-child(3) .k-menu-item-title') as HTMLElement;
        dispatchEvent(title, 'mouseenter');
        await wait();
        const dropdown = getElement('.k-dropdown-menu.k-menu')!;
        expect(dropdown.innerHTML).to.matchSnapshot();

        dispatchEvent(dropdown.querySelector<HTMLElement>('.k-menu-body .k-menu-item:nth-child(4) .k-menu-item-title')!, 'mouseenter');
        await wait();
        expect(getElement('.k-dropdown-menu.k-menu')!.innerHTML).to.matchSnapshot();

        // hide all
        dispatchEvent(document, 'click');
        await wait(500);
        expect(getElement('.k-dropdown-menu.k-menu')).to.be.undefined;
    });

    it('select collapsed menu', async () => {
        const [instance, element] = mount(CollapseDemo);

        instance.set('collapse', true);
        let title = element.querySelector('.k-menu-body .k-menu-item-title') as HTMLElement;
        title.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        title = element.querySelector('.k-menu-body .k-menu-item:nth-child(3) .k-menu-item-title') as HTMLElement;
        dispatchEvent(title, 'mouseenter');
        await wait();
        const dropdown = getElement('.k-dropdown-menu.k-menu')!;
        dropdown.querySelector<HTMLElement>('.k-menu-body .k-menu-item-title')!.click();
        await wait();
        expect(dropdown.innerHTML).to.matchSnapshot();

        // should hide when select
        await wait(500);
        expect(getElement('.k-dropdown-menu.k-menu')).to.be.undefined;
    });

    it('accordion', async () => {
        const [instance, element] = mount(AccordionDemo);
        
        // const menu3 = element.children[2] as HTMLElement;
        const rootElement = element.firstElementChild!;
        const menu3 = rootElement.children[2] as HTMLElement;
        const subMenu1 = menu3.querySelector<HTMLElement>('.k-menu .k-menu-body')!.firstElementChild!.querySelector('.k-menu-item-title') as HTMLElement;
        subMenu1.click();
        await wait();
        expect(rootElement.innerHTML).to.matchSnapshot();
        expect(instance.get('expandedKeys')).to.eql(['3', '3-1']);

        const subMenu4 = menu3.querySelector<HTMLElement>('.k-menu .k-menu-body')!.lastElementChild!.querySelector('.k-menu-item-title') as HTMLElement;
        subMenu4.click();
        await wait();
        expect(rootElement.innerHTML).to.matchSnapshot();
        expect(instance.get('expandedKeys')).to.eql(['3', '3-4']);
        
        const menu1 = rootElement.firstElementChild!.querySelector('.k-menu-item-title') as HTMLElement;
        menu1.click();
        await wait();
        expect(rootElement.innerHTML).to.matchSnapshot();
        expect(instance.get('expandedKeys')).to.eql(['3-4', '1']);

        menu3.querySelector<HTMLElement>('.k-menu-item-title')!.click();
        await wait();
        expect(rootElement.innerHTML).to.matchSnapshot();
        expect(instance.get('expandedKeys')).to.eql(['3-4', '3']);
    });

    it('expand when set selectedKey', async () => {
        class Demo extends Component<{list: Array<string>}> {
            static template = `
                var Menu = this.Menu;
                var MenuItem = this.MenuItem;
                <Menu
                    v-model:expandedKeys="expandedKeys"
                    v-model:selectedKey="selectedKey"
                >
                    <MenuItem key="1">
                        <Menu>
                            <MenuItem v-for={this.get('list')} key={$value}>{$value}</MenuItem>
                        </Menu>
                    </MenuItem>
                </Menu>
            `;

            private Menu = Menu;

            private MenuItem = MenuItem;

            static defaults() {
                return {
                    expandedKeys: [],
                    selectedKey: '1-3',
                    list: ['1-1', '1-2']
                };
            }
        }
        const [instance] = mount(Demo);

        await wait();
        instance.set('list', ['1-1', '1-2', '1-3']);
        
        await wait();
        const expandedKeys = instance.get('expandedKeys') as Array<string>;
        expect(expandedKeys.includes('1')).to.be.true;

    });

    it('collapsed arrow', async () => {
        const [instance, element] = mount(CollapseArrowDemo);

        instance.set('showCollapseArrow', true);
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        let arrow = element.querySelector('.k-menu .k-menu-arrow-box') as HTMLElement;
        arrow.click();
        await wait(500);
        expect(element.outerHTML).to.matchSnapshot();

        instance.set('showCollapseArrow', false);
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        expect(getElement('.k-menu-arrow-box')).to.be.undefined;
    });

    it('detecting pop-up position during rapid mouse hover over menus', async () => {
        const [instance, element] = mount(HorizontalDemo);

        const [, , menu3, menu4] = element.querySelectorAll<HTMLElement>('.k-menu-item-title');
        dispatchEvent(menu3, 'mouseenter');
        await wait(500);
        const dropdownmenu1 = getElement('.k-dropdown-menu')!;
        const top1 = dropdownmenu1.getBoundingClientRect().top;

        dispatchEvent(menu3, 'mouseleave');
        dispatchEvent(menu4, 'mouseenter');
        await wait(1000);
        const dropdownmenu2 = getElement('.k-dropdown-menu')!;
        const top2 = dropdownmenu2.getBoundingClientRect().top;

        expect(top1).to.eql(top2);
    });
});
