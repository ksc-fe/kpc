import ClosableDemo from '~/components/tag/demos/closable';
import {mount, unmount, wait} from 'test/utils';

describe('Tag', () => {
    afterEach(() => unmount());

    it('should not close tag if we has prevented default', async () => {
        const [instance, element] = mount(ClosableDemo);

        const btns = element.querySelectorAll<HTMLElement>('.k-tag-close');
        const preventDefaultBtn = btns[btns.length - 1];
        preventDefaultBtn.click();
        await wait(100);
        expect(element.innerHTML).to.matchSnapshot();

        const commonBtn = btns[0];
        commonBtn.click();
        await wait(500);
        expect(element.innerHTML).to.matchSnapshot();
    });
});
