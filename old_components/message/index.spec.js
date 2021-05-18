import BasicDemo from '~/components/message/demos/basic';
import CustomDemo from '~/components/message/demos/custom';
import {mount, unmount, dispatchEvent, getElement, wait} from 'test/utils';
import Message from 'kpc/components/message';

describe('Message', () => {
    let instance;

    afterEach(() => {
        unmount(instance);
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

    it('set duration', async function() {
        this.enableTimeouts(false);

        Message.info('test', 500);

        const message = getElement('.k-message');
        expect(message.outerHTML).to.matchSnapshot();
        // should not remove when mouseenter
        dispatchEvent(message, 'mouseenter');
        await wait(1000);
        let message1 = getElement('.k-message');
        expect(message1).eql(message);

        dispatchEvent(message, 'mouseleave');
        await wait(300);
        message1 = getElement('.k-message');
        expect(message1).eql(message);

        await wait(700);
        message1 = getElement('.k-message');
        expect(message1).not.eql(message);
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

        unmount(instance);
    });
});
