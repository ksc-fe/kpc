import {configure} from 'kpc/components/utils';
import {Tooltip} from 'kpc/components/tooltip';
import React from 'react';
import ReactDOM from 'react-dom';
import {mount, unmount} from '../../test/utils';

describe('Tooltip', () => {
    it('should wrap Tooltip when wrapDropdown is true', () => {
        configure({useWrapper: true});
        const container = document.createElement('div');
        document.body.appendChild(container);

        ReactDOM.render(
            <Tooltip content="content">
                <div>test</div>
            </Tooltip>,
            container
        );

        expect(container.innerHTML).to.matchSnapshot();

        configure({useWrapper: false});
        document.body.removeChild(container);
    });
});
