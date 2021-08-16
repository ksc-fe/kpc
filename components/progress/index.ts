import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {useStatus} from './useStatus';

function fixPercent(percent: number | string): number  {
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

    public status = useStatus();

    init() {
        this.on('$receive:percent', (percent: number | string) => {
            this.set('percent', fixPercent(percent));
        }); 
    }
}
