import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import MoveWrapper from 'kpc/components/moveWrapper';
import Intact from 'intact';
import {mount, unmount, getElement} from 'test/utils';
import {Dialog} from 'kpc/components/dialog';

describe('MoveWrapper', () => {
    let instance;

    afterEach((done) => {
        unmount(instance);
        setTimeout(done, 400);
    });

    describe('MoveWrapper', () => {
        it('custom container', () => {
            class Component extends Intact {
                @Intact.template({delimiters: ['{', '}']})
                static template = `
                    <MoveWrapper container={(placeholder) => placeholder.parentNode}>
                        <div>test</div>
                    </MoveWrapper>
                `;

                _init() {
                    this.MoveWrapper = MoveWrapper;
                }
            }

            class Demo extends Intact {
                @Intact.template()
                static template = `<div><Component /></div>`;
                _init() {
                    this.Component = Component;
                }
            }

            instance = mount(Demo);
            expect(instance.element.innerHTML).to.matchSnapshot();
        });

        it('should append to dialog default', () => {
            class Component extends Intact {
                @Intact.template({delimiters: ['{', '}']})
                static template = `
                    <MoveWrapper>
                        <div>test</div>
                    </MoveWrapper>
                `;

                _init() {
                    this.MoveWrapper = MoveWrapper;
                }
            }

            class Demo extends Intact {
                @Intact.template()
                static template = `<div><Dialog value={{ true }}><Component /></Dialog></div>`;
                _init() {
                    this.Component = Component;
                    this.Dialog = Dialog;
                }
            }

            instance = mount(Demo);
            console.log(getElement('.k-dialog').innerHTML);
            expect(getElement('.k-dialog').innerHTML).to.matchSnapshot();
        });
    });

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
