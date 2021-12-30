import BasicDemo from '~/components/affix/demos/basic';
import CustomDemo from '~/components/affix/demos/custom';
import {mount, unmount, wait, dispatchEvent} from '../../test/utils';

describe('Affix', () => {
    afterEach(() => unmount());

    it('basic test', async function() {
        this.timeout(0);
        const [instance, element] = mount(BasicDemo, {marginTop: '200px'});

        await wait(100);
        expect(element.innerHTML).to.matchSnapshot();

        // scroll to the top
        window.scrollTo(0, 0);
        await wait(100);
        expect(element.innerHTML).to.matchSnapshot();
        // change bottom
        instance.set<number>('bottom', 900);

        await wait(100);
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('custom fix rule', async function() {
        this.timeout(0);
        const [instance, element] = mount(CustomDemo, {marginTop: '200px'});

        await wait(100);
        expect(element.innerHTML).to.matchSnapshot();

        // scroll to the top
        window.scrollTo(0, 0);
        await wait(100);
        expect(element.innerHTML).to.matchSnapshot();
        // change bottom
        element.style.marginTop = '900px';
        instance.set<number>('bottom', 500);
        document.scrollingElement!.scrollTop = document.scrollingElement!.scrollHeight;
        await wait(100)
        expect(element.innerHTML).to.matchSnapshot();

        window.scrollTo(0, 0);
        await wait(100);
        expect(element.innerHTML).to.matchSnapshot();
    });
});
