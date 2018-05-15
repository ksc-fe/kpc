import BasicDemo from '~/components/datepicker/demos/basic';
import ClearableDemo from '~/components/datepicker/demos/clearable';
import MultipleDemo from '~/components/datepicker/demos/multiple';
import DatetimeDemo from '~/components/datepicker/demos/datetime';
import {mount, dispatchEvent, getElement} from 'test/utils';

describe('Datepicker', () => {
    let instance;

    afterEach((done) => {
        instance.destroy();
        document.body.removeChild(instance.element);

        // wait for content has been removed
        setTimeout(done, 300);
    });

    it('should select date', () => {
        instance = mount(BasicDemo);

        dispatchEvent(instance.element.children[0].children[0], 'click');
        const content = document.body.querySelector('.k-datepicker-content');
        expect(content.tagName).to.eql('DIV');
        dispatchEvent(content.querySelector('.k-day'), 'click');
        expect(instance.get('date')).to.be.string;
    });

    it('should change year and month', () => {
        instance = mount(BasicDemo);

        dispatchEvent(instance.element.children[0].children[0], 'click');
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
    });

    it('should clear value', () => {
        instance = mount(ClearableDemo);

        instance.set('date', '2018-03-04');
        dispatchEvent(instance.element.querySelector('.k-clear'), 'click');
        expect(instance.get('date') === undefined).be.true;
    });

    it('multiple select', () => {
        instance = mount(MultipleDemo);

        dispatchEvent(instance.element.children[0].children[0], 'click');
        let content = document.querySelectorAll('.k-datepicker-content');
        content = content[content.length - 1];
        dispatchEvent(content.querySelectorAll('.k-day')[0], 'click');
        dispatchEvent(content.querySelectorAll('.k-day')[1], 'click');
        expect(instance.get('date')).have.lengthOf(2);
    });

    it('datetime picker', (done) => {
        instance = mount(DatetimeDemo);

        dispatchEvent(instance.element.children[0].children[0], 'click');
        let content = document.querySelectorAll('.k-datepicker-content');
        content = content[content.length - 1];
       
        dispatchEvent(content.querySelector('.k-day'), 'click');
        setTimeout(() => {
            dispatchEvent(content.querySelector('.k-item'), 'click');

            expect(instance.get('datetime1')).be.string;

            done();
        });
    });
});
