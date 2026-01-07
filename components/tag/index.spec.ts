import ClosableDemo from '~/components/tag/demos/closable';
import {mount, unmount, wait, dispatchEvent, getElement} from '../../test/utils';
import TagsDemo from '~/components/tag/demos/tags';
import DraggableDemo from '~/components/tag/demos/draggable';
import ColorDemo from '~/components/tag/demos/color';

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
        expect(tooltip.querySelectorAll('.k-tag').length).to.eql(3);

        // remove one tag
        dispatchEvent(lastPanel.querySelector<HTMLElement>('.k-tag-close')!, 'click');
        await wait(0);
        expect(lastPanel.innerHTML).to.matchSnapshot();

        // resize
        const tags = lastPanel.querySelector<HTMLDivElement>('.k-tags')!;
        tags.style.width = '200px';
        await wait(200);
        expect(lastPanel.innerHTML).to.matchSnapshot();

        // show tooltip again (the "more" element will be removed and created again)
        more = lastPanel.querySelector<HTMLDivElement>('.k-tags-more')!;
        dispatchEvent(more, 'mouseenter');
        await wait();
        tooltip = getElement('.k-tags-tooltip')!;
        expect(tooltip.querySelectorAll('.k-tag').length).to.eql(3);
    });

    it('should support drag tags', async () => {
        const [instance, element] = mount(DraggableDemo);        

        async function test(from: HTMLElement, to: HTMLElement) {
            dispatchEvent(from, 'dragstart');
            await wait();
            dispatchEvent(to, 'dragover');
            await wait(500);
            expect(element.innerHTML).to.matchSnapshot();
            dispatchEvent(from, 'dragend');
            await wait();
            expect(element.innerHTML).to.matchSnapshot();
        }
        const [tag1, tag2, , , , tag6] = element.querySelectorAll<HTMLElement>('.k-tag');
        await test(tag1, tag2);
        await test(tag1, tag6);

        // with more tooltip
        const [tag11, tag22, , , more] = element.querySelectorAll<HTMLElement>('.k-tags:last-of-type .k-tag');
        await test(tag11, tag22);
        await wait(0);
        dispatchEvent(more, 'mouseenter');
        await wait();
        const dropdown = getElement('.k-tags-tooltip')!;
        const [tag55, tag66] = dropdown.querySelectorAll<HTMLElement>('.k-tag');
        await test(tag55, tag11);
        expect(dropdown.innerText).to.eql('warning\nwith tooltip');

        // should not drag to other tags
        await test(tag11, tag2);
    });

    it('should support color property', async () => {
        const [instance, element] = mount(ColorDemo);
        await wait();
        
        expect(element.innerHTML).to.matchSnapshot();
    });
});
