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
            isInnerText: true, // FIXME: 布尔型取值用is开头 isShowInnerText 见README
            status: 'normal', // success | error | active | normal
            strokeWidth: 10, 
        };
    }

    _init() {
        this.on('$change:percent', function(c, percent) {
            const status = percent === 100 ? 'success' : 'normal';
            this.set('status', status)
        });
    }
}
