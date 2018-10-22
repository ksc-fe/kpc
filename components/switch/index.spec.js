import BasicDemo from '~/components/switch/demos/basic';
import ValueDemo from '~/components/switch/demos/value';
import WidthHeightDemo from '~/components/switch/demos/widthHeight';
import {mount, unmount, dispatchEvent} from 'test/utils';

describe('Switch', () => {
    let instance;

    afterEach(() => {
        unmount(instance);
    });

    it('change value by clicking', () => {
        instance = mount(BasicDemo);

        const [el, disabledEl] = instance.element.querySelectorAll('.k-switch');
        el.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
        expect(instance.get('value')).to.be.true;
        el.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
        expect(instance.get('value')).to.be.false;

        disabledEl.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
    });

    it('change value by draging', () => {
        instance = mount(BasicDemo);

        const [el, disabledEl] = instance.element.querySelectorAll('.k-handle');
        dispatchEvent(el, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 1});
        expect(instance.element.outerHTML).to.matchSnapshot();

        // cancel this operation if the distance less than half of width
        dispatchEvent(document, 'mouseup', {clientX: 1});
        expect(instance.element.outerHTML).to.matchSnapshot();  
        expect(instance.get('value')).to.be.undefined;

        dispatchEvent(el, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 30});
        dispatchEvent(document, 'mouseup', {clientX: 30});
        expect(instance.element.outerHTML).to.matchSnapshot();
        expect(instance.get('value')).to.be.true;

        dispatchEvent(el, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: -30});
        dispatchEvent(document, 'mouseup', {clientX: -30});
        expect(instance.get('value')).to.be.false;

        // treat mousedown -> mouseup as click
        dispatchEvent(el, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mouseup', {clientX: 0});
        expect(instance.get('value')).to.be.true;

        // disabled
        dispatchEvent(disabledEl, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 30});
        dispatchEvent(document, 'mouseup', {clientX: 30});
        expect(instance.element.outerHTML).to.matchSnapshot();
    });

    it('drag switch which has custom width and height', () => {
        instance = mount(WidthHeightDemo);

        const [, , el] = instance.element.querySelectorAll('.k-handle');
        dispatchEvent(el, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 30});
        dispatchEvent(document, 'mouseup', {clientX: 30});
        expect(instance.element.outerHTML).to.matchSnapshot();

        dispatchEvent(el, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: -30});
        dispatchEvent(document, 'mouseup', {clientX: -30});
        expect(instance.element.outerHTML).to.matchSnapshot();
    });

    it('change value by keypress', () => {
        instance = mount(BasicDemo);

        const el = instance.element.querySelector('.k-switch');
        dispatchEvent(el, 'keypress', {keyCode: 13});
        expect(instance.get('value')).to.be.true;
        dispatchEvent(el, 'keypress', {keyCode: 13});
        expect(instance.get('value')).to.be.false;
    });

    it('custom the value', () => {
        instance = mount(ValueDemo);

        const [el1, el2] = instance.element.querySelectorAll('.k-switch');
        el1.click();
        el2.click();
        expect(instance.element.outerHTML).to.matchSnapshot();  
        el1.click();
        el2.click();
        expect(instance.element.outerHTML).to.matchSnapshot();  
    });

    it('stop propagation on handle', () => {
        instance = mount(BasicDemo);

        instance.element.querySelector('.k-handle').click();
        expect(instance.element.outerHTML).to.matchSnapshot();
    });
});
