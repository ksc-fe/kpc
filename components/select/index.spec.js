import BasicDemo from '~/components/select/demos/basic';
import DisabledDemo from '~/components/select/demos/disabled';
import ClearableDemo from '~/components/select/demos/clearable';
import FilterDemo from '~/components/select/demos/filterable';
import GroupDemo from '~/components/select/demos/group';
import AllowUnmatchDemo from '~/components/select/demos/allowUnmatch';
import {mount, unmount, dispatchEvent, getElement, wait} from 'test/utils';
import Tooltip from 'kpc/components/tooltip';
import Intact from 'intact';
import {Select, Option} from 'kpc/components/select';
import SearchableDemo from '~/components/select/demos/searchable';

describe('Select', () => {
    let instance;

    afterEach((done) => {
        unmount(instance);
        setTimeout(done, 400);
    });

    it('should select value correctly', () => {
        instance = mount(BasicDemo);

        const trigger = instance.element.querySelector('.k-wrapper');
        trigger.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
        const dropdown = getElement('.k-select-dropdown');
        expect(dropdown.innerHTML).to.matchSnapshot();

        const item = dropdown.querySelector('.k-item');
        item.click();
        expect(instance.element.outerHTML).to.matchSnapshot();

        trigger.click();
        const _dropdown = getElement('.k-select-dropdown');
        expect(_dropdown.innerHTML).to.matchSnapshot();
    });

    it('disabled', () => {
        instance = mount(DisabledDemo);

        const [, trigger] = instance.element.querySelectorAll('.k-wrapper');
        trigger.click();
        const dropdown = getElement('.k-select-dropdown');
        expect(dropdown.innerHTML).to.matchSnapshot();

        const close = instance.element.querySelector('.k-close');
        close.click();
        expect(instance.get('days').length).to.eql(2);
    });

    it('clearable', () => {
        instance = mount(ClearableDemo);

        instance.set({day: 'Monday', days: ['Monday', 'Tuesday']});
        expect(instance.element.outerHTML).to.matchSnapshot();
        const [clear1, clear2] = instance.element.querySelectorAll('.k-clear');
        clear1.click();
        clear2.click();
        expect(instance.get('day')).to.eql('');
        expect(instance.get('days')).to.eql([]);
    });

    it('multiple', () => {
        instance = mount(ClearableDemo);

        const [, trigger] = instance.element.querySelectorAll('.k-wrapper');
        trigger.click();
        const dropdown = getElement('.k-select-dropdown');
        const [item1, item2] = dropdown.querySelectorAll('.k-item');
        item1.click();
        item2.click();
        expect(dropdown.innerHTML).to.matchSnapshot();
        expect(instance.get('days')).to.eql(['Monday', 'Tuesday']);
        // delete
        const deleteBtn = instance.element.querySelector('.k-select-tag .k-icon');
        deleteBtn.click();
        expect(instance.get('days')).to.eql(['Tuesday']);
    });

    it('filterable', () => {
        instance = mount(FilterDemo);

        const [input1, input2, input3] = instance.element.querySelectorAll('.k-inner');
        input1.value = 'm';
        dispatchEvent(input1, 'input');
        const dropdown1 = getElement('.k-select-dropdown');
        expect(dropdown1.innerHTML).to.matchSnapshot();
        dispatchEvent(document, 'keydown', {keyCode: 13});
        expect(instance.get('day')).to.eql('Monday');

        input2.value = '二';
        dispatchEvent(input2, 'input');
        const dropdown2 = getElement('.k-select-dropdown');
        expect(dropdown2.innerHTML).to.matchSnapshot();
        dispatchEvent(document, 'keydown', {keyCode: 13});
        input2.value = 'Wed';
        dispatchEvent(input2, 'input');
        dispatchEvent(document, 'keydown', {keyCode: 13});
        expect(instance.get('days')).to.eql(['Tuesday', 'Wednesday'])

        input3.value = 'm';
        dispatchEvent(input3, 'input');
        expect(getElement('.k-select-dropdown').innerHTML).to.matchSnapshot();
        input3.value = '三';
        dispatchEvent(input3, 'input');
        dispatchEvent(document, 'keydown', {keyCode: 13});
        expect(instance.get('day1')).to.eql('Wednesday');
    });

    it('group', () => {
        instance = mount(GroupDemo);

        const [trigger1, trigger2] = instance.element.querySelectorAll('.k-wrapper');
        trigger1.click();
        const dropdown1 = getElement('.k-select-dropdown');
        expect(dropdown1.innerHTML).to.matchSnapshot();
        const item = dropdown1.querySelector('.k-item');
        item.click();
        expect(instance.get('day')).to.eql('Monday');

        trigger2.click();
        const dropdown2 = getElement('.k-select-dropdown');
        expect(dropdown2.innerHTML).to.matchSnapshot();
    });

    it('keyboard operations', async () => {
        instance = mount(BasicDemo);

        const select = instance.element.querySelector('.k-select');
        dispatchEvent(select, 'keypress', {keyCode: 13});
        const dropdown = getElement('.k-select-dropdown');
        expect(dropdown.innerHTML).to.matchSnapshot();

        dispatchEvent(select, 'keydown', {keyCode: 9});
        await wait(500);
        expect(dropdown.style.display).to.eql('none');
    });

    it('no data', async () => {
        instance = mount(AllowUnmatchDemo);

        const input = instance.element.querySelector('.k-inner');
        input.value = 'xxx';
        dispatchEvent(input, 'input');
        const dropdown = getElement('.k-select-dropdown');
        expect(dropdown.innerHTML).to.matchSnapshot();
    });

    it('Tooltip with Select', async () => {
        class Demo extends Intact {
            @Intact.template()
            static template = `<div><Tooltip content="hello">
                <Select><Option value="1">option 1</Option></Select>
            </Tooltip></div>`
            _init() {
                this.Tooltip = Tooltip;
                this.Select = Select;
                this.Option = Option;
            }
        }

        instance = mount(Demo);
        const wrapper = instance.element.querySelector('.k-wrapper');
        wrapper.click();
        wrapper.click();

        expect(getElement('.k-select-dropdown')).to.be.undefined;
        expect(getElement('.k-tooltip-content')).to.be.undefined;
    });

    it('Searchable with multiple', async () => {
        instance = mount(SearchableDemo);

        const [, select] = instance.element.querySelectorAll('.k-wrapper');
        select.click();
        const dropdown = getElement('.k-select-dropdown');
        const [selectAll, toggleSelect, unselectAll] = dropdown.querySelectorAll('.k-select-op .k-btn');
        const [confirm, cancel] = dropdown.querySelectorAll('.k-select-footer .k-btn');

        // select all
        selectAll.click();
        confirm.click();
        expect(instance.get('days')).have.length(7);

        // unselect all
        select.click();
        unselectAll.click();
        confirm.click();
        expect(instance.get('days')).have.length(0);

        // toggle select
        select.click();
        instance.set('days', ['Monday', 'Tuesday']);
        const input = dropdown.querySelector('.k-inner');
        input.value = 's'
        dispatchEvent(input, 'input');
        toggleSelect.click();
        confirm.click();
        expect(instance.get('days')).have.length(5);
        expect(instance.get('days')).include('Monday')
    });

    it('should trigger change event correctly', () => {
        const spy = sinon.spy();

        class Demo extends Intact {
            @Intact.template()
            static template = `
                <div>
                    <Select v-model="basic" ev-change={{ self._onChange }}>
                        <Option value="white">白色</Option>
                        <Option value="black">黑色</Option>
                    </Select>
                    <Select v-model="clearAndmultiple" clearable multiple ev-change={{ self._onChange }}>
                        <Option value="white">白色</Option>
                        <Option value="black">黑色</Option>
                    </Select>
                    <Select v-model="multipleAndsearchable" multiple searchable ev-change={{ self._onChange }}>
                        <Option value="white">白色</Option>
                        <Option value="black">黑色</Option>
                    </Select>
                    <Select v-model="filterable" filterable ev-change={{ self._onChange }}>
                        <Option value="white">白色</Option>
                        <Option value="black">黑色</Option>
                    </Select>
                    <Select v-model="allowUnmatch" allowUnmatch filterable ev-change={{ self._onChange }}>
                        <Option value="white">白色</Option>
                        <Option value="black">黑色</Option>
                    </Select>
                </div>
            `;
            _init() {
                this.Select = Select;
                this.Option = Option
            }
            _onChange(v) {
                spy(v);
            }
        }

        instance = mount(Demo);

        const [
            basicTrigger, clearAndmultipleTrigger, multipleAndsearchableTrigger,
            filterableTrigger, allowUnmatchTrigger
        ] = instance.element.querySelectorAll('.k-wrapper');

        // basic
        basicTrigger.click();
        const dropdown = getElement('.k-select-dropdown');
        const item = dropdown.querySelector('.k-item');
        item.click();
        expect(spy.callCount).to.eql(1);
        expect(spy.calledWith(instance.get('basic'))).to.eql(true);

        //multiple
        clearAndmultipleTrigger.click();
        const dropdown1 = getElement('.k-select-dropdown');
        const [item1, item2] = dropdown1.querySelectorAll('.k-item');
        item1.click();
        item2.click();
        // The change method is not trigger while the operation not completed.
        expect(spy.callCount).to.eql(1);
        clearAndmultipleTrigger.click();
        expect(spy.callCount).to.eql(2);
        expect(spy.calledWith(instance.get('clearAndmultiple'))).to.eql(true);

        //clear
        const clearBtn = instance.element.querySelector('.k-clear');
        clearBtn.click();
        expect(spy.callCount).to.eql(3);
        expect(spy.calledWith([])).to.eql(true);

        // search
        multipleAndsearchableTrigger.click();
        const dropdown2 = getElement('.k-select-dropdown');
        const selectAll = dropdown2.querySelector('.k-select-op .k-btn');
        selectAll.click();
        multipleAndsearchableTrigger.click();
        // The change method is not trigger while the operation not completed.
        expect(spy.callCount).to.eql(3);
        multipleAndsearchableTrigger.click();
        const dropdown3 = getElement('.k-select-dropdown');
        const selectAll1 = dropdown3.querySelector('.k-select-op .k-btn');
        const confirm = dropdown3.querySelector('.k-select-footer .k-btn');
        selectAll1.click();
        confirm.click();
        expect(spy.callCount).to.eql(4);
        expect(spy.calledWith(instance.get('multipleAndsearchable'))).to.eql(true);
        // filterable
        const input= instance.element.querySelector('.k-inner');
        input.value = 'white';
        dispatchEvent(input, 'input');
        dispatchEvent(document, 'keydown', {keyCode: 13});
        expect(spy.callCount).to.eql(5);
        expect(spy.calledWith(instance.get('filterable'))).to.eql(true);
        // The change method is not trigger while the input value that don't match.
        const input1= instance.element.querySelector('.k-inner');
        input1.value = 'red';
        dispatchEvent(input, 'input');
        filterableTrigger.click();
        expect(spy.callCount).to.eql(5);

        //allowUnmatch
        const [, input2] = instance.element.querySelectorAll('.k-inner');
        input2.value = 'xxx';
        dispatchEvent(input2, 'input');
        allowUnmatchTrigger.click();
        expect(spy.callCount).to.eql(6);
        expect(spy.calledWith('xxx')).to.eql(true);
    });
});
