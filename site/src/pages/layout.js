import Intact from 'intact';
import template from './layout.vdt';
import './layout.styl';

let theme;
function changeTheme(newTheme, oldTheme) {
    const link = document.querySelector('link[href*=theme-]');
    if (!link) return;

    link.href = link.href.replace(`theme-${oldTheme}`, `theme-${newTheme}`);
    theme = newTheme;
    localStorage.setItem('theme', newTheme);
}

if (process.browser) {
    theme = localStorage.getItem('theme') || 'kpc';

    if (theme !== 'kpc') {
        changeTheme(theme, 'kpc');
    }
} else {
    theme = 'kpc';
}

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            theme: theme,
            version: 'v1.1.1'
        };
    }

    _init() {
        this.on('$change:theme', (c, v, o) => {
            console.log(v, o)
            changeTheme(v, o);
        });
    }

    _mount() {
        this.border = this.element.querySelector('.border');
        this._updateBorder();
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
