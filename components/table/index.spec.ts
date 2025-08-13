import BasicDemo from '~/components/table/demos/basic';
import CheckTypeDemo from '~/components/table/demos/checkType';
import ExpandDemo from '~/components/table/demos/rowExpandable';
import SortDemo from '~/components/table/demos/sort';
import GroupDemo from '~/components/table/demos/group';
import FixColumnDemo from '~/components/table/demos/fixColumn';
import LoadingDemo from '~/components/table/demos/loading';
import ExportDemo from '~/components/table/demos/export';
import SelectedKeysDemo from '~/components/table/demos/selectedKeys';
import ResizableDemo, {data as ResizableDemoData} from '~/components/table/demos/resizable';
import TooltipDemo from '~/components/table/demos/tooltip';
import TreeDemo from '~/components/table/demos/tree';
import DisabledDemo from '~/components/table/demos/disableRow';
import ScrollToRowDemo from '~/components/table/demos/scrollToRow';
import {mount, unmount, dispatchEvent, getElement, wait} from '../../test/utils';
import {Component} from 'intact';
import {Table, TableColumn} from './';
import { bind } from '../utils';
import DraggableTable from '~/components/table/demos/draggable';
import MergeCellDemo from '~/components/table/demos/mergeCell';
import {Dropdown, DropdownMenu, DropdownItem} from '../dropdown';
import {Icon} from '../icon';
import {useChecked, AllCheckedStatus} from './useChecked';
import PaginationDemo from '~/components/table/demos/pagination';
import { download } from './exportTable';

