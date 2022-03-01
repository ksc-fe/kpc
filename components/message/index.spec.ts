import BasicDemo from '~/components/message/demos/basic';
import {mount, unmount, dispatchEvent, getElement, wait} from '../../test/utils';
import {Message} from './';

describe('Message', () => {
    afterEach(() => {unmount()});

    it('show messages', async () => {
        const [instance, element] = mount(BasicDemo);

        const [info, error, warning, success] = element.querySelectorAll<HTMLElement>('.k-btn');
        info.click();
        await wait();
        let message = getElement('.k-message')!;
        expect(message.outerHTML).to.matchSnapshot();

        error.click();
        await wait();
        expect(getElement('.k-message')!.outerHTML).matchSnapshot();

        warning.click();
        await wait();
        expect(getElement('.k-message')!.outerHTML).matchSnapshot();

        success.click();
        await wait();
        expect(getElement('.k-message')!.outerHTML).matchSnapshot();
    });

    it('set duration', async function() {
        this.timeout(0);

        Message.info('test', 500);

        await wait();
        const message = getElement('.k-message')!;
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
});
