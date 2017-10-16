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
            percentage: 0,
            progressHeight: 10

        }
    }
}