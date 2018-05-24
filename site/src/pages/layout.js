import Intact from 'intact';
import template from './layout.vdt';
import './layout.styl';

let theme = 'kpc'

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            theme: theme,
        };
    }

    _init() {
        this.on('$change:theme', (c, v) => {
            this._changeTheme(v);
        });
    }

    _mount() {
        this.$border = this.element.querySelector('.border');
        this._updateBorder();
        this.link = document.querySelector('link[rel=stylesheet]');
    }

    _changeTheme(t) {
        this.link.href = `/theme-${t}.css`;
        theme = t;
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
