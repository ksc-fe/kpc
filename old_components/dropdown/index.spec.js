import {mount, unmount, dispatchEvent, getElement, wait} from 'test/utils';
import Intact from 'intact';
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import BasicDemo from '~/components/dropdown/demos/basic';
import NestedDemo from '~/components/dropdown/demos/nested';
import ContextMenuDemo from '~/components/dropdown/demos/contextmenu';

describe('Dropdown', () => {
    let instance;

    afterEach((done) => {
        unmount(instance);
        setTimeout(done, 400);
    });

    it('demos test', () => {
        const req = require.context('~/components/dropdown/demos', true, /^((?!async).)*index\.js$/i);
        req.keys().forEach(item => {
            if (item.includes('contextmenu')) return;
            const Demo = req(item).default;
            const i = mount(Demo);

            dispatchEvent(i.element.querySelector('.k-btn') || i.element, 'click');
            if (item.includes('disabled')) {
                expect(getElement('.k-dropdown-menu')).to.be.undefined;
            } else {
                expect(getElement('.k-dropdown-menu').innerHTML).to.matchSnapshot();
            }
            unmount(i);
        });
    });

    it('should save original events', () => {
        const click = sinon.spy();
        class Demo extends Intact {
            @Intact.template()
            static template = `
                <div>
                    <Dropdown>
                        <div ref="test" ev-click={{ self.click }}>click</div>
                        <DropdownMenu>
                            <DropdownItem>test</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            `;
            _init() {
                this.Dropdown = Dropdown;
                this.DropdownItem = DropdownItem;
                this.DropdownMenu = DropdownMenu;
            }
            click() {
                click();
            }
        }
        instance = mount(Demo);
        instance.refs.test.click();
        expect(click.callCount).to.eql(1);
        expect(getElement('.k-dropdown-menu').innerHTML).to.matchSnapshot();
    });

    it('should move to dropdown menu', async () => {
        instance = mount(BasicDemo);

        dispatchEvent(instance.element.firstChild, 'mouseenter');
        const dropdown = getElement('.k-dropdown-menu');
        expect(dropdown.innerHTML).to.matchSnapshot();

        dispatchEvent(instance.element.firstChild, 'mouseleave');
        dispatchEvent(dropdown, 'mouseenter');
        await wait(500);
        expect(dropdown.parentNode).to.exist;
    });

    it('nested dropdown', async () => {
        instance = mount(NestedDemo);

        instance.element.firstChild.click();
        const dropdown = getElement('.k-dropdown-menu');
        const [,,,hoverItem, clickItem] = dropdown.querySelectorAll('.k-item');
        clickItem.click();

        const clickSubDropdown = getElement('.k-dropdown-menu');
        expect(clickSubDropdown.innerHTML).to.matchSnapshot();

        // should hide last sub-dropdown and show next
        dispatchEvent(hoverItem, 'mouseenter');
        await wait(500);
        expect(getElement('.k-dropdown-menu').innerHTML).to.matchSnapshot();
    });

    it('hide on click document', async () => {
        instance = mount(BasicDemo);

        dispatchEvent(instance.element.firstChild, 'mouseenter');
        dispatchEvent(document, 'click');

        await wait(500);
        expect(getElement('.k-dropdown-menu')).not.exist;
    });

    it('operate by keyboard', async () => {
        instance = mount(NestedDemo);

        dispatchEvent(instance.element.firstChild, 'click');
        const dropdown = getElement('.k-dropdown-menu');

        // down
        dispatchEvent(document, 'keydown', {keyCode: 40});
        expect(dropdown.innerHTML).to.matchSnapshot();

        // up
        dispatchEvent(document, 'keydown', {keyCode: 38});
        expect(dropdown.innerHTML).to.matchSnapshot();

        // up and enter
        dispatchEvent(document, 'keydown', {keyCode: 38});
        dispatchEvent(document, 'keydown', {keyCode: 13});
        const subDropdown = getElement('.k-dropdown-menu');
        expect(subDropdown.innerHTML).to.matchSnapshot();

        // right
        dispatchEvent(document, 'keydown', {keyCode: 39});
        const subDropdown1 = getElement('.k-dropdown-menu');
        expect(subDropdown1.innerHTML).to.matchSnapshot();

        // left
        dispatchEvent(document, 'keydown', {keyCode: 37});
        await wait(500);
        expect(subDropdown1.style.display).to.eql('none');

        // down in sub-menu
        dispatchEvent(document, 'keydown', {keyCode: 40});
        expect(subDropdown.innerHTML).to.matchSnapshot();

        // select and hide
        dispatchEvent(document, 'keydown', {keyCode: 13});
        await wait(500);
        expect(getElement('.k-dropdown-menu')).not.exist;
    });

    it('context menu', () => {
        instance = mount(ContextMenuDemo);

        const area = instance.element.querySelector('.contextmenu-area');
        dispatchEvent(area, 'contextmenu', {pageX: 10, pageY: 10});
        const dropdown = getElement('.k-dropdown-menu');
        expect(dropdown.style.left).to.eql('11px');
        dispatchEvent(area, 'contextmenu', {pageX: 11, pageY: 11});
        expect(dropdown.style.left).to.eql('12px');
    });

    it('click mouse and move outside should not hide menu', async () => {
        instance = mount(NestedDemo);

        instance.element.firstChild.click();
        const dropdown = getElement('.k-dropdown-menu');
        dispatchEvent(dropdown, 'mousedown');
        dispatchEvent(document, 'mouseup');
        dispatchEvent(document, 'click');
        await wait(500);
        expect(getElement('.k-dropdown-menu').innerHTML).to.matchSnapshot();

        // on submenu
        const [,,,hoverItem, clickItem] = dropdown.querySelectorAll('.k-item');
        clickItem.click();
        const clickSubDropdown = getElement('.k-dropdown-menu');
        dispatchEvent(clickSubDropdown, 'mousedown');
        dispatchEvent(document, 'mouseup');
        dispatchEvent(document, 'click');
        await wait(500);
        expect(getElement('.k-dropdown-menu').innerHTML).to.matchSnapshot();

        // should hide on click document directly
        dispatchEvent(document, 'click');
        await wait(500);
        expect(getElement('.k-dropdown-menu')).to.be.undefined;
    });

    it('should ignore whitespace between real elements', () => {
        class Demo extends Intact {
            @Intact.template({skipWhitespace: false})
            static template = `
                <div>
                    <Dropdown>
                        <div ref="trigger">hover</div>
                        <DropdownMenu>
                            <DropdownItem>test</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            `;
            _init() {
                this.Dropdown = Dropdown;
                this.DropdownItem = DropdownItem;
                this.DropdownMenu = DropdownMenu;
            }
        }
        instance = mount(Demo);
        dispatchEvent(instance.refs.trigger, 'click');
        expect(getElement('.k-dropdown-menu').innerHTML.trim()).to.eql('<div class="k-item">test</div>');
    });

    it('should hydrate dropdown correctly', () => {
        class Demo extends Intact {
            @Intact.template()
            static template = `
                <div>
                    <Dropdown>
                        <div ref="trigger">hover</div>
                        <DropdownMenu>
                            <DropdownItem>test</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            `;
            _init() {
                this.Dropdown = Dropdown;
                this.DropdownItem = DropdownItem;
                this.DropdownMenu = DropdownMenu;
            }
        }

        const demo = new Demo();
        const html = demo.toString();
        expect(html).to.eql('<div><div _evHasSaved>hover</div><!--placeholder--></div>');

        const container = document.createElement('div');
        container.innerHTML = html;
        document.body.appendChild(container);
        Intact.hydrate(demo, container);

        dispatchEvent(demo.refs.trigger, 'click');
        expect(getElement('.k-dropdown-menu').innerHTML.trim()).to.eql('<div class="k-item">test</div>');

        demo.destroy();
        document.body.removeChild(container);
    });

    it('should scroll to view when we focus on DropdownItem', async () => {
        class Demo extends Intact {
            @Intact.template()
            static template = `
                <div>
                    <Dropdown>
                        <div ref="trigger">hover</div>
                        <DropdownMenu>
                            <div style="height: 40px; overflow: auto;">
                                <DropdownItem>test</DropdownItem>
                                <DropdownItem>test</DropdownItem>
                            </div>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            `;
            _init() {
                this.Dropdown = Dropdown;
                this.DropdownItem = DropdownItem;
                this.DropdownMenu = DropdownMenu;
            }
        }
        instance = mount(Demo);

        dispatchEvent(instance.refs.trigger, 'mouseenter');
        await wait(300);

        const dropdown = getElement('.k-dropdown-menu');
        const [, item] = dropdown.querySelectorAll('.k-item');
        const parent = item.parentNode;
        dispatchEvent(item, 'mouseenter');

        expect(parent.scrollTop).to.eql(item.offsetHeight * 2 - 40);
    });
});
