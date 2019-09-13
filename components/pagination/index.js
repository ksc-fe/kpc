import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class Pagination extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        total: Number,
        current: Number,
        limit: Number,
        counts: [Number, String],
        limits: Array,
        showGoto: Boolean,
        size: ['large', 'default', 'small', 'mini'],
        noBorder: Boolean,
        simple: Boolean,
        showLimits: Boolean,
    };

    static events = {
        change: true,
    };

    defaults() {
        return {
            total: 0,
            current: 1,
            limit: 10,
            counts: 7,
            showTotal: true,
            limits: [10, 20, 50],
            // value: '',
            showGoto: false,
            size: 'default',
            noBorder: false,
            simple: false,
            showLimits: true,
        };
    }

    _init() {
        // avoid setting incorrect value
        this.changePage(this.get('current'));

        this.on('$change:limit', (c, v) => {
            const oldCurrent = this.get('current');
            if (oldCurrent !== 1) {
                // we should not silent it, but let it trigger change event
                // to sync the value to parent
                // set a flag to indicate that this set will be ignored to trigger
                // change event again in bellow $change:current callback
                // #341
                this._ignore = true;
                this.set('current', 1);
                this._ignore = false;
            }
            this.trigger('change', {limit: v, current: 1});
        });

        this.on('$change:current', (c, v) => {
            if (this._ignore) return;
            this.trigger('change', {limit: this.get('limit'), current: v});
        });
    }

    changePage(page) {
        const {total, limit} = this.get();
        const totalPages = Math.ceil(total / limit);

        if (page > totalPages) {
            page = totalPages;
        }
        if (page < 1) {
            page = 1;
        }

        if (this.get('current') !== page) {
            this.set('current', page);
        } else {
            // force update to fix invalid input
            this.update();
        }
    }

    prev() {
        this.changePage(this.get('current') - 1);
    }

    next() {
        this.changePage(this.get('current') + 1);
    }

    fastPrev() {
        const page = this.get('current') - Math.ceil(this.get('counts') / 2);
        this.changePage(page);
    }

    fastNext() {
        const page = this.get('current') + Math.ceil(this.get('counts') / 2);
        this.changePage(page);
    }

    _goto(e) {
        // const regexp = /^[1-9]\d*$/;
        const value = parseInt(e.target.value) || 1;
        this.changePage(value);
    }
}

export {Pagination};
