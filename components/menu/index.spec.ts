import {Component} from 'intact';
import CollapseDemo from '~/components/menu/demos/collapse';
import AccordionDemo from '~/components/menu/demos/accordion';
import {mount, unmount, dispatchEvent, getElement, wait} from '../../test/utils';
import {Menu, MenuItem} from './';

describe('Menu', () => {
    afterEach(() => unmount());

    it('expand and shrink sub menu', async () => {
        const [instance, element] = mount(CollapseDemo);

        const title = element.querySelector('.k-expanded .k-menu-title') as HTMLElement;
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

        expect(element.innerHTML).to.matchSnapshot();

        const [title, disabledTitle] = element.querySelectorAll<HTMLElement>('.k-menu-title');
        title.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        expect(instance.get('selectedKey')).to.eql('1');
        disabledTitle.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        expect(instance.get('selectedKey')).to.eql('1');

        const subTitle = element.querySelector('.k-expanded .k-menu .k-menu-title') as HTMLElement;
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
        const title = element.querySelector('.k-menu-item:nth-child(3) .k-menu-title') as HTMLElement;
        dispatchEvent(title, 'mouseenter');
        await wait();
        const dropdown = getElement('.k-dropdown-menu.k-menu')!;
        expect(dropdown.innerHTML).to.matchSnapshot();

        dispatchEvent(dropdown.querySelector<HTMLElement>('.k-menu-item:nth-child(4) .k-menu-title')!, 'mouseenter');
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
        let title = element.querySelector('.k-menu-title') as HTMLElement;
        title.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        title = element.querySelector('.k-menu-item:nth-child(3) .k-menu-title') as HTMLElement;
        dispatchEvent(title, 'mouseenter');
        await wait();
        const dropdown = getElement('.k-dropdown-menu.k-menu')!;
        dropdown.querySelector<HTMLElement>('.k-menu-title')!.click();
        await wait();
        expect(dropdown.innerHTML).to.matchSnapshot();

        // should hide when select
        await wait(500);
        expect(getElement('.k-dropdown-menu.k-menu')).to.be.undefined;
    });

    it('accordion', async () => {
        const [instance, element] = mount(AccordionDemo);

        const menu3 = element.children[2] as HTMLElement;
        const subMenu1 = menu3.querySelector<HTMLElement>('.k-menu')!.firstElementChild!.querySelector('.k-menu-title') as HTMLElement;
        subMenu1.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('expandedKeys')).to.eql(['3', '3-1']);

        const subMenu4 = menu3.querySelector<HTMLElement>('.k-menu')!.lastElementChild!.querySelector('.k-menu-title') as HTMLElement;
        subMenu4.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('expandedKeys')).to.eql(['3', '3-4']);

        const menu1 = element.firstElementChild!.querySelector('.k-menu-title') as HTMLElement;
        menu1.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('expandedKeys')).to.eql(['3-4', '1']);

        menu3.querySelector<HTMLElement>('.k-menu-title')!.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
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

    })
});
