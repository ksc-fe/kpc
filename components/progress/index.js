/**
 * Created by sylvia on 2017/10/16.
 */
import template from './index.vdt';
import './index.styl';

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
            const status = percent === 100 ? 'success' : this._initStatus;
            this.set('status', status)
        });
        this.on('$change:status', (c, status) => {
            if (status !== 'success') this._initStatus = status;
        });
    }
}
