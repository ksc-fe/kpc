import BasicDemo from '~/components/affix/demos/basic';
import CustomDemo from '~/components/affix/demos/custom';
import {mount, unmount, wait, dispatchEvent} from '../../test/utils';

describe('Affix', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('basic test', async function() {
        this.enableTimeouts(false);
        instance = mount(BasicDemo, {marginTop: '200px'});

        await wait();
        expect(instance.element.innerHTML).to.matchSnapshot();

        // scroll to the top
        window.scrollTo(0, 0);
        await wait();
        expect(instance.element.innerHTML).to.matchSnapshot();
        // change bottom
        instance.refs.__test.set('bottom', 900);
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('custom fix rule', async function() {
        this.enableTimeouts(false);
        instance = mount(CustomDemo, {marginTop: '200px'});

        await wait(100);
        expect(instance.element.innerHTML).to.matchSnapshot();

        // scroll to the top
        window.scrollTo(0, 0);
        await wait(100);
        expect(instance.element.innerHTML).to.matchSnapshot();
        // change bottom
        instance.element.style.marginTop = '900px';
        instance.refs.__test.set('bottom', 500);
        document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;
        await wait(100);
        expect(instance.element.innerHTML).to.matchSnapshot();

        window.scrollTo(0, 0);
        await wait(100);
        expect(instance.element.innerHTML).to.matchSnapshot();
    });
});
