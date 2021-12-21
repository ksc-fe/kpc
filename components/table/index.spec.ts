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
import {mount, unmount, dispatchEvent, getElement, wait} from 'test/utils';
import Intact from 'intact';
import {Table, TableColumn} from './';
import DraggableTable from '~/components/table/demos/draggable';
import MergeCellDemo from '~/components/table/demos/mergeCell';
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import {Icon} from '../icon';
import Vue from 'vue';
import {useChecked, AllCheckedStatus} from './useChecked';

describe('Table', () => {
    // afterEach(() => unmount());

    it('check & uncheck', async () => {
        const [instance, element] = mount(BasicDemo);
        const table = instance.$lastInput!.children as Table;
        const checked = (table as any).checked as ReturnType<typeof useChecked>;

        // bind $change:checked event
        const spy = sinon.spy((v: number[]) => console.log(v));
        table.on('$change:checkedKeys', spy);

        // click row
        const [tr1, tr2] = element.querySelectorAll<HTMLElement>('tbody tr');
        tr1.click();
        await wait();
        expect(table.get('checkedKeys')).to.eql([0]);
        tr2.click();
        await wait();
        expect(table.get('checkedKeys')).to.eql([0, 1]);
        expect(checked.getAllCheckedStatus()).eql(AllCheckedStatus.All);

        tr1.click();
        await wait();
        expect(table.get('checkedKeys')).to.eql([1]);
        expect(checked.getAllCheckedStatus()).eql(AllCheckedStatus.Indeterminate);

        const all = element.querySelector('.k-checkbox') as HTMLElement;
        all.click();
        await wait();
        expect(checked.getAllCheckedStatus()).eql(AllCheckedStatus.All);
        all.click();
        await wait();
        expect(checked.getAllCheckedStatus()).eql(AllCheckedStatus.None);
        expect(table.get('checkedKeys')).to.eql([]);

        expect(spy.callCount).to.eql(5);
        // clear data of table should only trigger $change:checked event once, #407
        all.click();
        table.set('data', []);
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
        dispatchEvent(icon, 'mouseenter');
        await wait();
        const dropdown = getElement('.k-table-group-dropdown')!;
        expect(dropdown.innerHTML).to.matchSnapshot();

        const item = dropdown.querySelector('.k-dropdown-item:nth-child(2)') as HTMLElement;
        item.click();
        await wait();
        expect(instance.get('group')).to.eql({status: 'active'});
        expect(table1.innerHTML).to.matchSnapshot();

        const icon2 = table2.querySelector('.k-table-group') as HTMLElement;
        dispatchEvent(icon2, 'mouseenter');
        await wait();
        const dropdown2 = getElement('.k-table-group-dropdown')!;
        expect(dropdown2.innerHTML).to.matchSnapshot();

        const [item1, item2] = dropdown2.querySelectorAll<HTMLElement>('.k-checkbox');
        item1.click();
        await wait();
        expect(instance.get('multipleGroup')).to.eql({status: ['active']});
        expect(table2.innerHTML).to.matchSnapshot();
        item2.click();
        await wait();
        expect(instance.get('multipleGroup')).to.eql({status: ['active', 'stopped']});
        expect(table2.innerHTML).to.matchSnapshot();
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
    });

    return;
    it('selectedKeys', () => {
        instance = mount(SelectedKeysDemo);

        const [table1, table2] = instance.element.querySelectorAll('.k-tbody');
        const [tr1, tr2] = table1.querySelectorAll('tr');
        tr1.click();
        expect(table1.innerHTML).to.matchSnapshot();
        tr2.click();
        expect(table1.innerHTML).to.matchSnapshot();
        expect(instance.refs.__test1.getSelectedData()).to.have.lengthOf(1);
        tr2.click();
        expect(table1.innerHTML).to.matchSnapshot();
        expect(instance.refs.__test1.getSelectedData()).to.have.lengthOf(0);

        const [tr21, tr22] = table2.querySelectorAll('tr');
        tr21.click();
        expect(table2.innerHTML).to.matchSnapshot();
        tr22.click();
        expect(table2.innerHTML).to.matchSnapshot();
        expect(instance.refs.__test2.getSelectedData()).to.have.lengthOf(2);
        tr22.click();
        expect(table2.innerHTML).to.matchSnapshot();
        expect(instance.refs.__test2.getSelectedData()).to.have.lengthOf(1);
    });

    it('tooltip', () => {
        instance = mount(TooltipDemo);

        const tr = instance.element.querySelector('tbody tr');
        dispatchEvent(tr, 'mouseenter');
        const content = getElement('.k-tooltip-content');
        expect(content.textContent).to.matchSnapshot();
    });

    it('tree', () => {
        instance = mount(TreeDemo);

        // check all
        const checkbox = instance.element.querySelector('.k-checkbox');
        checkbox.click();
        expect(instance.innerHTML).to.matchSnapshot();

        const arrow = instance.element.querySelector('.k-table-arrow');
        arrow.click();
        expect(instance.innerHTML).to.matchSnapshot();
        arrow.click();
        expect(instance.innerHTML).to.matchSnapshot();
    });

    it('should keep checked status of the disabled row', () => {
        instance = mount(DisabledDemo);

        const checkbox = instance.element.querySelector('.k-checkbox');
        checkbox.click();
        expect(instance.get('checkedKeys')).to.eql(['3', '2', '4']);
        checkbox.click();
        expect(instance.get('checkedKeys')).to.eql(['3']);

        const [, , checkbox2, , checkbox4] = instance.element.querySelectorAll('.k-checkbox input');
        checkbox2.click();
        expect(instance.refs.__test.isCheckAll()).to.be.false;
        checkbox4.click();
        expect(instance.refs.__test.isCheckAll()).to.be.true;
    });

    it('scroll to row', async () => {
        instance = mount(ScrollToRowDemo);

        const table = instance.refs.table;
        const elements = Array.from(instance.element.querySelectorAll('.k-tbody'));
        const tr = instance.element.querySelector('.k-tbody tr');
        const height = tr.offsetHeight;
        const test = async (rows) => {
            await wait(200);
            elements.forEach(el => {
                expect(el.scrollTop).to.eql(height * rows + rows);
            });
        };

        table.scrollToRowByIndex(2);
        await test(2);
        table.scrollToRowByIndex(1);
        await test(1);

        table.scrollToRowByKey('name 3');
        await test(2);
        table.scrollToRowByKey('name 2');
        await test(1);
    });

    it('render a hidden table with minWidth', () => {
        class Demo extends Intact {
            @Intact.template()
            static template = `<div style="display: none;">
                <Table>
                    <TableColumn key="a" minWidth={{ 30 }} />
                </Table>
            </div>`
            _init() {
                this.Table = Table;
                this.TableColumn = TableColumn;
            }
        }

        instance = mount(Demo);
    });

    it('draggable', async () => {
        instance = mount(DraggableTable);

        const [tr1, tr2] = instance.element.querySelectorAll('.k-tbody tr');
        const {top} = instance.element.getBoundingClientRect();
        dispatchEvent(tr2, 'dragstart');
        dispatchEvent(tr1, 'dragover', {
            clientY: top + 41 + 20
        });
        dispatchEvent(tr2, 'dragend');

        await wait(300);
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('should not check all if the checkedKeys have some keys that not in rowKeys', () => {
        class Demo extends Intact {
            @Intact.template()
            static template = `
                <Table v-model:checkedKeys="checkedKeys"
                    data={{ self.get('data') }}
                    rowKey={{ i => i.a }}
                    ref="table"
                    removeCheckedKeyOnRowDestroyed={{ false }}
                >
                    <TableColumn key="a" />
                </Table>
            `;
            defaults() {
                return {
                    data: [
                        {a: 1},
                        {a: 2},
                    ],
                    checkedKeys: [3, 4],
                };
            }
            _init() {
                this.Table = Table;
                this.TableColumn = TableColumn;
            }
        }

        instance = mount(Demo);

        expect(instance.refs.table.isCheckAll()).to.be.false;

        instance.refs.table.checkAll();
        expect(instance.get('checkedKeys')).to.eql([3, 4, 1, 2]);

        instance.refs.table.uncheckAll();
        expect(instance.get('checkedKeys')).to.eql([3, 4]);

        instance.set('checkedKeys', [3, 4, 1]);
        expect(instance.refs.table.isCheckAll()).to.be.false;

        instance.refs.table.checkAll();
        expect(instance.get('checkedKeys')).to.eql([3, 4, 1, 2]);

        // destroy one row
        instance.set('data', [{a: 1}]);
        expect(instance.get('checkedKeys')).to.eql([3, 4, 1, 2]);
    });

    it('should render dropdown in header of fixed table correctly in Vue', async () => {
        const Demo = {
            template: `
                <Table :data="data" style="width: 800px;">
                    <TableColumn key="a" width="300" fixed="left" />
                    <TableColumn key="b" width="300">
                        <template slot="title">
                            <Dropdown trigger="click" :container="dom => dom.parentElement.closest('.k-table')">
                                <Icon class="ion-ios-arrow-down" style="margin-left: 100px;" />
                                <DropdownMenu>
                                    <DropdownItem>1</DropdownItem>
                                    <DropdownItem>2</DropdownItem>
                                    <DropdownItem>3</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </template>
                    </TableColumn>
                    <TableColumn key="c" width="300" fixed="right" />
                </Table>
            `,
            components: {
                Table,
                TableColumn,
                Dropdown,
                DropdownMenu,
                DropdownItem,
                Icon,
            },
            data() {
                return {
                    data: [
                        {a: 1, b: 1, c: 1},
                        {a: 2, b: 2, c: 2},
                    ],
                };
            }
        };
        const container = document.createElement('div');
        document.body.appendChild(container);
        const app = new Vue({
            render: h => h('Demo'),
            components: {
                Demo
            }
        }).$mount(container);

        // should show the first dropdown menu
        app.$el.querySelector('.k-icon').click();
        const dropdownMenu = app.$el.querySelectorAll('.k-dropdown-menu')[0];
        expect(dropdownMenu.style.display).to.eql('');

        app.$destroy();
        document.body.removeChild(app.$el);
    });
});
