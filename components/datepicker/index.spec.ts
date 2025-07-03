import BasicDemo from '~/components/datepicker/demos/basic';
import YearMonthDemo from '~/components/datepicker/demos/yearMonth';
import ClearableDemo from '~/components/datepicker/demos/clearable';
import DatetimeDemo from '~/components/datepicker/demos/datetime';
import RangeDemo from '~/components/datepicker/demos/range';
import MultipleDemo from '~/components/datepicker/demos/multiple';
import {mount, unmount, dispatchEvent, wait, getElement} from '../../test/utils';
import {Component, findDomFromVNode} from 'intact';
import {strPad} from '../utils';
import {Datepicker} from './';
import FormatDemo from '~/components/datepicker/demos/format';
import dayjs from 'dayjs';
import MaxMinDemo from '~/components/datepicker/demos/maxMin';

const now = new Date();
const year = now.getFullYear();
const startYear = Math.floor(year / 10) * 10;
const month = now.getMonth();

describe('Datepicker', () => {
    afterEach(async () => {
        unmount();
        await wait(500);
    });

    describe('Pick', () => {
        it('date', async () => {
            const [instance, element] = mount(BasicDemo);

            const input = element.querySelector('.k-input') as HTMLInputElement;
            input.click();
            await wait();
            const content = getElement('.k-datepicker-content')!;
            (content.querySelector('.k-calendar-item') as HTMLDivElement).click();
            expect(instance.get('date')).to.be.string;
        });

        it('datetime', async () => {
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

        it('year', async () => {
            const [instance, element] = mount(YearMonthDemo);
            const [yearInput] = element.querySelectorAll<HTMLElement>('.k-input');

            // year
            yearInput.click();
            await wait();
            let content = getElement('.k-datepicker-content')!;
            const yearDom = content.querySelector('.k-today')!;
            const nextYearDom = yearDom.nextElementSibling as HTMLElement;
            nextYearDom.click();
            expect(instance.get<number>('year') - 1).eql(year);
        });

        it('month', async () => {
            const [instance, element] = mount(YearMonthDemo);
            const [, monthInput] = element.querySelectorAll<HTMLElement>('.k-input');

            // month
            monthInput.click();
            await wait();
            const content = getElement('.k-datepicker-content')!;
            const monthDom = content.querySelector('.k-today') as HTMLElement;
            monthDom.click();
            const [_year, _month] = instance.get<string>('month').split('-');
            expect(+_year).eql(year);
            expect(+_month - 1).eql(month);
        });

        it('week', async () => {  
            const [instance, element] = mount(YearMonthDemo);   
            const inputs = element.querySelectorAll<HTMLElement>('.k-input'); 
            const WeekInput = inputs[2];  
              
            WeekInput.click();  
            await wait();

            const content = getElement('.k-datepicker-content')!; 
            const weekItem = content.querySelector('.week-row:nth-child(1) .k-week-number') as HTMLElement;  
            weekItem.click();  
            
            expect(instance.get<string>('week')).to.match(/^\d{4}-\d+周$/)
            
        });
        
        it('quarter', async () => {  
            const [instance, element] = mount(YearMonthDemo);   
            const inputs = element.querySelectorAll<HTMLElement>('.k-input'); 
            const QuarterInput = inputs[3];  
              
            QuarterInput.click();  
            await wait();  
            const content = getElement('.k-datepicker-content')!;  
              
            // 选择第一个季度  
            const quarterItem = content.querySelector('.k-calendar-item:nth-child(1)') as HTMLElement;  
            quarterItem.click();  
              
            // 验证输入框的值是否包含Q1
            expect(instance.get<string>('quarter')).to.include('Q1')  
        }); 
        
    });

    describe('Panel', async () => {
        it('single date', async () => {
            const [instance, element] = mount(BasicDemo);

            const input = element.querySelector('.k-input') as HTMLElement;
            input.click();
            await wait();

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
            const curDate = new Date(instance.get('date')!);
            curDate.setFullYear(curDate.getFullYear() + 1);
            curDate.setMonth(curDate.getMonth() + 1);
            expect(curDate.getFullYear()).be.eql(year);
            expect(curDate.getMonth()).be.eql(month);

            // change year and month in year/month panel
            input.click();
            await wait();
            content = getElement('.k-datepicker-content')!;
            const [yearDom, monthDom] = Array.from(content.querySelectorAll<HTMLElement>('.k-month-value'));
            yearDom.click();
            await wait();
            (content.querySelector('.k-today') as HTMLElement).click();
            await wait();
            (content.querySelector('.k-today') as HTMLElement).click();
            await wait();
            // select the middle date
            dispatchEvent(content.querySelectorAll('.k-calendar-item')[17], 'click');
            const curDate1 = new Date(instance.get('date')!);
            const curMonth = curDate1.getMonth();
            expect(curMonth).be.eql(month);
            expect(curDate1.getFullYear()).be.eql(year);
        });

        it('range date', async () => {
            const [instance, element] = mount(RangeDemo);

            const select = element.querySelector('.k-datepicker') as HTMLElement;
            select.click();
            await wait();
            const content = getElement('.k-datepicker-content')!;
            const [panel1, panel2] = content.querySelectorAll<HTMLElement>('.k-datepicker-calendar-time-wrapper');
            const [nextMonth, nextYear] = panel1.querySelectorAll<HTMLElement>('.k-next');
            const [monthValues1, monthValues2]= content.querySelectorAll<HTMLElement>('.k-month-values');

            nextMonth.click();
            const monthStart = (month + 1) % 12 + 1;
            const yearStart = year + Math.floor((month + 1) / 12);
            const monthEnd = (month + 2) % 12 + 1;
            const yearEnd = year + Math.floor((month + 2) / 12);
            await wait();
            expect(monthValues1.textContent).to.eql(`${yearStart}年${monthStart}月`);
            expect(monthValues2.textContent).to.eql(`${yearEnd}年${monthEnd}月`);

            nextYear.click();
            await wait();
            expect(monthValues1.textContent).to.eql(`${yearStart + 1}年${monthStart}月`);
            expect(monthValues2.textContent).to.eql(`${yearEnd + 1}年${monthEnd}月`);

            const [prevYear] = panel2.querySelectorAll<HTMLElement>('.k-prev');
            prevYear.click();
            await wait();
            expect(monthValues1.textContent).to.eql(`${yearStart}年${monthStart}月`);
            expect(monthValues2.textContent).to.eql(`${yearEnd}年${monthEnd}月`);

            // year panel
            dispatchEvent(monthValues1.firstElementChild!, 'click');
            dispatchEvent(monthValues2.firstElementChild!, 'click');
            await wait();
            const firstDecadeStart = Math.floor(yearStart / 10) * 10;
            const secondDecadeStart = Math.floor(yearEnd / 10) * 10; 
            expect(monthValues1.textContent).to.eql(`${firstDecadeStart}年 - ${firstDecadeStart + 9}年`);
            expect(monthValues1.textContent).to.eql(`${secondDecadeStart}年 - ${secondDecadeStart + 9}年`);

            nextYear.click();
            await wait();
            expect(monthValues1.textContent).to.eql(`${firstDecadeStart + 10}年 - ${secondDecadeStart + 19}年`);
            expect(monthValues1.textContent).to.eql(`${secondDecadeStart + 10}年 - ${secondDecadeStart + 19}年`);
        });

        it('range year', async () => {
            const [instance, element] = mount(RangeDemo);

            const [, , select] = element.querySelectorAll<HTMLElement>('.k-datepicker');
            select.click();
            await wait();
            const content = getElement('.k-datepicker-content')!;
            const [panel1, panel2] = content.querySelectorAll<HTMLElement>('.k-datepicker-calendar-time-wrapper');
            const [next] = panel1.querySelectorAll<HTMLElement>('.k-next');
            const [prev] = panel2.querySelectorAll<HTMLElement>('.k-prev');
            const [label1, label2]= content.querySelectorAll<HTMLElement>('.k-month-values');

            expect(label1.textContent).to.eql(`${startYear}年 - ${startYear + 9}年`);
            expect(label2.textContent).to.eql(`${startYear + 10}年 - ${startYear + 19}年`);

            next.click();
            await wait();
            expect(label1.textContent).to.eql(`${startYear + 10}年 - ${startYear + 19}年`);
            expect(label2.textContent).to.eql(`${startYear + 20}年 - ${startYear + 29}年`);

            prev.click();
            await wait();
            expect(label1.textContent).to.eql(`${startYear}年 - ${startYear + 9}年`);
            expect(label2.textContent).to.eql(`${startYear + 10}年 - ${startYear + 19}年`);
        });

        it('range month', async () => {
            const [instance, element] = mount(RangeDemo);

            const [, , , select] = element.querySelectorAll<HTMLElement>('.k-datepicker');
            select.click();
            await wait();
            const content = getElement('.k-datepicker-content')!;
            const [panel1, panel2] = content.querySelectorAll<HTMLElement>('.k-datepicker-calendar-time-wrapper');
            const [next] = panel1.querySelectorAll<HTMLElement>('.k-next');
            const [prev] = panel2.querySelectorAll<HTMLElement>('.k-prev');
            const [label1, label2]= content.querySelectorAll<HTMLElement>('.k-month-values');

            expect(label1.textContent).to.eql(`${year}年${month + 1}月`);
            expect(label2.textContent).to.eql(`${year + 1}年${month + 1}月`);

            next.click();
            await wait();
            expect(label1.textContent).to.eql(`${year + 1}年${month + 1}月`);
            expect(label2.textContent).to.eql(`${year + 2}年${month + 1}月`);

            prev.click();
            await wait();
            expect(label1.textContent).to.eql(`${year}年${month + 1}月`);
            expect(label2.textContent).to.eql(`${year + 1}年${month + 1}月`);
        });
    });

    describe('Clear', () => {
        it('date', async () => {
            const [instance, element] = mount(ClearableDemo);

            instance.set<string>('date', '2018-03-04');
            await wait();
            dispatchEvent(element.querySelector('.k-select-clear')!, 'click');
            expect(instance.get<string>('date')).be.eql(null);
        });

        it('datetime', async () => {
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
            expect(instance.get('datetime1')).be.eql(null);

            // set value to empty string should clear datetime
            input.click();
            await wait();
            (content.querySelector('.k-calendar-item') as HTMLElement).click();
            instance.set<string>('datetime1', '');
            expect(instance.get('datetime1')).to.eql('');
        });
    });

    describe('Multiple', () => {
        it('date', async () => {
            const [instance, element] = mount(MultipleDemo);

            const select = element.querySelector('.k-datepicker') as HTMLElement;
            dispatchEvent(select, 'click');
            await wait();
            const content = getElement('.k-datepicker-content')!;
            const items = content.querySelectorAll('.k-calendar-item');
            dispatchEvent(items[17], 'click');
            dispatchEvent(items[18], 'click');
            expect(instance.get('date')).have.lengthOf(2);
            dispatchEvent(items[18], 'click');
            expect(instance.get('date')).have.lengthOf(1);

            await wait();
            // remove specified item
            const close = element.querySelector('.k-tag-close') as HTMLElement;
            close.click();
            expect(instance.get('date')).have.lengthOf(0);

            await wait();
            dispatchEvent(items[17], 'click');
            expect(instance.get('date')).have.lengthOf(1);

            await wait();
            // clear
            dispatchEvent(element.querySelector('.k-select-clear')!, 'click');
            expect(instance.get('date')).have.lengthOf(0);
        });

        it('datetime', async () => {
            const [instance, element] = mount(MultipleDemo);

            const [, select] = element.querySelectorAll<HTMLElement>('.k-datepicker');
            dispatchEvent(select, 'click');
            await wait();
            const content = getElement('.k-datepicker-content')!;
            dispatchEvent(content.querySelector('.k-calendar-item:nth-child(18)')!, 'click');
            await wait();
            dispatchEvent(content.querySelector('.k-datepicker-footer .k-btn')!, 'click');
            await wait();
            expect(instance.get('datetime')).have.lengthOf(1);

            // select the same datetime
            dispatchEvent(content.querySelector('.k-calendar-item:nth-child(18)')!, 'click');
            await wait();
            dispatchEvent(content.querySelector('.k-datepicker-footer .k-btn')!, 'click');
            await wait();
            expect(instance.get('datetime')).have.lengthOf(1);

            // select different time with the same date
            dispatchEvent(content.querySelector('.k-calendar-item:nth-child(18)')!, 'click');
            await wait();
            dispatchEvent(content.querySelector('.k-scroll-select-item')!, 'click');
            await wait();
            dispatchEvent(content.querySelector('.k-datepicker-footer .k-btn')!, 'click');
            await wait();
            expect(instance.get('datetime')).have.lengthOf(2);

            // change to time panel, and remove the selections, then click confirm ok
            dispatchEvent(content.querySelector('.k-calendar-item:nth-child(18)')!, 'click');
            await wait();
            instance.set('datetime', []);
            await wait();
            dispatchEvent(content.querySelector('.k-datepicker-footer .k-btn')!, 'click');
            await wait();
            expect(instance.get('datetime')).have.lengthOf(1);
        });

        it('year', async () => {
            const [instance, element] = mount(MultipleDemo);

            const [, , select] = element.querySelectorAll<HTMLElement>('.k-datepicker');
            dispatchEvent(select, 'click');
            await wait();
            const content = getElement('.k-datepicker-content')!;
            dispatchEvent(content.querySelector('.k-calendar-item:nth-child(6)')!, 'click');
            await wait();
            expect(instance.get('year')).have.lengthOf(1);
            dispatchEvent(content.querySelector('.k-calendar-item:nth-child(7)')!, 'click');
            await wait();
            expect(instance.get('year')).have.lengthOf(2);

            instance.set('year', []);
            await wait();
            dispatchEvent(content.querySelector('.k-calendar-item:nth-child(6)')!, 'click');
            await wait();
            expect(instance.get('year')).have.lengthOf(1);
        });

        it('month', async () => {
            const [instance, element] = mount(MultipleDemo);

            const [, , , select] = element.querySelectorAll<HTMLElement>('.k-datepicker');
            dispatchEvent(select, 'click');
            await wait();
            const content = getElement('.k-datepicker-content')!;
            dispatchEvent(content.querySelector('.k-calendar-item:nth-child(6)')!, 'click');
            await wait();
            expect(instance.get('month')).have.lengthOf(1);
            dispatchEvent(content.querySelector('.k-calendar-item:nth-child(7)')!, 'click');
            await wait();
            expect(instance.get('month')).have.lengthOf(2);

            instance.set('month', []);
            await wait();
            dispatchEvent(content.querySelector('.k-calendar-item:nth-child(6)')!, 'click');
            await wait();
            expect(instance.get('month')).have.lengthOf(1);
        });

        it('date range', async () => {
            const [instance, element] = mount(MultipleDemo);

            const [, , , , select] = element.querySelectorAll<HTMLElement>('.k-datepicker');
            dispatchEvent(select, 'click');
            await wait();
            const content = getElement('.k-datepicker-content')!;
            const [calendar1, calendar2] = content.querySelectorAll('.k-datepicker-calendar-time-wrapper');

            
            const first = calendar1.querySelectorAll('.k-calendar-item')[17] as HTMLElement;
            const second = calendar2.querySelectorAll('.k-calendar-item')[17] as HTMLElement;
            first.click();
            second.click();
            await wait();
            expect(instance.get('dateRange')).have.lengthOf(1);

            dispatchEvent(first.nextElementSibling!, 'click');
            dispatchEvent(second.nextElementSibling!, 'click');
            await wait();
            expect(instance.get('dateRange')).have.lengthOf(2);

            first.click();
            second.click();
            await wait();
            expect(instance.get('dateRange')).have.lengthOf(1);

            instance.set('dateRange', []);
            await wait();
            first.click();
            second.click();
            await wait();
            expect(instance.get('dateRange')).have.lengthOf(1);
        });

    });

    describe('Range', () => {
        it('date', async () => {
            const [instance, element] = mount(RangeDemo);

            // date
            const select = element.querySelector('.k-datepicker') as HTMLElement;
            select.click();
            await wait();
            let content = getElement('.k-datepicker-content')!;
            // select the middle date
            let first = content.querySelector('.k-calendar-item:nth-child(18)') as HTMLElement;
            first.click();
            await wait();
            expect(instance.get('date')).to.be.null;
            // hover status
            dispatchEvent(first.nextElementSibling!.nextElementSibling!, 'mouseenter');
            await wait();
            expect(first.nextElementSibling!.classList.contains('k-in-range')).to.be.true;
            dispatchEvent(first.previousElementSibling!.previousElementSibling!, 'mouseenter');
            await wait();
            expect(first.previousElementSibling!.classList.contains('k-in-range')).to.be.true;
            expect(first.nextElementSibling!.classList.contains('k-in-range')).to.be.false;
            dispatchEvent(first.previousElementSibling!.previousElementSibling!, 'click');
            await wait();
            const value = instance.get('date')!;
            expect(value).have.lengthOf(2);
            expect(value[0] < value[1]).to.be.true;

            // select the same date
            select.click();
            await wait();
            // select the middle date
            first.click();
            first.click();
            await wait();
            const value1 = instance.get('date')!;
            expect(value1).have.lengthOf(2);
            expect(value1[0]).eql(value1[1]);

            // cancel all of range values and re-select
            select.click();
            await wait();
            // select the middle date
            first.click();
            dispatchEvent(first.previousElementSibling!.previousElementSibling!, 'click');
            await wait();
            first.click();
            dispatchEvent(first.previousElementSibling!.previousElementSibling!, 'click');
            expect(instance.get('date')).eql(value);

            // range cross months
            select.click();
            await wait();
            first.click();
            let second = content.querySelector('.k-datepicker-calendar-time-wrapper:nth-child(2) .k-calendar-item:nth-child(19)') as HTMLElement;
            second.click();
            await wait();
            expect(instance.get('date')).have.lengthOf(2);

        });

        it('datetime', async () => {
            const [instance, element] = mount(MultipleDemo);

            const [, select] = element.querySelectorAll<HTMLElement>('.k-datepicker');
            dispatchEvent(select, 'click');
            await wait();
            const content = getElement('.k-datepicker-content')!;
            dispatchEvent(content.querySelector('.k-calendar-item:nth-child(18)')!, 'click');
            await wait();
            dispatchEvent(content.querySelector('.k-datepicker-footer .k-btn')!, 'click');
            await wait();
            expect(instance.get('datetime')).have.lengthOf(1);

            // select the same datetime
            dispatchEvent(content.querySelector('.k-calendar-item:nth-child(18)')!, 'click');
            await wait();
            dispatchEvent(content.querySelector('.k-datepicker-footer .k-btn')!, 'click');
            await wait();
            expect(instance.get('datetime')).have.lengthOf(1);

            // select different time with the same date
            dispatchEvent(content.querySelector('.k-calendar-item:nth-child(18)')!, 'click');
            await wait();
            dispatchEvent(content.querySelector('.k-scroll-select-item')!, 'click');
            await wait();
            dispatchEvent(content.querySelector('.k-datepicker-footer .k-btn')!, 'click');
            await wait();
            expect(instance.get('datetime')).have.lengthOf(2);

            // change to time panel, and remove the selections, then click confirm ok
            dispatchEvent(content.querySelector('.k-calendar-item:nth-child(18)')!, 'click');
            await wait();
            instance.set('datetime', []);
            await wait();
            dispatchEvent(content.querySelector('.k-datepicker-footer .k-btn')!, 'click');
            await wait();
            expect(instance.get('datetime')).have.lengthOf(1);
        });

        it('year', async () => {
            const [instance, element] = mount(RangeDemo);

            const [, , select] = element.querySelectorAll<HTMLElement>('.k-datepicker');
            select.click();
            await wait();
            const content = getElement('.k-datepicker-content')!;
            const [calendar1, calendar2] = content.querySelectorAll('.k-datepicker-calendar-time-wrapper');
            const first = calendar1.querySelector('.k-calendar-item:nth-child(2)') as HTMLElement;
            const second = calendar2.querySelector('.k-calendar-item:nth-child(2)') as HTMLElement;
            first.click();
            second.click();
            await wait();
            const value = instance.get('year');
            expect(value).eql([String(startYear), String(startYear + 10)]);
        });

        it('month', async () => {
            const [instance, element] = mount(RangeDemo);

            const [, , , select] = element.querySelectorAll<HTMLElement>('.k-datepicker');
            select.click();
            await wait();
            const content = getElement('.k-datepicker-content')!;
            const [calendar1, calendar2] = content.querySelectorAll('.k-datepicker-calendar-time-wrapper');
            const first = calendar1.querySelector('.k-calendar-item:nth-child(1)') as HTMLElement;
            const second = calendar2.querySelector('.k-calendar-item:nth-child(1)') as HTMLElement;
            first.click();
            second.click();
            await wait();
            const value = instance.get('month');
            expect(value).eql([`${year}-01`, `${year + 1}-01`]);
        });
    });

    describe('Keybord', () => {
        it('single date', async () => {
            const [instance, element] = mount(BasicDemo);
            const now = new Date();

            const select = element.querySelector<HTMLElement>('.k-datepicker')!;
            select.click();
            await wait();
            const content = getElement('.k-datepicker-content')!;
            // down
            dispatchEvent(select, 'keydown', {keyCode: 40});
            await wait();
            expect(+content.querySelector<HTMLElement>('.k-hover')!.textContent!).to.eql(now.getDate());

            // up
            dispatchEvent(select, 'keydown', {keyCode: 38});
            await wait();
            now.setDate(now.getDate() - 7);
            expect(+content.querySelector<HTMLElement>('.k-hover')!.textContent!).to.eql(now.getDate());

            // right
            dispatchEvent(select, 'keydown', {keyCode: 39});
            await wait();
            now.setDate(now.getDate() + 1);
            expect(+content.querySelector<HTMLElement>('.k-hover')!.textContent!).to.eql(now.getDate());

            // left
            dispatchEvent(select, 'keydown', {keyCode: 37});
            await wait();
            now.setDate(now.getDate() - 1);
            expect(+content.querySelector<HTMLElement>('.k-hover')!.textContent!).to.eql(now.getDate());

            // enter
            dispatchEvent(select, 'keydown', {keyCode: 13});
            await wait();
            expect(instance.get('date')!.split('-').map(v => +v)).to.eql([now.getFullYear(), now.getMonth() + 1, now.getDate()]);

            // again
            select.click();
            await wait();
            dispatchEvent(select, 'keydown', {keyCode: 40});
            await wait();
            expect(+content.querySelector<HTMLElement>('.k-hover')!.textContent!).to.eql(now.getDate());
        });

        it('range date', async () => {
            const [instance, element] = mount(RangeDemo);

            const select = element.querySelector<HTMLElement>('.k-datepicker')!;
            select.click();
            await wait();
            dispatchEvent(select, 'keydown', {keyCode: 40});
            dispatchEvent(select, 'keydown', {keyCode: 13});
            dispatchEvent(select, 'keydown', {keyCode: 40});
            dispatchEvent(select, 'keydown', {keyCode: 13});
            await wait();
            const value = instance.get('date');
            expect(value).have.lengthOf(2);

            // again
            select.click();
            await wait();
            dispatchEvent(select, 'keydown', {keyCode: 38});
            dispatchEvent(select, 'keydown', {keyCode: 13});
            dispatchEvent(select, 'keydown', {keyCode: 13});
            await wait();
            const _value = instance.get('date')!;
            expect(_value[0]).eql(_value[1]);
        });
    });

    describe('Event', async () => {
        it('selecting', async () => {
            const fn = sinon.spy((v: any) => console.log(v));
            class Demo extends Component {
                static template = `
                    const {Datepicker} = this;
                    <Datepicker ev-selecting={this.onSelecting} range type="datetime" />
                `;
                private Datepicker = Datepicker;

                onSelecting(v: any) {
                    fn(v);
                }
            } 

            const [instance, element] = mount(Demo);
            element.click();
            await wait();
            const content = getElement('.k-datepicker-content')!;
            const calendar = content.querySelector<HTMLElement>('.k-datepicker-calendar-time-wrapper');
            const first = calendar!.querySelector('.k-datepicker-calendar') as HTMLElement;
            const second = calendar!.querySelector('.k-datepicker-time-wrapper') as HTMLElement;
            const firstDateItem = first.querySelector('.k-calendar-item') as HTMLElement;
            firstDateItem.click();
            expect(fn.callCount).to.eql(1);
            expect(fn.lastCall.args[0]).have.lengthOf(1);
            const activeTimeItem = second.querySelector('.k-scroll-select-wrapper .k-active') as HTMLElement;
            const nextTimeItem = activeTimeItem.nextElementSibling as HTMLElement;
            nextTimeItem.click();
            expect(fn.callCount).to.eql(2);
            expect(fn.lastCall.args[0]).have.lengthOf(1);
            const confirmBtn = content.querySelector('.k-datepicker-footer .k-btn') as HTMLElement;
            confirmBtn.click();
            await wait();

            const endCalendar = content.querySelector<HTMLElement>('.k-datepicker-calendar-time-wrapper');
            const endFirst = endCalendar!.querySelector('.k-datepicker-calendar') as HTMLElement;
            const endSecond = endCalendar!.querySelector('.k-datepicker-time-wrapper') as HTMLElement;
            
            const endDateItem = endFirst.querySelector('.k-calendar-item') as HTMLElement;
            endDateItem.click();
            expect(fn.callCount).to.eql(3);
            expect(fn.lastCall.args[0]).have.lengthOf(1); 
            
            const endActiveTimeItem = endSecond.querySelector('.k-scroll-select-wrapper .k-active') as HTMLElement;
            const endNextTimeItem = endActiveTimeItem.nextElementSibling as HTMLElement;
            endNextTimeItem.click();
            expect(fn.callCount).to.eql(4);
            expect(fn.lastCall.args[0]).have.lengthOf(1);
            
            const finalConfirmBtn = content.querySelector('.k-datepicker-footer .k-btn') as HTMLElement;
            finalConfirmBtn.click();
            await wait();
            expect(fn.callCount).to.eql(4);
        });
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

    it('format', async () => {
        const [instance, element] = mount(FormatDemo);

        const [input1, input2, input3] = element.querySelectorAll<HTMLInputElement>('.k-input-inner');
        input1.click();
        await wait();
        let content = getElement('.k-datepicker-content')!;
        content.querySelector<HTMLElement>('.k-today')!.click();
        await wait();
        expect(instance.get('date1')).to.eql(dayjs().format('MM/DD/YYYY'));
        expect(input1.value).to.eql(dayjs().format('MM/DD/YYYY'));

        input2.click();
        await wait();
        content = getElement('.k-datepicker-content')!;
        content.querySelector<HTMLElement>('.k-today')!.click();
        await wait();
        expect(instance.get('date2')).to.eql(dayjs().format('YYYY-MM-DD'));
        expect(input2.value).to.eql(dayjs().format('YYYY年M月D日'));

        input3.click();
        await wait();
        content = getElement('.k-datepicker-content')!;
        content.querySelector<HTMLElement>('.k-today')!.click();
        await wait();
        content.querySelector<HTMLElement>('.k-datepicker-footer .k-btn')!.click();
        await wait();
        expect(instance.get('date3')).to.eql(dayjs().format('YYYY-MM-DD') + 'T00:00:00.000Z');
        expect(input3.value).to.eql(dayjs().format('YYYY-MM-DD') + ' 00:00:00');
    });

    describe('Max / Min', () => {
        it('date', async () => {
            const [instance, element] = mount(MaxMinDemo);
            const now = dayjs().format('YYYY-MM-DD');
            instance.set('to', now);

            element.querySelector<HTMLElement>('.k-datepicker')!.click();
            await wait();
            const content = getElement('.k-datepicker-content')!;
            const dateDoms = content.querySelectorAll('.k-calendar-item:not(.k-disabled)');
            expect(dateDoms.length).to.eql(1);
            expect(+dateDoms[0].textContent!).to.eql(+now.split('-')[2]);
        });

        it('datetime', async () => {
            const [instance, element] = mount(MaxMinDemo);
            const now = dayjs().format('YYYY-MM-DD') + '00:00:00';
            instance.set('toTime', now);

            element.querySelectorAll<HTMLElement>('.k-datepicker')[2]!.click();
            await wait();
            const content = getElement('.k-datepicker-content')!;
            content.querySelector<HTMLElement>('.k-today')!.click();
            await wait();
            expect(content.querySelectorAll('.k-scroll-select-item:not(.k-disabled)')).have.lengthOf(3);
        });

        it('should auto place scrollSeelct to the time that equal to the minDate after selecting the date in datetime picker', async () => {
            const [instance, element] = mount(MaxMinDemo);

            const date = dayjs().format('YYYY-MM-DD');
            const time = '01:00:00';
            const fromTime = `${date} ${time}`;
            instance.set('fromTime', fromTime);
            const endTimeTrigger = element.querySelectorAll<HTMLElement>('.k-datepicker')[3];
            endTimeTrigger.click();
            await wait();
            const content = getElement('.k-datepicker-content')!;
            content.querySelector<HTMLElement>('.k-today')!.click();
            await wait();
            content.querySelector<HTMLElement>('.k-datepicker-footer .k-btn')!.click();
            await wait();
            expect(instance.get('toTime')).to.eql(`${date} ${time}`);
        });
    });

    describe('Input', () => {
        let globalInput: HTMLInputElement;
        function test(template: string) {
            class Demo extends Component<{value: string}> {
                static template = `
                    const {Datepicker} = this;
                    ${template}
                `;
                private Datepicker = Datepicker;
            }
            const [instance, element] = mount(Demo);
            const input = element.querySelector<HTMLInputElement>('.k-input-inner')!;
            globalInput = input;

            return async (value: string, result: any) => {
                input.value = value;
                dispatchEvent(input, 'input');
                await wait();
                expect(instance.get('value')).to.eql(result);
            }
        }

        it('basic', async () => {
            const myTest = test(
                `<Datepicker v-model="value" max="2021-11-11" min="2020-01-01" />`
            );
            // input incorrect value
            await myTest('2020', undefined);
            // input correct value
            await myTest('2020-02-02', '2020-02-02');
            // clear value
            await myTest('', null);
            // input disabled date
            await myTest('1999-01-01', null);
        });

        it('multiple', async () => {
            const myTest = test(
                `<Datepicker v-model="value" multiple />`
            );

            // input incorrect value
            await myTest('2', undefined);
            // input correct value
            await myTest('2020-02-02', ['2020-02-02']);
            // input the second value with incorrect date
            await myTest('2', ['2020-02-02']);
            // input the second correct value
            await myTest('2020-03-03', ['2020-02-02', '2020-03-03']);
        });

        it('range', async () => {
            const myTest = test(
                `<Datepicker v-model="value" range max="2021-11-11" min="2020-01-01" />`
            );
            
            await myTest('2020-03-03', undefined);
            // input ~
            await myTest('2020-03-03~', undefined);
            // input correct value
            dispatchEvent(globalInput!, 'click'); // show calendar
            await wait();
            await myTest('2020-03-03~2020-03-04', ['2020-03-03', '2020-03-04']);
            expect(
                getElement('.k-datepicker-content')!
                    .querySelector<HTMLElement>('.k-datepicker-calendar-time-wrapper:nth-child(1)')!
                    .innerHTML
            ).to.matchSnapshot();
            // clear value
            await myTest('', null)
            // input disabled range date
            await myTest('1999-01-01~2020-03-04', null);
        });

        it('datetime', async () => {
            const myTest = test(
                `<Datepicker v-model="value" type="datetime" />`
            );

            await myTest('2020-03-03', undefined);
            // input correct value
            await myTest('2020-03-03 02:02:02', '2020-03-03 02:02:02');
        });

        it('datetime range', async () => {
            const myTest = test(
                '<Datepicker v-model="value" type="datetime" range />'
            );

            await myTest(
                '2020-08-11 00:00:00 ~ 2020-08-11 01:00:00',
                ['2020-08-11 00:00:00', '2020-08-11 01:00:00'],
            );
            await myTest(
                '2020-08-11 00:01:00 ~ 2020-08-11 01:00:00',
                ['2020-08-11 00:01:00', '2020-08-11 01:00:00']
            );
            await myTest(
                '2020-08-11 00:01:00 ~ 2020-08-11 01:01:00',
                ['2020-08-11 00:01:00', '2020-08-11 01:01:00']
            );
        });

        it('date format', async () => {
            const myTest = test(
                `<Datepicker v-model="value" showFormat="YYYY年M月D日" />`
            );

            await myTest('2020年2月19日', '2020-02-19');

        });
    });
});
