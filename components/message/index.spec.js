import BasicDemo from '~/components/message/demos/basic';
import CustomDemo from '~/components/message/demos/custom';
import {mount, dispatchEvent, getElement} from 'test/utils';
import Message from 'kpc/components/message';

describe('Message', () => {
    let instance;

    afterEach(() => {
        if (!instance) return;

        instance.destroy();
        document.body.removeChild(instance.element);
        instance = null;
    });

    it('show messages', () => {
        instance = mount(BasicDemo);

        const [info, error, warning, success] = instance.element.querySelectorAll('.k-btn');
        info.click();
        let message = getElement('.k-message');
        expect(message.outerHTML).to.matchSnapshot();

        error.click();
        expect(getElement('.k-message').outerHTML).matchSnapshot();

        warning.click();
        expect(getElement('.k-message').outerHTML).matchSnapshot();

        success.click();
        expect(getElement('.k-message').outerHTML).matchSnapshot();
    });

    it('set duration', function(done) {
        this.enableTimeouts(false);

        Message.info('test', 500);

        const message = getElement('.k-message');
        expect(message.outerHTML).to.matchSnapshot();
        // should not remove when mouseenter
        dispatchEvent(message, 'mouseenter');
        setTimeout(() => {
            const message1 = getElement('.k-message');
            expect(message1).eql(message);

            dispatchEvent(message, 'mouseleave');
            setTimeout(() => {
                const message1 = getElement('.k-message');
                expect(message1).eql(message);
            }, 300);

            setTimeout(() => {
                const message1 = getElement('.k-message');
                expect(message1).not.eql(message);
                done();
            }, 1000);
        }, 1000);
    });

    it('custom message', () => {
        let instance = mount(CustomDemo);

        const btn = instance.element.querySelector('.k-btn');
        btn.click();
        const message = getElement('.k-message');
        expect(message.outerHTML).to.matchSnapshot();

        message.querySelector('.k-progress').click();
        expect(instance.get('percent')).be.eql(15);
        expect(message.outerHTML).to.matchSnapshot();

        instance.destroy();
        document.body.removeChild(instance.element);
    });
});
