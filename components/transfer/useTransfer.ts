import {useInstance} from 'intact';
import {useState, watchState} from '../../hooks/useState';
import {isEqualArray} from '../utils';
import {Transfer} from './index';
import {isFunction} from 'intact-shared';

export function useTransfer() {
    const instance = useInstance() as Transfer;
    const rightData = useState<any[]>([], isEqualArray);

    watchState(rightData, v => {
        const {keyName} = instance.get();
        instance.set('value', v.map(item => item[keyName!]));
    });

    function enableAdd() {
        const {enableAdd, leftCheckedKeys} = instance.get();
        if (isFunction(enableAdd)) {
            return enableAdd();
        }
        return leftCheckedKeys!.length;
    }

    function enableRemove() {
        const {enableRemove, rightCheckedKeys} = instance.get();
        if (isFunction(enableRemove)) {
            return enableRemove();
        }
        return rightCheckedKeys!.length;
    }

    function add() {
        const {data, leftCheckedKeys, keyName} = instance.get();
        const _rightData = rightData.value.concat(data!.filter(item => {
            return ~leftCheckedKeys!.indexOf(item[keyName as 'key']);
        }));

        rightData.set(_rightData);
        instance.set('leftCheckedKeys', []);

        instance.trigger('add');
    }

    function remove() {
        const {rightCheckedKeys, keyName} = instance.get();
        const _rightData = rightData.value!.filter(item => {
            return !~rightCheckedKeys!.indexOf(item[keyName as 'key'])
        });

        rightData.set(_rightData);
        instance.set('rightCheckedKeys', []);

        instance.trigger('remove');
    }

    return {
        rightData,
        enableAdd,
        enableRemove,
        add,
        remove
    };
}
