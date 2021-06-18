import {Component, TypeDefs, createRef, watch, nextTick, onMounted, RefObject} from 'intact';
import template from './index.vdt';

function fixPercent(percent: Number | String) {
    if (percent > 100) percent = 100;
    if (percent < 0) percent = 0;
    return +percent;
}

type Sizes = 'default' | 'small' | 'mini';
type Type = 'bar' | 'circle';
type Status = 'active' | 'success' | 'error' | 'normal' | 'warning';

export interface progressProps {
    type?: Type,
    percent?: Number | String,
    size?: Sizes,
    isOuterText?: Boolean,
    isInnerText?: Boolean,
    status?: Status,
    strokeWidth?: Number,

    _status?: Status
};

const typeDefs: Required<TypeDefs<progressProps>>  = {
    type: ['bar', 'circle'],
    percent: [Number, String],
    size: ['default', 'small', 'mini'],
    isOuterText: Boolean,
    isInnerText: Boolean,
    status: ['active', 'success', 'error', 'normal', 'warning'],
    strokeWidth: Number   
};

const defaults = (): Partial<progressProps> => ({
    type: 'bar', // bar circle
    percent: 0, // 0~100
    size: 'default', // small mini
    isOuterText: true,
    isInnerText: false,
    status: 'active',
    strokeWidth: 4,

    _status: 'active'
});

export default class Progress<T extends progressProps = progressProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    init() {
        
    }
}




