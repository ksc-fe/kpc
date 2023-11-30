import {createApp, render, defineComponent} from 'vue';
import {mount, unmount, dispatchEvent, getElement, wait, getElements} from '@/test/utils';
import {Dialog, Select} from '../../';

describe('Dialog', () => {
    let container: HTMLDivElement;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    afterEach(() => {
        render(null, container);
        document.body.removeChild(container);
    });

    it('call static method', async () => {
        const vue = createApp({
            template: `
                <div @click="test">click</div>
            `,
            methods: {
                test() {
                    Dialog.success({
                        content: 'test',
                        ref: i => this.dialog = i,
                    });
                },
                close() {
                    this.dialog.close();
                }
            }
        }).mount(container);

        (vue.$el as HTMLElement).click();
        await wait();
        expect(getElement('.k-dialog')).to.be.exist;

        (vue as any).close();
        await wait(500);
    });

    it('should mount select into dialog element rather than body', async () => {
        const Foo = defineComponent({
            template: `<Select />`,
            components: { Select },
        });

        const Bar = defineComponent({
            template: `<Dialog><Foo /></Dialog>`,
            components: { Dialog, Foo },
        });

        const vue = createApp({
            template: `<Bar />`,
            components: { Bar },
        }).mount(container);

        await wait();
        expect(document.querySelector('.k-select-menu')!.closest('.k-dialog')).to.be.exist;
   });

   it('show nested dialog', async () => {
        const Foo = defineComponent({
            template: `<Dialog :value="value">test</Dialog>`,
            components: { Dialog },
            props: {
                value: Boolean,
            }
        });

        const Bar = defineComponent({
            template: `
                <Dialog v-model="value">
                    <div @click="show = true">click</div>
                    <Foo :value="show" />
                </Dialog>
            `,
            components: { Dialog, Foo },
            data() {
                return { value: false, show: false };
            }
        });

        const vue = createApp({
            template: `<Bar ref="bar" />`,
            components: { Bar },
        })
        vue.mount(container);

        await wait();

        (vue._instance!.refs.bar as any).value = true;
        await wait();

        (vue._instance!.refs.bar as any).show = true;
        await wait();
        
        const [dialog1, dialog2] = getElements('.k-dialog');
        expect(dialog2.querySelector('.k-dialog-body')!.textContent).to.eql('test');
   });
});
