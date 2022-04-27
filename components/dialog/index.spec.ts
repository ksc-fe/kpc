import {Component} from 'intact';
import {Dialog, BaseDialog, DialogProps} from './';
import {getElement, mount, unmount, dispatchEvent, wait} from '../../test/utils';
import BasicDemo from '~/components/dialog/demos/basic';
import AsyncCloseDemo from '~/components/dialog/demos/asyncClose';
import TerminateDemo from '~/components/dialog/demos/terminate';
import DestroyDemo from '~/components/dialog/demos/destroy';

describe('Dialog', () => {
    afterEach((done) => {
        unmount();
        setTimeout(done, 500);
    });

    function expectDialog() {
        const dialog = getElement('.k-dialog')!;
        expect(dialog).to.exist;
        expect(getElement('.k-dialog-wrapper')!.innerHTML.replace(/[\d\.]+px/g, '')).to.matchSnapshot();

        return dialog;
    }

    it('should show dialog correctly', async () => {
        const [instance] = mount(BasicDemo);
        const dialog = instance.refs.__demo as Dialog;
        await dialog.show();
        expectDialog();
    });

    it('should show correctly when render with value is true', () => {
        class Demo extends Component {
            static template = `const {Dialog} = this; <Dialog value={true}>test</Dialog>`;
            private Dialog = Dialog;
        }
        const [instance] = mount(Demo);
        expectDialog();
    });

    it('show dialog as instance', async () => {
        class MyDialog extends BaseDialog<DialogProps & {data: number}> {
            static template = `<t:super><b:body>Dialog Instance {this.get('data')}</b:body></t:super>`
        }
        const dialog = new MyDialog({data: 1});
        await dialog.show();

        expectDialog();

        dialog.close();
        await wait(500);
        expect(getElement('.k-dialog')).to.be.undefined;
    });

    it('should update correctly', async () => {
        class Demo extends Component<{content: string}> {
            static template = `
                var Dialog = this.Dialog;
                <Dialog value={true} ref="dialog">{this.get('content')}</Dialog>
            `
            static defaults() {
                return {
                    content: 'a'
                }
            }

            private Dialog = Dialog;
        }

        const [instance] = mount(Demo);
        instance.set('content', 'b');
        await wait();
        expect(getElement('.k-dialog-body')!.innerText).to.eql('b');
    });

    it('should prepend conent to block correctly', () => {
        class Demo extends Component {
            static template = `
                var Dialog = this.Dialog;
                <Dialog value={true} ref="dialog">
                    <b:footer>
                        dialog footer
                        {$super()}
                    </b:footer>
                </Dialog>
            `
            private Dialog = Dialog;
        }

        const [instance] = mount(Demo);
        expect(getElement('.k-dialog-footer')!.innerText).to.eql('dialog footer 确定取消');
    });

    it('basic test', async () => {
        const [instance, element] = mount(BasicDemo);
        const btn = element.querySelector('.k-btn') as HTMLElement;

        dispatchEvent(btn, 'click');
        await wait();
        const dialog = expectDialog();

        // click ok
        dispatchEvent(dialog.querySelector('.k-dialog-ok') as HTMLElement, 'click');
        expect(instance.get('show')).be.false;

        // click cancel
        dispatchEvent(btn, 'click');
        await wait();
        dispatchEvent(dialog.querySelector('.k-dialog-cancel') as HTMLElement, 'click');
        expect(instance.get('show')).be.false;

        // press esc to close
        dispatchEvent(btn, 'click');
        await wait();
        dispatchEvent(document, 'keydown', {keyCode: 27});
        expect(instance.get('show')).be.false;
        await wait(500);
        expect(document.body.getAttribute('style')).to.be.null;
    });

    it('methods test', async () => {
        const [instance, element] = mount(BasicDemo);
        const btn = element.querySelector('.k-btn') as HTMLElement;

        dispatchEvent(btn, 'click');
        await wait();
        const dialog = getElement('.k-dialog')!;
        const ok = dialog.querySelector('.k-dialog-ok') as HTMLElement;

        const demo = instance.refs.__demo as Dialog;
        demo.showLoading();
        await wait();
        expect(ok.classList.contains('k-loading')).to.be.true;
        demo.hideLoading();
        await wait();
        expect(ok.classList.contains('k-loading')).to.be.false;
        demo.disableOk();
        await wait();
        expect(ok.classList.contains('k-disabled')).to.be.true;
        demo.enableOk();
        await wait();
        expect(ok.classList.contains('k-disabled')).to.be.false;
    });

    it('demos test', async function() {
        this.timeout(0);
        const req = require.context('~/components/dialog/demos', true, /^((?!static).)*index\.ts$/i);
        for (const item of req.keys()) {
            if (!item.startsWith('.')) continue;

            const Demo = req(item).default;
            const [instance, element] = mount(Demo);

            dispatchEvent(element.querySelector('.k-btn') || element, 'click');
            await wait();
            expectDialog();
            unmount();
        }
        await wait(500);
        expect(document.body.getAttribute('style')).to.be.null;
    });

    it('async close', async () => {
        const [instance, element] = mount(AsyncCloseDemo);

        dispatchEvent(element.firstChild as HTMLElement, 'click');
        instance.set('code', '111');
        await wait();
        let dialog = getElement('.k-dialog')!;
        const className = dialog.className;
        // click ok
        dispatchEvent(dialog.querySelector('.k-dialog-ok')!, 'click');
        await wait();
        expect(dialog.className).to.eql(className);
    });

    it('drag', async () => {
        const [instance, element] = mount(BasicDemo);

        dispatchEvent(element.firstChild as HTMLElement, 'click');
        await wait();
        const dialog = getElement('.k-dialog')!;
        const top = Math.round(parseFloat(dialog.style.top));
        const header = getElement('.k-dialog-header')!;
        dispatchEvent(header, 'mousedown', {which: 1, clientY: 0});
        dispatchEvent(document, 'mousemove', {clientY: -1});
        dispatchEvent(document, 'mouseup');
        await wait();
        expect(dialog.style.top).to.eql(`${top - 1}px`);
    });

    it('static methods', async () => {
        let cb = sinon.spy();
        Dialog.success({content: 'test'}).then(cb);
        await wait();
        let dialog = expectDialog();
        dialog.querySelector<HTMLElement>('.k-btn')!.click();
        await wait();
        expect(cb.callCount).to.eql(1);

        let cb1 = sinon.spy();
        Dialog.confirm({content: 'test', hideIcon: true, hideClose: false}).then(cb, cb1)
        await wait();
        dialog = expectDialog();
        dialog.querySelector<HTMLElement>('.k-dialog-cancel')!.click();
        await wait();
        expect(cb1.callCount).to.eql(1);

        // with title
        Dialog.error({title: 'error', content: 'test'});
        await wait();
        dialog = expectDialog();
        dialog.querySelector<HTMLElement>('.k-btn')!.click();

        const cb2 = sinon.spy();
        Dialog.confirm({content: 'test', closable: false}).then(() => {}, cb2);
        await wait();
        const overlay = getElement('.k-dialog-overlay')!;
        overlay.click();
        await wait();
        expect(cb2.callCount).to.eql(0);
        getElement('.k-dialog')!.querySelector<HTMLElement>('.k-btn')!.click();
    });

    it('should double check for closing dialog', async () => {
        const [instance, element] = mount(TerminateDemo);

        (element.firstChild as HTMLElement).click();
        await wait();
        const dialog = getElement('.k-dialog')!;
        dialog.querySelector<HTMLElement>('.k-dialog-close')!.click();
        await wait(500);
        expect(dialog.style.display).to.eql('');
        const confirm = getElement('.k-alert-dialog')!;
        confirm.querySelector<HTMLElement>('.k-dialog-ok')!.click();
        await wait(500);
        expect(dialog.style.display).to.eql('none');
    });

    it('should remove body', async () => {
        const [instance, element] = mount(DestroyDemo);

        expect(getElement('.k-dialog')).to.be.undefined;
        instance.set('show', true);
        await wait(500);
        expectDialog();

        instance.set('show', false);
        await wait(500);
        expect(getElement('.k-dialog')).to.be.undefined;
    });

    it('should not close when click and move outside', async () => {
        const [instance, element] = mount(BasicDemo);

        (element.firstChild as HTMLElement).click();
        await wait();
        const dialog = getElement('.k-dialog')!;
        const wrapper = dialog.parentElement!;
        dispatchEvent(dialog, 'mousedown');
        dispatchEvent(wrapper, 'mouseup');
        dispatchEvent(wrapper, 'click');

        await wait(500);
        expectDialog();
    });

    // it('should handle v-if and v-model at the same time correctly in Vue', async () => {
        // const Test = {
            // template: `<Dialog v-model="show" v-if="show" ref="dialog">test</Dialog>`,
            // components: {
                // Dialog
            // },
            // data() {
                // return {
                    // show: false,
                // }
            // },
        // };
        // const container = document.createElement('div');
        // document.body.appendChild(container);
        // const app = new Vue({
            // render: h => h('Test', {ref: 'test'}),
            // components: {Test},
        // }).$mount(container);

        // app.$refs.test.show = true;
        // await wait();

        // // close dialog
        // app.$refs.test.$refs.dialog.close();
        // await wait();
    // });
});
