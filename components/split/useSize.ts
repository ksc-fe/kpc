import {useInstance} from 'intact';
import {useState} from '../../hooks/useState';
import {useReceive} from '../../hooks/useReceive';
import type {Split} from './';

export function useSize() {
    const instance = useInstance() as Split;
    const firstSize = useState<string>('auto');
    const lastSize = useState<string>('auto');

    fixSize();
    useReceive<Split>(['firstSize', 'lastSize'], fixSize, true);

    function fixSize() {
        const {firstSize: first, lastSize: last} = instance.get();
        if (first === 'auto' && last === 'auto') {
            firstSize.set('50%');
            lastSize.set(last);
        } else if (first !== 'auto' && last !== 'auto') {
            firstSize.set(first!);
            lastSize.set('auto');
        } else {
            firstSize.set(first!);
            lastSize.set(last!);
        }
    };

    return {firstSize, lastSize};
}
