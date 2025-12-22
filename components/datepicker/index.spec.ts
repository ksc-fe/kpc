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
const dateString = dayjs(now).format('YYYY-MM-DD');

async function clickConfirm(content: HTMLElement) {
    await wait();
    const confirm = content.querySelector('.k-datepicker-footer .k-btn') as HTMLElement;
    confirm.click();
    await wait();

    return confirm;
}

function checkDisplay(content: HTMLElement, isShow: boolean) {
    const className = content.className;
    const isLeave = className.includes('-leave-');
    expect(isLeave).eql(!isShow);
}

function getDateString(date: number) {
    return dayjs(now).date(date).format('YYYY-MM-DD');
}

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
            await wait();
            expect(instance.get('date')).to.be.string;
            checkDisplay(content, false);
        });

        describe('datetime', () => {
            it('basic', async () => {
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

            it('skip select date and select time directly', async () => {
                const [instance, element] = mount(DatetimeDemo);

                const input = element.querySelector('.k-input') as HTMLElement;
                let content: HTMLElement;
                async function show() {
                    input.click();
                    await wait();
                    content = getElement('.k-datepicker-content')!;
                }

                await show();
                dispatchEvent(content!.querySelector('.k-scroll-select-item')!, 'click');
                await wait();
                const inputInner = input.querySelector('.k-input-inner') as HTMLInputElement;
                expect(inputInner.value).eql(`${dateString} 15:00:00`);
                expect(instance.get('datetime1')).eql(null);

                // hide to reset selected state
                document.body.click();
                await wait();
                expect(inputInner.getAttribute('placeholder')).eql(`请选择日期和时间`);
                expect(inputInner.value).eql('');
                expect(instance.get('datetime1')).eql(null);

                // show again
                await show();
                dispatchEvent(content!.querySelector('.k-scroll-select-item')!, 'click');
                await wait();
                const confirm = content!.querySelector('.k-datepicker-footer .k-btn') as HTMLElement;
                confirm.click();
                await wait();
                expect(inputInner.value).eql(`${dateString} 15:00:00`);
                expect(instance.get('datetime1')).eql(`${dateString} 15:00:00`);

                checkDisplay(content!, false);

                // change time
                await show();
                const activeHour = content!.querySelector('.k-scroll-select-item.k-active') as HTMLElement;
                dispatchEvent(activeHour.nextElementSibling!, 'click');
                await wait();
                confirm.click();
                await wait();
                expect(instance.get('datetime1')).eql(`${dateString} 16:00:00`);
            });
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

        // it('week', async () => {  
            // const [instance, element] = mount(YearMonthDemo);   
            // const inputs = element.querySelectorAll<HTMLElement>('.k-input'); 
            // const weekInput = inputs[2];  
              
            // weekInput.click();  
            // await wait();

            // const content = getElement('.k-datepicker-content')!; 
            // const weekItem = content.querySelector('.week-row:nth-child(1) .k-week-number') as HTMLElement;  
            // weekItem.click();  
            
            // expect(instance.get<string>('week')).to.match(/^\d{4}-\d+周$/)
        // });
        
        // it('quarter', async () => {  
            // const [instance, element] = mount(YearMonthDemo);   
            // const inputs = element.querySelectorAll<HTMLElement>('.k-input'); 
            // const QuarterInput = inputs[3];  
              
            // QuarterInput.click();  
            // await wait();  
            // const content = getElement('.k-datepicker-content')!;  
              
            // // 选择第一个季度  
            // const quarterItem = content.querySelector('.k-calendar-item:nth-child(1)') as HTMLElement;  
            // quarterItem.click();  
              
            // // 验证输入框的值是否包含Q1
            // expect(instance.get<string>('quarter')).to.include('Q1')  
        // }); 
        
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

            // select time directly
            const activeHour = content.querySelector('.k-scroll-select-item.k-active') as HTMLElement;
            dispatchEvent(activeHour.nextElementSibling!, 'click');
            await wait();
            const confirm = await clickConfirm(content); 
            expect(instance.get('datetime')).have.lengthOf(3);

            // select time firstly, then select date should only add one value
            dispatchEvent(activeHour.nextElementSibling!.nextElementSibling!, 'click');
            await wait();
            dispatchEvent(content.querySelector('.k-calendar-item:nth-child(19)')!, 'click');
            await wait();
            confirm.click();
            await wait();
            expect(instance.get('datetime')).have.lengthOf(4);
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

        describe('date range', async () => {
            it('date range', async () => {
                const [instance, element] = mount(MultipleDemo);

                const [, , , , select] = element.querySelectorAll<HTMLElement>('.k-datepicker');
                dispatchEvent(select, 'click');
                await wait();
                const content = getElement('.k-datepicker-content')!;
                const [calendar1, calendar2] = content.querySelectorAll('.k-datepicker-calendar-time-wrapper');

                const first = calendar1.querySelector('.k-calendar-item:not(.k-exceed)') as HTMLElement;
                const second = first.nextElementSibling as HTMLElement;
                first.click();
                second.click();
                await wait();
                const value1 = [`${getDateString(1)}`, `${getDateString(2)}`]
                expect(instance.get('dateRange')).eql([value1]);

                const third = second.nextElementSibling as HTMLElement;
                const fourth = third.nextElementSibling as HTMLElement;
                third.click();
                fourth.click();
                await wait();
                const value2 = [`${getDateString(3)}`, `${getDateString(4)}`]
                expect(instance.get('dateRange')).eql([value1, value2]);

                first.click();
                second.click();
                await wait();
                expect(instance.get('dateRange')).eql([value2]);

                instance.set('dateRange', []);
                await wait();
                first.click();
                second.click();
                await wait();
                expect(instance.get('dateRange')).eql([value1]);
            });

            it('hover status', async () => {
                const [instance, element] = mount(MultipleDemo);

                instance.set('dateRange', [['2025-07-11', '2025-07-15']]);
                const [, , , , select] = element.querySelectorAll<HTMLElement>('.k-datepicker');
                dispatchEvent(select, 'click');
                await wait();
                const content = getElement('.k-datepicker-content')!;
                const [calendar1, calendar2] = content.querySelectorAll('.k-datepicker-calendar-time-wrapper');

                const first = calendar1.querySelector('.k-calendar-item:not(.k-exceed)') as HTMLElement;
                const second = first.nextElementSibling as HTMLElement;
                dispatchEvent(first, 'mouseenter');
                await wait();
                expect(second.classList.contains('k-in-range')).eql(false);
            });
        });

        describe('datetime range', async () => {
            it('basic', async () => {
                const [instance, element] = mount(MultipleDemo);

                const [, , , , , select] = element.querySelectorAll<HTMLElement>('.k-datepicker');
                dispatchEvent(select, 'click');
                await wait();
                const content = getElement('.k-datepicker-content')!;
                const calendar1 = content.querySelector('.k-datepicker-wrapper') as HTMLElement;
                const first = calendar1.querySelector('.k-calendar-item:not(.k-exceed)') as HTMLElement;
                const second = first.nextElementSibling as HTMLElement;
                const inputInner = select.querySelector('.k-input-inner') as HTMLInputElement;
                first.click();
                await clickConfirm(content);
                expect(inputInner.value).eql(`${getDateString(1)} 00:00:00 ~`);
                second.click();
                await wait();
                expect(inputInner.value).eql(`${getDateString(1)} 00:00:00 ~ ${getDateString(2)} 00:00:00`);
                await clickConfirm(content);
                const value1 = [`${getDateString(1)} 00:00:00`, `${getDateString(2)} 00:00:00`];
                expect(instance.get('datetimeRange')).eql([value1]);

                const third = second.nextElementSibling as HTMLElement;
                const fourth = third.nextElementSibling as HTMLElement;
                third.click();
                await clickConfirm(content);
                fourth.click();
                await clickConfirm(content);
                const value2 = [`${getDateString(3)} 00:00:00`, `${getDateString(4)} 00:00:00`]
                expect(instance.get('datetimeRange')).eql([value1, value2]);

                // selecting the same date time will do nothing
                third.click();
                await clickConfirm(content);
                fourth.click();
                await clickConfirm(content);
                expect(instance.get('datetimeRange')).eql([value1, value2]);

                instance.set('datetimeRange', []);
                await wait();
                first.click();
                await clickConfirm(content);
                second.click();
                const confirm = await clickConfirm(content);
                expect(instance.get('datetimeRange')).eql([value1]);
                expect(confirm.classList.contains('k-disabled')).eql(true);
            });

            it('select time directly', async () => {
                const [instance, element] = mount(MultipleDemo);

                const [, , , , , select] = element.querySelectorAll<HTMLElement>('.k-datepicker');
                dispatchEvent(select, 'click');
                await wait();
                const content = getElement('.k-datepicker-content')!;
                const calendar = content.querySelector('.k-datepicker-wrapper') as HTMLElement;

                const activeHour = calendar.querySelector('.k-scroll-select-item.k-active') as HTMLElement;
                (activeHour.nextElementSibling as HTMLElement).click();
                await clickConfirm(content);
                (activeHour.nextElementSibling as HTMLElement).click();
                await clickConfirm(content);
                expect(instance.get('datetimeRange')).to.eql([[`${dateString} 01:00:00`, `${dateString} 02:00:00`]]);
            });
        });
    });

    describe('Range', () => {
        describe('date', async () => {
            let instance: RangeDemo; 
            let element: HTMLElement;
            let select: HTMLElement;
            let content: HTMLElement;
            let first: HTMLElement;

            beforeEach(async () => {
                const result = mount(RangeDemo);
                instance = result[0];
                element = result[1];

                // date
                select = element.querySelector('.k-datepicker') as HTMLElement;
                select.click();
                await wait();
                content = getElement('.k-datepicker-content')!;
                // select the middle date
                first = content.querySelector('.k-calendar-item:nth-child(18)') as HTMLElement;
            });

            it('basic selection', async () => {
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
            });

            it('select the same date', async () => {
                // select the middle date
                first.click();
                first.click();
                await wait();
                const value1 = instance.get('date')!;
                expect(value1).have.lengthOf(2);
                expect(value1[0]).eql(value1[1]);
            });

            it('cross months', async () => {
                first.click();
                let second = content.querySelector('.k-datepicker-calendar-time-wrapper:nth-child(2) .k-calendar-item:nth-child(19)') as HTMLElement;
                second.click();
                await wait();
                expect(instance.get('date')).have.lengthOf(2);
            });

            it('can select end date which is less than start date on selecting', async () => {
                // hide firstly
                document.body.click();
                await wait();
                instance.set('date', ['2025-08-01', '2025-08-02']);
                await wait();
                // show again
                select.click();
                await wait();
                // select date 3
                const first = content.querySelector('.k-calendar-item:not(.k-exceed):not(.k-active)') as HTMLElement;
                first.click();
                await wait();

                const inputInner = select.querySelector('.k-input-inner') as HTMLInputElement;
                expect(inputInner.value).eql('2025-08-03 ~ 2025-08-02');
                expect(instance.get('date')).eql(['2025-08-01', '2025-08-02']);

                // should update value after hiding
                document.body.click();
                await wait();
                expect(inputInner.value).eql('2025-08-02 ~ 2025-08-03');
                expect(instance.get('date')).eql(['2025-08-02', '2025-08-03']);
            });
        });

        describe('datetime', async () => {
            let instance: RangeDemo;
            let element: HTMLElement;
            let datetime: HTMLElement;

            const dateString = dayjs(now).date(1).format('YYYY-MM-DD');

            function match(value: string | null, time: string) {
                expect(value).to.eql(`${dateString} ${time}`);
            }

            async function show() {
                datetime.click();
                await wait();
                const content = getElement('.k-datepicker-content')!;
                const first = content.querySelector('.k-calendar-item:not(.k-exceed)') as HTMLElement;
                first.click();
                await wait();

                return [content, first];
            }

            beforeEach(() => {
                const result = mount(RangeDemo);
                instance = result[0];
                element = result[1];
                datetime = element.querySelectorAll<HTMLElement>('.k-datepicker')[1];
            });

            it('basic', async () => {
                const [content, first] = await show();

                // should enable confirm button and show the first date string in input
                const confirm = content.querySelector('.k-datepicker-footer .k-btn') as HTMLElement;
                const inputInner = datetime.querySelector('.k-input-inner') as HTMLInputElement;
                expect(confirm.classList.contains('k-disabled')).to.be.false;
                match(inputInner.getAttribute('placeholder'), '00:00:00 ~');
                match(inputInner.value, '00:00:00 ~');
                expect(instance.get('time')).eql(null);

                // select time
                dispatchEvent(content.querySelector('.k-scroll-select-item')!, 'click');
                await wait();
                match(inputInner.getAttribute('placeholder'), '15:00:00 ~');
                match(inputInner.value, '15:00:00 ~');
                confirm.click();
                await wait();
                // should disable confirm button on first click
                expect(confirm.classList.contains('k-disabled')).to.be.true;

                // select the second datetime
                const second = first.nextElementSibling as HTMLElement;
                second.click();
                await wait();
                const endDateString = dayjs(now).date(2).format('YYYY-MM-DD');
                expect(inputInner.getAttribute('placeholder')).eql(`${dateString} 15:00:00 ~ ${endDateString} 00:00:00`);
                expect(inputInner.value).eql(`${dateString} 15:00:00 ~ ${endDateString} 00:00:00`);
                expect(instance.get('time')).eql(null);
                confirm.click();
                await wait();
                expect(instance.get('time')).eql([`${dateString} 15:00:00`, `${endDateString} 00:00:00`]);
            });

            it('skip select date and select time for the end value directly', async () => {
                const [content] = await show();

                const confirm = await clickConfirm(content);
                // select time
                dispatchEvent(content.querySelector('.k-scroll-select-item')!, 'click');
                await wait();
                confirm.click();
                await wait();
                expect(instance.get('time')).eql([`${dateString} 00:00:00`, `${dateString} 15:00:00`]);
            });

            it('can change date before click confirm button', async () => {
                const [content, first] = await show();
                const nextFirst = first.nextElementSibling as HTMLElement;
                nextFirst.click();
                await wait();
                const inputInner = datetime.querySelector('.k-input-inner') as HTMLInputElement;
                const dateString = dayjs(now).date(2).format('YYYY-MM-DD');
                expect(inputInner.value).to.eql(`${dateString} 00:00:00 ~`);
                
                const confirm = await clickConfirm(content);
                const second = nextFirst.nextElementSibling as HTMLElement;
                second.click();
                await wait();
                expect(inputInner.value).to.eql(`${dateString} 00:00:00 ~ ${getDateString(3)} 00:00:00`);
                (second.nextElementSibling as HTMLElement).click();
                await wait();
                expect(inputInner.value).to.eql(`${dateString} 00:00:00 ~ ${getDateString(4)} 00:00:00`);

                confirm.click();
                await wait();
                expect(inputInner.value).to.eql(`${dateString} 00:00:00 ~ ${getDateString(4)} 00:00:00`);
                expect(instance.get('time')).to.eql([`${dateString} 00:00:00`, `${getDateString(4)} 00:00:00`]);
            });

            it('can select end date which is less than start date on selecting', async () => {
                const [content, first] = await show();
                const nextFirst = first.nextElementSibling as HTMLElement;
                nextFirst.click();
                await wait();

                const inputInner = datetime.querySelector('.k-input-inner') as HTMLInputElement;
                expect(inputInner.value).to.eql(`${getDateString(2)} 00:00:00 ~`);

                // hide to reset the selected state
                document.body.click();
                await wait();
                expect(inputInner.value).to.eql(``);
                expect(instance.get('time')).to.be.null;

                // show again
                datetime.click();
                await wait();
                nextFirst.click();
                await wait();
                const confirm = await clickConfirm(content);
                first.click();
                await wait();
                const a = `${getDateString(2)} 00:00:00`;
                const b = `${getDateString(1)} 00:00:00`;
                expect(inputInner.value).to.eql(`${a} ~ ${b}`);
                expect(instance.get('time')).to.eql(null);

                confirm.click();
                await wait();
                expect(instance.get('time')).to.eql([b, a]);
            });

            it('should reset position on clear value or set value to empty', async () => {
                const a = `${getDateString(1)} 00:00:00`;
                const b = `${getDateString(2)} 00:00:00`;
                instance.set('time', [a, b]);
                const [content, first] = await show();
                
                // clear
                dispatchEvent(datetime.querySelector('.k-select-clear')!, 'click');
                await wait();
                expect(instance.get('time')).eql(null);
                await selectAgain();

                // set time to null
                datetime.click();
                await wait();
                instance.set('time', null);
                await selectAgain();

                // set time to empty array
                datetime.click();
                await wait();
                instance.set<[]>('time', []);
                await selectAgain();

                async function selectAgain() {
                    // can select the datetime again
                    await wait();
                    first.click();
                    await wait();
                    const confirm = await clickConfirm(content);
                    (first.nextElementSibling as HTMLElement).click();
                    await wait();
                    confirm.click();
                    await wait();
                    expect(instance.get('time')).eql([a, b]);
                }
            });

            it('should only auto hide after twice selection and the start and end datetime are already selected', async () => {
                const [content, first] = await show();
                const next = first.nextElementSibling as HTMLElement;
                next.click();
                await wait();
                const confirm = await clickConfirm(content);
                await wait();
                _checkDisplay(true);

                first.click();
                await wait();
                confirm.click();
                await wait();
                _checkDisplay(false);

                const startDate = '2025-08-07 00:00:00';
                const endDate = '2025-08-10 00:00:00'
                const inputInner = datetime.querySelector('.k-input-inner') as HTMLInputElement;
                const separatePos = `${dateString} 00:00:00 ~`.length;

                await resetAndShow();
                const newFirst = content.querySelector('.k-calendar-item:not(.k-exceed)') as HTMLElement;
                newFirst.click();
                await wait();
                confirm.click();
                await wait();
                _checkDisplay(true);
                expect(instance.get('time')).eql([startDate, endDate]);
                
                // cancel the start time selection
                document.body.click();
                await wait();
                expect(instance.get('time')).eql(['2025-08-01 00:00:00', startDate]);

                // select from end position to start position
                await resetAndShow();
                newFirst.click();
                await wait();
                confirm.click();
                await wait();
                (newFirst.nextElementSibling as HTMLElement).click();
                await wait();
                _checkDisplay(true);
                expect(instance.get('time')).eql([startDate, endDate]);
                confirm.click();
                await wait();
                _checkDisplay(false);
                expect(instance.get('time')).eql(['2025-08-01 00:00:00', '2025-08-02 00:00:00']);

                // select the end position value then change to end position again 
                await resetAndShow();
                newFirst.click();
                await wait();
                confirm.click();
                await wait();
                // change to the end position
                setCursor(separatePos + 1);
                datetime.click();
                (newFirst.nextElementSibling as HTMLElement).click();
                await wait();
                _checkDisplay(true);
                confirm.click();
                // should not hide 
                await wait();
                _checkDisplay(true);
                // select the start position value
                newFirst.click();
                await wait();
                confirm.click();
                await wait();
                _checkDisplay(false);
                expect(instance.get('time')).eql(['2025-08-01 00:00:00', '2025-08-02 00:00:00']);

                function _checkDisplay(isShow: boolean) {
                    checkDisplay(content, isShow);
                }

                function setCursor(pos: number) {
                    inputInner.focus();
                    inputInner.setSelectionRange(pos, pos);
                }

                async function resetAndShow() {
                    instance.set('time', [startDate, endDate]);
                    await wait();
                    setCursor(separatePos + 1);
                    datetime.click();
                    await wait();
                }
            });
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

        it('should trigger change event once', async () => {
            const change = sinon.spy(() => console.log('change'));
            class Demo extends Component<{value: string}> {
                static template = `
                    const {Datepicker} = this;
                    <Datepicker range ev-$change:value={this.onChange} v-model="value" clearable />
                `;
                private Datepicker = Datepicker;

                onChange() {
                    change();
                }
            }
            const [instance, element] = mount(Demo);
            const input = element.querySelector<HTMLInputElement>('.k-input-inner')!;

            input.click();
            await wait();
            const calendar = getElement('.k-datepicker-content')!;
            const [day1, day2] = calendar.querySelectorAll<HTMLElement>('.k-calendar-item:not(.k-exceed)');
            day1.click();
            await wait();
            day2.click();
            await wait();
            expect(change.callCount).to.eql(1);
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
        await wait();

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
