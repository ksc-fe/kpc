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
import {Table, TableColumn} from 'kpc/components/table';
import DraggableTable from '~/components/table/demos/draggable';
import MergeCellDemo from '~/components/table/demos/mergeCell';
import ShowIndeterminateDemo from '~/components/table/demos/showIndeterminate';
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import {Icon} from 'kpc/components/icon';
import Vue from 'vue';

describe('Table', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('check & uncheck', () => {
        instance = mount(BasicDemo);
        const table = instance.refs.__test;

        // bind $change:checked event
        const spy = sinon.spy((c, v) => console.log(v));
        table.on('$change:checked', spy);

        // click row
        const [tr1, tr2] = instance.element.querySelectorAll('.k-tbody tr');
        tr1.click();
        expect(table.get('checkedKeys')).deep.eql([0]);
        tr2.click();
        expect(table.get('checkedKeys')).deep.eql([0, 1]);
        expect(table.isCheckAll()).eql(true);

        tr1.click();
        expect(table.get('checkedKeys')).deep.eql([1]);
        expect(table.isCheckAll()).eql(false);

        const all = instance.element.querySelector('.k-checkbox');
        all.click();
        expect(table.isCheckAll()).eql(true);
        all.click();
        expect(table.isCheckAll()).eql(false);
        expect(table.get('checkedKeys')).deep.eql([]);

        expect(spy.callCount).to.eql(5);
        // clear data of table should only trigger $change:checked event once, #407
        all.click();
        table.set('data', []);
        expect(spy.callCount).to.eql(7);
    });

    it('click row of radio table', () => {
        instance = mount(CheckTypeDemo);
        const table = instance.refs.__radio;

        // click row
        const [tr1, tr2] = table.element.querySelectorAll('.k-tbody tr');
        tr1.click();
        expect(table.get('checkedKey')).eql(0);
        tr2.click();
        expect(table.get('checkedKey')).eql(1);
    });

    it('getCheckedData', () => {
        instance = mount(CheckTypeDemo);
        const {__checkbox: checkboxTable, __radio: radioTable} = instance.refs;

        const [tr1, tr2] = checkboxTable.element.querySelectorAll('.k-tbody tr');
        tr1.click();
        expect(JSON.stringify(checkboxTable.getCheckedData())).to.matchSnapshot();
        tr2.click();
        expect(JSON.stringify(checkboxTable.getCheckedData())).to.matchSnapshot();

        const [tr11, tr22] = radioTable.element.querySelectorAll('.k-tbody tr');
        tr11.click();
        expect(JSON.stringify(radioTable.getCheckedData())).to.matchSnapshot();
        tr22.click();
        expect(JSON.stringify(radioTable.getCheckedData())).to.matchSnapshot();
    });

    it('expand & shrink', () => {
        instance = mount(ExpandDemo);
        const {__test1: rowExpandableTable, __test2: rowUnExpandableTable} = instance.refs;

        const [tr] = rowExpandableTable.element.querySelectorAll('.k-tbody tr');
        tr.click();
        expect(rowExpandableTable.element.outerHTML).to.matchSnapshot();
        tr.click();
        expect(rowExpandableTable.element.outerHTML).to.matchSnapshot();

        const [tr1] = rowUnExpandableTable.element.querySelectorAll('.k-tbody tr');
        tr1.click();
        expect(rowUnExpandableTable.element.outerHTML).to.matchSnapshot();

        const icon = tr1.querySelector('.icon');
        icon.click();
        expect(rowUnExpandableTable.element.outerHTML).to.matchSnapshot();
        icon.click();
        expect(rowUnExpandableTable.element.outerHTML).to.matchSnapshot();
    });

    it('merge cells', () => {
        instance = mount(MergeCellDemo);

        const {__test1: mergeCheckboxTable, __test2: mergeRadioTable} = instance.refs;
        const [, , tr1, tr2, tr3] = mergeCheckboxTable.element.querySelectorAll('.k-tbody tr');
        expect(mergeCheckboxTable.get('checkedKeys')).deep.eql([3]);
        expect(mergeCheckboxTable.element.outerHTML).to.matchSnapshot();
        tr1.click();
        expect(mergeCheckboxTable.get('checkedKeys')).deep.eql([3, 2]);
        expect(mergeCheckboxTable.element.outerHTML).to.matchSnapshot();
        tr2.click();
        expect(mergeCheckboxTable.get('checkedKeys')).deep.eql([2]);
        expect(mergeCheckboxTable.element.outerHTML).to.matchSnapshot();
        tr2.click();
        expect(mergeCheckboxTable.get('checkedKeys')).deep.eql([2, 3]);
        expect(mergeCheckboxTable.element.outerHTML).to.matchSnapshot();
        tr3.click();
        expect(mergeCheckboxTable.get('checkedKeys')).deep.eql([2, 3, 4]);
        expect(mergeCheckboxTable.element.outerHTML).to.matchSnapshot();


        const [ , tr11,  , tr22] = mergeRadioTable.element.querySelectorAll('.k-tbody tr');
        expect(mergeRadioTable.get('checkedKey')).deep.eql([0, 1]);
        expect(mergeRadioTable.element.outerHTML).to.matchSnapshot();
        tr22.click();
        expect(mergeRadioTable.get('checkedKey')).deep.eql([2, 3, 4]);
        expect(mergeRadioTable.element.outerHTML).to.matchSnapshot();
        tr11.click();
        expect(mergeRadioTable.get('checkedKey')).deep.eql([0, 1]);
        expect(mergeRadioTable.element.outerHTML).to.matchSnapshot();
    });

    it('sort', () => {
        instance = mount(SortDemo);

        const [, th1, th2] = instance.element.querySelectorAll('.k-thead th');
        th1.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
        th2.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
    });

    it('group', () => {
        instance = mount(GroupDemo);

        const {__test1, __test2} = instance.refs;

        const icon = __test1.element.querySelector('.k-arrow');
        dispatchEvent(icon, 'click');
        const dropdown = getElement('.k-table-dropdown');
        expect(dropdown.innerHTML).to.matchSnapshot();

        const item = dropdown.querySelector('.k-item:nth-child(2)');
        item.click();
        expect(__test1.element.outerHTML).to.matchSnapshot();

        const icon2 = __test2.element.querySelector('.k-arrow');
        dispatchEvent(icon2, 'click');
        const dropdown2 = getElement('.k-table-dropdown');
        expect(dropdown.innerHTML).to.matchSnapshot();

        const [item1, item2] = dropdown2.querySelectorAll('.k-item .k-checkbox');
        item1.click();
        expect(__test2.element.outerHTML).to.matchSnapshot();
        item2.click();
        expect(__test2.element.outerHTML).to.matchSnapshot();
    });

    it('fix columns', async () => {
        instance = mount(FixColumnDemo);

        const table = instance.refs.__test;

        instance.element.style.width = "1000px";
        table._onWindowResize();

        // should add k-scroll-middle classname
        table.scroll.scrollLeft = 100;
        await wait(100);
        expect(table.element.outerHTML).to.matchSnapshot();

        // should add k-scroll-right classname
        table.scroll.scrollLeft = 1000;
        await wait(100);
        expect(table.element.outerHTML).to.matchSnapshot();

        // scroll vertically
        table.scroll.scrollTop = 10;
        await wait(100);
        expect(table.element.querySelector('.k-fixed-left .k-tbody').scrollTop).to.eql(10);
        expect(table.element.querySelector('.k-fixed-right .k-tbody').scrollTop).to.eql(10);

        // should change max-height if we set fixHeader to true
        table.set('fixHeader', true);
        expect(table.element.outerHTML).to.matchSnapshot();
    });

    it('resize', () => {
        instance = mount(BasicDemo);

        const table = instance.refs.__test;
        const resize = table.element.querySelector('.k-resize');
        dispatchEvent(resize, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 1});
        dispatchEvent(document, 'mouseup');
        // ignore width property in table
        const [head, body] = table.element.querySelectorAll('table');
        expect(head.innerHTML).to.matchSnapshot();
        expect(body.innerHTML).to.matchSnapshot();
    });

    it('store width on resizing', () => {
        instance = mount(ResizableDemo);

        const table = instance.element.querySelector('.k-table');
        const resize = table.querySelector('.k-resize');
        dispatchEvent(resize, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 1});
        dispatchEvent(document, 'mouseup');

        // rerender
        unmount(instance);
        instance = mount(ResizableDemo);
        const _table = instance.element.querySelector('.k-table');
        expect(_table.innerHTML).to.matchSnapshot();
        localStorage.removeItem('resizableTable');
    });

    it('resize column that its previous column is hidden', () => {
        instance = mount(ResizableDemo, null, ResizableDemoData);

        const table = instance.element.querySelector('.k-table');
        const [, , resize] = table.querySelectorAll('.k-resize');
        dispatchEvent(resize, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 1});
        dispatchEvent(document, 'mouseup');

        expect(table.innerHTML).to.matchSnapshot();
    });

    it('should set the width of table equal to container after resizing and expanding container', async () => {
        instance = mount(BasicDemo);

        const table = instance.element.querySelector('.k-table');
        const resize = table.querySelector('.k-resize');
        dispatchEvent(resize, 'mousedown', {which: 1, clientX: 0});
        dispatchEvent(document, 'mousemove', {clientX: 1});
        dispatchEvent(document, 'mouseup');

        const container = instance.element.parentNode;
        container.style.width = '1000px';
        await wait(200);
        expect(table.innerHTML).to.matchSnapshot();
    });

    it('loading', () => {
        instance = mount(LoadingDemo);

        instance.set('loading', true);
        expect(instance.element.innerHTML).to.matchSnapshot();
        instance.set('loading', false);
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('export', async function() {
        this.enableTimeouts(false);
        instance = mount(ExportDemo);

        const content = await instance.refs.table.exportTable();
        expect(content.replace(/\r\n|\r/g, '\n')).to.matchSnapshot();
        const content1 = await instance.refs.table.exportTable([
            {a: '1', b: 2, c: 3}
        ]);
        expect(content1.replace(/\r\n|\r/g, '\n')).to.matchSnapshot();
    });

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
                expect(el.scrollTop).to.eql(height * rows + 1);
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

    it('showIndeterminate', async () => {
        instance = mount(ShowIndeterminateDemo);

        instance.set('showIndeterminate', true);
        expect(instance.element.innerHTML).to.matchSnapshot();
        instance.set('showIndeterminate', false);
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('should expand on table that has fixed columns', () => {
         class Demo extends Intact {
            @Intact.template()
            static template = `
                <Table data={{ self.get('data') }} expandedKeys={{ [0] }}>
                    <TableColumn key="a" fixed="left" />
                    <b:expand>
                        <div>xxxxxx</div>
                    </b:expand>
                </Table>
            `;
            defaults() {
                return {
                    data: [
                        {a: 1},
                        {a: 2},
                    ],
                };
            }
            _init() {
                this.Table = Table;
                this.TableColumn = TableColumn;
            }
        }

        instance = mount(Demo);
        expect(instance.element.innerHTML).to.matchSnapshot();
    });
});
