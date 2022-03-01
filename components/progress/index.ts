import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {useStatus} from './useStatus';
import {useColor} from './useColor';

type Sizes = 'default' | 'small' | 'mini';
type Type = 'bar' | 'circle';
type Status = 'active' | 'success' | 'error' | 'normal' | 'warning';
type Percent = number | string;
type Color = {
    percent: Percent,
    color: string 
};

export interface ProgressProps {
    type?: Type,
    percent?: Percent,
    size?: Sizes,
    showOuterText?: boolean,
    showInnerText?: boolean,
    status?: Status,
    strokeWidth?: number,
    color?: string | Color[] | ((percent: number) => string)
};

const typeDefs: Required<TypeDefs<ProgressProps>>  = {
    type: ['bar', 'circle'],
    percent: [Number, String],
    size: ['default', 'small', 'mini'],
    showOuterText: Boolean,
    showInnerText: Boolean,
    status: ['active', 'success', 'error', 'normal', 'warning'],
    strokeWidth: Number,
    color: [String, Array, Function]
};

const defaults = (): Partial<ProgressProps> => ({
    type: 'bar',
    percent: 0, // 0~100
    size: 'default',
    showOuterText: true,
    status: 'active',
    strokeWidth: 4,
});

export class Progress extends Component<ProgressProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public status = useStatus();
    public color = useColor();

    init() {
        this.on('$receive:percent', percent => {
            this.set('percent', fixPercent(percent!));
        }); 
    }
}

function fixPercent(percent: number | string): number {
    let _percent = Number(percent);
    if (_percent > 100) _percent = 100;
    if (_percent < 0) _percent = 0;
    return _percent;
}
