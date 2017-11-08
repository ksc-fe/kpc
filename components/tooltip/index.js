/**
 * Created by sylvia on 2017/10/31.
 */
import template from './index.vdt'
import './index.styl'
import positon from '../moveWrapper/position'

export default class extends Intact{

    defaults() {
        return {
            _showToolTip: false,
            refEvent: 'hover' // hover | click
        }
    }

    get template () { return template; }

    showPop() {
        this.set('_showToolTip', true);
        positon(this.refs.content, {my: 'left top', at: 'left bottom', of: this.element});
    }

    hidePop() {
        this.set('_showToolTip', true);
    }
}