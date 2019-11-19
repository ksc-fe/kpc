import BasicDemo from '~/components/colorpicker/demos/basic';
import {mount, unmount, dispatchEvent, getElement, wait} from 'test/utils';

describe('Colorpicker', () => {
    let instance;
    let picker;

    beforeEach(() => {
        instance = mount(BasicDemo);
        const trigger = instance.element.querySelector('.k-color');
        trigger.click();

        picker = getElement('.k-colorpicker-content');
    });

    afterEach(async function() {
        unmount(instance);
        await wait(400);
    });

    it('should select color by saturation', async function() {
        expect(picker.innerHTML).to.matchSnapshot();
        const saturation = picker.querySelector('.k-saturation');
        const {left, top} = saturation.getBoundingClientRect();

        dispatchEvent(saturation, 'mousedown', {pageX: left + window.pageXOffset, pageY: top + window.pageYOffset});
        expect(picker.innerHTML).to.matchSnapshot();
        expect(instance.get('color')).to.eql('#ffffff');

        dispatchEvent(saturation, 'mousemove', {pageX: left + window.pageXOffset + 1, pageY: top + window.pageYOffset + 1});
        expect(instance.get('color')).to.eql('#fdfcfc');

        dispatchEvent(saturation, 'mouseup');
    });

    it('should change color by hue', () => {
        const hue = picker.querySelector('.k-hue .k-wrapper');
        const {width, left} = hue.getBoundingClientRect();
        dispatchEvent(hue, 'click', {clientX: 100 / 360 * width + left});
        expect(instance.get('color')).to.eql('#60d923');
    });

    it('should change color by alpha', () => {
        const alpha = picker.querySelector('.k-alpha .k-wrapper');
        const {width, left} = alpha.getBoundingClientRect();
        dispatchEvent(alpha, 'click', {clientX: 0.5 * width + left});
        expect(instance.get('color')).to.eql('rgba(217, 145, 35, 0.5)');
    });

    it('should change color by input', () => {
        const [hex, r, g, b, alpha] = picker.querySelectorAll('input');
        
        // should ignore invalid value
        hex.value = 'test';
        dispatchEvent(hex, 'input');
        expect(instance.get('color')).to.eql('#d99123');

        hex.value = '333';
        dispatchEvent(hex, 'input');
        expect(instance.get('color')).to.eql('#333333');

        // drag to change alpha
        const alphaText = picker.querySelectorAll('.k-drag')[3];
        dispatchEvent(alphaText, 'mousedown', {clientX: 0, which: 1});
        dispatchEvent(alphaText, 'mousemove', {clientX: -1});
        expect(instance.get('color')).to.eql('rgba(51, 51, 51, 0.99)');
        dispatchEvent(alphaText, 'mousemove', {clientX: 1});
        expect(instance.get('color')).to.eql('rgb(51, 51, 51)');
        expect(picker.innerHTML).to.matchSnapshot();
        dispatchEvent(alphaText, 'mouseup');

        r.value = 1000;
        dispatchEvent(r, 'input');
        expect(instance.get('color')).to.eql('rgb(255, 51, 51)');

        alpha.value = -1;
        dispatchEvent(alpha, 'input');
        expect(instance.get('color')).to.eql('rgba(255, 51, 51, 0)');
    });
});
