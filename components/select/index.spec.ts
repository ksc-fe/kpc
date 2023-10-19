import BasicDemo from '~/components/select/demos/basic';
import DisabledDemo from '~/components/select/demos/disabled';
import ClearableDemo from '~/components/select/demos/clearable';
import FilterDemo from '~/components/select/demos/filterable';
import GroupDemo from '~/components/select/demos/group';
import CreatableDemo from '~/components/select/demos/creatable';
import {mount, unmount, dispatchEvent, getElement, wait} from '../../test/utils';
import {Tooltip} from '../tooltip';
import {Component} from 'intact';
import {Select, Option} from '../select';
import SearchableDemo from '~/components/select/demos/searchable';

describe('Select', () => {
    afterEach((done) => {
        unmount();
        setTimeout(done, 500);
    });

    it('should select value correctly', async () => {
        const [instance, element] = mount(BasicDemo);

        const trigger = element.querySelector('.k-select') as HTMLElement;
        trigger.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        const dropdown = getElement('.k-select-menu')!;
        expect(dropdown.innerHTML).to.matchSnapshot();

        const item = dropdown.querySelector('.k-dropdown-item') as HTMLElement;
        item.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        trigger.click();
        await wait();
        const _dropdown = getElement('.k-select-menu')!;
        expect(_dropdown.innerHTML).to.matchSnapshot();
    });

    it('disabled', async () => {
        const [instance, element] = mount(DisabledDemo);

        const [, trigger] = element.querySelectorAll<HTMLElement>('.k-select');
        trigger.click();
        await wait();
        const dropdown = getElement('.k-select-menu')!;
        expect(dropdown.innerHTML).to.matchSnapshot();

        const close = element.querySelector('.k-tag-close') as HTMLElement;
        close.click();
        await wait();
        expect(instance.get('days')!.length).to.eql(2);
    });

    it('clearable', async () => {
        const [instance, element] = mount(ClearableDemo);

        instance.set({day: 'Monday', days: ['Monday', 'TuesdayT']});
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        const [clear1, clear2] = element.querySelectorAll<HTMLElement>('.k-select-clear');
        clear1.click();
        clear2.click();
        await wait();
        expect(instance.get('day')).to.eql(null);
        expect(instance.get('days')).to.eql([]);
        unmount();

        // clearable shouldn't support when disabled is true
        class Demo extends Component {
            static template = `
                const {Select, Option} = this;
                <Select v-model="days" multiple disabled clearable>
                    <Option value="Monday">星期</Option>
                    <Option value="Tuesday">星期二</Option>
                    <Option value="Wednesday">星期三</Option>
                    <Option value="Thursday">星期四</Option>
                    <Option value="Friday">星期五</Option>
                    <Option value="Saturday">星期六</Option>
                    <Option value="Sunday">星期天</Option>
                </Select>
            `;
            static defaults() {
                return {
                    days:['Monday', 'Tuesday']
                }
            }
            private Select = Select;
            private Option = Option;
        }

        const [, element1] = mount(Demo);
        const clear = element1.querySelector('.k-select-clear');
        expect(clear).to.be.null;
    });

    it('multiple', async () => {
        const [instance, element] = mount(ClearableDemo);

        const [, trigger] = element.querySelectorAll<HTMLElement>('.k-select');
        trigger.click();
        await wait();
        const dropdown = getElement('.k-select-menu')!;
        const [item1, item2] = dropdown.querySelectorAll<HTMLElement>('.k-dropdown-item');
        item1.click();
        item2.click();
        await wait();
        expect(dropdown.innerHTML).to.matchSnapshot();
        expect(instance.get('days')).to.eql(['Monday', 'Tuesday']);
        // delete
        const deleteBtn = element.querySelector('.k-tag-close') as HTMLElement;
        deleteBtn.click();
        await wait();
        expect(instance.get('days')).to.eql(['Tuesday']);
        expect(dropdown.innerHTML).to.matchSnapshot();
    });

    it('filterable', async () => {
        const [instance, element] = mount(FilterDemo);

        const [input1, input2, input3] = element.querySelectorAll<HTMLInputElement>('.k-input-inner');
        input1.click();
        await wait();
        input1.value = 'm';
        dispatchEvent(input1, 'input');
        await wait();
        const dropdown1 = getElement('.k-select-menu')!;
        expect(dropdown1.innerHTML).to.matchSnapshot();
        dispatchEvent(document, 'keydown', {keyCode: 13});
        await wait();
        expect(instance.get('day')).to.eql('Monday');

        input2.click();
        await wait();
        input2.value = '二';
        dispatchEvent(input2, 'input');
        await wait();
        const dropdown2 = getElement('.k-select-menu')!;
        expect(dropdown2.innerHTML).to.matchSnapshot();
        dispatchEvent(document, 'keydown', {keyCode: 13});
        await wait();
        input2.value = 'Wed';
        dispatchEvent(input2, 'input');
        await wait();
        dispatchEvent(document, 'keydown', {keyCode: 13});
        await wait();
        expect(instance.get('days')).to.eql(['Tuesday', 'Wednesday'])

        input3.click();
        await wait();
        input3.value = 'm';
        dispatchEvent(input3, 'input');
        await wait();
        expect(getElement('.k-select-menu')!.innerText).to.eql('无数据');
        input3.value = '三';
        dispatchEvent(input3, 'input');
        await wait();
        dispatchEvent(document, 'keydown', {keyCode: 13});
        await wait();
        expect(instance.get('day1')).to.eql('Wednesday');
    });

    it('group', async () => {
        const [instance, element] = mount(GroupDemo);

        const [trigger1, trigger2] = element.querySelectorAll<HTMLElement>('.k-select');
        trigger1.click();
        await wait();
        const dropdown1 = getElement('.k-select-menu')!;
        expect(dropdown1.innerHTML).to.matchSnapshot();
        const item = dropdown1.querySelector('.k-select-option') as HTMLElement;
        item.click();
        expect(instance.get('day')).to.eql('Monday');

        trigger2.click();
        await wait();
        const dropdown2 = getElement('.k-select-menu')!;
        expect(dropdown2.innerHTML).to.matchSnapshot();
    });

    it('keyboard operations', async () => {
        const [instance, element] = mount(BasicDemo);

        const select = element.querySelector('.k-select') as HTMLElement;
        dispatchEvent(select, 'keydown', {keyCode: 13});
        await wait();
        const dropdown = getElement('.k-select-menu')!;
        expect(dropdown.innerHTML).to.matchSnapshot();

        dispatchEvent(select, 'keydown', {keyCode: 9});
        await wait(500);
        expect(dropdown.style.display).to.eql('none');
    });

    it('creatable', async () => {
        const [instance, element] = mount(CreatableDemo);

        const input = element.querySelector('.k-input-inner') as HTMLInputElement;
        input.click();
        await wait();
        input.value = 'xxx';
        dispatchEvent(input, 'input');
        await wait();
        const dropdown = getElement('.k-select-menu')!;
        expect(dropdown.innerHTML).to.matchSnapshot();
        // select
        dispatchEvent(document, 'keydown', {keyCode: 13});
        await wait();
        expect(instance.get('day')).to.eql('xxx');

        // open again
        input.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(dropdown.innerHTML).to.matchSnapshot();

        // input again
        input.value = 'yyy';
        dispatchEvent(input, 'input');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(dropdown.innerHTML).to.matchSnapshot();

        // discard
        dispatchEvent(document, 'click');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('day')).to.eql('xxx');
    });

    it('Tooltip with Select', async () => {
        class Demo extends Component {
            static template = `
                const {Tooltip, Select, Option} = this;
                <Tooltip content="hello">
                    <Select><Option value="1">option 1</Option></Select>
                </Tooltip>
            `;
            private Tooltip = Tooltip;
            private Select = Select;
            private Option = Option;
        }

        const [instance, element] = mount(Demo);
        element.click();
        await wait();
        expect(getElement('.k-select-menu')!).to.be.exist;
        expect(getElement('.k-tooltip-content')!).to.be.exist;
    });

    it('Searchable with multiple', async () => {
        const [instance, element] = mount(SearchableDemo);

        const [, select] = element.querySelectorAll<HTMLElement>('.k-select');
        select.click();
        await wait();
        const dropdown = getElement('.k-select-menu')!;
        const [selectAll, toggleSelect, unselectAll] = dropdown.querySelectorAll<HTMLElement>('.k-select-op .k-btn');
        const [cancel, confirm] = dropdown.querySelectorAll<HTMLElement>('.k-select-footer .k-btn');

        // select all
        selectAll.click();
        confirm.click();
        await wait();
        expect(instance.get('days')).have.length(7);

        // unselect all
        select.click();
        await wait();
        unselectAll.click();
        confirm.click();
        await wait();
        expect(instance.get('days')).have.length(0);

        // toggle select
        select.click();
        await wait();
        instance.set('days', ['Monday', 'Tuesday']);
        await wait();
        const input = dropdown.querySelector('.k-input-inner') as HTMLInputElement;
        input.value = 's'
        dispatchEvent(input, 'input');
        await wait();
        toggleSelect.click();
        confirm.click();
        await wait();
        expect(instance.get('days')).have.length(5);
        expect(instance.get('days')).include('Monday')
    });

    // it('should trigger change event correctly', async () => {
        // const spy = sinon.spy();

        // class Demo extends Component {
            // static template = `
                // const {Select, Option} = this;
                // <div>
                    // <Select v-model="basic" ev-change={this._onChange}>
                        // <Option value="white">白色</Option>
                        // <Option value="black">黑色</Option>
                    // </Select>
                    // <Select v-model="clearAndmultiple" clearable multiple ev-change={this._onChange}>
                        // <Option value="white">白色</Option>
                        // <Option value="black">黑色</Option>
                    // </Select>
                    // <Select v-model="multipleAndsearchable" multiple searchable ev-change={this._onChange}>
                        // <Option value="white">白色</Option>
                        // <Option value="black">黑色</Option>
                    // </Select>
                    // <Select v-model="filterable" filterable ev-change={this._onChange}>
                        // <Option value="white">白色</Option>
                        // <Option value="black">黑色</Option>
                    // </Select>
                    // <Select v-model="allowUnmatch" allowUnmatch filterable ev-change={this._onChange}>
                        // <Option value="white">白色</Option>
                        // <Option value="black">黑色</Option>
                    // </Select>
                // </div>
            // `;
            // private Select = Select;
            // private Option = Option;
            // _onChange(v: string) {
                // spy(v);
            // }
        // }

        // const [instance, element] = mount(Demo);

        // const [
            // basicTrigger, clearAndmultipleTrigger, multipleAndsearchableTrigger,
            // filterableTrigger, allowUnmatchTrigger
        // ] = element.querySelectorAll<HTMLElement>('.k-select');

        // // basic
        // basicTrigger.click();
        // await wait();
        // const dropdown = getElement('.k-select-menu')!;
        // const item = dropdown.querySelector('.k-select-option') as HTMLElement;
        // item.click();
        // await wait();
        // expect(spy.callCount).to.eql(1);
        // expect(spy.calledWith(instance.get('basic'))).to.eql(true);

        // //multiple
        // clearAndmultipleTrigger.click();
        // await wait();
        // const dropdown1 = getElement('.k-select-menu')!;
        // const [item1, item2] = dropdown1.querySelectorAll<HTMLElement>('.k-select-option');
        // item1.click();
        // item2.click();
        // await wait();
        // // The change method is not trigger while the operation not completed.
        // expect(spy.callCount).to.eql(1);
        // clearAndmultipleTrigger.click();
        // expect(spy.callCount).to.eql(2);
        // expect(spy.calledWith(instance.get('clearAndmultiple'))).to.eql(true);

        // //clear
        // const clearBtn = element.querySelector('.k-select-clear') as HTMLElement;
        // clearBtn.click();
        // await wait();
        // expect(spy.callCount).to.eql(3);
        // expect(spy.calledWith([])).to.eql(true);

        // // search
        // multipleAndsearchableTrigger.click();
        // await wait();
        // const dropdown2 = getElement('.k-select-menu') as HTMLElement;
        // const selectAll = dropdown2.querySelector<HTMLElement>('.k-select-op .k-btn')!;
        // selectAll.click();
        // multipleAndsearchableTrigger.click();
        // await wait();
        // // The change method is not trigger while the operation not completed.
        // expect(spy.callCount).to.eql(3);
        // multipleAndsearchableTrigger.click();
        // const dropdown3 = getElement('.k-select-menu')!;
        // const selectAll1 = dropdown3.querySelector<HTMLElement>('.k-select-op .k-btn')!;
        // const confirm = dropdown3.querySelector<HTMLElement>('.k-select-footer .k-btn')!;
        // selectAll1.click();
        // confirm.click();
        // await wait();
        // expect(spy.callCount).to.eql(4);
        // expect(spy.calledWith(instance.get('multipleAndsearchable'))).to.eql(true);
        // // filterable
        // const input= element.querySelector('.k-input-inner') as HTMLInputElement;
        // input.value = 'white';
        // dispatchEvent(input, 'input');
        // dispatchEvent(document, 'keydown', {keyCode: 13});
        // await wait();
        // expect(spy.callCount).to.eql(5);
        // expect(spy.calledWith(instance.get('filterable'))).to.eql(true);
        // // The change method is not trigger while the input value that don't match.
        // const input1= element.querySelector('.k-input-inner') as HTMLInputElement;
        // input1.value = 'red';
        // dispatchEvent(input, 'input');
        // filterableTrigger.click();
        // await wait();
        // expect(spy.callCount).to.eql(5);

        // //allowUnmatch
        // const [, input2] = element.querySelectorAll<HTMLInputElement>('.k-input-inner');
        // input2.value = 'xxx';
        // dispatchEvent(input2, 'input');
        // allowUnmatchTrigger.click();
        // await wait();
        // expect(spy.callCount).to.eql(6);
        // expect(spy.calledWith('xxx')).to.eql(true);
    // });

    // it('should not set value to null when loading', async () => {
        // class Demo extends Component {
            // static template = `
                // const {Select, Option} = this;
                // <Select v-model="day" loading={this.get('isLoad')}>
                    // <Option v-for={this.get('data')} value={$value.value}> 
                        // {$value.label} 
                    // </Option>
                // </Select>
            // `;
            // static defaults() {
                // return {
                    // isLoad: false,
                    // day: 'Monday',
                    // data: [
                        // {label: '星期一', value: 'Monday'},
                        // {label: '星期二', value: 'Tuesday'},
                        // {label: '星期三', value: 'Wednesday'},
                        // {label: '星期四', value: 'Thursday'},
                        // {label: '星期五', value: 'Friday'},
                        // {label: '星期六', value: 'Saturday'},
                        // {label: '星期天', value: 'Sunday'},
                    // ]
                // }
            // }
            // private Select = Select;
            // private Option = Option;
        // }

        // const [instance, element] = mount(Demo);
        
        // instance.set({isLoad: true});
        // instance.set({data: []});
        // await wait();
        // expect(instance.get('day')).to.eql('Monday');
    // });
});
