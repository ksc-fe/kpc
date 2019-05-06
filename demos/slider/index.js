/**
 * Created by sylvia on 2017/10/18.
 */
import template from './index.vdt'
import './index.styl'

export default class extends Intact{

    get template() { return template;}

    defaults() {
        return {
            'currentVal': 25,
            'step': 5,
            'isShowInput': false,
            'valueArr': [30, 50],
            'range': true,
        }
    }

    stop(val) {
       this.set('currentVal', val)
    }
}
