import BasicDemo from '~/components/transfer/demos/basic';
import LabelDemo from '~/components/transfer/demos/label';
import {mount, unmount, dispatchEvent} from 'test/utils';

describe('Transfer', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('should fix value, leftChecked and rightChecked when change data', () => {
        instance = mount(BasicDemo);

        const transfer = instance.refs.__test;
        const checkAll = instance.element.querySelector('.k-checkbox');
        checkAll.click();
        const data = [{label: '1', key: 'a1'}, {label: '2', key: 'a2'}];
        instance.set('data', data);
        expect(transfer._isCheckAll('left')).to.be.false;
        expect(transfer.get('leftChecked')).to.eql([]);
        expect(transfer.get('rightChecked')).to.eql([]);
        expect(instance.get('value')).to.eql([]);

        checkAll.click();
        expect(transfer.get('leftChecked')).to.eql(data);
        instance.set('data', []);
        expect(transfer.get('leftChecked')).to.eql([]);
    });

    it('add and remove', () => {
        instance = mount(BasicDemo);

        const leftFirst = instance.element.querySelector('.k-list .k-checkbox');
        leftFirst.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
        const [remove, add] = instance.element.querySelectorAll('.k-btn');
        add.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
        const rightFirst = instance.element.querySelectorAll('.k-panel')[1].querySelector('.k-list .k-checkbox');
        rightFirst.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
        remove.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
    });

    it('checkAll and uncheckAll', () => {
        instance = mount(BasicDemo);

        const [leftCheckAll, rightCheckAll] = instance.element.querySelectorAll('.k-title .k-checkbox');
        leftCheckAll.click();
        rightCheckAll.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
        leftCheckAll.click();
        rightCheckAll.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
    });

    it('check with shift key', () => {
        instance = mount(BasicDemo);

        const data = instance.get('data');
        instance.set('value', [data[1]]);
        const [first, second, last] = instance.element.querySelectorAll('.k-list .k-item:not(.k-disabled) input');
        first.click();
        dispatchEvent(last, 'click', {shiftKey: true});
        expect(instance.element.innerHTML).to.matchSnapshot();
        dispatchEvent(second, 'click', {shiftKey: true});
        expect(instance.element.innerHTML).to.matchSnapshot();
        dispatchEvent(last, 'click', {shiftKey: true});
        expect(instance.element.innerHTML).to.matchSnapshot();

        first.click();
        dispatchEvent(last, 'click', {shiftKey: true});
        expect(instance.element.innerHTML).to.matchSnapshot();
        dispatchEvent(second, 'click', {shiftKey: true});
        expect(instance.element.innerHTML).to.matchSnapshot();
        dispatchEvent(last, 'click', {shiftKey: true});
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('filter', () => {
        instance = mount(LabelDemo);
        
        const transfer = instance.refs.__test;
        transfer.set('leftKeywords', '0');
        expect(instance.element.innerHTML).to.matchSnapshot();
        const checkAll = instance.element.querySelector('.k-title .k-checkbox');
        checkAll.click();
        expect(instance.element.innerHTML).to.matchSnapshot();
        transfer.set('leftKeywords', '');
        expect(instance.element.innerHTML).to.matchSnapshot();
        checkAll.click();
        expect(instance.element.innerHTML).to.matchSnapshot();
    });
});
