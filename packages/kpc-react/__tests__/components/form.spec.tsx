import React, {createRef} from 'react';
import * as ReactDOM from 'react-dom';
import { Tooltip, Form, FormItem } from '../../';
import {getElement, wait, dispatchEvent} from '../../../../test/utils';

describe('Form', () => {
    it('should show Tooltip in append slot', async () => {
        const click = sinon.spy(() => console.log(1));
        const container = document.createElement('div');
        document.body.appendChild(container);

        ReactDOM.render(
            <Form>
                <FormItem
                    label="测试"
                    value="1"
                    slotAppend={
                        <Tooltip content="测试">
                            <i className="k-icon ion-ionic" />
                        </Tooltip>
                    }
                />
            </Form>,
            container
        );

        const trigger = container.querySelector('.k-icon') as HTMLElement;
        expect(trigger).to.be.exist;
        
        dispatchEvent(trigger, 'mouseover');
        await wait();
        expect(getElement('.k-tooltip-content')).to.be.exist;

        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    });
});
