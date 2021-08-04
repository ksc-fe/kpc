import {Component, TypeDefs, createRef, watch, nextTick, onMounted, RefObject} from 'intact';
import template from './index.vdt';

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
    isOuterText?: boolean,
    isInnerText?: boolean,
    status?: Status,
    strokeWidth?: number,

    _status?: Status
};

const typeDefs: Required<TypeDefs<ProgressProps>>  = {
    type: ['bar', 'circle'],
    percent: [Number, String],
    size: ['default', 'small', 'mini'],
    isOuterText: Boolean,
    isInnerText: Boolean,
    status: ['active', 'success', 'error', 'normal', 'warning'],
    strokeWidth: Number,
    _status: ['active', 'success', 'error', 'normal', 'warning']
};

const defaults = (): Partial<ProgressProps> => ({
    type: 'bar', // bar circle
    percent: 0, // 0~100
    size: 'default', // small mini
    isOuterText: true,
    isInnerText: false,
    status: 'active',
    strokeWidth: 4,

    _status: 'active'
});

export default class Progress<T extends ProgressProps = ProgressProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    init() {
        this.on('$receive:percent', (percent: number | string) => {
            this.set('percent', fixPercent(percent));
            this.setStatus();
        });
        this.on('$receive:status', () => {
            this.setStatus();
        }); 

    }

    private setStatus(){
        let {status, percent} = this.get();
            if (percent === 100 && status !== 'error')  {
                status = 'success';
            }
        this.set('_status', status);
    }
}

export {Progress};




