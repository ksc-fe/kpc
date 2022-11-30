import React, {createRef, useState} from 'react';
import * as ReactDOM from 'react-dom';
import { Select, OptionGroup, Option } from '../../';
import {getElement, wait, dispatchEvent} from '../../../../test/utils';

describe('Select', () => {
    it('should conrrectly show value in filterable mode', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        const Test = () => {
            const [value, setValue] = useState('');
            const onChangeValue = (v: string | null | undefined) => {
                setValue(v ?? '');
            }

            return <Select
                value={value}
                onChangeValue={onChangeValue}
                card
                filterable
            >
                <OptionGroup slotLabel={<div>xxx</div>}>
                    <Option value="q">Q</Option>
                    <Option value="p">P</Option>
                </OptionGroup>
            </Select>;
        }
        ReactDOM.render(<Test />, container);

        const trigger = container.querySelector('.k-select') as HTMLElement;
        trigger.click();

        await wait();
        const dropdown = getElement('.k-select-menu')!;
        dropdown.querySelector<HTMLElement>('.k-dropdown-item')!.click();

        await wait();
        expect(container.querySelector<HTMLInputElement>('.k-input-inner')!.value).to.eql('Q');

        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    });
});
