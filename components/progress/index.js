/**
 * Created by sylvia on 2017/10/16.
 */
import template from './index.vdt';
import './index.styl'

export default class extends Intact{
    get template() { return template;}

    defaults() {
        return {
            type: 'line',
            percent: 70, //[0~100]
            size: 'mini', // small mini
            showText: true,
            innerText: false,
            status: 'normal' // success | error | active | normal
        }

    }

    _init(){
        this.on('$change:percent', function(comp, percentage) {
            let status =  percentage == 100 ?  'success' : 'normal';
            this.set ('status', status)
        });
    }

}