import {configure} from 'kpc/components/utils';
import {Dropdown, DropdownItem, DropdownMenu} from 'kpc/components/dropdown';
import React from 'react';
import ReactDOM from 'react-dom';
import {mount, unmount} from '../../test/utils';

describe('Dropdown', () => {
    it('should wrap dropdown when wrapDropdown is true', () => {
        configure({wrapDropdown: true});
        const container = document.createElement('div');
        document.body.appendChild(container);

        ReactDOM.render(
            <div>
                <Dropdown>
                    <div>test</div>
                    <DropdownMenu>
                        <DropdownItem>option 1</DropdownItem>
                        <DropdownItem>option 2</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>,
            container
        );

        expect(container.innerHTML).to.matchSnapshot();

        configure({wrapDropdown: false});
        document.body.removeChild(container);
    });
});
