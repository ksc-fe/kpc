import {Component} from 'intact';
import {
    Diagram, DRectangle, DSquare, DCircle,
    DEllipse, DLine, DImage, DText, DDiamond,
    DFlowLayout, DTreeLayout, DOrganicLayout, DCircleLayout,
    DPartitionLayout, DStackLayout, DDocument, DParallelogram,
    DHexagon, DCallout,
} from 'kpc';
import {Button} from '../button';
import {mount, unmount, dispatchEvent, wait} from 'test/utils';
import LayoutDemo from '~/components/diagram/demos/layout';
import mx from './mxgraph';

const {mxClient} = mx;
const downName = mxClient.IS_POINTER ? 'pointerdown' : 'mousedown';
const upName = mxClient.IS_POINTER ? 'pointerup' : 'mouseup';
const moveName = mxClient.IS_POINTER ? 'pointermove' : 'mousemove';

class BaseDemo<P = {}> extends Component<P> {
    private Diagram = Diagram;
    private DFlowLayout = DFlowLayout;
    private DTreeLayout = DTreeLayout;
    private DPartitionLayout = DPartitionLayout;
    private DStackLayout = DStackLayout;
    private DRectangle = DRectangle;
    private DCircle = DCircle;
    private DLine = DLine;
    private Button = Button;
    private DDiamond = DDiamond;
    private DEllipse = DEllipse;
    private DSquare = DSquare;
    private DDocument = DDocument;
    private DParallelogram = DParallelogram;
    private DHexagon = DHexagon;
    private DCallout = DCallout;
}

