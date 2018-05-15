import BasicDemo from '~/components/tooltip/demos/basic';
import PositionDemo from '~/components/tooltip/demos/position'; 
import TriggerDemo from '~/components/tooltip/demos/trigger';
import ContentDemo from '~/components/tooltip/demos/content';
import {mount, dispatchEvent, getElement} from 'test/utils';

describe('Tooltip', () => {
    let instance;

    afterEach(() => {
        instance.destroy();
        document.body.removeChild(instance.element);
    });

    it('should show and hide content correctly', (done) => {
        instance = mount(BasicDemo);

        const [first, second] = instance.element.querySelectorAll('.k-tooltip');
        dispatchEvent(first, 'mouseenter');
        let content = getElement('.k-tooltip-content');
        expect(content.textContent).eql('hello');

        // should not show
        dispatchEvent(second, 'mouseenter');
        let content1 = getElement('.k-tooltip-content');
        expect(content1).eql(content);

        // should hide
        dispatchEvent(first, 'mouseleave');
        setTimeout(() => {
            let content = getElement('.k-tooltip-content');
            expect(content).be.undefined;
            done();
        }, 1000);
    });

    it('should position correctly', () => {
        instance = mount(PositionDemo);

        const [left, right, top, bottom] = instance.element.querySelectorAll('.k-btn');
        dispatchEvent(left, 'mouseenter');
        let content = getElement('.k-tooltip-content');
        expect(content.textContent).eql('left');

        dispatchEvent(right, 'mouseenter');
        content = getElement('.k-tooltip-content');
        expect(content.textContent).eql('right');

        dispatchEvent(top, 'mouseenter');
        content = getElement('.k-tooltip-content');
        expect(content.textContent).eql('top');

        dispatchEvent(bottom, 'mouseenter');
        content = getElement('.k-tooltip-content');
        expect(content.textContent).eql('bottom');
    });

    it('should trigger correctly', (done) => {
        instance = mount(TriggerDemo);

        const [hover, click, canHover] = instance.element.querySelectorAll('.k-btn');
        click.click();
        let content = getElement('.k-tooltip-content');
        expect(content.textContent).to.matchSnapshot();
        // should not hide
        content.click();
        let content1 = getElement('.k-tooltip-content');
        expect(content).eql(content1);
        // should hide when click document
        document.body.click();
        setTimeout(() => {
            let content2 = getElement('.k-tooltip-content');
            expect(content2).not.eql(content);
            done();
        }, 1000);
    });

    it('should can hover', (done) => {
        instance = mount(TriggerDemo);

        const [hover, click, canHover] = instance.element.querySelectorAll('.k-btn');
        dispatchEvent(canHover, 'mouseenter');
        dispatchEvent(canHover, 'mouseleave');
        const content = getElement('.k-tooltip-content');
        dispatchEvent(content, 'mouseenter');
        setTimeout(() => {
            const content1 = getElement('.k-tooltip-content');
            expect(content1).eql(content); 

            dispatchEvent(canHover, 'mouseenter');
            dispatchEvent(canHover, 'mouseleave');
            setTimeout(() => {
                const content = getElement('.k-tooltip-content');
                expect(content).be.undefined;
                done();
            }, 600)
        }, 600);
    });

    it('should custom content correctly', () => {
        instance = mount(ContentDemo);

        const [btn] = instance.element.querySelectorAll('.k-btn');
        btn.click();
        const content = getElement('.k-tooltip-content');
        // ignore the arrow, because it may change className to adapt to the direction
        expect(content.children[1].outerHTML).to.matchSnapshot();
    });
});
