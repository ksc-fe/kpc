import BasicDemo from '~/components/transfer/demos/basic';
import LabelDemo from '~/components/transfer/demos/label';
import PaginationDemo from '~/components/transfer/demos/pagination';
import {mount, unmount, dispatchEvent, wait} from '../../test/utils';
import type {Transfer} from './';

describe('Transfer', () => {
    afterEach(() => unmount());

    it('should only fix leftChecked when data changed', async () => {
        const [instance, element] = mount(BasicDemo);

        const transfer = instance.refs.__test as Transfer;
        const checkAll = element.querySelector('.k-checkbox') as HTMLElement;
        checkAll.click();
        await wait();
        let data = [{label: '1', key: 'a1'}, {label: '2', key: 'a2'}];
        instance.set('data', data);
        await wait();
        expect((transfer as any).check.isCheckAll('left')).to.be.false;
        expect(transfer.get('leftCheckedKeys')).to.eql([]);
        expect(transfer.get('rightCheckedKeys')).to.eql([]);
        expect(instance.get('value')!.length).to.eql(2);

        // keep the checked item when the key in the new data
        checkAll.click();
        await wait();
        data = [{label: '1', key: 'a1'}, {label: '3', key: 'a3'}];
        instance.set('data', data);
        await wait();
        expect(transfer.get('leftCheckedKeys')).to.eql(['a1']);

        instance.set('data', []);
        await wait();
        expect(transfer.get('leftCheckedKeys')).to.eql([]);
    });

    it('add and remove', async () => {
        const [instance, element] = mount(BasicDemo);

        const leftFirst = element.querySelector('.k-transfer-list .k-checkbox') as HTMLElement;
        leftFirst.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        const [remove, add] = element.querySelectorAll('.k-btn') as NodeListOf<HTMLElement>;
        add.click();
        await wait(500);
        expect(element.outerHTML).to.matchSnapshot();
        const rightFirst = element.querySelector('.k-transfer-panel:nth-child(3) .k-transfer-list .k-checkbox') as HTMLElement;
        rightFirst.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        remove.click();
        await wait(500);
        expect(element.outerHTML).to.matchSnapshot();
    });

    it('checkAll and uncheckAll', () => {
        const [instance, element] = mount(BasicDemo);

        const tree = instance.refs.__test as Transfer;
        const [leftCheckAll, rightCheckAll] = element.querySelectorAll('.k-transfer-title .k-checkbox') as NodeListOf<HTMLElement>;

        leftCheckAll.click();
        expect(tree.get('leftCheckedKeys')).to.eql([2, 4]);
        rightCheckAll.click();
        expect(tree.get('rightCheckedKeys')).to.eql([0]);
        leftCheckAll.click();
        expect(tree.get('leftCheckedKeys')).to.eql([]);
        rightCheckAll.click();
        expect(tree.get('rightCheckedKeys')).to.eql([]);
    });

    it('check with shift key', async () => {
        const [instance, element] = mount(BasicDemo);

        const tree = instance.refs.__test as Transfer;
        const data = instance.get('data');
        instance.set('value', [data[1].key] as number[]);
        await wait();
        const [first, second, last] = element.querySelectorAll('.k-transfer-list .k-transfer-item:not(.k-disabled) input') as NodeListOf<HTMLElement>;

        first.click();
        dispatchEvent(last, 'click', {shiftKey: true});
        expect(tree.get('leftCheckedKeys')).to.eql([0, 2, 4]);

        dispatchEvent(second, 'click', {shiftKey: true});
        expect(tree.get('leftCheckedKeys')).to.eql([0, 2]);

        dispatchEvent(last, 'click', {shiftKey: true});
        expect(tree.get('leftCheckedKeys')).to.eql([0, 2, 4]);

        first.click();
        dispatchEvent(last, 'click', {shiftKey: true});
        expect(tree.get('leftCheckedKeys')).to.eql([]);

        dispatchEvent(second, 'click', {shiftKey: true});
        expect(tree.get('leftCheckedKeys')).to.eql([4]);

        dispatchEvent(last, 'click', {shiftKey: true});
        expect(tree.get('leftCheckedKeys')).to.eql([]);
    });

    it('filter', async function() {
        this.timeout(0);
        const [instance, element] = mount(LabelDemo);
        
        const transfer = instance.refs.__test as Transfer;
        transfer.set('leftKeywords', '0');
        await wait(500);
        expect(element.innerHTML).to.matchSnapshot();

        const checkAll = element.querySelector('.k-transfer-title .k-checkbox') as HTMLElement;
        checkAll.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        transfer.set('leftKeywords', '');
        await wait(500);
        expect(element.innerHTML).to.matchSnapshot();

        checkAll.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        transfer.set('leftKeywords', '0');
        await wait();
        transfer.set('leftKeywords', '');
        await wait(500);
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('pagination', async function() {
        this.timeout(0);
        const [instance, element] = mount(PaginationDemo as any);
        await wait();
        const transfer = instance.refs.__test as Transfer;
        
        // 快照：初始状态（第1页）
        expect(element.outerHTML).to.matchSnapshot();
        // 测试1: 分页器存在
        const pagination = element.querySelector('.k-transfer-pagination-wrapper .k-pagination');
        expect(pagination).to.be.ok;
        // 测试2: 第一页显示的数据（默认 limit=10，显示前10条）
        const leftItems = element.querySelectorAll('.k-transfer-panel:first-child .k-transfer-item');
        expect(leftItems.length).to.eql(10);
        // 验证显示的是前10条数据
        const firstItem = leftItems[0].querySelector('.k-checkbox') as HTMLElement;
        expect(firstItem.textContent).to.include('主机名1');
        // 测试3: 点击下一页
        const nextButton = element.querySelector('.k-transfer-pagination-wrapper .k-pagination .k-pagination-next') as HTMLElement;
        if (nextButton && !nextButton.classList.contains('k-disabled')) {
            nextButton.click();
            await wait(500);
            // 快照：第2页
            expect(element.outerHTML).to.matchSnapshot();
            // 验证显示的是第11-20条数据
            const leftItemsPage2 = element.querySelectorAll('.k-transfer-panel:first-child .k-transfer-item');
            expect(leftItemsPage2.length).to.eql(10);
            const firstItemPage2 = leftItemsPage2[0].querySelector('.k-checkbox') as HTMLElement;
            expect(firstItemPage2.textContent).to.include('主机名11');
        }
        // 测试4: 设置关键词进行筛选，验证页码重置为1
        // 先翻到第2页
        const nextButton2 = element.querySelector('.k-transfer-pagination-wrapper .k-pagination .k-pagination-next') as HTMLElement;
        if (nextButton2 && !nextButton2.classList.contains('k-disabled')) {
            nextButton2.click();
            await wait(500);
        }
        // 设置关键词，应该重置到第1页
        transfer.set('leftKeywords', '1');
        await wait(500);
        // 快照：筛选后（第1页）
        expect(element.outerHTML).to.matchSnapshot();
        // 验证筛选后的数据（应该显示第1页的筛选结果）
        const filteredItems = element.querySelectorAll('.k-transfer-panel:first-child .k-transfer-item');
        // 筛选包含'1'的数据，应该少于或等于10条
        expect(filteredItems.length).to.be.at.most(10);
        // 验证所有显示的数据都包含'1'
        filteredItems.forEach((item) => {
            const text = item.textContent || '';
            expect(text).to.match(/主机名\d*1\d*/);
        });
        // 测试5: 清除筛选后恢复分页
        transfer.set('leftKeywords', '');
        await wait(500);
        // 快照：清除筛选后（恢复第1页）
        expect(element.outerHTML).to.matchSnapshot();
        const restoredItems = element.querySelectorAll('.k-transfer-panel:first-child .k-transfer-item');
        expect(restoredItems.length).to.eql(10);
    });

    it('pagination with filter', async function() {
        this.timeout(0);
        const [instance, element] = mount(PaginationDemo as any);
        await wait();
        const transfer = instance.refs.__test as Transfer;
        
        // 测试筛选后分页数据立即更新
        transfer.set('leftKeywords', '2');
        await wait(500);
        // 快照：筛选后（第1页）
        expect(element.outerHTML).to.matchSnapshot();
        // 验证筛选后的数据立即显示
        const filteredItems = element.querySelectorAll('.k-transfer-panel:first-child .k-transfer-item');
        // 所有显示的数据应该包含'2'
        filteredItems.forEach((item) => {
            const text = item.textContent || '';
            expect(text).to.match(/主机名\d*2\d*/);
        });
        
        // 测试筛选后切换页面
        const nextButton = element.querySelector('.k-transfer-pagination-wrapper .k-pagination .k-pagination-next') as HTMLElement;
        if (nextButton && !nextButton.classList.contains('k-disabled')) {
            nextButton.click();
            await wait(500);
            // 快照：筛选后第2页
            expect(element.outerHTML).to.matchSnapshot();
            // 验证第二页的数据也包含'2'
            const page2Items = element.querySelectorAll('.k-transfer-panel:first-child .k-transfer-item');
            page2Items.forEach((item) => {
                const text = item.textContent || '';
                expect(text).to.match(/主机名\d*2\d*/);
            });
        }
        // 清除筛选
        transfer.set('leftKeywords', '');
        await wait(500);
        // 快照：清除筛选后（恢复第1页）
        expect(element.outerHTML).to.matchSnapshot();
        // 验证清除筛选后显示所有数据的第一页
        const restoredItems = element.querySelectorAll('.k-transfer-panel:first-child .k-transfer-item');
        expect(restoredItems.length).to.eql(10);
    });

    it('pagination with checkbox selection', async function() {
        this.timeout(0);
        const [instance, element] = mount(PaginationDemo as any);
        await wait();
        const transfer = instance.refs.__test as Transfer;
        
        // 测试1: 全选基于全部数据
        const checkAll = element.querySelector('.k-transfer-title .k-checkbox') as HTMLElement;
        checkAll.click();
        await wait();
        // 快照：全选后（第1页）
        expect(element.outerHTML).to.matchSnapshot();
        const leftCheckedKeys = transfer.get('leftCheckedKeys') as number[];
        expect(leftCheckedKeys.length).to.eql(100);
        
        // 测试2: 切换页面时保持选中状态
        const nextButton = element.querySelector('.k-transfer-pagination-wrapper .k-pagination .k-pagination-next') as HTMLElement;
        if (nextButton && !nextButton.classList.contains('k-disabled')) {
            nextButton.click();
            await wait(500);
            // 快照：全选后切换到第2页（选中状态保持）
            expect(element.outerHTML).to.matchSnapshot();
            // 切换到第2页后，选中状态应该保持
            const leftCheckedKeysAfterPageChange = transfer.get('leftCheckedKeys') as number[];
            expect(leftCheckedKeysAfterPageChange.length).to.eql(100);
            
            // 验证第2页的checkbox状态（应该都是选中的）
            const page2Items = element.querySelectorAll('.k-transfer-panel:first-child .k-transfer-item');
            page2Items.forEach((item) => {
                const checkbox = item.querySelector('input[type="checkbox"]') as HTMLInputElement;
                expect(checkbox.checked).to.be.true;
            });
        }
        
        // 测试3: 取消全选
        checkAll.click();
        await wait();
        // 快照：取消全选后
        expect(element.outerHTML).to.matchSnapshot();
        const leftCheckedKeysAfterUncheck = transfer.get('leftCheckedKeys') as number[];
        expect(leftCheckedKeysAfterUncheck.length).to.eql(0);
    });
});
