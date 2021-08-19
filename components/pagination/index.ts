import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {Sizes, sizes} from '../../styles/utils';
import {bind} from '../utils';

export interface PaginationProps {
    size: Sizes,
    counts: number | string,
    total: number,
    current: number,
    limit: number,
    limits: number[],
    noBorder: boolean,
    simple: boolean,
    showTotal: boolean,
    showGoto: boolean,
    showLimits: boolean,
}

const typeDefs: Required<TypeDefs<PaginationProps>> = {
    size: sizes,
    counts: [Number, String],
    total: Number,
    current: Number,
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
    current: 1,
    limit: 10,
    limits: [10, 20, 50],
    noBorder: false,
    simple: false,
    showTotal: true,
    showGoto: false,
    showLimits: true,
})

export class Pagination<T extends PaginationProps = PaginationProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private ignore = false;

    init() {
        // avoid setting incorrect value
        this.changePage(this.get('current'));

        this.watch('limit', v => {
            const oldCurrent = this.get('current');
            if (oldCurrent !== 1) {
                // we should not silent it, but let it trigger change event
                // to sync the value to parent
                // set a flag to indicate that this set will be ignored to trigger
                // change event again in bellow $change:current callback
                // #341
                this.ignore = true;
                this.set('current', 1);
                this.ignore = false;
            }
            this.trigger('change', {limit: v, current: 1});
        }, {inited: true});
        
        this.watch('current', v => {
            if (this.ignore) return;
            this.trigger('change', {limit: this.get('limit'), current: v});
        }, {inited: true});
    }

    @bind
    changePage(page: number) {
        const {total, limit} = this.get();
        const totalPages = Math.ceil(total / limit);
        
        if(page > totalPages) {
            page = totalPages;
        }
        if(page < 1) {
            page = 1;
        }

        if (this.get('current') !== page) {
            this.set('current', page);
        } else {
            // force update to fix invalid input
            this.forceUpdate();
        }
    }

    @bind
    prev() {
        this.changePage(this.get('current') - 1);
    }

    @bind
    next() {
        this.changePage(this.get('current') + 1);
    }

    @bind
    fastPrev() {
        const {current, counts} = this.get();
        const page = current - Math.ceil(Number(counts) / 2);
        this.changePage(page);
    }

    @bind
    fastNext() {
        const {current, counts} = this.get();
        const page = current + Math.ceil(Number(counts) / 2);
        this.changePage(page);
    }

    @bind
    private goto(e: InputEvent) {
        const value = parseInt((e.target as HTMLInputElement).value) || 1;
        this.changePage(value);
    }
}