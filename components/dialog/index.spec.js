import Intact from 'intact';
import Dialog from 'kpc/components/dialog';
import {getElement, render, mount, unmount, dispatchEvent, wait} from 'test/utils';
import BasicDemo from '~/components/dialog/demos/basic';
import AsyncCloseDemo from '~/components/dialog/demos/asyncClose';
import AsyncOpenDemo from '~/components/dialog/demos/asyncOpen';
import TerminateDemo from '~/components/dialog/demos/terminate';
import HideDemo from '~/components/dialog/demos/hide';
import Vue from 'vue';

describe('Dialog', () => {
    let component;
    let instance;

    afterEach((done) => {
        component && component.destroy();
        component = null;

        if (instance) {
            unmount(instance);
            instance = null;
        }
        setTimeout(done, 400);
    });

    it('should show dialog correctly', () => {
        component = render(Dialog, {title: 'Dialog'});
        component.show();
        const element = component.$element;
        expect(element.querySelector('.k-title').innerHTML).to.equal('Dialog');
    });

    it('should render children correclty', () => {
        class Component extends Intact {
            get template() {
                return `var Dialog = self.Dialog;
                    <Dialog v-model="show" ref="dialog">test</Dialog>`;
            }
            _init() { this.Dialog = Dialog; }
        }
        component = render(Component);
        component.set('show', true);
        const element = component.refs.dialog.$element;
        expect(element.querySelector('.k-body').innerHTML).to.equal('test');
    });

    it('should show correctly when render with value is true', () => {
        class Component extends Intact {
            @Intact.template()
            static template = `<Dialog value={{ true }}>test</Dialog>`;
            _init() { this.Dialog = Dialog; }
        }
        component = render(Component);
        const element = getElement('.k-dialog-wrapper');
        expect(element.innerHTML.replace(/[\d\.]+px/g, '')).to.matchSnapshot();
    });

    it('show dialog as instance', () => {
        class MyDialog extends Dialog {
            @Intact.template()
            get template() {
                return `<t:parent><b:body>Dialog Instance</b:body></t:parent>`
            }
        }
        component = new MyDialog();
        component.show();

        expect(component.$element.querySelector('.k-body').innerHTML).to.equal('Dialog Instance');
    });

    it('should update correctly', () => {
        class Component extends Intact {
            get template() {
                return `var Dialog = self.Dialog;
                    <Dialog value={{ true }} ref="dialog">{{ self.get('content') }}</Dialog>
                `
            }

            defaults() {
                this.Dialog = Dialog;
                return {
                    content: 'a'
                }
            }
        }

        component = render(Component);
        component.set('content', 'b');
        expect(component.refs.dialog.$element.querySelector('.k-body').innerHTML).to.equal('b');
    });

    it('should prepend conent to block correctly', () => {
        class Component extends Intact {
            get template() {
                return `var Dialog = self.Dialog;
                    <Dialog value={{ true }} ref="dialog">
                        <b:footer>
                            dialog footer
                            {{ parent() }}
                        </b:footer>
                    </Dialog>
                `
            }

            _init() { this.Dialog = Dialog; }
        }

        component = render(Component);
        const footer = component.refs.dialog.$element.querySelector('.k-footer');
        expect(footer.innerHTML).to.matchSnapshot();
    });

    it('basic test', () => {
        instance = mount(BasicDemo);

        dispatchEvent(instance.element.children[0], 'click');
        let dialog = getElement('.k-dialog');
        expect(dialog.innerHTML).to.matchSnapshot();

        // click ok
        dispatchEvent(dialog.querySelector('.k-primary'), 'click');
        expect(instance.get('show')).be.false;

        // click cancel
        dispatchEvent(instance.element.children[0], 'click');
        dialog = getElement('.k-dialog');
        dispatchEvent(dialog.querySelector('.k-footer .k-btn'), 'click');
        expect(instance.get('show')).be.false;

        // press esc to close
        dispatchEvent(instance.element.children[0], 'click');
        dispatchEvent(document, 'keydown', {keyCode: 27});
        expect(instance.get('show')).be.false;
    });

    it('should remove when parent destroyed for using as component', function(done) {
        this.enableTimeouts(false);

        let wrapper;

        let i;
        const _leaveEnd = Dialog.prototype._leaveEnd;
        Dialog.prototype._leaveEnd = function() {
            _leaveEnd.call(this);
            expect(wrapper.parentNode).be.null;

            document.body.removeChild(i.element.parentElement);
            Dialog.prototype._leaveEnd = _leaveEnd;
            done();
        };

        i = mount(BasicDemo);
        dispatchEvent(i.element.children[0], 'click');
        wrapper = getElement('.k-dialog-wrapper');
        i.destroy();
    });

    it('methods test', () => {
        instance = mount(BasicDemo);

        dispatchEvent(instance.element.children[0], 'click');
        const dialog = getElement('.k-dialog');

        const demo = instance.refs.__demo;
        demo.showLoading();
        expect(dialog.innerHTML).to.matchSnapshot();
        demo.hideLoading();
        expect(dialog.innerHTML).to.matchSnapshot();
        demo.disableOk();
        expect(dialog.innerHTML).to.matchSnapshot();
        demo.enableOk();
        expect(dialog.innerHTML).to.matchSnapshot();

        demo.close();
        demo.show();
        expect(getElement('.k-dialog').innerHTML).to.matchSnapshot();
    });

    it('demos test', () => {
        const req = require.context('~/components/dialog/demos', true, /^((?!async).)*index\.js$/i);
        req.keys().forEach(item => {
            if (/static/.test(item)) return;
            const Demo = req(item).default;
            const i = mount(Demo);

            dispatchEvent(i.element.querySelector('.k-btn') || i.element, 'click');
            expect(getElement('.k-dialog').innerHTML).to.matchSnapshot();
            unmount(i);
        });
    });

    it('async close', () => {
        instance = mount(AsyncCloseDemo);

        instance.set('code', '111');
        dispatchEvent(instance.element.firstChild, 'click');
        let dialog = getElement('.k-dialog');
        // click ok
        dispatchEvent(dialog.querySelector('.k-primary'), 'click');
        expect(dialog.innerHTML).to.matchSnapshot();
    });

    it('async open', async function() {
        this.enableTimeouts(false);

        instance = mount(AsyncOpenDemo);

        dispatchEvent(instance.element.firstChild, 'click');
        expect(instance.dialog.element === undefined).to.be.true;

        await wait(3000);
        const dialog = getElement('.k-dialog');
        expect(dialog.innerHTML).to.matchSnapshot();
        // close
        dispatchEvent(dialog.querySelector('.k-footer .k-btn'), 'click');
    });

    it('drag', () => {
        instance = mount(BasicDemo);

        instance.element.firstChild.click();
        const dialog = getElement('.k-dialog');
        const header = getElement('.k-dialog .k-header');
        dispatchEvent(header, 'mousedown', {which: 1});
        dispatchEvent(document, 'mousemove');
        dispatchEvent(document, 'mouseup');

        // should add style
        expect(dialog.getAttribute('style')).include('left');
    });

    it('static methods', async () => {
        let cb = sinon.spy();
        Dialog.success({content: 'test'}).then(cb);

        let dialog = getElement('.k-dialog');
        expect(dialog.innerHTML).to.matchSnapshot();
        dialog.querySelector('.k-btn').click();
        // remove immediately for next test
        // it has been removed
        // document.body.removeChild(dialog.parentElement);
        await wait(0);
        expect(cb.callCount).to.eql(1);

        let cb1 = sinon.spy();
        Dialog.confirm({content: 'test', hideIcon: true, showClose: true}).then(cb, cb1)
        dialog = getElement('.k-dialog');
        expect(dialog.innerHTML).to.matchSnapshot();
        dialog.querySelector('.k-footer .k-btn').click();
        await wait(0);
        expect(cb1.callCount).to.eql(1);

        // with title
        Dialog.error({title: 'error', content: 'test'});
        dialog = getElement('.k-dialog');
        expect(dialog.innerHTML).to.matchSnapshot();
        dialog.querySelector('.k-btn').click();

        const cb2 = sinon.spy();
        Dialog.confirm({content: 'test', closable: false}).then(() => {}, cb2);
        const overlay = getElement('.k-overlay');
        overlay.click();
        await wait(0);
        expect(cb2.callCount).to.eql(0);
        getElement('.k-dialog').querySelector('.k-btn').click();
    });

    it('should double check for closing dialog', async () => {
        instance = mount(TerminateDemo);

        instance.element.firstChild.click();
        const dialog = getElement('.k-dialog');
        dialog.querySelector('.k-close').click();
        await wait(500);
        expect(dialog.parentNode).not.be.null;
        const confirm = getElement('.k-alert-dialog');
        confirm.querySelector('.k-ok').click();
        await wait(500);
        expect(dialog.parentNode).be.null;
    });

    it('should only hide body', async () => {
        instance = mount(HideDemo);

        expect(instance.refs.__demo.$element.innerHTML).to.matchSnapshot();
        instance.set('show', true);
        await wait(500);
        const dialog = getElement('.k-dialog');
        expect(dialog.innerHTML).to.matchSnapshot();

        instance.set('show', false);
        await wait(500);
        expect(instance.refs.__demo.$element.innerHTML).to.matchSnapshot();
    });

    it('should not close when click and move outside', async () => {
        instance = mount(BasicDemo);

        instance.element.firstChild.click();
        const dialog = getElement('.k-dialog');
        const wrapper = dialog.parentElement;
        dispatchEvent(dialog, 'mousedown');
        dispatchEvent(wrapper, 'mouseup');
        dispatchEvent(wrapper, 'click');

        await wait(500);
        expect(getElement('.k-dialog')).not.to.be.undefined;
    });

    it('should handle v-if and v-model at the same time correctly in Vue', async () => {
        // class Component extends Intact {
            // @Intact.template()
            // static template = `<Dialog v-model="show" v-if={{ self.get('show') }}>test</Dialog>`
            // _init() { this.Dialog = Dialog; }
        // }
        // instance = mount(Component);
        // // instance.set('show', true);

        // window.instance = instance;

        const Test = {
            template: `<Dialog v-model="show" v-if="show" ref="dialog">test</Dialog>`,
            components: {
                Dialog
            },
            data() {
                return {
                    show: false,
                }
            },
        };
        const container = document.createElement('div');
        document.body.appendChild(container);
        const app = new Vue({
            render: h => h('Test', {ref: 'test'}),
            components: {Test},
        }).$mount(container);

        app.$refs.test.show = true;
        await wait();

        // close dialog
        app.$refs.test.$refs.dialog.close();
        await wait();
    });
});
