import BasicDemo from '~/components/transfer/demos/basic';
import LabelDemo from '~/components/transfer/demos/label';
import {mount, unmount, dispatchEvent, wait} from 'test/utils';
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
        await wait(300);
        expect(element.outerHTML).to.matchSnapshot();
        const rightFirst = element.querySelector('.k-transfer-panel:nth-child(3) .k-transfer-list .k-checkbox') as HTMLElement;
        rightFirst.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        remove.click();
        await wait(300);
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

    it('filter', async () => {
        const [instance, element] = mount(LabelDemo);
        
        const transfer = instance.refs.__test as Transfer;
        transfer.set('leftKeywords', '0');
        await wait(300);
        expect(element.innerHTML).to.matchSnapshot();

        const checkAll = element.querySelector('.k-transfer-title .k-checkbox') as HTMLElement;
        checkAll.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        transfer.set('leftKeywords', '');
        await wait(300);
        expect(element.innerHTML).to.matchSnapshot();

        checkAll.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        transfer.set('leftKeywords', '0');
        await wait();
        transfer.set('leftKeywords', '');
        await wait(300);
        expect(element.innerHTML).to.matchSnapshot();
    });
});
