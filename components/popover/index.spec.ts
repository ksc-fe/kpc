import BasicDemo from '~/components/popover/demos/basic';
import ContentDemo from '~/components/popover/demos/content';
import ButtonDemo from '~/components/popover/demos/button';
import TextDemo from '~/components/popover/demos/text';
import TypeDemo from '~/components/popover/demos/type';
import {mount, unmount, dispatchEvent, getElement, wait} from '../../test/utils';

describe("Popover", () => {
    afterEach((done) => {
        unmount();
        setTimeout(done, 500);
    });

    it('should handle popover correctly', async () => {
        const [instance, element] = mount(BasicDemo);

        const cancelCb = sinon.spy();
        const okCb = sinon.spy();

        instance.refs.popover1.on('cancel', cancelCb);
        instance.refs.popover1.on('ok', okCb);

        dispatchEvent(element.children[0], 'click');
        await wait();
        let content = getElement('.k-tooltip-content')!;
        expect(content.innerHTML).to.matchSnapshot();

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

    it('should handle type correctly', async () => {
        const [instance, element] = mount(TypeDemo);
        const [info, success, error, warning] = element.querySelectorAll<HTMLButtonElement>('.k-btn');
        const test = async (element: HTMLButtonElement, className: string) => {
            element.click();
            await wait();
            const content = getElement('.k-tooltip-content')!;
            expect(content.querySelector('.k-popover-icon')!.classList.contains(className)).eql(true);
        }

        await test(info, 'k-icon-information-fill');
        await test(success, 'k-icon-success-fill');
        await test(error, 'k-icon-error-fill');
        await test(warning, 'k-icon-warning-fill');
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
    });

    it('should handle footer slot correctly', async () => {
        const [instance, element] = mount(ButtonDemo);

        dispatchEvent(element.children[0], 'click');
        await wait();
        let content = getElement('.k-tooltip-content')!;
        expect((content.querySelector('.k-tooltip-footer') as HTMLElement).outerHTML).to.matchSnapshot();
    });
});
