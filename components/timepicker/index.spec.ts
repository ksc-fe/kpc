import BasicDemo from '~/components/timepicker/demos/basic';
import RangeDemo from '~/components/timepicker/demos/range';
import StepDemo from '~/components/timepicker/demos/step';
import StepRangeDemo from '~/components/timepicker/demos/stepRange';
import FormatDemo from '~/components/timepicker/demos/format';
import {mount, unmount, dispatchEvent, getElement, wait} from '../../test/utils';
import {Timepicker} from 'kpc';
import {Component} from 'intact';

describe('Timepicker', () => {

    afterEach(async () => {
        unmount();
        await wait(400);
    });

    it('select time', async () => {
        const [instance, element] = mount(BasicDemo);

        const [picker1, picker2] = element.querySelectorAll('.k-select') as NodeListOf<HTMLElement>;
        picker1.click();
        await wait(300);
        let dropdown = getElement('.k-time-content')!;
        expect(dropdown.innerHTML).to.matchSnapshot();
        const next = dropdown.querySelector('.k-scroll-select-item:nth-child(11)') as HTMLElement;
        next.click();
        await wait();
        expect(dropdown.innerHTML).to.matchSnapshot();
        expect(instance.get('time')).to.be.null;
        next.click();
        await wait();
        expect(instance.get('time')).to.be.null;
        expect(dropdown.innerHTML).to.matchSnapshot();
        const ok = dropdown.querySelector('.k-btn') as HTMLElement;
        ok.click();
        await wait(300);
        expect(instance.get('time')).to.eql('02:00:00');
        expect(dropdown.style.display).to.eql('none');
        // set time
        instance.set('time', '03:03:03');
        picker1.click();
        await wait(300);
        expect(dropdown.innerHTML).to.matchSnapshot();

        // multiple
        picker2.click();
        await wait(300);
        dropdown = getElement('.k-time-content')!;
        dropdown.querySelector<HTMLElement>('.k-scroll-select-item:nth-child(11)')!.click();
        const ok2 = dropdown.querySelector('.k-btn') as HTMLElement;
        ok2.click();
        dropdown.querySelector<HTMLElement>('.k-scroll-select-item:nth-child(12)')!.click();
        ok2.click();
        await wait();
        expect(instance.get('timeArray')).to.eql(['01:00:00', '02:00:00']);
        // click the same time will do nothing
        ok2.click();
        await wait();
        expect(instance.get('timeArray')).to.eql(['01:00:00', '02:00:00']);
        // remove one value
        const [, close] = picker2.querySelectorAll<HTMLElement>('.k-select-close');
        close.click();
        await wait();
        expect(instance.get('timeArray')).to.eql(['01:00:00']);
        expect(dropdown.innerHTML).to.matchSnapshot();

        // clear
        picker2.querySelector<HTMLElement>('.k-select-clear')!.click();
        await wait();
        expect(instance.get('timeArray')).to.eql([]);
        ok2.click();
        await wait();
        expect(instance.get('timeArray')).to.eql(['00:00:00']);

        // set value
        instance.set('timeArray', ['03:03:03', '03:03:04']);
        await wait();
        expect(dropdown.innerHTML).to.matchSnapshot();
    });

    it('range', async () => {
        const [instance, element] = mount(RangeDemo);

        const picker = element.querySelector('.k-select') as HTMLElement;
        picker.click();
        await wait(300);
        const dropdown = getElement('.k-time-content')!;
        expect(dropdown.innerHTML).to.matchSnapshot();
        const [start, end] = dropdown.querySelectorAll<HTMLElement>('.k-datepicker-calendar-wrapper');
        (start.querySelector('.k-active')!.nextElementSibling as HTMLElement).click();
        await wait();
        expect(dropdown.innerHTML).to.matchSnapshot();
        (end.querySelector('.k-active')!.nextElementSibling!.nextElementSibling as HTMLElement).click();
        await wait();
        expect(dropdown.innerHTML).to.matchSnapshot();
        dropdown.querySelector<HTMLElement>('.k-btn')!.click();
        await wait();
        expect(instance.get('time')).to.eql(['01:00:00', '02:00:00']);
    });

    it('step', async () => {
        const [instance, element] = mount(StepDemo);

        const picker = element.querySelector('.k-select') as HTMLElement;
        picker.click();
        await wait();
        const dropdown = getElement('.k-select-menu')!;
        expect(dropdown.innerHTML).to.matchSnapshot();
        dropdown.querySelector<HTMLElement>('.k-select-option')!.click();
        expect(instance.get('time')).to.eql('00:00:00');
    });

    it('step range', async () => {
        const [instance, element] = mount(StepRangeDemo);

        const picker = element.querySelector('.k-select') as HTMLElement;
        picker.click();
        await wait();
        const dropdown = getElement('.k-time-content')!;
        expect(dropdown.innerHTML).to.matchSnapshot();
        const [start, end] = dropdown.querySelectorAll<HTMLElement>('.k-datepicker-calendar-wrapper');
        (start.querySelector('.k-active')!.nextElementSibling as HTMLElement).click();
        await wait();
        expect(dropdown.innerHTML).to.matchSnapshot();
        (end.querySelector('.k-active')!.nextElementSibling as HTMLElement).click();
        await wait();
        expect(dropdown.innerHTML).to.matchSnapshot();
        dropdown.querySelector<HTMLElement>('.k-btn')!.click();
        expect(instance.get('time')).to.eql(['00:30:00', '00:30:00']);
    });

    it('format', async () => {
        const [instance, element] = mount(FormatDemo);

        const [input1, input2, input3] = element.querySelectorAll<HTMLElement>('.k-select');
        input1.click();
        await wait();
        let content = getElement('.k-time-content')!;
        expect(content.innerHTML).to.matchSnapshot();
        // is '02'
        content.querySelector<HTMLElement>('.k-scroll-select-item:nth-child(12)')!.click();
        await wait();
        content.querySelector<HTMLElement>('.k-btn')!.click();
        await wait();
        expect(instance.get('time1')).to.eql('02:00 am');
        expect(input1.innerHTML).to.matchSnapshot();

        input2.click();
        await wait();
        content = getElement('.k-select-menu')!;
        expect(content.innerHTML).to.matchSnapshot();
        content.querySelector<HTMLElement>('.k-select-option')!.click();
        await wait();
        expect(instance.get('time2')).to.eql('00:00:00');
        expect(input2.innerHTML).to.matchSnapshot();

        input3.click();
        await wait();
        content = getElement('.k-time-content')!;
        expect(content.innerHTML).to.matchSnapshot();
        const [scroll1, scroll2] = content.querySelectorAll<HTMLElement>('.k-scroll-select');
        (scroll1.querySelector('.k-scroll-select-item:nth-child(11)') as HTMLElement).click();
        (scroll2.querySelector('.k-scroll-select-item:nth-child(12)') as HTMLElement).click();
        await wait();
        expect(content.innerHTML).to.matchSnapshot();
        content.querySelector<HTMLElement>('.k-btn')!.click();
        await wait();
        expect(instance.get('time3')).eql(['00:30:00.000', '01:00:00.000']);
        expect(input3.innerHTML).to.matchSnapshot();
    });

    it('can input', async () => {
        class Demo extends Component {
            static template = `
                const {Timepicker} = this;
                <div>
                    <Timepicker v-model="basic" min="01:34:56" max="15:02:59" />
                    <Timepicker v-model="multiple" multiple />
                    <Timepicker v-model="range" range min="01:34:56" max="15:02:59" />
                    <Timepicker v-model="format" range step="00:30:00" valueFormat="HH:mm:ss.SSS" showFormat="HH:mm"/>
                </div>
            `;
            private Timepicker = Timepicker;
        }

        const [instance, element] = mount(Demo);
        const [
            basicInput, multipleInput,
            rangeInput, formatInput
        ] = element.querySelectorAll<HTMLInputElement>('.k-input-inner');
        const input = async (input: HTMLInputElement, value: string) => {
            input.value = value;
            dispatchEvent(input, 'input');
            await wait();
        };
        // input disabled value
        await input(basicInput, '01:01:01');
        expect(instance.get('basic')).to.eql(undefined);

        // input correct value
        await input(basicInput, '03:03:03');
        expect(instance.get('basic')).to.eql('03:03:03');

        // input multple values
        await input(multipleInput, '01:01:01');
        expect(instance.get('multiple')).to.eql(['01:01:01']);
        await input(multipleInput, '02:02:02');
        expect(instance.get('multiple')).to.eql(['01:01:01', '02:02:02']);

        // input disabled range value
        await input(rangeInput, '01:01:01~05:05:05');
        expect(instance.get('range')).to.eql(undefined);

        // input correct range value
        await input(rangeInput, '03:03:03~05:05:05');
        expect(instance.get('range')).to.eql(['03:03:03', '05:05:05']);

        // input correct formated value
        await input(formatInput, '01:00~02:00');
        expect(instance.get('format')).to.eql(['01:00:00.000', '02:00:00.000']);
    });
});
