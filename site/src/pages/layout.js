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
        this.on('$change:theme', (c, v, o) => {
            this._changeTheme(v, o);
        });
    }

    _mount() {
        this.border = this.element.querySelector('.border');
        this._updateBorder();
        this.link = document.querySelector('link[rel=stylesheet]');
    }

    _changeTheme(newTheme, oldTheme) {
        this.link.href = this.link.href.replace(`theme-${oldTheme}`, `theme-${newTheme}`);
        theme = newTheme;
    }

    _updateBorder() {
        const nav = this.element.querySelector('.active');
        let width = 0;
        let left = 0;
        if (nav) {
            left = nav.offsetLeft;
            width = nav.offsetWidth;
        }
        this.border.classList.add('transition');
        this.border.style.width = `${width}px`;
        this.border.style.left = `${left}px`;
    }
}
