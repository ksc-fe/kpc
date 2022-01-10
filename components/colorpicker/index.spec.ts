import BasicDemo from '~/components/colorpicker/demos/basic';
import {mount, unmount, dispatchEvent, getElement, wait} from 'test/utils';
import {Component} from 'intact';
import tinycolor from 'tinycolor2';

describe('Colorpicker', () => {
    let instance: BasicDemo;
    let element: HTMLElement;
    let picker: HTMLElement;
    beforeEach(async () => {
        const data = mount(BasicDemo);
        instance = data[0];
        element = data[1];
        const trigger = element.querySelector('.k-colorpicker-color') as HTMLElement;
        trigger.click();
        await wait();

        picker = getElement('.k-colorpicker-content')!;
    });

    afterEach(async function() {
        unmount();
        await wait(400);
    });

    it('should select color by saturation', async function() {
        expect(picker.innerHTML).to.matchSnapshot();
        const saturation = picker.querySelector('.k-colorpicker-saturation') as HTMLElement;
        const {left, top} = saturation.getBoundingClientRect();

        dispatchEvent(saturation, 'mousedown', {
            pageX: left + window.pageXOffset,
            pageY: top + window.pageYOffset,
            which: 1
        });
        await wait();
        expect(picker.innerHTML).to.matchSnapshot();
        expect(instance.get('color')).to.eql('#ffffff');

        dispatchEvent(saturation, 'mousemove', {
            pageX: left + window.pageXOffset + 1,
            pageY: top + window.pageYOffset + 1
        });
        await wait();
        expect(instance.get('color')).to.eql('#fdfcfc');

        dispatchEvent(saturation, 'mouseup');
        await wait();
    });

    it('should change color by hue', async () => {
        const hue = picker.querySelector('.k-colorpicker-hue .k-slider-track-wrapper') as HTMLElement;
        const {width, left} = hue.getBoundingClientRect();
        dispatchEvent(hue, 'click', {clientX: 100 / 360 * width + left});
        // changing hue is throttled 50ms
        await wait(100);
        expect(instance.get('color')).to.eql('#68d923');
    });

    it('should change color by alpha', async () => {
        const alpha = picker.querySelector('.k-colorpicker-alpha .k-slider-track-wrapper') as HTMLElement;
        const {width, left} = alpha.getBoundingClientRect();
        dispatchEvent(alpha, 'click', {clientX: 0.5 * width + left});
        // changing alpha is throttled 50ms
        await wait(100);
        expect(instance.get('color')).to.eql('rgba(217, 145, 35, 0.5)');
    });

    it('should change color by input', async () => {
        const [hex, r, g, b, alpha] = picker.querySelectorAll('input');
        
        // should ignore invalid value
        hex.value = 'test';
        dispatchEvent(hex, 'input');
        await wait();
        expect(instance.get('color')).to.eql('#d99123');

        hex.value = '333';
        dispatchEvent(hex, 'input');
        await wait();
        expect(instance.get('color')).to.eql('#333333');

        // drag to change alpha
        const alphaText = picker.querySelectorAll('.k-colorpicker-drag')[3];
        dispatchEvent(alphaText, 'mousedown', {clientX: 0, which: 1});
        dispatchEvent(alphaText, 'mousemove', {clientX: -1});
        await wait();
        expect(instance.get('color')).to.eql('rgba(51, 51, 51, 0.99)');
        dispatchEvent(alphaText, 'mousemove', {clientX: 1});
        await wait();
        expect(instance.get('color')).to.eql('#333333');
        expect(picker.innerHTML).to.matchSnapshot();
        dispatchEvent(alphaText, 'mouseup');
        await wait();

        r.value = '1000';
        dispatchEvent(r, 'input');
        await wait();
        expect(instance.get('color')).to.eql('#ff3333');

        alpha.value = '-1';
        dispatchEvent(alpha, 'input');
        await wait();
        expect(instance.get('color')).to.eql('rgba(255, 51, 51, 0)');
    });

    it('should change to hsv mode', async () => {
        const [first, second] = picker.querySelectorAll<HTMLElement>('.k-colorpicker-drag');
        const color = tinycolor(instance.get('color'));
        const hsl = color.toHsl();
        console.log(hsl);

        dispatchEvent(first, 'mousedown', {which: 1});
        dispatchEvent(first, 'mouseup');
        await wait();
        expect(picker.innerHTML).to.matchSnapshot();

        dispatchEvent(first, 'mousedown', {clientX: 0, which: 1});
        dispatchEvent(first, 'mousemove', {clientX: -1});
        await wait();
        expect(tinycolor(instance.get('color')).toString('hsl')).to.eql('hsl(35, 72%, 49%)');
        dispatchEvent(first, 'mousemove', {clientX: 1});
        await wait();
        expect(tinycolor(instance.get('color')).toString('hsl')).to.eql('hsl(37, 72%, 49%)');
        dispatchEvent(first, 'mouseup');
        await wait();

        dispatchEvent(second, 'mousedown', {clientX: 0, which: 1});
        dispatchEvent(second, 'mousemove', {clientX: -1});
        await wait();
        expect(tinycolor(instance.get('color')).toString('hsl')).to.eql('hsl(37, 71%, 49%)');
        dispatchEvent(second, 'mousemove', {clientX: 1});
        await wait();
        expect(tinycolor(instance.get('color')).toString('hsl')).to.eql('hsl(37, 73%, 49%)');
        dispatchEvent(first, 'mouseup');
        await wait();

        // input
        const [hex, h, s] = picker.querySelectorAll('input');
        h.value = '1000';
        dispatchEvent(h, 'input');
        await wait();
        expect(tinycolor(instance.get('color')).toString('hsl')).to.eql('hsl(359, 73%, 49%)');

        s.value = '10';
        dispatchEvent(s, 'input');
        await wait();
        expect(tinycolor(instance.get('color')).toString('hsl')).to.eql('hsl(358, 10%, 49%)');
    });
});
