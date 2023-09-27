import {findDomFromVNode, Component} from 'intact';
import BasicDemo from '~/components/popover/demos/basic';
import ContentDemo from '~/components/popover/demos/content';
import ButtonDemo from '~/components/popover/demos/button';
import TextDemo from '~/components/popover/demos/text';
import TypeDemo from '~/components/popover/demos/type';
import {mount, unmount, dispatchEvent, getElement, wait} from '../../test/utils';
import { Popover } from '.'

describe("Popover", () => {
    it('should handle popover correctly', async () => {
        const [instance, element] = mount(BasicDemo);

        const cancelCb = sinon.spy();
        const okCb = sinon.spy();

        instance.refs.popover1.on('cancel', cancelCb);
        instance.refs.popover1.on('ok', okCb);

        dispatchEvent(element.children[0], 'click');
        await wait();
        let content = getElement('.k-tooltip-content')!;
        expect((content.querySelector('.k-tooltip-buttons') as HTMLElement).outerHTML).to.matchSnapshot();

        (content.querySelector('.k-btn') as HTMLElement).click();
        await wait(500);
        expect(content.style.display).eql('none');

        dispatchEvent(element.firstElementChild!, 'click');
        await wait();
        content = getElement('.k-tooltip-content')!;
        const [, btn] = Array.from<HTMLElement>(content.querySelectorAll('.k-btn'));
        btn.click();

        await wait(500);
        expect(content.style.display).eql('none');
        expect(cancelCb.callCount).eql(1);
        expect(okCb.callCount).eql(1);
    });

    it('should handle info type correctly', async () => {
        const [instance, element] = mount(TypeDemo);

        dispatchEvent(element.querySelector('[data-type="info"]') as HTMLElement, 'click');
        await wait();
        const content = getElement('.k-tooltip-content')!;
        expect(content.querySelector('.k-popover-icon')!.classList.contains('k-icon-information-fill')).eql(true);
    });

    it('should handle success type correctly', async () => {
        const [instance, element] = mount(TypeDemo);

        dispatchEvent(element.querySelector('[data-type="success"]') as HTMLElement, 'click');
        await wait();
        const content = getElement('.k-tooltip-content')!;
        expect(content.querySelector('.k-popover-icon')!.classList.contains('k-icon-success-fill')).eql(true);
    });

    it('should handle error type correctly', async () => {
        const [instance, element] = mount(TypeDemo);

        dispatchEvent(element.querySelector('[data-type="error"]') as HTMLElement, 'click');
        await wait();
        const content = getElement('.k-tooltip-content')!;
        expect(content.querySelector('.k-popover-icon')!.classList.contains('k-icon-error-fill')).eql(true);
    });

    it('should handle warning type correctly', async () => {
        const [instance, element] = mount(TypeDemo);

        dispatchEvent(element.querySelector('[data-type="warning"]') as HTMLElement, 'click');
        await wait();
        const content = getElement('.k-tooltip-content')!;
        expect(content.querySelector('.k-popover-icon')!.classList.contains('k-icon-warning-fill')).eql(true);
    });

    it('should handle title/content slot correctly', async () => {
        const [instance, element] = mount(ContentDemo);

        dispatchEvent(element.children[0], 'click');
        await wait();

        const content = getElement('.k-tooltip-content')!;
        expect(content.querySelector('.k-popover-title')).to.matchSnapshot();
        expect(content.querySelector('.k-popover-content')).to.matchSnapshot();
    });

    it('should handle text props correctly', async () => {
        const [instance, element] = mount(TextDemo);

        dispatchEvent(element.children[0], 'click');
        await wait();

        const content = getElement('.k-tooltip-content')!;
        const btns = content.querySelectorAll('.k-btn');
        expect(btns[0].textContent).eql('cancel');
        expect(btns[1].textContent).eql('confirm');
        // expect((content.querySelector('.k-tooltip-buttons') as HTMLElement).outerHTML).to.matchSnapshot()
    });

    it('should handle buttons slot correctly', async () => {
        const [instance, element] = mount(ButtonDemo);

        dispatchEvent(element.children[0], 'click');
        await wait();
        let content = getElement('.k-tooltip-content')!;
        expect((content.querySelector('.k-tooltip-buttons') as HTMLElement).outerHTML).to.matchSnapshot();
    });
});
