import {Component} from 'intact';
import BasicDemo from '~/components/ellipsis/demos/basic';
import CollapseDemo from '~/components/menu/demos/collapse';
import AccordionDemo from '~/components/menu/demos/accordion';
import CollapseArrowDemo from '~/components/menu/demos/showCollapseArrow';
import {mount, unmount, dispatchEvent, getElement, wait} from '../../test/utils';
import {Ellipsis} from './';

describe('Ellipsis', () => {
    afterEach(() => unmount());

    it('should support drag Ellipsis', async () => {
        const [instance, element] = mount(BasicDemo);        

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
        const [tag1, tag2, , , , tag6] = element.querySelectorAll<HTMLElement>('.k-ellipsis');
        await test(tag1, tag2);
        await test(tag1, tag6);

        // // with more tooltip
        // const [tag11, tag22, , , more] = element.querySelectorAll<HTMLElement>('.k-tags:last-of-type .k-tag');
        // await test(tag11, tag22);
        // await wait(0);
        // dispatchEvent(more, 'mouseenter');
        // await wait();
        // const dropdown = getElement('.k-tags-tooltip')!;
        // const [tag55, tag66] = dropdown.querySelectorAll<HTMLElement>('.k-tag');
        // await test(tag55, tag11);
        // expect(dropdown.innerText).to.eql('warning\nwith tooltip');

        // // should not drag to other tags
        // await test(tag11, tag2);
    });
});
