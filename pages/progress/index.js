/**
 * Created by sylvia on 2017/10/16.
 */
import template from './index.vdt';
import './index.styl'

export default class extends Intact{
    get template() { return template;}

    defaults() {
        return {
            percent:20,
        }
    }

    _init() {
        console.log("init!");
    }

    add() {
        if(this.get('percent') >= 100) return false;
        let percent = this.get('percent');
        percent+=10;
        this.set('percent',percent);

    }

    min() {
        if(this.get('percent') <= 0) return false;
        let percent = this.get('percent');
        percent-=10;
        this.set('percent',percent);

    }
}
