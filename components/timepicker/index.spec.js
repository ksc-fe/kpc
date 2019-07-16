import BasicDemo from '~/components/timepicker/demos/basic';
import RangeDemo from '~/components/timepicker/demos/range';
import StepDemo from '~/components/timepicker/demos/step';
import StepRangeDemo from '~/components/timepicker/demos/stepRange';
import {mount, unmount, dispatchEvent, getElement} from 'test/utils';

describe('Timepicker', () => {
    let instance;

    afterEach((done) => {
        unmount(instance);
        setTimeout(done, 500);
    });

    it('select time', () => {
        instance = mount(BasicDemo); 

        const [picker1] = instance.element.querySelectorAll('.k-input');
        picker1.click();
        let dropdown = getElement('.k-dropdown-menu.k-time-picker');
        expect(dropdown.innerHTML).to.matchSnapshot();
        const next = dropdown.querySelector('.k-scroll-item:nth-child(11)');
        next.click();
        expect(dropdown.innerHTML).to.matchSnapshot();
        expect(instance.get('time')).to.be.undefined;
        next.click();
        expect(dropdown.innerHTML).to.matchSnapshot();
        expect(instance.get('time')).to.eql('02:00:00');
        // set time
        instance.set('time', '03:03:03');
        expect(dropdown.innerHTML).to.matchSnapshot();

        // multiple
        const [, picker2] = instance.element.querySelectorAll('.k-input');
        picker2.click();
        dropdown = getElement('.k-dropdown-menu.k-time-picker');
        dropdown.querySelector('.k-scroll-item:nth-child(11)').click();
        picker2.click();
        picker2.click();
        dropdown = getElement('.k-dropdown-menu.k-time-picker');
        dropdown.querySelector('.k-scroll-item:nth-child(12)').click();
        expect(instance.get('timeArray')).to.eql(['01:00:00', '02:00:00']);
        // click confirm button
        const btn = dropdown.querySelector('.k-footer .k-btn');
        btn.click();
        dropdown.querySelector('.k-scroll-item:nth-child(13)').click();
        expect(instance.get('timeArray')).to.eql(['01:00:00', '02:00:00', '03:00:00']);

        // set value
        instance.set('timeArray', ['03:03:03', '03:03:04']);
        expect(dropdown.innerHTML).to.matchSnapshot();
    });

    it('range', () => {
        instance = mount(RangeDemo);

        const input = instance.element.querySelector('.k-input');
        input.click();
        const dropdown = getElement('.k-dropdown-menu.k-time-picker');
        expect(dropdown.innerHTML).to.matchSnapshot();
        dropdown.querySelector('.k-active').nextElementSibling.click();
        expect(dropdown.innerHTML).to.matchSnapshot();
        dropdown.querySelector('.k-disabled').nextElementSibling.nextSibling.click();
        expect(dropdown.innerHTML).to.matchSnapshot();
        expect(instance.get('time')).to.eql(['01:00:00', '02:00:00']);
    });

    it('step', () => {
        instance = mount(StepDemo);

        const picker = instance.element.querySelector('.k-wrapper');
        picker.click();
        const dropdown = getElement('.k-select-dropdown');
        expect(dropdown.innerHTML).to.matchSnapshot();
        dropdown.querySelector('.k-item').click();
        expect(instance.get('time')).to.eql('00:00:00');
    });

    it('step range', () => {
        instance = mount(StepRangeDemo);

        const picker = instance.element.querySelector('.k-input');
        picker.click();
        const dropdown = getElement('.k-dropdown-menu.k-time-picker');
        expect(dropdown.innerHTML).to.matchSnapshot();
        dropdown.querySelector('.k-active').nextElementSibling.click();
        expect(dropdown.innerHTML).to.matchSnapshot();
        dropdown.querySelector('.k-disabled').nextElementSibling.click();
        expect(dropdown.innerHTML).to.matchSnapshot();
        expect(instance.get('time')).to.eql(['00:30:00', '00:30:00']);
    });
});
