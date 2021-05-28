/**
 * Created by sylvia on 2017/10/16.
 */
import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

function fixPercent(percent) {
    if (percent > 100) percent = 100;
    if (percent < 0) percent = 0;
    return +percent;
}

export default class Progress extends Intact{
    get template() { return template; }

    static propTypes = {
        type: ['bar', 'circle'],
        percent: [Number, String],
        size: ['default', 'small', 'mini'],
        isOuterText: Boolean,
        isInnerText: Boolean,
        status: ['active', 'success', 'error', 'normal', 'warning'],
        strokeWidth: Number,
        color: [String, Function, Array]
    }

    defaults() {
        return {
            type: 'bar', // bar circle
            percent: 0, // 0~100
            size: 'default', // small mini
            isOuterText: true,
            isInnerText: false,
            status: 'active',
            strokeWidth: 4,
            color: undefined,
            _status: 'active',
        };
    }

    _init() {
        this.on('$receive:percent', (c, percent) => {
            this.set('percent', fixPercent(percent), {silent: true});
        });

        this.on('$receive', (c, keys) => {
            let {status, percent} = this.get();
            if (percent === 100 && status !== 'error')  {
                status = 'success';
            }
            this.set('_status', status, {silent: true});
        });
    }
}

export {Progress};
