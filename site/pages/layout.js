import Intact from 'intact';
import template from './layout.vdt';
import './layout.styl';

export default class extends Intact {
    @Intact.template()
    static template = template;

    _mount() {
        this.$border = this.element.querySelector('.border');
        this._updateBorder();
    }

    _updateBorder() {
        // const $nav = this.element.querySelector('.active');
        // let width = 0;
        // let left = 0;
        // if ($nav) {
            // left = $nav.position().left;
            // width = $nav.outerWidth();
        // }
        // this.$border.addClass('transition');
        // this.$border.css({width: width, left: left});
    }
}
