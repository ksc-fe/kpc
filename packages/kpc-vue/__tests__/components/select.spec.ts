import Vue from 'vue';
import {mount, unmount, dispatchEvent, getElement, wait} from '@/test/utils';
import {Select, Option, Tooltip, Dropdown, DropdownMenu, Card} from '../../';

describe('Select', () => {
    it('should filter Option which wrapped by Tooltip', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        const vue = new Vue({
            el: container,
            template: `
                <Card>
                    <Select searchable ref="select">
                        <Option value="Monday">
                            <Tooltip content="星期一">星期一</Tooltip>
                        </Option>
                        <Option value="Tuesday">
                            <Tooltip content="星期二">星期二</Tooltip>
                        </Option>
                    </Select>
                </Card>
            `,
            components: {
                Select, Option, Tooltip, Dropdown, DropdownMenu, Card, 
            },
        });

        const select = vue.$refs.select as Select;
        select.set('show', true);
        await wait();

        const dropdown = getElement('.k-select-menu')!;
        select.input.onInput('s');
        await wait();
        expect(dropdown.querySelector('.k-select-body').textContent.trim()).to.eql('星期二');


        select.input.onInput('');
        await wait();
        expect(dropdown.querySelector('.k-select-body').textContent.trim()).to.eql('星期一 星期二');

        vue.$destroy();
        document.body.removeChild(vue.$el);
    });
});
