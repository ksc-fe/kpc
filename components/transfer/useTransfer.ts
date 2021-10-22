import {useInstance} from 'intact';
import {Transfer} from './index';

export function useTransfer() {
    const instance = useInstance() as Transfer;

    function enableAdd() {
        const {enableAdd: _enableAdd} = instance.get();
        if(typeof _enableAdd === 'function') {
            return _enableAdd();
        }
        return instance.get('leftCheckedKeys').length;
    }

    function enableRemove() {
        const {enableRemove: _enableRemove} = instance.get();
        if(typeof _enableRemove === 'function') {
            return _enableRemove();
        }
        return instance.get('rightCheckedKeys').length;
    }

    function add() {
        const {value, leftCheckedKeys} = instance.get();
        const selectedKeys = value!.concat(leftCheckedKeys);
        instance.set({
            leftCheckedKeys: [],
            value: selectedKeys
        });

        instance.trigger('add');
    }

    function remove() {
        const {value, rightCheckedKeys} = instance.get();
        const selectedKeys = value!.filter(item => {
            return !~rightCheckedKeys.indexOf(item)
        })
        instance.set({
            rightCheckedKeys: [],
            value: selectedKeys
        });

        instance.trigger('remove');
    }

    return {
        enableAdd,
        enableRemove,
        add,
        remove
    };
}