import BasicDemo from '~/components/timepicker/demos/basic';
import RangeDemo from '~/components/timepicker/demos/range';
import StepDemo from '~/components/timepicker/demos/step';
import StepRangeDemo from '~/components/timepicker/demos/stepRange';
import FormatDemo from '~/components/timepicker/demos/format';
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

    it('format', () => {
        instance = mount(FormatDemo);

        const [input1, input2, input3] = instance.element.querySelectorAll('.k-datepicker > div');
        input1.click();
        let content = getElement('.k-dropdown-menu.k-time-picker');
        expect(content.innerHTML).to.matchSnapshot();
        // is '02'
        content.querySelectorAll('.k-scroll-item:not(.k-disabled)')[1].click();
        expect(instance.get('time1')).to.eql('02:00 am');
        expect(input1.innerHTML).to.matchSnapshot();

        input2.click();
        content = getElement('.k-select-dropdown');
        expect(content.innerHTML).to.matchSnapshot();
        content.querySelector('.k-item').click();
        expect(instance.get('time2')).to.eql('00:00:00');
        expect(input2.innerHTML).to.matchSnapshot();

        input3.click();
        content = getElement('.k-dropdown-menu.k-time-picker');
        expect(content.innerHTML).to.matchSnapshot();
        const [scroll1, scroll2] = content.querySelectorAll('.k-scroll-select');
        scroll1.querySelector('.k-active').nextElementSibling.click();
        scroll2.querySelector('.k-active').nextElementSibling.nextElementSibling.click();
        expect(content.innerHTML).to.matchSnapshot();
        expect(instance.get('time3')).eql(['00:30:00.000', '01:00:00.000']);
        expect(input3.innerHTML).to.matchSnapshot();
    });
});
