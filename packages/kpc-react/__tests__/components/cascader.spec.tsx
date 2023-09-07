import React, {createRef, useState} from 'react';
import * as ReactDOM from 'react-dom';
import {Cascader} from '../../';
import {Component} from 'intact-react';
import {getElement, wait, dispatchEvent} from '../../../../test/utils';

describe('Cascader', () => {
    let container: HTMLDivElement;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    afterEach(() => {
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    });

    it('should hide all menu on selected', async () => {
        function App() {
            const [value, setValue] = useState<string[][]>([]);
            return (
                <div>
                    <Cascader
                        data={[{value: 'a', label: 'a', children: [{value: 'b', label: 'b'}]}]}
                        value={value}
                        multiple
                        filterable
                        onChangeValue={(v) => {
                            setValue(v!);
                        }}
                    />
                </div>
            );
        }

        ReactDOM.render(<App />, container);

        const select = container.querySelector('.k-cascader') as HTMLElement;
        select.click();
        await wait();
        const dropdown1 = getElement('.k-cascader-menu')!;
        const [item1] = dropdown1.querySelectorAll<HTMLElement>(':scope > .k-dropdown-item');
        item1.click();
        await wait();
        const dropdown2 = getElement('.k-cascader-menu')!;
        const [item11] = dropdown2.querySelectorAll<HTMLElement>(':scope > .k-dropdown-item');
        item11.click();
        await wait(500);
        // should hide all menu
        expect(dropdown1.style.display).to.eql('none');
        expect(dropdown2.style.display).to.eql('none');
    });
})
