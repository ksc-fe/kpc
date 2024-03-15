import BasicDemo from '~/components/ellipsis/demos/basic';
import {mount, unmount, dispatchEvent, getElement, wait} from '../../test/utils';
import {Ellipsis} from './';

describe('Ellipsis', () => {
    afterEach(() => unmount());

    it('should support drag Ellipsis', async () => {
        const [instance, element] = mount(BasicDemo);        
        const [ellipsis1, ellipsis2 ] = element.querySelectorAll<HTMLElement>('.k-ellipsis')!;
        let dragLine = element.querySelector('.k-split-line-wrapper') as HTMLElement;
        // mouse move
        dispatchEvent(dragLine, 'mousedown', {which: 1, clientX: 200, clientY: 0});
        dispatchEvent(document, 'mousemove', {clientX: 100, clientY: 0});
        dispatchEvent(dragLine, 'mouseup');

        await wait(200);
        expect(element.outerHTML).to.matchSnapshot();

        dispatchEvent(ellipsis1, 'mouseenter');
        await wait(0);
        expect(ellipsis1.classList.contains('k-dropdown-open')).to.be.true;
        let content1 = getElement('.k-tooltip-content')!;
        expect(content1.textContent).eql('测试测试测试测试测试测试');

        dispatchEvent(ellipsis2, 'mouseenter');
        await wait(0);
        let content2 = getElement('.k-tooltip-content')!;
        expect(content2.textContent).eql('最大几行忽略最大几行忽略最大几行忽略');
        
    });

    it('should disabled tooltip', async () => {
        const [instance, element] = mount(BasicDemo);        
        const [ellipsis1, ellipsis2, ellipsis3 ] = element.querySelectorAll<HTMLElement>('.k-ellipsis')!;
        let dragLine = element.querySelector('.k-split-line-wrapper') as HTMLElement;
        
        dispatchEvent(dragLine, 'mousedown', {which: 1, clientX: 200, clientY: 0});
        dispatchEvent(document, 'mousemove', {clientX: 300, clientY: 0});
        dispatchEvent(dragLine, 'mouseup');
        await wait(200);

        dispatchEvent(ellipsis3, 'mouseenter');
        await wait(0);
        expect(ellipsis3.classList.contains('k-dropdown-open')).to.be.false;
        
        instance.set('disabled', false);
        await wait();
        dispatchEvent(ellipsis3, 'mouseenter');
        await wait(0);
        console.log('123123123', ellipsis3.classList);
        expect(ellipsis3.classList.contains('k-dropdown-open')).to.be.true;
    });
});
