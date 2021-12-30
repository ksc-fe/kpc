import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {Sizes, sizes} from '../../styles/utils';
import {bind} from '../utils';
import type {Events} from '../types';

export interface PaginationProps {
    size?: Sizes,
    counts?: number | string,
    total?: number,
    value?: number,
    limit?: number,
    limits?: number[],
    noBorder?: boolean,
    simple?: boolean,
    showTotal?: boolean,
    showGoto?: boolean,
    showLimits?: boolean,
}

export interface PaginationEvents {
    change: [ChangeData] 
}

type ChangeData = {
    limit: number
    value: number
}

const typeDefs: Required<TypeDefs<PaginationProps>> = {
    size: sizes,
    counts: [Number, String],
    total: Number,
    value: Number,
    limit: Number,
    limits: Array,
    noBorder: Boolean,
    simple: Boolean,
    showTotal: Boolean,
    showGoto: Boolean,
    showLimits: Boolean,
};

const defaults = (): Partial<PaginationProps> => ({
    size: 'default',
    counts: 7,
    total: 0,
    value: 1,
    limit: 10,
    limits: [10, 20, 50],
    showTotal: true,
    showLimits: true,
});

const events: Events<PaginationEvents> = {
    change: true,
};

export class Pagination extends Component<PaginationProps, PaginationEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private ignore = false;

    init() {
        // avoid setting incorrect value
        this.changePage(this.get('value')!);

        this.watch('limit', v => {
            const oldvalue = this.get('value');
            if (oldvalue !== 1) {
                // we should not silent it, but let it trigger change event
                // to sync the value to parent
                // set a flag to indicate that this set will be ignored to trigger
                // change event again in bellow $change:value callback
                // #341
                this.ignore = true;
                this.set('value', 1);
                this.ignore = false;
            }
            this.trigger('change', {limit: v!, value: 1});
        }, {inited: true});
        
        this.watch('value', v => {
            if (this.ignore) return;
            this.trigger('change', {limit: this.get('limit')!, value: v!});
        }, {inited: true});
    }

    @bind
    changePage(page: number) {
        const {total, limit} = this.get();
        const totalPages = Math.ceil(total! / limit!);
        
        if (page > totalPages) {
            page = totalPages;
        }
        if (page < 1) {
            page = 1;
        }

        if (this.get('value') !== page) {
            this.set('value', page);
        }
    }

    @bind
    private prev() {
        this.changePage(this.get('value')! - 1);
    }

    @bind
    private next() {
        this.changePage(this.get('value')! + 1);
    }

    @bind
    private fastPrev() {
        const {value, counts} = this.get();
        const page = value! - Math.ceil(Number(counts) / 2);
        this.changePage(page);
    }

    @bind
    private fastNext() {
        const {value, counts} = this.get();
        const page = value! + Math.ceil(Number(counts) / 2);
        this.changePage(page);
    }

    @bind
    private goto(e: InputEvent) {
        const value = parseInt((e.target as HTMLInputElement).value) || 1;
        this.changePage(value);
    }
}
