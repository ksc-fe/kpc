import BasicDemo from '~/components/datepicker/demos/basic';
import YearMonthDemo from '~/components/datepicker/demos/yearMonth';
import ClearableDemo from '~/components/datepicker/demos/clearable';
import DatetimeDemo from '~/components/datepicker/demos/datetime';
import RangeDemo from '~/components/datepicker/demos/range';
import {mount, unmount, dispatchEvent, wait, getElement} from 'test/utils';
import {Component, findDomFromVNode} from 'intact';

describe('Datepicker', () => {
    it('should select date', async () => {
        const [instance, element] = mount(BasicDemo);

        const input = element.querySelector('.k-input') as HTMLInputElement;
        input.click();
        await wait();
        const content = getElement('.k-datepicker-content')!;
        (content.querySelector('.k-calendar-item') as HTMLDivElement).click();
        expect(instance.get('date')).to.be.string;
    });

    it('year and month picker', async () => {
        const [instance, element] = mount(YearMonthDemo);

        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const [yearInput, monthInput] = Array.from(element.querySelectorAll('.k-input'));

        // year
        yearInput.click();
        await wait();
        let content = getElement('.k-datepicker-content')!;
        const yearDom = content.querySelector('.k-today')!;
        const nextYearDom = yearDom.nextElementSibling as HTMLElement;
        nextYearDom.click();
        expect(instance.get<number>('year') - 1).eql(year);

        // month
        monthInput.click();
        await wait();
        content = getElement('.k-datepicker-content')!;
        const monthDom = content.querySelector('.k-today') as HTMLElement;
        monthDom.click();
        const [_year, _month] = instance.get<string>('month').split('-');
        expect(+_year).eql(year);
        expect(+_month - 1).eql(month);
    });

    it('should change year and month', async () => {
        const [instance, element] = mount(BasicDemo);

        const input = element.querySelector('.k-input') as HTMLElement;
        input.click();
        await wait();
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();

        let content = getElement('.k-datepicker-content')!;
        const [prevYear, prevMonth] = Array.from(content.querySelectorAll('.k-prev'));
        const [nextMonth, nextYear] = Array.from(content.querySelectorAll('.k-next'));
        // click prev year twice
        dispatchEvent(prevYear, 'click');
        dispatchEvent(prevYear, 'click');
        // click prev month twice
        dispatchEvent(prevMonth, 'click');
        dispatchEvent(prevMonth, 'click');
        // click next month once
        dispatchEvent(nextMonth, 'click');
        // click next year once
        dispatchEvent(nextYear, 'click');

        await wait();
        // select the middle date
        dispatchEvent(content.querySelectorAll('.k-calendar-item')[17], 'click');
        const curDate = new Date(instance.get('date'));
        curDate.setFullYear(curDate.getFullYear() + 1);
        curDate.setMonth(curDate.getMonth() + 1);
        expect(curDate.getFullYear()).be.eql(year);
        expect(curDate.getMonth()).be.eql(month);

        // change year and month in year/month panel
        input.click();
        await wait();
        content = getElement('.k-datepicker-content')!;
        const [yearDom, monthDom] = Array.from(content.querySelectorAll('.k-month-value'));
        yearDom.click();
        await wait();
        (content.querySelector('.k-today') as HTMLElement).click();
        await wait();
        (content.querySelector('.k-today') as HTMLElement).click();
        await wait();
        // select the middle date
        dispatchEvent(content.querySelectorAll('.k-calendar-item')[17], 'click');
        const curDate1 = new Date(instance.get('date'));
        const curMonth = curDate1.getMonth();
        expect(curMonth).be.eql(month);
        expect(curDate1.getFullYear()).be.eql(year);
    });

    it('should clear value', async () => {
        const [instance, element] = mount(ClearableDemo);

        instance.set<string>('date', '2018-03-04');
        await wait();
        dispatchEvent(element.querySelector('.k-select-clear')!, 'click');
        expect(instance.get<string>('date')).be.null;
    });

    it('should clear datetime', async () => {
        const [instance, element] = mount(DatetimeDemo);

        const input = element.querySelector('.k-input') as HTMLElement;
        input.click();
        await wait();
        const content = getElement('.k-datepicker-content')!;
        // change to time panel
        (content.querySelector('.k-calendar-item') as HTMLElement).click();
        await wait();
        (content.querySelector('.k-datepicker-footer .k-btn') as HTMLElement).click();
        // clear the value
        await wait();
        expect(instance.get('datetime1')).to.be.string;
        dispatchEvent(element.querySelector('.k-select-clear')!, 'click');
        expect(instance.get('datetime1')).be.null;

        // set value to empty string should clear datetime
        input.click();
        await wait();
        (content.querySelector('.k-calendar-item') as HTMLElement).click();
        instance.set<string>('datetime1', '');
        expect(instance.get('datetime1')).to.eql('');
    });

    it('datetime picker', async () => {
        const [instance, element] = mount(DatetimeDemo);

        const input = element.querySelector('.k-input') as HTMLElement;
        input.click();
        await wait();
        const content = getElement('.k-datepicker-content')!;
        // change to time panel
        (content.querySelector('.k-calendar-item') as HTMLElement).click();
        await wait();
        dispatchEvent(content.querySelector('.k-scroll-select-item')!, 'click');
        (content.querySelector('.k-datepicker-footer .k-btn') as HTMLElement).click();

        expect(instance.get<string>('datetime1').split(' ')[1]).eql('15:00:00');
    });

    it('should disable some time pickers', async () => {
        const [instance, element] = mount(DatetimeDemo);

        const input = element.querySelectorAll('.k-input')[1] as HTMLElement;
        input.click();
        await wait();
        const content = getElement('.k-datepicker-content')!;

        // change to time panel
        (content.querySelector('.k-calendar-item') as HTMLElement).click();
        await wait();
        dispatchEvent(content.querySelector('.k-scroll-select:nth-child(3) .k-scroll-select-item')!, 'click');
        (content.querySelector('.k-datepicker-footer .k-btn') as HTMLElement).click();

        expect(instance.get<string>('datetime2').split(' ')[1]).eql('00:00');
    });

    it('range', async () => {
        const [instance, element] = mount(RangeDemo);

        // date
        const [input1] = Array.from(element.querySelectorAll('.k-input')) as HTMLElement[];
        input1.click();
        await wait();
        let content = getElement('.k-datepicker-content')!;
        // select the middle date
        let first = content.querySelectorAll('.k-calendar-item')[17] as HTMLElement;
        first.click();
        expect(instance.get<string>('date')).to.be.undefined;
        await wait();
        // dispatchEvent(first.nextElementSibling.nextElementSibling, 'mouseenter');
        // expect(first.nextElementSibling.classList.contains('k-in-range')).to.be.true;
        // dispatchEvent(first.previousElementSibling.previousElementSibling, 'mouseenter');
        // expect(first.previousElementSibling.classList.contains('k-in-range')).to.be.true;
        // expect(first.nextElementSibling.classList.contains('k-in-range')).to.be.false;
        (first.previousElementSibling!.previousElementSibling as HTMLElement).click();
        let value = instance.get<string>('date');
        expect(value).have.lengthOf(2);
        expect(value[0] < value[1]).to.be.true;

        // select the same date
        // input1.click();
        // content = getElement('.k-datepicker-content');
        // // select the middle date
        // first = content.querySelectorAll('.k-day')[17];
        // first.click();
        // first.click();
        // value = instance.get('date');
        // expect(value).have.lengthOf(2);
        // expect(value[0]).eql(value[1]);

        // // cancel all of range values and re-select
        // // input1.click();
        // // content = getElement('.k-datepicker-content');
        // // // select the middle date
        // // first = content.querySelectorAll('.k-day')[17];
        // // first.click();
        // // first.previousElementSibling.previousElementSibling.click();
        // // first.click();
        // // first.previousElementSibling.previousElementSibling.click();
        // // expect(instance.get('date')).eql(value);

        // // range cross months
        // input1.click();
        // content = getElement('.k-datepicker-content');
        // first = content.querySelectorAll('.k-day')[18];
        // first.click();
        // let second = content.querySelectorAll('.k-calendar-wrapper:nth-child(2) .k-day')[18];
        // second.click();
        // expect(value).have.lengthOf(2);

        // // datetime
        // const [, input2] = instance.element.querySelectorAll('.k-input');
        // input2.click();
        // content = getElement('.k-datepicker-content');
        // const [calendar1, calendar2] = content.querySelectorAll('.k-calendar-wrapper');
        // first = calendar1.querySelectorAll('.k-day')[17];
        // second = calendar2.querySelectorAll('.k-day')[17];
        // first.click();
        // second.click();
        // await wait();
        // calendar1.querySelector('.k-col .k-active').nextElementSibling.click();
        // calendar2.querySelector('.k-col .k-active').previousElementSibling.click();
        // value = instance.get('time');
        // expect(value).have.lengthOf(2);
        // expect(value.map(item => item.split(' ')[1])).eql(['01:00:00', '23:00:00']);
    });

    // it('multiple select', async () => {
        // const [instance, element] = mount(MultipleDemo);

        // dispatchEvent(instance.element.children[0].children[0], 'click');
        // let content = getElement('.k-datepicker-content');
        // dispatchEvent(content.querySelectorAll('.k-day')[0], 'click');
        // dispatchEvent(content.querySelectorAll('.k-day')[1], 'click');
        // expect(instance.get('date')).have.lengthOf(2);

        // // datetime
        // const [, input] = instance.element.querySelectorAll('.k-input');
        // input.click();
        // content = getElement('.k-datepicker-content');
        // content.querySelector('.k-day').click();
        // // change to date panel again
        // const [tab1, tab2] = content.querySelectorAll('.k-tab');
        // tab1.click();
        // await wait(0);
        // content.querySelector('.k-day:nth-child(2)').click();
        // expect(instance.get('datetime')).have.lengthOf(2);

        // // also change time after changing tabs
        // tab1.click();
        // await wait(0);
        // tab2.click();
        // await wait(0);
        // content.querySelector('.k-scroll-item').click();
        // expect(instance.get('datetime')).have.lengthOf(2);
    // });
});
