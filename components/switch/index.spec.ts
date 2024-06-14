import BasicDemo from '~/components/switch/demos/basic';
import DisabledDemo from '~/components/switch/demos/disabled';
import ValueDemo from '~/components/switch/demos/value';
import WidthHeightDemo from '~/components/switch/demos/widthHeight';
import BeforeChangeDemo from '~/components/switch/demos/beforeChange';
import {mount, unmount, dispatchEvent, wait} from '../../test/utils';

describe('Switch', () => {
    afterEach(() => {unmount()});

    it('change value by clicking', async () => {
        const [instance, element] = mount(BasicDemo);

        const [el] = element.querySelectorAll<HTMLElement>('.k-switch');
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
    });

    it('disabled', async () => {
        const [instance, element] = mount(DisabledDemo);

        const el = element.querySelector<HTMLDivElement>('.k-switch')!;
        el.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        dispatchEvent(el, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 30});
        dispatchEvent(document, 'mouseup', {clientX: 30});
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
    });

    it('change value by draging', async () => {
        const [instance, element] = mount(BasicDemo);

        const [el] = element.querySelectorAll<HTMLElement>('.k-switch-handle');
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

    it('beforeChange', async function() {
        const [instance, element] = mount(BeforeChangeDemo);
        const [el1, el2] = element.querySelectorAll<HTMLElement>('.k-switch');
        el1.click();
        el2.click();
        await wait(1000);
        expect(instance.get('value1')).eql(1);
        expect(instance.get('value2')).to.be.false;
        await wait();
        const [dragg1, dragg2] = element.querySelectorAll<HTMLElement>('.k-switch-handle');
        dispatchEvent(dragg2, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 30});
        dispatchEvent(document, 'mouseup', {clientX: 30});
        await wait();
        expect(instance.get('value2')).to.be.false;
    });
});
