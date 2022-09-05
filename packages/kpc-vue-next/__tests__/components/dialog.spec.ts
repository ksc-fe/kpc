import {createApp, render} from 'vue';
import {mount, unmount, dispatchEvent, getElement, wait} from '@/test/utils';
import {Dialog} from '../../';

describe('Dialog', () => {
    it('test', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        const vue = createApp({
            template: `
                <div @click="test">click</div>
            `,
            methods: {
                test() {
                    this.dialog = Dialog.success({
                        content: 'test'
                    });
                },
                close() {
                    this.dialog.dialog.close();
                }
            }
        }).mount(container);

        (vue.$el as HTMLElement).click();
        await wait();
        expect(getElement('.k-dialog')).to.be.exist;

        (vue as any).close();
        await wait(500);

        render(null, container);
        document.body.removeChild(container);
    });
});
