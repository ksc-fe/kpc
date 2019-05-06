/**
 * Created by sylvia on 2017/10/31.
 */
import template from './index.vdt'
import './index.styl'

export default class extends Intact{
    get template() { return template; }

    defaults() {
        return {
            percent: 40
        }
    }
}
