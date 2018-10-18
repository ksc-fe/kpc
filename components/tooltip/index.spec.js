import BasicDemo from '~/components/tooltip/demos/basic';
import PositionDemo from '~/components/tooltip/demos/position'; 
import TriggerDemo from '~/components/tooltip/demos/trigger';
import ContentDemo from '~/components/tooltip/demos/content';
import ConfirmDemo from '~/components/tooltip/demos/confirm';
import {mount, dispatchEvent, getElement} from 'test/utils';

describe('Tooltip', () => {
    let instance;

    afterEach((done) => {
        instance.destroy();
        document.body.removeChild(instance.element);

        setTimeout(done, 500);
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

    it('should handle confirm tooltip corectly', (done) => {
        instance = mount(ConfirmDemo);

        const cancelCb = sinon.spy();
        const okCb = sinon.spy();

        instance.refs.__test.on('cancel', cancelCb);
        instance.refs.__test.on('ok', okCb);

        dispatchEvent(instance.element.children[0], 'click');
        let content = getElement('.k-tooltip-content');
        expect(content.querySelector('.k-buttons').outerHTML).to.matchSnapshot();

        content.querySelector('.k-btn').click();
        setTimeout(() => {
            expect(content.parentNode).eql(null);

            dispatchEvent(instance.element.children[0], 'click');
            content = getElement('.k-tooltip-content');
            const [, btn] = content.querySelectorAll('.k-btn');
            btn.click();

            setTimeout(() => {
                expect(content.parentNode).eql(null);
                expect(cancelCb.callCount).eql(1);
                expect(okCb.callCount).eql(1);

                done();
            }, 500)
        }, 500);
    });
});
