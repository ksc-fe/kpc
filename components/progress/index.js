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
    return percent;
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
        };
    }

    _init(props) {
        this._initStatus = this.get('status');

        this.on('$change:percent', (c, percent) => {
            percent = fixPercent(percent);
            const status = this._initStatus !== 'error' && percent === 100 ? 'success' : this._initStatus;
            this.set({
                status: status,
                percent: percent,
            });
        });
        this.on('$receive:status', (c, status) => {
            if (status !== 'success') this._initStatus = status;
        });

        this.set('percent', fixPercent(this.get('percent')));

        if (this.get('percent') == 100 && props.status !== 'error') {
            this.set('status', 'success');
        }
    }
}

export {Progress};
