import BasicDemo from '~/components/datepicker/demos/basic';
import ClearableDemo from '~/components/datepicker/demos/clearable';
import MultipleDemo from '~/components/datepicker/demos/multiple';
import DatetimeDemo from '~/components/datepicker/demos/datetime';
import YearMonthDemo from '~/components/datepicker/demos/yearMonth';
import RangeDemo from '~/components/datepicker/demos/range';
import FormatDemo from '~/components/datepicker/demos/format';
import MaxMinDemo from '~/components/datepicker/demos/maxMin';
import {mount, unmount, dispatchEvent, getElement, wait} from 'test/utils';
import Intact from 'intact';
import Datepicker from 'kpc/components/datepicker';
import dayjs from 'dayjs';

describe('Datepicker', () => {
    let instance;

    afterEach(() => {
        unmount(instance);
        const content = getElement('.k-datepicker-content')
        if (content) {
            content.parentNode.removeChild(content);
        }
    });

    it('should select date', () => {
        instance = mount(BasicDemo);

        const input = instance.element.querySelector('.k-input');
        input.click();
        const content = getElement('.k-datepicker-content');
        content.querySelector('.k-day').click();
        expect(instance.get('date')).to.be.string;
    });

    it('year and month picker', async () => {
        instance = mount(YearMonthDemo);

        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const [yearInput, monthInput] = instance.element.querySelectorAll('.k-input');

        // year
        yearInput.click();
        let content = getElement('.k-datepicker-content');
        const yearDom = content.querySelector('.k-active');
        const nextYearDom = yearDom.nextElementSibling;
        const prevYearDom = yearDom.previousElementSibling;
        nextYearDom.click();
        expect(instance.get('year') - 1).eql(year);
        prevYearDom.click();
        expect(+instance.get('year')).eql(year);

        // month
        monthInput.click();
        content = getElement('.k-datepicker-content');
        const [col1, col2] = content.querySelectorAll('.k-col');
        col1.querySelector('.k-active ~ div').click();
        col2.querySelector('.k-active ~ div').click();
        const [_year, _month] = instance.get('month').split('-');
        expect(_year - 1).eql(year);
        expect(_month - 1).eql((month + 1) % 12);

        // click confirm button
        const btn = content.querySelector('.k-footer .k-btn');
        btn.click();
        await wait(500);
        expect(getElement('.k-datepicker-content')).to.be.undefined;
    });

    it('should change year and month', () => {
        instance = mount(BasicDemo);

        const input = instance.element.querySelector('.k-input');
        input.click();
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();

        let content = getElement('.k-datepicker-content');
        const [prevYear, prevMonth] = content.querySelectorAll('.k-prev');
        const [nextMonth, nextYear] = content.querySelectorAll('.k-next');
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

        // select the middle date
        dispatchEvent(content.querySelectorAll('.k-day')[17], 'click');
        const curDate = new Date(instance.get('date'));
        curDate.setFullYear(curDate.getFullYear() + 1);
        curDate.setMonth(curDate.getMonth() + 1);
        expect(curDate.getFullYear()).be.eql(year);
        expect(curDate.getMonth()).be.eql(month);

        // change year and month in year/month panel
        input.click(); 
        content = getElement('.k-datepicker-content');
        const yearMonth = content.querySelector('.k-text-wrapper');
        yearMonth.click();
        const [col1, col2] = content.querySelectorAll('.k-col');
        col1.querySelector('.k-active ~ div').click();
        col2.querySelector('.k-active ~ div').click();
        yearMonth.click();
        // select the middle date
        dispatchEvent(content.querySelectorAll('.k-day')[17], 'click');
        const curDate1 = new Date(instance.get('date'));
        const curMonth = curDate1.getMonth();
        expect(curMonth).be.eql(month);
        if (curMonth === 0) {
            expect(curDate1.getFullYear() + 1).be.eql(year);
        } else {
            expect(curDate1.getFullYear()).be.eql(year);
        }
    });

    it('should clear value', () => {
        instance = mount(ClearableDemo);

        instance.set('date', '2018-03-04');
        dispatchEvent(instance.element.querySelector('.k-clear'), 'click');
        expect(instance.get('date') === undefined).be.true;
    });

    it('multiple select', async () => {
        instance = mount(MultipleDemo);

        dispatchEvent(instance.element.children[0].children[0], 'click');
        let content = getElement('.k-datepicker-content');
        dispatchEvent(content.querySelectorAll('.k-day')[0], 'click');
        dispatchEvent(content.querySelectorAll('.k-day')[1], 'click');
        expect(instance.get('date')).have.lengthOf(2);

        // datetime
        const [, input] = instance.element.querySelectorAll('.k-input');
        input.click();
        content = getElement('.k-datepicker-content');
        content.querySelector('.k-day').click();
        // change to date panel again
        const [tab1, tab2] = content.querySelectorAll('.k-tab');
        tab1.click();
        await wait(0);
        content.querySelector('.k-day:nth-child(2)').click();
        expect(instance.get('datetime')).have.lengthOf(2);

        // also change time after changing tabs
        tab1.click();
        await wait(0);
        tab2.click();
        await wait(0);
        content.querySelector('.k-scroll-item').click();
        expect(instance.get('datetime')).have.lengthOf(2);
    });

    it('datetime picker', async () => {
        instance = mount(DatetimeDemo);

        dispatchEvent(instance.element.children[0].children[0], 'click');
        let content = getElement('.k-datepicker-content');
       
        dispatchEvent(content.querySelector('.k-day'), 'click');
        await wait(0);
        dispatchEvent(content.querySelector('.k-scroll-item'), 'click');

        expect(instance.get('datetime1').split(' ')[1]).eql('15:00:00');
    });

    it('should disable some time pickers', async () => {
        instance = mount(DatetimeDemo);

        dispatchEvent(instance.element.children[1].children[0], 'click');
        let content = getElement('.k-datepicker-content');
       
        dispatchEvent(content.querySelector('.k-day'), 'click');
        await wait(500);
        dispatchEvent(content.querySelector('.k-col:nth-child(2) .k-scroll-item'), 'click');

        expect(instance.get('datetime2').split(' ')[1]).eql('00:00:00');
        expect(content.querySelector('.k-scroll-select-group').innerHTML).to.matchSnapshot();
    });
    
    it('range', () => {
        instance = mount(RangeDemo);


        // date
        const [input1] = instance.element.querySelectorAll('.k-input');
        input1.click();
        let content = getElement('.k-datepicker-content');
        // select the middle date
        let first = content.querySelectorAll('.k-day')[17];
        first.click();
        dispatchEvent(first.nextElementSibling.nextElementSibling, 'mouseenter');
        expect(first.nextElementSibling.classList.contains('k-in-range')).to.be.true;
        dispatchEvent(first.previousElementSibling.previousElementSibling, 'mouseenter');
        expect(first.previousElementSibling.classList.contains('k-in-range')).to.be.true;
        expect(first.nextElementSibling.classList.contains('k-in-range')).to.be.false;
        first.previousElementSibling.previousElementSibling.click();
        let value = instance.get('date');
        expect(value).have.lengthOf(2);
        expect(value[0] < value[1]).to.be.true;

        // cancel one of the range value and re-select it
        input1.click();
        content = getElement('.k-datepicker-content');
        // select the middle date
        first = content.querySelectorAll('.k-day')[17];
        first.click();
        first.click();
        expect(instance.get('date')).eql(value);

        // cancel all of range values and re-select
        input1.click();
        content = getElement('.k-datepicker-content');
        // select the middle date
        first = content.querySelectorAll('.k-day')[17];
        first.click();
        first.previousElementSibling.previousElementSibling.click();
        first.click();
        first.previousElementSibling.previousElementSibling.click();
        expect(instance.get('date')).eql(value);

        // range cross months
        input1.click();
        content = getElement('.k-datepicker-content');
        first = content.querySelectorAll('.k-day')[18];
        first.click();
        let second = content.querySelectorAll('.k-calendar-wrapper:nth-child(2) .k-day')[18];
        second.click();
        expect(value).have.lengthOf(2);

        // datetime
        const [, input2] = instance.element.querySelectorAll('.k-input');
        input2.click();
        content = getElement('.k-datepicker-content');
        const [calendar1, calendar2] = content.querySelectorAll('.k-calendar-wrapper');
        first = calendar1.querySelectorAll('.k-day')[17];
        second = calendar2.querySelectorAll('.k-day')[17];
        first.click();
        second.click();
        calendar1.querySelector('.k-col .k-active').nextElementSibling.click();
        calendar2.querySelector('.k-col .k-active').previousElementSibling.click();
        value = instance.get('time');
        expect(value).have.lengthOf(2);
        expect(value.map(item => item.split(' ')[1])).eql(['01:00:00', '23:00:00']);
    });

    it('operate by keyboard', () => {
        instance = mount(BasicDemo);
        
        const now = new Date();
        now.setDate(1);
        const input = instance.element.querySelector('.k-input');
        input.click();
        const content = getElement('.k-datepicker-content');
        // down
        dispatchEvent(input, 'keydown', {keyCode: 40});
        expect(content.querySelector('.k-hover').textContent).to.eql('1');

        // up
        dispatchEvent(input, 'keydown', {keyCode: 38});
        now.setDate(1 - 7);
        const date = now.getDate();
        expect(+content.querySelector('.k-hover').textContent).to.eql(date);
        
        // right
        dispatchEvent(input, 'keydown', {keyCode: 39});
        expect(+content.querySelector('.k-hover').textContent).to.eql(date + 1);

        // left
        dispatchEvent(input, 'keydown', {keyCode: 37});
        expect(+content.querySelector('.k-hover').textContent).to.eql(date);

        // enter
        dispatchEvent(input, 'keydown', {keyCode: 13});
        expect(+instance.get('date').split('-')[2]).to.eql(date);

        // again
        input.click();
        dispatchEvent(input, 'keydown', {keyCode: 40});
        expect(getElement('.k-datepicker-content').querySelector('.k-hover').textContent).to.eql('1');
    });

    it('operate by keyboard for range picker', () => {
        instance = mount(RangeDemo);

        const input = instance.element.querySelector('.k-input');
        input.click();
        dispatchEvent(input, 'keydown', {keyCode: 40});
        dispatchEvent(input, 'keydown', {keyCode: 13});
        dispatchEvent(input, 'keydown', {keyCode: 40});
        dispatchEvent(input, 'keydown', {keyCode: 13});
        const value = instance.get('date');
        expect(value).have.lengthOf(2);

        // again
        input.click();
        // dispatchEvent(input, 'keydown', {keyCode: 40});
        dispatchEvent(input, 'keydown', {keyCode: 38});
        dispatchEvent(input, 'keydown', {keyCode: 13});
        dispatchEvent(input, 'keydown', {keyCode: 13});
        expect(instance.get('date')).eql(value);
    });

    it('should not trigger change event when select range value has not complete', () => {
        const fn = sinon.spy();
        class Demo extends Intact {
            @Intact.template()
            static template = `<Datepicker v-model="value"
                ev-$change:value={{ self._onChange }}
                range
            />`;
            defaults() {
                return { value: [] };
            }
            _init() { this.Datepicker = Datepicker; }
            _onChange() { fn(); }
        }        
        instance = mount(Demo);
        const input = instance.element.querySelector('.k-input');
        input.click();
        const content = getElement('.k-datepicker-content');
        const [calendar1, calendar2] = content.querySelectorAll('.k-calendar-wrapper');
        const first = calendar1.querySelectorAll('.k-day')[17];
        const second = calendar2.querySelectorAll('.k-day')[17];
        first.click();
        expect(fn.callCount).to.eql(0);
        second.click();
        expect(fn.callCount).to.eql(1);
    });

    it('format', () => {
        instance = mount(FormatDemo);

        const [input1, input2, input3] = instance.element.querySelectorAll('.k-input');
        input1.click();
        let content = getElement('.k-datepicker-content');
        content.querySelector('.k-today').click();
        expect(instance.get('date1')).to.eql(dayjs().format('MM/DD/YYYY'));
        expect(input1.innerHTML).to.matchSnapshot();

        input2.click();
        content = getElement('.k-datepicker-content');
        content.querySelector('.k-today').click();
        expect(instance.get('date2')).to.eql(dayjs().format('YYYY-MM-DD'));
        expect(input2.innerHTML).to.matchSnapshot();

        input3.click();
        content = getElement('.k-datepicker-content');
        content.querySelector('.k-today').click();
        expect(instance.get('date3')).to.eql(dayjs().format('YYYY-MM-DD') + 'T00:00:00.000Z');
        expect(input3.innerHTML).to.matchSnapshot();
    });

    it('sepcify max/min date', () => {
        instance = mount(MaxMinDemo);

        const now = dayjs().format('YYYY-MM-DD');
        instance.set('to', now);
        const element = instance.element.querySelector('.k-inner');
        element.click();
        const content = getElement('.k-datepicker-content');
        const dateDoms = content.querySelectorAll('.k-day:not(.k-disabled)');
        expect(dateDoms.length).to.eql(1);
        expect(+dateDoms[0].textContent).to.eql(+now.split('-')[2]);
    });
});
