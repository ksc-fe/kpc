import Intact from 'intact';
import Dialog from './';

function render(Component, props) {
    const c = new Component(props); 
    c.init();
    c.mount();
    return c;
}

describe('Dialog unit test:', () => {
    let component;

    afterEach(() => component.destroy());

    it('should render dialog correctly', () => {
        component = render(Dialog);
        expect(component.element.className).to.equal('k-dialog-wrapper');
        expect(component.element.children.length).to.equal(0);
    });

    it('should show dialog correctly', () => {
        component = render(Dialog);
        component.show();
        const element = component.element;
        expect(element.children.length).to.equal(2);
        expect(element.children[0].classList.contains('k-overlay')).to.be.true;
        expect(element.children[1].classList.contains('k-dialog')).to.be.true;
    });

    it('should render children correclty', () => {
        class Component extends Intact {
            get template() { 
                return `var Dialog = self.Dialog; 
                    <Dialog v-model="show">test</Dialog>`;
            }
            _init() { this.Dialog = Dialog; }
        }
        component = render(Component);
        component.set('show', true);
        const element = component.element;
        expect(element.children[1].children[1].innerHTML).to.equal('test');
    });
});
