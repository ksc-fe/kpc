import BasicDemo from '~/components/transfer/demos/basic';
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
});
