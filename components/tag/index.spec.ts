import ClosableDemo from '~/components/tag/demos/closable';
import {mount, unmount, wait, dispatchEvent, getElement} from '../../test/utils';
import TagsDemo from '~/components/tag/demos/tags';

describe('Tag', () => {
    // afterEach(() => unmount());

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

    it('should hide tags that overflow', async () => {
        const [instance, element] = mount(TagsDemo);

        const lastPanel = element.querySelector<HTMLDivElement>('.k-split-last')!;

        await wait(0);
        expect(lastPanel.innerHTML).to.matchSnapshot();

        // show tooltip
        let more = lastPanel.querySelector<HTMLDivElement>('.k-tags-more')!;
        dispatchEvent(more, 'mouseenter');
        await wait();
        let tooltip = getElement('.k-tags-tooltip')!;
        expect(tooltip.querySelectorAll('.k-tag').length).to.eql(2);

        // remove one tag
        dispatchEvent(lastPanel.querySelector<HTMLElement>('.k-tag-close')!, 'click');
        await wait(0);
        expect(lastPanel.innerHTML).to.matchSnapshot();

        // resize
        const tags = lastPanel.querySelector<HTMLDivElement>('.k-tags')!;
        tags.style.width = '200px';
        await wait(200);
        expect(lastPanel.innerHTML).to.matchSnapshot();

        // show tooltip again (more element will be removed and created again)
        more = lastPanel.querySelector<HTMLDivElement>('.k-tags-more')!;
        dispatchEvent(more, 'mouseenter');
        await wait();
        tooltip = getElement('.k-tags-tooltip')!;
        expect(tooltip.querySelectorAll('.k-tag').length).to.eql(4);
    });
});
