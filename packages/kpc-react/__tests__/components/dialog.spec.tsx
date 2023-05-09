import React, {createRef, useState} from 'react';
import * as ReactDOM from 'react-dom';
import {Dialog, normalize, Icon} from '../../';
import {Component} from 'intact-react';
import {getElement, wait, dispatchEvent} from '../../../../test/utils';

describe('Dialog', () => {
    let container: HTMLDivElement;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    afterEach(() => {
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    });

    it('should render vNode as content', async () => {
        Dialog.confirm({
            content: <div>test</div>,
            className: 'confirm-test',
            icon: <Icon className="test" />
        });
        await wait(100);

        expect(getElement('.confirm-test')!.innerHTML).to.matchSnapshot();

        getElement('.confirm-test .k-primary')!.click();
        await wait(600);
    });
});
