import BasicDemo from '~/components/datepicker/demos/basic';
import ClearableDemo from '~/components/datepicker/demos/clearable';
import MultipleDemo from '~/components/datepicker/demos/multiple';
import DatetimeDemo from '~/components/datepicker/demos/datetime';
import {mount, dispatchEvent} from 'test/utils';

describe('Datepicker', () => {
    let instance;

    afterEach(() => {
        instance.destroy();
        document.body.removeChild(instance.element);
    });

    it('should select date', () => {
        instance = mount(BasicDemo);

        dispatchEvent(instance.element.children[0].children[0], 'click');
        const content = document.body.querySelector('.k-datepicker-content');
        expect(content.tagName).to.eql('DIV');
        dispatchEvent(content.querySelector('.k-day'), 'click');
        expect(instance.get('date')).to.be.string;
    });

    it('method test', () => {
        instance = mount(BasicDemo);

        dispatchEvent(instance.element.children[0].children[0], 'click');
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const demo = instance.refs.__demo;
        demo.prevYear();
        expect(demo.get('_showDate').getFullYear()).to.eql(year - 1);
        demo.nextYear();
        expect(demo.get('_showDate').getFullYear()).to.eql(year);
        demo.prevMonth();
        let d = new Date();
        d.setMonth(month - 1);
        expect(demo.get('_showDate').getMonth()).to.eql(d.getMonth());
        demo.nextMonth();
        expect(demo.get('_showDate').getMonth()).to.eql(month);

        demo.showYearPicker();
        expect(document.querySelector('.k-year-picker')).not.be.null;
        demo.onChangeYear(demo, 2019);
        expect(demo.get('_showDate').getFullYear()).eql(2019);
        demo.onChangeMonth(demo, 4);
        expect(demo.get('_showDate').getMonth()).eql(4);
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
        dispatchEvent(content.querySelector('.k-day'), 'click');
        dispatchEvent(content.querySelector('.k-day'), 'click');
        expect(instance.get('date')).have.lengthOf(2);
    });

    it('datetime picker', () => {
        instance = mount(DatetimeDemo);

        dispatchEvent(instance.element.children[0].children[0], 'click');
        let content = document.querySelectorAll('.k-datepicker-content');
        content = content[content.length - 1];
       
        dispatchEvent(content.querySelector('.k-day'), 'click');
        dispatchEvent(content.querySelector('.k-item'), 'click');

        expect(instance.get('datetime1')).be.string;
    });
});
