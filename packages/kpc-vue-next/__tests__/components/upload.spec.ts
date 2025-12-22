import {createApp, render, defineComponent, ref} from 'vue';
import {mount, unmount, dispatchEvent, getElement, wait} from '@/test/utils';
import {Upload} from '../../';

describe('Upload', () => {
    it('should handle bi-directional data binding for files', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        const test = shouldNotWarn();
        const Demo = defineComponent({
            setup() {
                const files = ref([{ name: 'name 1' }]);
                return { files };
            },
            components: { Upload },
            template: `<Upload v-model:files="files" :autoUpload="false" />{{ files }}`
        });
        const vue = createApp({
            template: `<Demo /> `,
            components: { Demo },
        }).mount(container);

        await wait();
        test();

        render(null, container);
        document.body.removeChild(container);
    });
});

function shouldNotWarn() {
    const warn = console.warn;
    const spy = sinon.spy((...args: any[]) => warn.apply(console, args));
    console.warn = spy;
    return () => {
        expect(spy.callCount).to.eql(0);
        console.warn = warn;
    }
}
