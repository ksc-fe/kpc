/**
 * Created by sylvia on 2017/10/16.
 */
import template from './index.vdt';
import './index.styl'

export default class extends Intact{
    get template() { return template;}

    defaults() {
        return {
            percent:20
        }
    }

    _init() {
        console.log("init!");
    }

    getValue(e) {
        console.log(e.target.value);
        this.set('percent', e.target.value);
    }
}
