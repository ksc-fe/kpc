import Intact from 'intact';
import Dialog from './';
import {render} from 'test/utils';

describe('Dialog unit test:', () => {
    let component;

    afterEach(() => {
        component && component.destroy();
        component = null;
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
        expect(footer.childNodes[0].textContent.trim()).be.equal('dialog footer');
        expect(footer.childNodes.length).be.equal(4);
    });
});
