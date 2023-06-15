import React, {createRef, useState, useEffect} from 'react';
import * as ReactDOM from 'react-dom';
import {Drawer, Card, Button, Select, Option, Cascader} from '../../';
import {Component} from 'intact-react';
import {getElement, wait, dispatchEvent} from '../../../../test/utils';

describe('Drawer', () => {
    let container: HTMLDivElement;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    afterEach(() => {
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    });

    it('should render react element correctly', async () => {
        class Test extends Component {
            static template = `<div ref="a">test</div>`;
            mounted() {
                expect(document.body.contains(this.refs.a));
            }
        }

        function App() {
            const [show, setShow] = useState(false);
            return <Card>
                <div onClick={() => setShow(true)}>show</div>
                <Drawer value={show} mode="destroy">
                    <div><Test /></div>
                </Drawer>
            </Card>;
        }

        ReactDOM.render(<App />, container);
    });

    it('should handle event correctly', async () => {
        const click1 = sinon.spy(() => console.log(1));
        const click2 = sinon.spy(() => console.log(2));
        const click3 = sinon.spy(() => console.log(3));

        ReactDOM.render(
            <div>
                <Drawer value={true} title="1">
                    <div className="click" onClick={click1}>click</div>
                </Drawer>
                <Drawer value={true} placement="left" title="2" 
                    onClose={() => console.log('click')}
                    slotFooter={<Button onClick={e => console.log(1)}>click</Button>}
                >
                    <Card>
                        <div className="click" onClick={click2}>click</div>
                    </Card>
                </Drawer>
                <Drawer value={true} title="3">
                    <div>
                        <Card>
                            <div className="click" onClick={click3}>click</div>
                        </Card>
                    </div>
                </Drawer>
            </div>,
            container
        );

        const [element1, element2, element3] = document.querySelectorAll<HTMLElement>('.click');

        dispatchEvent(element1, 'click');
        await wait();
        expect(click1.callCount).to.eql(1);

        dispatchEvent(element2, 'click');
        await wait();
        expect(click2.callCount).to.eql(1);

        dispatchEvent(element3, 'click');
        await wait();
        expect(click3.callCount).to.eql(1);
    });

    it('$update call before mountedQueue in $receive', async () => {
        function App() {
            const [state, setState] = useState(false);
            useEffect(() => {
                setState(true);
            }, []);
            return <Drawer value={true} mode="destroy">
                <div>
                    <Card>
                        <div>react element</div>
                        <Select container={parentElement => parentElement.closest('.k-dialog-body')!}>
                            {state ? <Option value="1">1</Option> : null}
                        </Select>
                    </Card>
                </div>
            </Drawer>
        }

        ReactDOM.render(<App />, container);

        await wait();
        expect(document.querySelector<HTMLElement>('.k-dialog-body .k-select-menu')!.textContent).to.eql('1');
    });

    it('test', async () => {
        function Test({value}: {value: boolean}) {
            const [data, setData] = useState<any[]>([])

            useEffect(() => {
                if (!value) return;
                setData([{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'haidian',
                            label: '海淀区'
                        },
                        {
                            value: 'chaoyang',
                            label: '朝阳区'
                        },
                        {
                            value: 'fengtai',
                            label: '丰台区'
                        }
                    ]
                }]);
            }, [value]);

            return  (
                <Card>
                    {value && (
                        <Wrapper>
                            <Cascader data={data} />
                        </Wrapper>
                    )}
                </Card>
            );
        }

        function Wrapper(props: any) {
            return <div>
                <Card><div className="test">a</div></Card>
                <div>{props.children}</div>
            </div>
        }

        function App() {
            const [value, setValue] = useState(false);

            return <>
                <div onClick={() => setValue(true)} className="click">show</div>
                <Test value={value} />
            </>
        }

        ReactDOM.render(<App />, container);


        const click = container.querySelector<HTMLElement>('.click')!;
        click.click();
        await wait();
        expect(container.querySelector<HTMLElement>('.test')).to.be.exist;
    });
});
