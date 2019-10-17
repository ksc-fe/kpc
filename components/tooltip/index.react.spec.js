import {configure} from 'kpc/components/utils';
import {Tooltip} from 'kpc/components/tooltip';
import React from 'react';
import ReactDOM from 'react-dom';
import {mount, unmount, getElement} from '../../test/utils';
import {Provider} from "react-redux";
import {createStore} from "redux";

describe('Tooltip', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        ReactDOM.render(null, container);
    });

    it('should wrap Tooltip when wrapDropdown is true', () => {
        configure({useWrapper: true});

        ReactDOM.render(
            <Tooltip content="content">
                <div>test</div>
            </Tooltip>,
            container
        );

        expect(container.innerHTML).to.matchSnapshot();

        configure({useWrapper: false});
    });

    it('should show tooltip that nests in Provider of react-redux', () => {
        const store = createStore(() => {});

        let dom;
        ReactDOM.render(
             <Provider store={store}>
                <div>
                    <Tooltip content="hello">
                        <i ref={i => dom = i}>test</i>
                    </Tooltip>
                </div>
            </Provider>,
            container
        );
        dom.click();

        const tooltip = getElement('.k-tooltip-content');
        expect(tooltip == null).to.be.false;
    });
});
