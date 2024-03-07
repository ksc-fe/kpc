import {createApp, render} from 'vue';
import {mount, unmount, dispatchEvent, getElement, wait} from '@/test/utils';
import {Dropdown, DropdownMenu, DropdownItem} from '../../';

describe('Dropdown', () => {
    let container: HTMLDivElement;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    afterEach(() => {
        render(null, container);
        document.body.removeChild(container);
    });

    it('should save original events', async () => {
        const click = sinon.spy();
        const vue = createApp({
            template: `
                <div>
                    <Dropdown>
                        <button ref="button" @click="test">
                            hover
                        </button>
                        <DropdownMenu>
                            <DropdownItem>item 1</DropdownItem>
                            <DropdownItem>item 2</DropdownItem>
                            <DropdownItem>item 3</DropdownItem>
                        </DropdownMenu>
                        <!-- comment -->
                    </Dropdown>
                </div>
            `,
            components: {
                Dropdown, DropdownMenu, DropdownItem
            },
            methods: {
                test() {
                    click();
                }
            }
        }).mount(container);

        (vue.$refs.button as HTMLElement).click();
        await wait();
        expect(click.callCount).to.eql(1);
        expect(getElement('.k-dropdown-menu')).to.be.exist;
    });

    it('handle trigger without props', async () => {
        const vue = createApp({
            template: `
                <div>
                    <Dropdown>
                        <button>hover</button>
                        <DropdownMenu>
                            <DropdownItem>item 1</DropdownItem>
                            <DropdownItem>item 2</DropdownItem>
                            <DropdownItem>item 3</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            `,
            components: {
                Dropdown, DropdownMenu, DropdownItem
            },
        }).mount(container);

        vue.$el.querySelector('button').click();
        await wait();
        expect(getElement('.k-dropdown-menu')).to.be.exist;
    });

    it('click trigger', async () => {
        const vue = createApp({
            template: `
                <div>
                    <Dropdown trigger="click">
                        <button>click</button>
                        <DropdownMenu>
                            <DropdownItem>item 1</DropdownItem>
                            <DropdownItem>item 2</DropdownItem>
                            <DropdownItem>item 3</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            `,
            components: {
                Dropdown, DropdownMenu, DropdownItem
            },
        }).mount(container);

        // FIXME: The bug can not be reproduced by code, only by manual
        // dispatchEvent(vue.$el.querySelector('button'), 'click');
    });
});
