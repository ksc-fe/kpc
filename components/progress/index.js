/**
 * Created by sylvia on 2017/10/16.
 */
import template from './index.vdt';
import './index.styl';

function fixPercent(percent) {
    if (percent > 100) percent = 100;
    if (percent < 0) percent = 0;
    return percent;
}

export default class extends Intact{
    get template() { return template; }

    defaults() {
        return {
            type: 'bar',
            percent: 70, //[0~100
            size: 'default', // small mini
            isOuterText: true,
            isInnerText: false, // FIXME: 布尔型取值用is开头 isShowInnerText 见README
            status: 'active', // success | error | active | normal
            strokeWidth: 10, 
        };
    }

    _init() {
        this._initStatus = this.get('status');

        this.on('$change:percent', (c, percent) => {
            percent = fixPercent(percent);
            const status = percent === 100 ? 'success' : this._initStatus;
            this.set({
                status: status,
                percent: percent,
            });
        });
        this.on('$change:status', (c, status) => {
            if (status !== 'success') this._initStatus = status;
        });

        this.set('percent', fixPercent(this.get('percent')));
    }
}