describe('Table', () => {
    afterEach(() => {
        unmount();
        localStorage.removeItem('resizableTable');
    });

    it('check & uncheck', async () => {
        const [instance, element] = mount(BasicDemo);
        const table = instance.$lastInput!.children as Table;
        const checked = (table as any).checked as ReturnType<typeof useChecked>;

        // bind $change:checked event
        const spy = sinon.spy((v: number[]) => console.log(v));
        table.on('$change:checkedKeys', spy);

        const spyCheckRow = sinon.spy((data: any, index: number, key: string) => console.log('checkRow', data, index, key));
        table.on('checkRow', spyCheckRow);
        const spyUncheckRow = sinon.spy((data: any, index: number, key: string) => console.log('uncheckRow', data, index, key));
        table.on('uncheckRow', spyUncheckRow);
        const spyCheckAll = sinon.spy(() => console.log('checkAll'));
        table.on('checkAll', spyCheckAll);
        const spyUncheckAll = sinon.spy(() => console.log('uncheckAll'));
        table.on('uncheckAll', spyUncheckAll);

        // click row
        const [tr1, tr2] = element.querySelectorAll<HTMLElement>('tbody tr');
        tr1.click();
        await wait();
        expect(table.get('checkedKeys')).to.eql([0]);
        expect(spyCheckRow.callCount).to.eql(1);
        tr2.click();
        await wait();
        expect(table.get('checkedKeys')).to.eql([0, 1]);
        expect(checked.getAllCheckedStatus()).eql(AllCheckedStatus.All);
        expect(spyCheckRow.callCount).to.eql(2);
        expect(spyCheckAll.callCount).to.eq(0);

        tr1.click();
        await wait();
        expect(table.get('checkedKeys')).to.eql([1]);
        expect(checked.getAllCheckedStatus()).eql(AllCheckedStatus.Indeterminate);
        expect(spyUncheckRow.callCount).to.eql(1);

        const all = element.querySelector('.k-checkbox') as HTMLElement;
        all.click();
        await wait();
        expect(checked.getAllCheckedStatus()).eql(AllCheckedStatus.All);
        expect(spyCheckAll.callCount).to.eql(1);
        all.click();
        await wait();
        expect(checked.getAllCheckedStatus()).eql(AllCheckedStatus.None);
        expect(table.get('checkedKeys')).to.eql([]);
        expect(spyUncheckAll.callCount).to.eql(1);

        expect(spy.callCount).to.eql(5);
        // clear data of table should only trigger $change:checked event once, #407
        all.click();
        instance.set<{data: any[]}>('data', []);
        await wait();
        expect(spy.callCount).to.eql(7);
    });

    it('click row of radio table', async () => {
        const [instance, element] = mount(CheckTypeDemo);
        const table = instance.refs.__radio as Table;

        // click row
        const [tr1, tr2] = element.querySelectorAll<HTMLElement>('.k-table:nth-child(2) tbody tr');
        tr1.click();
        await wait();
        expect(table.get('checkedKeys')).eql([0]);
        tr2.click();
        await wait();
        expect(table.get('checkedKeys')).eql([1]);
    });

    it('getCheckedData', async () => {
        const [instance, element] = mount(CheckTypeDemo);
        const {__checkbox: checkboxTable, __radio: radioTable} = instance.refs as Record<string, Table>;

        const [tr1, tr2] = element.querySelectorAll<HTMLElement>('.k-table:nth-child(1) tbody tr');
        tr1.click();
        await wait();
        expect(JSON.stringify(checkboxTable.getCheckedData())).to.matchSnapshot();
        tr2.click();
        await wait();
        expect(JSON.stringify(checkboxTable.getCheckedData())).to.matchSnapshot();

        const [tr11, tr22] = element.querySelectorAll<HTMLElement>('.k-table:nth-child(2) tbody tr');
        tr11.click();
        await wait();
        expect(JSON.stringify(radioTable.getCheckedData())).to.matchSnapshot();
        tr22.click();
        await wait();
        expect(JSON.stringify(radioTable.getCheckedData())).to.matchSnapshot();
    });

    it('expand & shrink', async () => {
        const [instance, element] = mount(ExpandDemo);
        const {__test1: rowExpandableTable, __test2: rowUnExpandableTable} = instance.refs as Record<string, Table>;

        const [table1, table2] = element.querySelectorAll<HTMLElement>('.k-table');
        const [tr] = table1.querySelectorAll<HTMLElement>('tbody tr');
        tr.click();
        await wait();
        expect(table1.outerHTML).to.matchSnapshot();
        tr.click();
        await wait();
        expect(table1.outerHTML).to.matchSnapshot();

        const [tr1] = table2.querySelectorAll<HTMLElement>('tbody tr');
        tr1.click();
        await wait();
        expect(table2.outerHTML).to.matchSnapshot();

        const icon = tr1.querySelector('.icon') as HTMLElement;
        icon.click();
        await wait();
        expect(table2.outerHTML).to.matchSnapshot();
        icon.click();
        await wait();
        expect(table2.outerHTML).to.matchSnapshot();
    });

    it('merge cells', async () => {
        const [instance, element] = mount(MergeCellDemo);

        const {__test1: mergeCheckboxTable, __test2: mergeRadioTable} = instance.refs as Record<string, Table>;
        const [table1, table2] = element.querySelectorAll<HTMLElement>('.k-table');

        const [, , tr3, tr4, tr5] = table1.querySelectorAll<HTMLElement>('tbody tr');
        expect(mergeCheckboxTable.get('checkedKeys')).eql([3]);
        expect(table1.outerHTML).to.matchSnapshot();
        tr3.click();
        await wait();
        expect(mergeCheckboxTable.get('checkedKeys')).eql([3, 2]);
        expect(table1.outerHTML).to.matchSnapshot();
        tr4.click();
        await wait();
        expect(mergeCheckboxTable.get('checkedKeys')).eql([2]);
        expect(table1.outerHTML).to.matchSnapshot();
        tr4.click();
        await wait();
        expect(mergeCheckboxTable.get('checkedKeys')).eql([2, 3]);
        expect(table1.outerHTML).to.matchSnapshot();
        tr5.click();
        await wait();
        expect(mergeCheckboxTable.get('checkedKeys')).eql([2, 3, 4]);
        expect(table1.outerHTML).to.matchSnapshot();
       
        const [_tr1, , , _tr4] = table2.querySelectorAll<HTMLElement>('tbody tr');
        expect(mergeRadioTable.get('checkedKeys')).eql([0, 1]);
        expect(table2.outerHTML).to.matchSnapshot();
        _tr4.click();
        await wait();
        expect(mergeRadioTable.get('checkedKeys')).eql([1, 2, 3, 4]);
        expect(table2.outerHTML).to.matchSnapshot();
        _tr1.click();
        await wait();
        expect(mergeRadioTable.get('checkedKeys')).eql([1, 0]);
        expect(table2.outerHTML).to.matchSnapshot();
    });

    it('append a row in merged table', async () => {
        let uniqueId = 0;
        class Demo extends Component<{data: any[]}> {
            static template = `
                const {Table, TableColumn} = this;
                const { data } = this.get();
                <Table data={data} merge={this.merge} rowKey={data => data.uniqueId} animation={false}>
                    <TableColumn title="名称" key="Name" />
                    <TableColumn title="头衔" key="Title" />
                    <TableColumn title="uniqueId" key="uniqueId" />
                </Table>
            `

            private Table = Table;
            private TableColumn = TableColumn;

            static defaults() {
                return {
                    data: [
                        {
                            Name: '刘备',
                            Title: '大哥',
                            uniqueId: 0, 
                        },
                    ]
                }
            }

            @bind
            merge(row: any, column: any, rowIndex: number, columnIndex: number) {
                const { data } = this.get();
                for (let i = 0; i < data.length; i++) {
                    const mergeIndex = data.findIndex((item: any, index: number) => {
                        return index > i && item.Name !== data[i]?.Name;
                    });
                    const allSame = data.every((item: any, index: number) => {
                        if (index > i) {
                            return item.Name === data[i].Name;
                        }
                        return true;
                    });
                    if ([0, 1, 2].includes(columnIndex) && rowIndex === i) {
                        if (mergeIndex === -1 && allSame) {
                            return { rowspan: data.length - i };
                        }
                        if (mergeIndex > -1) {
                            return { rowspan: mergeIndex - i };
                        }
                    }
                }
            }
        }

        const [instance, element] = mount(Demo);

        const { data } = instance.get();
        instance.set('data', [...data, { ...data[data.length - 1], uniqueId: ++uniqueId }]);

        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('sort', async () => {
        const [instance, element] = mount(SortDemo);

        const [, th1, th2] = element.querySelectorAll<HTMLElement>('thead th');
        th1.click();
        await wait();
        expect(instance.get('sort')).to.eql({key: 'name', type: 'desc'});
        th2.click();
        await wait();
        expect(instance.get('sort')).to.eql({key: 'age', type: 'desc'});
        th2.click();
        await wait();
        expect(instance.get('sort')).to.eql({key: 'age', type: 'asc'});
        th2.click();
        await wait();
        expect(instance.get('sort')).to.eql({});
    });

    it('group', async () => {
        const [instance, element] = mount(GroupDemo);

        const {__test1, __test2} = instance.refs as Record<string, Table>;
        const [table1, table2] = element.querySelectorAll<HTMLElement>('.k-table');

        const icon = table1.querySelector('.k-table-group') as HTMLElement;
        dispatchEvent(icon, 'click');
        await wait();
        const dropdown = getElement('.k-table-group-dropdown')!;
        expect(dropdown.innerHTML).to.matchSnapshot();

        const item = dropdown.querySelector('.k-dropdown-item:nth-child(2)') as HTMLElement;
        item.click();
        await wait();
        expect(instance.get('group')).to.eql({status: 'active'});
        expect(table1.innerHTML).to.matchSnapshot();

        const icon2 = table2.querySelector('.k-table-group') as HTMLElement;
        dispatchEvent(icon2, 'click');
        await wait();
        const dropdown2 = getElement('.k-table-group-dropdown')!;
        expect(dropdown2.innerHTML).to.matchSnapshot();

        const [item1, item2] = dropdown2.querySelectorAll<HTMLElement>('.k-checkbox');
        item1.click();
        await wait();
        expect(instance.get('multipleGroup')).to.eql({status: []});
        expect(table2.innerHTML).to.matchSnapshot();
        item2.click();
        await wait();
        expect(instance.get('multipleGroup')).to.eql({status: []});

        // click confirm
        const [checkAll, reset, confirm] = dropdown2.querySelectorAll<HTMLElement>('.k-table-group-footer .k-btn');
        confirm.click();
        await wait();
        expect(instance.get('multipleGroup')).to.eql({status: ['active', 'stopped']});
        expect(table2.innerHTML).to.matchSnapshot();

        // click reset
        dispatchEvent(icon2, 'click');
        await wait();
        expect(dropdown2.innerHTML).to.matchSnapshot();
        reset.click();
        await wait();
        expect(dropdown2.innerHTML).to.matchSnapshot();
        expect(instance.get('multipleGroup')).to.eql({status: []});

        // click checkAll
        dispatchEvent(icon2, 'click');
        await wait();
        checkAll.click();
        await wait();
        expect(dropdown2.querySelectorAll('.k-checkbox.k-checked')).to.length(2);

        // update group
        instance.set('statusGroup', [{label: 'label', value: 'value'}]);
        dispatchEvent(icon, 'click');
        await wait(500);
        const newDropdown= getElement('.k-table-group-dropdown')!;
        expect(newDropdown.innerHTML).to.matchSnapshot();
    });

    it('fix columns', async () => {
        const [instance, element] = mount(FixColumnDemo);
        const table = instance.refs.__test as Table;

        element.style.width = "1000px";
        const tableElement = element.querySelector('.k-table:nth-child(2)') as HTMLElement;
        const scrollElement = tableElement.querySelector('.k-table-wrapper') as HTMLElement;

        // should add k-scroll-middle classname
        scrollElement.scrollLeft = 100;
        await wait(100);
        expect(tableElement.outerHTML).to.matchSnapshot();

        // should add k-scroll-right classname
        scrollElement.scrollLeft = 1000;
        await wait(100);
        expect(tableElement.outerHTML).to.matchSnapshot();

        // should change max-height if we set fixHeader to true
        table.set('fixHeader', true);
        await wait();
        expect(tableElement.outerHTML).to.matchSnapshot();
    });

    it('resize', async () => {
        const [instance, element] = mount(BasicDemo);
        const table = instance.refs.__test as Table;
        const resize = element.querySelector('.k-table-resize') as HTMLElement;

        dispatchEvent(resize, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 1});
        dispatchEvent(document, 'mouseup');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('store width on resizing', async () => {
        localStorage.removeItem('resizableTable');
        const [instance, element] = mount(ResizableDemo);

        // should equal to minWidth
        await wait();
        expect(element.querySelector<HTMLElement>('thead th:nth-child(4)')!.offsetWidth).to.eql(300);

        const resize = element.querySelector('.k-table-resize') as HTMLElement;
        dispatchEvent(resize, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 1});
        dispatchEvent(document, 'mouseup');
        await wait();

        // rerender
        const innerHTML = element.innerHTML;
        unmount();
        const [, table] = mount(ResizableDemo);
        expect(table.innerHTML).to.matchSnapshot();
        expect(table.innerHTML).to.eql(innerHTML);
        localStorage.removeItem('resizableTable');
    });

    it('resize column that its previous column is hidden', async () => {
        localStorage.removeItem('resizableTable');
        const [instance, element] = mount(ResizableDemo, null, ResizableDemoData);

        const resize = element.querySelector('thead th:nth-child(4) .k-table-resize') as HTMLElement;
        dispatchEvent(resize, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 1});
        dispatchEvent(document, 'mouseup');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        localStorage.removeItem('resizableTable');
    });

    it('should set the width of table equal to container after resizing and expanding container', async () => {
        const [instance, element] = mount(BasicDemo);

        const resize = element.querySelector('.k-table-resize') as HTMLElement;
        dispatchEvent(resize, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 1});
        dispatchEvent(document, 'mouseup');
        await wait();

        const container = element.parentNode as HTMLElement;
        container.style.width = '1000px';
        await wait(200);
        expect(element.querySelector<HTMLElement>('table')!.style.width).to.eql('1000px');
    });

    it('loading', async () => {
        const [instance, element] = mount(LoadingDemo);

        instance.set('loading', true);
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        instance.set('loading', false);
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('export', async function() {
        this.timeout(0);
        const [instance, element] = mount(ExportDemo);

        const content = await instance.refs.table.exportTable();
        expect(content.replace(/\r\n|\r/g, '\n')).to.matchSnapshot();
        const content1 = await instance.refs.table.exportTable([
            {a: '1', b: 2, c: 3}
        ]);
        expect(content1.replace(/\r\n|\r/g, '\n')).to.matchSnapshot();

        // it will be error codes if downloadjs exports below contents
        // use custom download function instead
        const csv = '"镜像名称","系统大小","镜像类型","状态","操作系统","创建时间","是否支持快速开机","可用区","镜像描述","关联快照"\r\n"a12321","20GB","普通镜像","错误 详情","centos-7","2023-11-23 15:54:10","否","--","--","q"';
        download(csv, 'test.csv');
    });

    it('selectedKeys', async () => {
        const [instance, element] = mount(SelectedKeysDemo);

        const [table1, table2] = element.querySelectorAll<HTMLElement>('tbody');
        const [tr1, tr2] = table1.querySelectorAll<HTMLElement>('tr');
        tr1.click();
        await wait();
        expect(table1.innerHTML).to.matchSnapshot();
        tr2.click();
        await wait();
        expect(table1.innerHTML).to.matchSnapshot();
        expect(instance.refs.__test1.getSelectedData()).to.have.lengthOf(1);
        tr2.click();
        await wait();
        expect(table1.innerHTML).to.matchSnapshot();
        expect(instance.refs.__test1.getSelectedData()).to.have.lengthOf(0);

        const [tr21, tr22] = table2.querySelectorAll<HTMLElement>('tr');
        tr21.click();
        await wait();
        expect(table2.innerHTML).to.matchSnapshot();
        tr22.click();
        await wait();
        expect(table2.innerHTML).to.matchSnapshot();
        expect(instance.refs.__test2.getSelectedData()).to.have.lengthOf(2);
        tr22.click();
        await wait();
        expect(table2.innerHTML).to.matchSnapshot();
        expect(instance.refs.__test2.getSelectedData()).to.have.lengthOf(1);
    });

    it('tooltip', async () => {
        const [instance, element] = mount(TooltipDemo);

        const tr = element.querySelector('tbody tr') as HTMLElement;
        dispatchEvent(tr, 'mouseenter');
        await wait();
        const content = getElement('.k-tooltip-content')!;
        expect(content.textContent).to.matchSnapshot();
    });

    it('tree', async () => {
        const [instance, element] = mount(TreeDemo);
        const table = (instance.$lastInput!.children as any)[0].children as Table;

        // check all
        const checkbox = element.querySelector('.k-checkbox') as HTMLElement;
        checkbox.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(table.getCheckedData()).to.have.lengthOf(8);

        const arrow = element.querySelector('.k-table-arrow') as HTMLElement;
        arrow.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        arrow.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(table.getCheckedData()).to.have.lengthOf(8);
    });

    it('should keep checked status of the disabled row', async () => {
        const [instance, element] = mount(DisabledDemo);
        const checked = (instance.$lastInput!.children as any).checked as ReturnType<typeof useChecked>;

        const checkbox = element.querySelector('.k-checkbox') as HTMLElement;
        checkbox.click();
        await wait();
        expect(instance.get('checkedKeys')).to.eql(['3', '2', '4']);
        checkbox.click();
        await wait();
        expect(instance.get('checkedKeys')).to.eql(['3']);

        const [, , checkbox2, , checkbox4] = element.querySelectorAll<HTMLElement>('.k-checkbox');
        checkbox2.click();
        await wait();
        expect(checked.getAllCheckedStatus()).eql(AllCheckedStatus.Indeterminate);
        checkbox4.click();
        await wait();
        expect(checked.getAllCheckedStatus()).eql(AllCheckedStatus.All);
    });

    it('scroll to row', async () => {
        const [instance, element] = mount(ScrollToRowDemo);

        const table = instance.refs.table as Table;
        const scroll = element.querySelector('.k-table-wrapper') as HTMLElement;
        const tr = element.querySelector('tbody tr') as HTMLElement;
        const height = tr.offsetHeight;
        const test = (rows: number) => {
            expect(scroll.scrollTop).to.eql(height * rows);
        };

        await table.scrollToRowByIndex(2);
        test(2);
        await table.scrollToRowByIndex(1);
        test(1);

        await table.scrollToRowByKey('name 3');
        test(2);
        await table.scrollToRowByKey('name 2');
        test(1);
    });

    it('render a hidden table with minWidth', () => {
        class Demo extends Component {
            static template = `
                const {Table, TableColumn} = this;
                <div style="display: none;">
                    <Table>
                        <TableColumn key="a" minWidth={30} />
                    </Table>
                </div>
            `
            private Table = Table;
            private TableColumn = TableColumn;
        }

        const [, element] = mount(Demo);
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('draggable', async () => {
        const [instance, element] = mount(DraggableTable);

        const [tr1, tr2] = element.querySelectorAll<HTMLElement>('tbody tr');
        const {top} = element.getBoundingClientRect();
        dispatchEvent(tr2, 'dragstart');
        dispatchEvent(tr1, 'dragover', {
            clientY: top + 41 + 20
        });
        dispatchEvent(tr2, 'dragend');

        await wait(500);
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('should not check all even though the keys is equal but the checkedKeys have some keys that not in rowKeys', async () => {
        class Demo extends Component<{data: any[], checkedKeys: number[]}> {
            static template = `
                const {Table, TableColumn} = this;
                <Table v-model:checkedKeys="checkedKeys"
                    data={this.get('data')}
                    rowKey={i => i.a}
                    ref="table"
                    keepStatus={true}
                >
                    <TableColumn key="a" />
                </Table>
            `;
            static defaults() {
                return {
                    data: [
                        {a: 1},
                        {a: 2},
                    ],
                    checkedKeys: [3, 4],
                };
            }
            private Table = Table;
            private TableColumn = TableColumn;
        }

        const [instance, element] = mount(Demo);
        const table = instance.refs.table as Table;
        const checked = (table as any).checked as ReturnType<typeof useChecked>;

        expect(checked.getAllCheckedStatus()).to.eql(AllCheckedStatus.None);

        table.checkAll();
        expect(instance.get('checkedKeys')).to.eql([3, 4, 1, 2]);

        table.uncheckAll();
        expect(instance.get('checkedKeys')).to.eql([3, 4]);

        instance.set('checkedKeys', [3, 4, 1]);
        await wait();
        expect(checked.getAllCheckedStatus()).to.eql(AllCheckedStatus.Indeterminate);

        table.checkAll();
        expect(instance.get('checkedKeys')).to.eql([3, 4, 1, 2]);

        // destroy one row
        instance.set('data', [{a: 1}]);
        await wait();
        expect(instance.get('checkedKeys')).to.eql([3, 4, 1, 2]);
    });

    it('should update children in TableCell', async() => {
        const update = sinon.spy();
        class Test extends Component {
            static template = `<div>test</div>`;
            beforeUpdate() {
                update();
            }
        }
        class Demo extends Component<{data: any[], checkedKeys: number[]}> {
            static template = `
                const {Table, TableColumn, Test} = this;
                <Table data={this.get('data')} ref="table">
                    <TableColumn key="a">
                        <b:template>
                            <Test />
                        </b:template>
                    </TableColumn>
                </Table>
            `;
            static defaults() {
                return {
                    data: [
                        {a: 1},
                        {a: 2},
                    ],
                };
            }
            private Table = Table;
            private TableColumn = TableColumn;
            private Test = Test;
        }
       
        const [instance, element] = mount(Demo);
        element.querySelector<HTMLElement>('tbody tr')!.click();

        await wait();
        expect(update.callCount).to.eql(1);
    });

    it('pagination', async () => {
        const [instance, element] = mount(PaginationDemo);
        const table = instance.refs.table as Table;
        const pagination = table.pagination.paginationRef;
        const spy = sinon.spy();

        table.on('page', spy);

        // check all
        table.checkAll(); 
        expect(table.getCheckedData()).to.have.length(10);

        // next page
        table.set('pagination', { value: 2 });
        (table as any).trigger('$receive:pagination');
        await wait();
        expect(table.getCheckedData()).to.have.length(0);

        // check all again
        table.checkAll(); 
        expect(table.getCheckedData()).to.have.length(10);

        // change limit
        table.set('pagination', { value: 1, limit: 20 });
        (table as any).trigger('$receive:pagination');
        await wait();
        expect(table.getCheckedData()).to.have.length(10);

        // check all again
        table.checkAll(); 
        expect(table.getCheckedData()).to.have.length(20);

        // change limit from pagination
        pagination.value!.set('limit', 10);
        await wait();
        expect(table.getCheckedData()).to.have.length(10);
        // FIXME: Pagination component should no trigger change event multiple times
        // when we set value and limit at the same time
        expect(spy.callCount).to.eql(4);
        expect(spy.lastCall.lastArg).to.eql({value: 1, limit: 10});

        // change page from pagination
        await wait();
        pagination.value!.changePage(2);
        expect(table.getCheckedData()).to.have.length(0);
        expect(spy.callCount).to.eql(5);
        expect(spy.lastCall.lastArg).to.eql({value: 2, limit: 10});
    });

    it('fixHeader with Affix header scroll sync', async () => {
        interface Props {
            data: any[]
            fixHeader: boolean | number
            virtual: boolean
            stickScrollbar: boolean | number
        }
        
        class Demo extends Component<Props> {
            static template = `
                const {Table, TableColumn} = this;
                const {data, fixHeader, virtual, stickScrollbar} = this.get();
                <Table data={data} fixHeader={fixHeader} virtual={virtual} stickScrollbar={stickScrollbar} ref="table">
                    <TableColumn fixed="left" key="name" title="Name" width="200" />
                    <TableColumn key="column1" title="Column1" width="300" />
                    <TableColumn key="column2" title="Column2" width="300" />
                    <TableColumn key="column3" title="Column3" width="300" />
                    <TableColumn fixed="right" key="action" title="Action" width="200" />
                </Table>
            `;
            
            static defaults() {
                return {
                    data: Array.from({length: 10}, (_, i) => ({
                        name: `Name ${i}`,
                        column1: `Column1 ${i}`,
                        column2: `Column2 ${i}`,
                        column3: `Column3 ${i}`,
                        action: `Action ${i}`
                    })),
                    fixHeader: 200,
                    virtual: false,
                    stickScrollbar: false
                };
            }
            
            private Table = Table;
            private TableColumn = TableColumn;
        }

        const [instance, element] = mount(Demo);
        
        // Test 1: fixHeader only - scroll left 50px
        await wait();
        const scrollContainer = element.querySelector('.k-table-wrapper') as HTMLElement;
        scrollContainer.scrollLeft = 50;
        await wait(100);
        const affixWrapper1 = element.querySelector('.k-table-affix-header .k-affix-wrapper') as HTMLElement;
        expect(affixWrapper1.scrollLeft).to.eql(50);
        
        // Test 2: fixHeader + virtual - scroll left 50px more (total 100px)
        instance.set('virtual', true);
        await wait();
        scrollContainer.scrollLeft = 100;
        await wait(100);
        
        const affixWrapper2 = element.querySelector('.k-table-affix-header .k-affix-wrapper') as HTMLElement;
        expect(affixWrapper2.scrollLeft).to.eql(100);
        
        // Test 3: stickScrollbar + fixHeader - scroll right 50px (back to 50px)
        instance.set('stickScrollbar', true);
        await wait();
        scrollContainer.scrollLeft = 50;
        await wait(100);
        
        const affixWrapper3 = element.querySelector('.k-table-affix-header .k-affix-wrapper') as HTMLElement;
        expect(affixWrapper3.scrollLeft).to.eql(50);
    });
});
