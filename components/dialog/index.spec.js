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
        expect(component.element.children.length).to.equal(2);
    });
});
