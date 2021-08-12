import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {useState} from '../../hooks/useState';

function fixPercent(percent:number | string) : number  {
    let _percent = Number(percent);
    if (_percent > 100) _percent = 100;
    if (_percent < 0) _percent = 0;
    return _percent;
}

type Sizes = 'default' | 'small' | 'mini';
type Type = 'bar' | 'circle';
type Status = 'active' | 'success' | 'error' | 'normal' | 'warning';

export interface ProgressProps {
    type?: Type,
    percent?: number | string,
    size?: Sizes,
    showOuterText?: boolean,
    showInnerText?: boolean,
    status?: Status,
    strokeWidth?: number,
};

const typeDefs: Required<TypeDefs<ProgressProps>>  = {
    type: ['bar', 'circle'],
    percent: [Number, String],
    size: ['default', 'small', 'mini'],
    showOuterText: Boolean,
    showInnerText: Boolean,
    status: ['active', 'success', 'error', 'normal', 'warning'],
    strokeWidth: Number,
};

const defaults = (): Partial<ProgressProps> => ({
    type: 'bar',
    percent: 0, // 0~100
    size: 'default',
    showOuterText: true,
    showInnerText: false,
    status: 'active',
    strokeWidth: 4,
});

export class Progress<T extends ProgressProps = ProgressProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public status = useStatus(this);
}

function useStatus (instance: Progress) {
    const status = useState<Required<ProgressProps['status']>>('active');

    instance.on('$receive:status', (v) => {
        status.set(getStatus(instance));
    }); 

    instance.on('$receive:percent', (percent: number | string) => {
        instance.set('percent', fixPercent(percent));
        status.set(getStatus(instance));
    }); 

    return status;
}

function getStatus (instance: Progress) {
    let {status, percent} = instance.get();
    if (Number(percent) === 100 && status !== 'error')  {
        return 'success'
    }
    return status;
}






