/**
 * Created by sylvia on 2017/10/18.
 */
import template from './index.vdt'
import './index.styl'

export default class extends Intact{

    get template() { return template;}

    defaults() {
        return {
        }
    }

    stop(val) {
        console.log(val);
    }
}