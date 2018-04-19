import {Dropdown, DropdownMenu, DropdownItem} from '../dropdown';
import Intact from 'intact';
import {mount} from 'test/utils';

describe('MoveWrapper', () => {
    describe('Position', () => {
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
            const instance = mount(Component);
        });

        it('flip top', () => {
            const instance = mount(Component);
            instance.set({
                position: {my: 'left top', at: 'left bottom'}
            });
        });

        it('fit left', () => {
            const instance = mount(Component);
            instance.set({
                position: {my: 'right top', at: 'left top', collision: 'fit'}
            });
        });

        it('fit top', () => {
            const instance = mount(Component);
            instance.set({
                position: {my: 'left top', at: 'left bottom', collision: 'fit'}
            });
        });

        it('flipfit left', () => {
            const instance = mount(Component);
            instance.set({
                position: {my: 'right top', at: 'left top', collision: 'flipfit'}
            });
        });

        it('filpfit top', () => {
            const instance = mount(Component);
            instance.set({
                position: {my: 'left top', at: 'left bottom', collision: 'flipfit'}
            });
        });

    });
});