describe('Diagram', () => {
    afterEach(() => {unmount()});

    it('should update type of DFlowLayout', async () => {
        class Demo extends BaseDemo<{type: string}> {
            static template = `
                const {Diagram, DFlowLayout, DDiamond, DCircle, DLine} = this;
                <Diagram>
                    <DFlowLayout type={this.get('type')}>
                        <DDiamond key="1" style={{fillColor: 'red'}} />
                        <DCircle key="2" />
                        <DLine from="1" to="2" />
                    </DFlowLayout>
                </Diagram>
            `;
            static defaults() {
                return {type: 'vertical'}
            }
        }
        const [instance, element] = mount(Demo);
        expect(element.innerHTML).to.matchSnapshot();

        instance.set('type', 'horizontal');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('should update type of DTreeLayout', async () => {
        class Demo extends BaseDemo<{type: string}> {
            static template = `
                const {Diagram, DTreeLayout, DRectangle, DCircle, DLine} = this;
                <Diagram>
                    <DTreeLayout type={this.get('type')}>
                        <DRectangle key="1" />
                        <DCircle key="2" />
                        <DCircle key="3" />
                        <DLine from="1" to="2" />
                        <DLine from="1" to="3" />
                    </DTreeLayout>
                </Diagram>
            `;
            static defaults() {
                return {type: 'vertical'}
            }
        }
        const [instance, element] = mount(Demo);
        expect(element.innerHTML).to.matchSnapshot();

        instance.set('type', 'horizontal');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('should update layout when layout changed', async () => {
        class Demo extends BaseDemo<{type: string}> {
            static template = `
                const {DRectangle, DCircle, DLine, Diagram, DTreeLayout, DFlowLayout} = this;
                var shapes = [
                    <DRectangle key="1" />,
                    <DCircle key="2" />,
                    <DCircle key="3" />,
                    <DCircle />,
                    <DLine from="1" to="2" />,
                    <DLine from="1" to="3" />,
                ];
                <Diagram>
                    <DTreeLayout v-if={this.get('type') === 'tree'}>
                        {shapes}
                    </DTreeLayout>
                    <DFlowLayout v-else>
                        {shapes}
                    </DFlowLayout>
                </Diagram>
            `;
            static defaults() {
                return {type: 'tree'}
            }
        }
        const [instance, element] = mount(Demo);
        const tmp = element.innerHTML;
        expect(tmp).to.matchSnapshot();

        instance.set('type', 'flow');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        instance.set('type', 'tree');
        await wait();
        expect(element.innerHTML).to.eql(tmp);
    });

    it('should render kpc components in shape', async () => {
        class Demo extends BaseDemo<{counts: number}> {
            static template = `
                const {Diagram, DRectangle, Button} = this;
                <Diagram>
                    <DRectangle>
                        <Button ev-click={this._onClick.bind(this)} ref="button">click</Button>
                        <div>click counts: {this.get('counts')}</div>
                    </DRectangle>
                </Diagram>
            `;
            static defaults() {
                return {counts: 0};
            }
            _onClick() {
                this.set('counts', this.get('counts') + 1);
            }
        }
        const [instance, element] = mount(Demo);
        expect(element.innerHTML).to.matchSnapshot();

        instance.refs.button.elementRef.value.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('should remove element in shape correctly', async () => {
        const destroy = sinon.spy(() => console.log('destroy'));
        class Demo extends BaseDemo<{show: boolean}> {
            static template = `
                const {Diagram, DRectangle, Button} = this;
                <Diagram>
                    <DRectangle key="1" v-if={this.get('show')}>
                        <Button ev-$beforeUnmount={this._onDestroy}>test</Button>
                    </DRectangle>
                </Diagram>
            `;
            static defaults() {
                return {show: true};
            }
            _onDestroy() {
                destroy();
            }
        }
        const [instance, element] = mount(Demo);
        instance.set('show', false);
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(destroy.callCount).to.eql(1);
    });

    it('should replace shape correctly', async () => {
        class Demo extends BaseDemo<{show: boolean}> {
            static template = `
                const {Diagram, DRectangle, DCircle} = this;
                <Diagram>
                    <DRectangle v-if={this.get('show')}>
                        <DCircle />
                    </DRectangle>
                    <DCircle v-else>
                        <DRectangle />
                    </DCircle>
                </Diagram>
            `;
            static defaults() {
                return {show: true};
            }
        }
        const [instance, element] = mount(Demo);
        instance.set('show', false);
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('should update shape when props changed', async () => {
        class Demo extends BaseDemo<{width: number, borderStyle: string, rounded: number, invert: boolean}> {
            static template = `
                const {Diagram, DFlowLayout, DRectangle, DCircle, DLine} = this;
                var width = this.get('width');
                var border = this.get('borderStyle');
                var rounded = this.get('rounded');
                var invert = this.get('invert');
                <Diagram>
                    <DFlowLayout left={width}>
                        <DRectangle key="1"
                            width={width}
                            html={width}
                            strokeStyle={border}
                            rounded={rounded}
                        />
                        <DCircle key="2" width={width} strokeStyle={border}  />
                        <DLine from={invert ? "2" : "1"} to={invert ? "1" : "2"} strokeStyle={border} />
                    </DFlowLayout>
                </Diagram>
            `;
            static defaults() {
                return {width: 100, borderStyle: 'solid', rounded: 0, invert: false};
            }
        }
        const [instance, element] = mount(Demo);
        expect(element.innerHTML).to.matchSnapshot();

        instance.set({width: 200, borderStyle: 'dashed', rounded: 5, invert: true});
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('should render nested layout correctly', () => {
        class Demo extends BaseDemo {
            static template = `
                const {
                    Diagram, DRectangle, DPartitionLayout,
                    DStackLayout, DCircle, DDiamond, DEllipse
                } = this;
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
        const [instance, element] = mount(Demo);
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('should change state of shape correctly', async () => {
        const onChange = sinon.spy((cells: any[]) => console.log(cells));
        const onLabelChange = sinon.spy((cell: any, newValue: string, oldValue: string) => console.log(cell, newValue, oldValue));
        class Demo extends BaseDemo {
            static template = `
                const {Diagram, DFlowLayout, DRectangle, DCircle, DSquare, DLine} = this;
                <Diagram
                    ev-selectionChanged={this._onChange}
                    ev-labelChanged={this._onLabelChange}
                >
                    <DFlowLayout>
                        <DRectangle key="1" data={1} selectable movable connectable />
                        <DCircle key="2" data="2" editable />
                        <DSquare selectable resizable rotatable connectable />
                        <DLine from="1" to="2" />
                    </DFlowLayout>
                </Diagram>
            `;
            _onChange(cells: any[]) {
                onChange(cells);
            }
            _onLabelChange(cell: any, newValue: string, oldValue: string) {
                onLabelChange(cell, newValue, oldValue);
            }
        }
        const [instance, element] = mount(Demo);

        // selectable
        let [rect, square] = element.querySelectorAll<SVGRectElement>('rect');
        dispatchEvent(rect, downName);
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        dispatchEvent(rect, upName);
        await wait();
        let ellipse = element.querySelector('ellipse')!;
        dispatchEvent(ellipse, downName);
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        dispatchEvent(ellipse, upName);
        await wait();
        expect(onChange.callCount).to.eql(2);
        expect(onChange.calledWith([])).to.be.true;

        // movable
        dispatchEvent(rect, downName, {clientX: 0, clientY: 0});
        dispatchEvent(rect, moveName, {clientX: 10, clientY: 10});
        dispatchEvent(rect, upName, {clientX: 10, clientY: 10});
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(element.querySelector('rect')!.y.baseVal.value).to.eql(10);
        dispatchEvent(ellipse, downName, {clientX: 0, clientY: 0});
        dispatchEvent(ellipse, moveName, {clientX: 10, clientY: 10});
        dispatchEvent(ellipse, upName, {clientX: 10, clientY: 10});
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(element.contains(square)).to.be.true;
        expect(square.y.baseVal.value).to.eql(0);

        // resizable & rotatable
        dispatchEvent(square, downName);
        dispatchEvent(square, upName);
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        // editable
        dispatchEvent(ellipse, 'dblclick');
        await wait();
        const editor = element.querySelector('.mxCellEditor') as HTMLElement;
        editor.innerHTML = 'test';
        dispatchEvent(element.querySelector<HTMLElement>('.k-diagram-canvas')!, downName);
        expect(onLabelChange.callCount).to.eql(1);
        dispatchEvent(rect, 'dblclick');
        expect(element.innerHTML).to.matchSnapshot();
        expect(element.querySelector('.mxCellEditor')).to.be.null;
    });

    it('test all layouts', async () => {
        const [instance, element] = mount(LayoutDemo);

        instance.set('layout', 'circle');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        instance.set('layout', 'radial');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        instance.set('layout', 'organic'); // the result is random
    });

    it('should generate connect points of shapes', async () => {
         class Demo extends BaseDemo {
            static template = `
                const {Diagram, DFlowLayout, DParallelogram, DHexagon, DCallout} = this;
                <Diagram>
                    <DFlowLayout>
                        <DParallelogram connectable />
                        <DHexagon connectable />
                        <DCallout connectable />
                    </DFlowLayout>
                </Diagram>
            `;
        }
        const [instance, element] = mount(Demo);

        const [parallelogram, hexagon, callout] = element.querySelectorAll('path');
        dispatchEvent(parallelogram, moveName);
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        dispatchEvent(hexagon, moveName);
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        dispatchEvent(callout, moveName);
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('should fix points of line', async () => {
         class Demo extends BaseDemo<{type: string}> {
            static template = `
                const {Diagram, DFlowLayout, DRectangle, DLine} = this;
                <Diagram>
                    <DFlowLayout top="20">
                        <DRectangle key="1" />
                        <DRectangle key="2" />
                        <DLine from="1" to="2" exit={[0.5, 0]} entry={[0.5, 1]}
                            type={this.get('type')}
                            label={this.get('type')}
                        />
                    </DFlowLayout>
                </Diagram>
            `;

            static defaults() {
                return {type: 'curved'};
            }
        }

        const [instance, element] = mount(Demo);
        expect(element.innerHTML).to.matchSnapshot();
        instance.set('type', 'sharp');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });
});

