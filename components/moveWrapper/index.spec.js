import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import Intact from 'intact';
import {mount, unmount} from 'test/utils';

describe('MoveWrapper', () => {
    describe('Position', () => {
        let instance;

        afterEach(() => unmount(instance));

        class Component extends Intact {
            @Intact.template()
            static template = `
                <div>
                    <Dropdown>
                        test
                        <DropdownMenu position={self.get('position')}>
                            <DropdownItem v-for={Array.apply(null, {length: 20})}>
                                item{key}
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            `;

            defaults() {
                this.Dropdown = Dropdown;
                this.DropdownMenu = DropdownMenu;
                this.DropdownItem = DropdownItem;
                return {
                    position: {my: 'right top', at: 'left top'}
                };
            }
        }

        it('flip left', () => {
            instance = mount(Component);
        });

        it('flip top', () => {
            instance = mount(Component);
            instance.set({
                position: {my: 'left top', at: 'left bottom'}
            });
        });

        it('fit left', () => {
            instance = mount(Component);
            instance.set({
                position: {my: 'right top', at: 'left top', collision: 'fit'}
            });
        });

        it('fit top', () => {
            instance = mount(Component);
            instance.set({
                position: {my: 'left top', at: 'left bottom', collision: 'fit'}
            });
        });

        it('flipfit left', () => {
            instance = mount(Component);
            instance.set({
                position: {my: 'right top', at: 'left top', collision: 'flipfit'}
            });
        });

        it('filpfit top', () => {
            instance = mount(Component);
            instance.set({
                position: {my: 'left top', at: 'left bottom', collision: 'flipfit'}
            });
        });
    });
});
