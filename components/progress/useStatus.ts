import {useInstance} from 'intact';
import type {Progress, ProgressProps} from './index';
import {useState} from '../../hooks/useState';
import {useReceive} from '../../hooks/useReceive';

export function useStatus() {
    const instance = useInstance() as Progress;
    const status = useState<NonNullable<ProgressProps['status']>>('active');

    function setStatus() {
        const {status: _status, percent} = instance.get();
        if (Number(percent) === 100 && _status !== 'error')  {
            status.set('success');
        } else {
            status.set(_status!);
        }
    }

    useReceive<Progress>(['status', 'percent'], setStatus);

    return status;
}
