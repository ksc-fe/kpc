import Intact from 'intact';
import Dialog from 'kpc/components/dialog';
import {getElement, render, mount, unmount, dispatchEvent} from 'test/utils';
import BasicDemo from '~/components/dialog/demos/basic'; 
import AsyncCloseDemo from '~/components/dialog/demos/asyncClose';
import AsyncOpenDemo from '~/components/dialog/demos/asyncOpen';

describe('Dialog', () => {
    let component;
    let instance;

    afterEach(() => {
        component && component.destroy();
        component = null;

        if (instance) {
            unmount(instance);
            instance = null;
        }
    });

    it('should render dialog correctly', () => {
        component = render(Dialog);
        expect(component.$element.className).to.equal('k-dialog-wrapper');
        expect(component.$element.children.length).to.equal(0);
    });

    it('should show dialog correctly', () => {
        component = render(Dialog, {title: 'Dialog'});
        component.show();
        const element = component.$element;
        expect(element.children.length).to.equal(2);
        expect(element.children[0].classList.contains('k-overlay')).to.be.true;
        expect(element.children[1].classList.contains('k-dialog')).to.be.true;
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
        expect(element.children[1].children[1].innerHTML).to.equal('test');
    });

    it('should show correctly when render with value is true', () => {
        class Component extends Intact {
            @Intact.template()
            static template = `<Dialog value={{ true }}>test</Dialog>`;
            _init() { this.Dialog = Dialog; }
        }
        component = render(Component);
        const element = getElement('.k-dialog-wrapper');
        expect(element.innerHTML.replace(/\d+px/g, '')).to.matchSnapshot();
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

    it('should remove when parent destoryed for using as component', function(done) {
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
            const Demo = req(item).default;
            const i = mount(Demo);

            dispatchEvent(i.element.firstChild, 'click');
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

    it('async open', function(done) {
        this.enableTimeouts(false);

        instance = mount(AsyncOpenDemo);
        
        dispatchEvent(instance.element.firstChild, 'click');
        expect(instance.dialog.element === undefined).to.be.true;

        setTimeout(() => {
            const dialog = getElement('.k-dialog');
            expect(dialog.innerHTML).to.matchSnapshot();
            // close
            dispatchEvent(dialog.querySelector('.k-footer .k-btn'), 'click');
            done();
        }, 3000);
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
});
