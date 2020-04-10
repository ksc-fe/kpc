import React from 'react';
import ReactDOM from 'react-dom';
import {mount, unmount, dispatchEvent} from '../../test/utils';
import {Button} from 'kpc/components/button';

describe('Button', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
    });

    it('should trigger click even it is stopped propagation', () => {
        const click = sinon.spy(() => console.log('click'));
        ReactDOM.render(
            <div onClick={e => e.stopPropagation()}>
                <Button onClick={click}>Click</Button>
            </div>,
            container
        );

        const button = container.querySelector('button');
        dispatchEvent(button, 'click');
        expect(click.callCount).to.eql(1);
    });

    it('should show loading correctly when it has react element', () => {
        class Demo extends React.Component {
            state = {loading: false};

            render() {
                return <Button loading={this.state.loading}>
                    <span>test</span>
                </Button>
            }
        }

        let ref;
        ReactDOM.render(<Demo ref={i => ref = i}/>, container);

        ref.setState({loading: true});
    });
});
