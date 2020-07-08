import BasicDemo from '~/components/timepicker/demos/basic';
import RangeDemo from '~/components/timepicker/demos/range';
import StepDemo from '~/components/timepicker/demos/step';
import StepRangeDemo from '~/components/timepicker/demos/stepRange';
import FormatDemo from '~/components/timepicker/demos/format';
import {mount, unmount, dispatchEvent, getElement, wait} from 'test/utils';
import Timepicker from 'kpc/components/timepicker';
import Intact from 'intact';

describe('Timepicker', () => {
    let instance;

    // afterEach(async () => {
        // unmount(instance);
        // await wait(400);
    // });

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

    it('can input', () => {
        class Demo extends Intact {
            @Intact.template()
            static template = `
                <div>
                    <Timepicker v-model="basic" min="01:34:56" max="15:02:59" />
                    <Timepicker v-model="multiple" multiple />
                    <Timepicker v-model="range" range min="01:34:56" max="15:02:59" />
                    <Timepicker v-model="format" range step="00:30:00" valueFormat="HH:mm:ss.SSS" showFormat="HH:mm"/>
                </div>
            `;
            _init() { this.Timepicker = Timepicker; }
        }

        instance = mount(Demo);

        const [
            basicInput, multipleInput,
            rangeInput, formatInput
        ] = instance.element.querySelectorAll('input');

        // input disabled value
        basicInput.value = '01:01:01';
        dispatchEvent(basicInput, 'input');
        expect(instance.get('basic')).to.eql(undefined);

        // input correct value
        basicInput.value = '03:03:03';
        dispatchEvent(basicInput, 'input');
        expect(instance.get('basic')).to.eql('03:03:03');

        // input multple values
        multipleInput.value = '01:01:01,02:02:02';
        dispatchEvent(multipleInput, 'input');
        expect(instance.get('multiple')).to.eql(['01:01:01', '02:02:02']);

        // input disabled range value
        rangeInput.value = '01:01:01~05:05:05';
        dispatchEvent(rangeInput, 'input');
        expect(instance.get('range')).to.eql(undefined);

        // input correct range value
        rangeInput.value = '03:03:03~05:05:05';
        dispatchEvent(rangeInput, 'input');
        expect(instance.get('range')).to.eql(['03:03:03', '05:05:05']);

        // input correct formated value
        formatInput.value = '01:00~02:00';
        dispatchEvent(formatInput, 'input');
        expect(instance.get('format')).to.eql(['01:00:00.000', '02:00:00.000']);
    });
});
