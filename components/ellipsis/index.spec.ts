import BasicDemo from '~/components/ellipsis/demos/basic';
import {mount, unmount, dispatchEvent, getElement, wait} from '../../test/utils';
import {Ellipsis} from './';

describe('Ellipsis', () => {
    afterEach(() => unmount());

    it('should support drag Ellipsis', async () => {
        const [instance, element] = mount(BasicDemo);        
        const [ellipsis1, ellipsis2] = element.querySelectorAll<HTMLElement>('.k-ellipsis')!;

        let dragLine = element.querySelector('.k-split-line-wrapper') as HTMLElement;
        // There is no tooltip content by default
        expect(getElement('.k-tooltip-content')).to.be.undefined;

        // mouse move
        dispatchEvent(dragLine, 'mousedown', {which: 1, clientX: 200, clientY: 0});
        dispatchEvent(document, 'mousemove', {clientX: 100, clientY: 0});
        dispatchEvent(dragLine, 'mouseup');
        await wait(200);
        expect(element.outerHTML).to.matchSnapshot();

        // mouseenter ellipsis dom
        const children1 = ellipsis1.firstElementChild!;
        dispatchEvent(children1, 'mouseenter');
        await wait(0);
        expect(children1.classList.contains('k-dropdown-open')).to.be.true;
        let content1 = getElement('.k-tooltip-content')!;
        expect(content1.textContent).eql('测试测试测试测试测试测试');

        const children2 = ellipsis2.firstElementChild!;
        dispatchEvent(children2, 'mouseenter');
        await wait(0);
        let content2 = getElement('.k-tooltip-content')!;
        expect(content2.textContent).eql('最大几行忽略最大几行忽略最大几行忽略');
    });

    it('should disabled tooltip', async () => {
        const [instance, element] = mount(BasicDemo);        
        const ellipsis3 = element.querySelectorAll<HTMLElement>('.k-ellipsis')[2]!;
        let dragLine = element.querySelector('.k-split-line-wrapper') as HTMLElement;
        
        dispatchEvent(dragLine, 'mousedown', {which: 1, clientX: 200, clientY: 0});
        dispatchEvent(document, 'mousemove', {clientX: 300, clientY: 0});
        dispatchEvent(dragLine, 'mouseup');
        await wait(200);

        // disabled close tooltip
        expect(ellipsis3.firstElementChild!.classList.contains('k-dropdown-open')).to.be.false;
        instance.set('disabled', false);
        await wait();

        const children3 = ellipsis3.firstElementChild!;
        dispatchEvent(children3, 'mouseenter');
        await wait();
        expect(children3.classList.contains('k-dropdown-open')).to.be.true;
    });
});
