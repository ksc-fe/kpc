import Intact from 'intact';
import {
    Diagram, DRectangle, DSquare, DCircle,
    DEllipse, DLine, DImage, DText, DDiamond,
    DFlowLayout, DTreeLayout, DOrganicLayout, DCircleLayout,
    DPartitionLayout, DStackLayout,
} from 'kpc/components/diagram';
import {Button} from 'kpc/components/button';
import {mount, unmount, dispatchEvent} from 'test/utils';

class Demo extends Intact {
    _init() {
        this.Diagram = Diagram;
        this.DFlowLayout = DFlowLayout;
        this.DTreeLayout = DTreeLayout;
        this.DPartitionLayout = DPartitionLayout;
        this.DStackLayout = DStackLayout;
        this.DRectangle = DRectangle;
        this.DCircle = DCircle;
        this.DLine = DLine;
        this.Button = Button;
        this.DDiamond = DDiamond;
        this.DEllipse = DEllipse;
        this.DSquare = DSquare;
    }
}

describe('Diagram', () => {
    let instance;

    beforeEach(() => {
        unmount(instance); 
    });

    it('should update type of DFlowLayout', () => {
        class Component extends Demo {
            @Intact.template()
            static template = `
                <Diagram>
                    <DFlowLayout type={{ self.get('type') }}>
                        <DDiamond key="1" style={{ {fillColor: 'red'} }} />
                        <DCircle key="2" />
                        <DLine from="1" to="2" />
                    </DFlowLayout>
                </Diagram>
            `;
            defaults() {
                return {type: 'vertical'}
            }
        }
        instance = mount(Component);
        expect(instance.element.innerHTML).to.matchSnapshot();

        instance.set('type', 'horizontal');
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('should update type of DTreeLayout', () => {
        class Component extends Demo {
            @Intact.template()
            static template = `
                <Diagram>
                    <DTreeLayout type={{ self.get('type') }}>
                        <DRectangle key="1" />
                        <DCircle key="2" />
                        <DCircle key="3" />
                        <DLine from="1" to="2" />
                        <DLine from="1" to="3" />
                    </DTreeLayout>
                </Diagram>
            `;
            defaults() {
                return {type: 'vertical'}
            }
        }
        instance = mount(Component);
        expect(instance.element.innerHTML).to.matchSnapshot();

        instance.set('type', 'horizontal');
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('should update layout when layout changed', () => {
        class Component extends Demo {
            @Intact.template()
            static template = `
                var shapes = [
                    <DRectangle key="1" />,
                    <DCircle key="2" />,
                    <DCircle key="3" />,
                    <DCircle />,
                    <DLine from="1" to="2" />,
                    <DLine from="1" to="3" />,
                ];
                <Diagram>
                    <DTreeLayout v-if={{ self.get('type') === 'tree' }}>
                        {{ shapes }}
                    </DTreeLayout>
                    <DFlowLayout v-else>
                        {{ shapes }}
                    </DFlowLayout>
                </Diagram>
            `;
            defaults() {
                return {type: 'tree'}
            }
        }
        instance = mount(Component);
        expect(instance.element.innerHTML).to.matchSnapshot();

        instance.set('type', 'flow');
        expect(instance.element.innerHTML).to.matchSnapshot();

        instance.set('type', 'tree');
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('should render kpc components in shape', () => {
        class Component extends Demo {
            @Intact.template()
            static template = `
                <Diagram>
                    <DRectangle>
                        <Button ev-click={{ self._onClick }} ref="button">click</Button>
                        <div>click counts: {{ self.get('counts') }}</div>
                    </DRectangle>
                </Diagram>
            `;
            defaults() {
                return {counts: 0};
            }
            _onClick() {
                this.set('counts', this.get('counts') + 1);
            }
        }
        instance = mount(Component);
        expect(instance.element.innerHTML).to.matchSnapshot();

        instance.refs.button.element.click();
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('should remove element in shape correctly', () => {
        const destroy = sinon.spy(() => console.log('destroy'));
        class Component extends Demo {
            @Intact.template()
            static template = `
                <Diagram>
                    <DRectangle key="1" v-if={{ self.get('show') }}>
                        <Button ev-$destroyed={{ self._onDestroy }}>test</Button>
                    </DRectangle>
                </Diagram>
            `;
            defaults() {
                return {show: true};
            }
            _onDestroy() {
                destroy();
            }
        }
        instance = mount(Component);
        instance.set('show', false);
        expect(instance.element.innerHTML).to.matchSnapshot();
        expect(destroy.callCount).to.eql(1);
    });

    it('should replace shape correctly', () => {
        class Component extends Demo {
            @Intact.template()
            static template = `
                <Diagram>
                    <DRectangle v-if={{ self.get('show') }}>
                        <DCircle />
                    </DRectangle>
                    <DCircle v-else>
                        <DRectangle />
                    </DCircle>
                </Diagram>
            `;
            defaults() {
                return {show: true};
            }
        }
        instance = mount(Component);
        instance.set('show', false);
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('should update shape when props changed', () => {
        class Component extends Demo {
            @Intact.template()
            static template = `
                var width = self.get('width');
                var border = self.get('borderStyle');
                var rounded = self.get('rounded');
                var invert = self.get('invert');
                <Diagram>
                    <DFlowLayout left={{ width }}>
                        <DRectangle key="1" 
                            width={{ width }} 
                            html={{ width }}
                            borderStyle={{ border }} 
                            rounded={{ rounded }}
                        />
                        <DCircle key="2" width={{ width }} borderStyle={{ border }}  />
                        <DLine from={{ invert ? "2" : "1" }} to={{ invert ? "1" : "2" }} pattern={{ border }} />
                    </DFlowLayout>
                </Diagram>
            `;
            defaults() {
                return {width: 100, borderStyle: 'solid', rounded: 0, invert: false};
            }
        }
        instance = mount(Component);
        expect(instance.element.innerHTML).to.matchSnapshot();

        instance.set({width: 200, borderStyle: 'dashed', rounded: 5, invert: true});
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('should render nested layout correctly', () => {
        class Component extends Demo {
            @Intact.template()
            static template = `
                <Diagram>
                    <DRectangle width="300" height="200">
                        <DPartitionLayout type="vertical">
                            <DRectangle>
                                <DStackLayout fill>
                                    <DCircle />
                                    <DDiamond />
                                </DStackLayout>
                            </DRectangle>
                            <DEllipse />
                        </DPartitionLayout>
                    </DRectangle>
                </Diagram>
            `;
        }
        instance = mount(Component);
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('should change state of shape correctly', () => {
        const onChange = sinon.spy((cells) => console.log(cells));
        const onLabelChange = sinon.spy((cell, newValue, oldValue) => console.log(cell, newValue, oldValue));
        class Component extends Demo {
            @Intact.template()
            static template = `
                <Diagram 
                    ev-selectionChange={{ self._onChange }}
                    ev-labelChange={{ self._onLabelChange }}
                >
                    <DFlowLayout>
                        <DRectangle key="1" data={{ 1 }} selectable movable connectable />
                        <DCircle key="2" data="2" editable />
                        <DSquare selectable resizable rotatable connectable />
                        <DLine from="1" to="2" />
                    </DFlowLayout>
                </Diagram>
            `;
            _onChange(cells) {
                onChange(cells);
            }
            _onLabelChange(cell, newValue, oldValue) {
                onLabelChange(cell, newValue, oldValue);
            }
        }
        instance = mount(Component);

        // selectable
        let [rect, square] = instance.element.querySelectorAll('rect');
        dispatchEvent(rect, 'pointerdown');
        expect(instance.element.innerHTML).to.matchSnapshot();
        dispatchEvent(rect, 'pointerup');
        let ellipse = instance.element.querySelector('ellipse');
        dispatchEvent(ellipse, 'pointerdown');
        expect(instance.element.innerHTML).to.matchSnapshot();
        dispatchEvent(ellipse, 'pointerup');
        expect(onChange.callCount).to.eql(2);

        // movable
        dispatchEvent(rect, 'pointerdown', {clientX: 0, clientY: 0});
        dispatchEvent(rect, 'pointermove', {clientX: 10, clientY: 10});
        dispatchEvent(rect, 'pointerup', {clientX: 10, clientY: 10});
        expect(instance.element.innerHTML).to.matchSnapshot();
        dispatchEvent(ellipse, 'pointerdown', {clientX: 0, clientY: 0});
        dispatchEvent(ellipse, 'pointermove', {clientX: 10, clientY: 10});
        dispatchEvent(ellipse, 'pointerup', {clientX: 10, clientY: 10});
        expect(instance.element.innerHTML).to.matchSnapshot();

        // resizable & rotatable
        dispatchEvent(square, 'pointerdown');
        dispatchEvent(square, 'pointerup');
        expect(instance.element.innerHTML).to.matchSnapshot();

        // editable
        dispatchEvent(ellipse, 'dblclick');
        const editor = instance.element.querySelector('.mxCellEditor');
        editor.innerHTML = 'test';
        dispatchEvent(instance.element.querySelector('.k-canvas'), 'pointerdown');
        expect(onLabelChange.callCount).to.eql(1);
        dispatchEvent(rect, 'dblclick');
        expect(instance.element.innerHTML).to.matchSnapshot();
    });
});

