import React, {createRef} from 'react';
import * as ReactDOM from 'react-dom';
import {Drawer, Card, Button} from '../../';
import {Component} from 'intact-react';

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
});
