import BasicDemo from '~/components/switch/demos/basic';
import ValueDemo from '~/components/switch/demos/value';
import WidthHeightDemo from '~/components/switch/demos/widthHeight';
import {mount, unmount, dispatchEvent, wait} from 'test/utils';

describe('Switch', () => {
    afterEach(() => {unmount()});

    it('change value by clicking', async () => {
        const [instance, element] = mount(BasicDemo);

        const [el, disabledEl] = element.querySelectorAll<HTMLElement>('.k-switch');
        el.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        expect(instance.get('value')).to.be.true;
        el.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        expect(instance.get('value')).to.be.false;

        const handle = element.querySelector('.k-switch-handle') as HTMLElement;
        handle.click();
        await wait();
        expect(instance.get('value')).to.be.false;

        disabledEl.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
    });

    it('change value by draging', async () => {
        const [instance, element] = mount(BasicDemo);

        const [el, disabledEl] = element.querySelectorAll<HTMLElement>('.k-switch-handle');
        dispatchEvent(el, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 1});
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        // cancel this operation if the distance less than half of width
        dispatchEvent(document, 'mouseup', {clientX: 1});
        await wait();
        expect(element.outerHTML).to.matchSnapshot();  
        expect(instance.get('value')).to.be.false;

        dispatchEvent(el, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 30});
        dispatchEvent(document, 'mouseup', {clientX: 30});
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        expect(instance.get('value')).to.be.true;

        dispatchEvent(el, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: -30});
        dispatchEvent(document, 'mouseup', {clientX: -30});
        await wait();
        expect(instance.get('value')).to.be.false;

        // treat mousedown -> mouseup as click
        dispatchEvent(el, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mouseup', {clientX: 0});
        await wait();
        expect(instance.get('value')).to.be.true;

        // disabled
        dispatchEvent(disabledEl, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 30});
        dispatchEvent(document, 'mouseup', {clientX: 30});
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
    });

    it('drag switch which has custom width and height', async () => {
        const [instance, element] = mount(WidthHeightDemo);

        const [, , el] = element.querySelectorAll<HTMLElement>('.k-switch-handle');
        dispatchEvent(el, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 50});
        dispatchEvent(document, 'mouseup', {clientX: 50});
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        dispatchEvent(el, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: -50});
        dispatchEvent(document, 'mouseup', {clientX: -50});
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
    });

    it('change value by keypress', async () => {
        const [instance, element] = mount(BasicDemo);

        const el = element.querySelector('.k-switch') as HTMLElement;
        dispatchEvent(el, 'keypress', {keyCode: 13});
        await wait();
        expect(instance.get('value')).to.be.true;
        dispatchEvent(el, 'keypress', {keyCode: 13});
        await wait();
        expect(instance.get('value')).to.be.false;
    });

    it('custom the value', async () => {
        const [instance, element] = mount(ValueDemo);

        const [el1, el2] = element.querySelectorAll<HTMLElement>('.k-switch');
        el1.click();
        el2.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();  
        el1.click();
        el2.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();  
    });
});
