import ClosableDemo from '~/components/tag/demos/closable';
import {mount, unmount, wait} from 'test/utils';

describe('Tag', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('should not close tag if we has prevented default', async () => {
        instance = mount(ClosableDemo);

        const btns = instance.element.querySelectorAll('.k-btn');
        const preventDefaultBtn = btns[btns.length - 1];
        preventDefaultBtn.click();
        await wait(100);
        expect(instance.element.innerHTML).to.matchSnapshot();

        const commonBtn = btns[0];
        commonBtn.click();
        await wait(500);
        expect(instance.element.innerHTML).to.matchSnapshot();
    });
});
