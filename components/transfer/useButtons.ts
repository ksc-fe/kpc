import {useInstance, Key} from 'intact';
import {Transfer} from './index';
import type {usePanel} from './usePanel';

export function useButtons(panel: ReturnType<typeof usePanel>) {
    const instance = useInstance() as Transfer;
    const {allLeafKeys, selectedKeys} = panel;

    function add() {
        const {_leftCheckedKeys} = instance.get();
        const leftCheckedKeys = _leftCheckedKeys.filter((item: Key) => {
            return ~allLeafKeys.value.indexOf(item);
        });
        const keys = selectedKeys.value.concat(leftCheckedKeys);
       
        selectedKeys.set(keys);
        instance.set('_leftCheckedKeys', []);

        instance.trigger('add');
    }

    function remove() {
        const {_rightCheckedKeys} = instance.get();
        const rightCheckedKeys = _rightCheckedKeys.filter((item: Key) => {
            return ~allLeafKeys.value.indexOf(item);
        });
        const keys = selectedKeys.value.filter(item => {
            return !~rightCheckedKeys.indexOf(item)
        })
       
        selectedKeys.set(keys);
        instance.set('_rightCheckedKeys', []);

        instance.trigger('remove');
    }

    return {
        add,
        remove
    };
}
