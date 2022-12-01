import React, {createRef} from 'react';
import * as ReactDOM from 'react-dom';
import {Drawer, Card, Button} from '../../';
import {Component} from 'intact-react';
import {getElement, wait, dispatchEvent} from '../../../../test/utils';

describe('Drawer', () => {
    it('should render react element correctly', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        class Test extends Component {
            static template = `<div ref="a">test</div>`;
            mounted() {
                expect(document.body.contains(this.refs.a));
            }
        }

        ReactDOM.render(
            <Card>
                <Drawer>
                    <div><Test /></div>
                </Drawer>
            </Card>,
            container
        );

        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    });

    it('should handle event correctly', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        const click1 = sinon.spy(() => console.log(1));
        const click2 = sinon.spy(() => console.log(2));

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
            </div>,
            container
        );

        const [element1, element2] = document.querySelectorAll<HTMLElement>('.click');

        dispatchEvent(element1, 'click');
        await wait();
        expect(click1.callCount).to.eql(1);

        dispatchEvent(element2, 'click');
        await wait();
        expect(click2.callCount).to.eql(1);

        // ReactDOM.unmountComponentAtNode(container);
        // document.body.removeChild(container);
    });
});
