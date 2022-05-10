import {createApp, render} from 'vue';
import {mount, unmount, dispatchEvent, getElement, wait} from '@/test/utils';
import {Select, Option} from '../../';

describe('Select', () => {
    it('handle trigger without props', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        const vue = createApp({
            template: `
                <div>
                    <Select>
                        <Option v-for="item in [1, 2]" :value="item">{{ item }}</Option>
                    </Select>
                </div>
            `,
            components: {
                Select, Option
            },
        }).mount(container);

        vue.$el.querySelector('.k-select').click();
        await wait();
        expect(getElement('.k-select-menu').textContent).to.eql('12');

        render(null, container);
        document.body.removeChild(container);
    });
});
