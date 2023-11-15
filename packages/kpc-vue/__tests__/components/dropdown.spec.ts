import Vue from 'vue';
import {mount, unmount, dispatchEvent, getElement, wait} from '@/test/utils';
import {Dropdown, DropdownMenu, DropdownItem} from '../../';

describe('Dropdown', () => {
    it('should save original events', async () => {
        const click = sinon.spy();
        const container = document.createElement('div');
        document.body.appendChild(container);
        const vue = new Vue({
            el: container,
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
        });

        (vue.$refs.button as HTMLElement).click();
        await wait();
        expect(click.callCount).to.eql(1);
        expect(getElement('.k-dropdown-menu')).to.be.exist;

        vue.$destroy();
        document.body.removeChild(vue.$el);
    });

    it('should render original className', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        const vue = new Vue({
            el: container,
            template: `
                <div>
                    <Dropdown>
                        <div class="test" :class="'dynamic'">click</div>
                        <DropdownMenu>
                            <DropdownItem>item 1</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            `,
            components: {
                Dropdown, DropdownMenu, DropdownItem
            },
        });

        const trigger = vue.$el.firstElementChild! as HTMLElement;
        expect(trigger.className).to.eql('test dynamic');

        trigger.click();
        await wait();
        expect(trigger.className).to.eql('test k-dropdown-open dynamic');

        vue.$destroy();
        document.body.removeChild(vue.$el);
    });
});
