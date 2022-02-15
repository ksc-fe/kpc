import React, {createRef} from 'react';
import * as ReactDOM from 'react-dom';
import {Dropdown, DropdownMenu, DropdownItem} from '../../';
import {getElement, wait} from '../../../../test/utils';

describe('Dropdown', () => {
    it('should save original events', async () => {
        const click = sinon.spy(() => console.log(1));
        const container = document.createElement('div');
        document.body.appendChild(container);

        const button = createRef<HTMLButtonElement>();
        ReactDOM.render(
            <div>
                <Dropdown>
                    <button onClick={click} ref={button}>hover</button>
                    <DropdownMenu>
                        <DropdownItem>item 1</DropdownItem>
                        <DropdownItem>item 2</DropdownItem>
                        <DropdownItem>item 3</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>,
            container
        );

        button.current!.click();
        expect(click.callCount).to.eql(1);
        await wait();
        expect(getElement('.k-dropdown-menu')).to.be.exist;
    });
});
