import {mount, unmount, dispatchEvent, getElement} from 'test/utils';
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
            const Demo = req(item).default;
            const i = mount(Demo);

            dispatchEvent(i.element.firstChild, 'click');
            expect(getElement('.k-dropdown-menu').innerHTML).to.matchSnapshot();
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

    it('should move to dropdown menu', (done) => {
        instance = mount(BasicDemo);

        dispatchEvent(instance.element.firstChild, 'mouseenter');
        const dropdown = getElement('.k-dropdown-menu');
        expect(dropdown.innerHTML).to.matchSnapshot();

        dispatchEvent(instance.element.firstChild, 'mouseleave');
        dispatchEvent(dropdown, 'mouseenter');
        setTimeout(() => {
            expect(dropdown.parentNode).to.exist;
            done();
        }, 500)
    });

    it('nested dropdown', (done) => {
        instance = mount(NestedDemo);

        instance.element.firstChild.click();
        const dropdown = getElement('.k-dropdown-menu');
        const [,,,hoverItem, clickItem] = dropdown.querySelectorAll('.k-item');
        clickItem.click();

        const clickSubDropdown = getElement('.k-dropdown-menu');
        expect(clickSubDropdown.innerHTML).to.matchSnapshot();

        // should hide last sub-dropdown and show next
        dispatchEvent(hoverItem, 'mouseenter');
        setTimeout(() => {
            expect(getElement('.k-dropdown-menu').innerHTML).to.matchSnapshot();
            done();
        }, 500);
    });

    it('hide on click document', (done) => {
        instance = mount(BasicDemo);

        dispatchEvent(instance.element.firstChild, 'mouseenter');
        dispatchEvent(document, 'click');

        setTimeout(() => {
            expect(getElement('.k-dropdown-menu')).not.exist;
            done();
        }, 500);
    });

    it('operate by keyboard', (done) => {
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

        dispatchEvent(document, 'keydown', {keyCode: 37});
        setTimeout(() => {
            expect(subDropdown1.parentNode).not.exist;

            // down in sub-menu
            dispatchEvent(document, 'keydown', {keyCode: 40});
            expect(subDropdown.innerHTML).to.matchSnapshot();

            // select and hide
            dispatchEvent(document, 'keydown', {keyCode: 13});
            setTimeout(() => {
                expect(getElement('.k-dropdown-menu')).not.exist;
                done();
            }, 500);
        }, 500);
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
});
