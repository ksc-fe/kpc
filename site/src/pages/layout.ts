import {Component, createRef} from 'intact';
import template from './layout.vdt';
import './layout.styl';

let theme: string;
function changeTheme(newTheme: string, oldTheme: string) {
    const link = document.querySelector('link[href*=theme-]') as HTMLLinkElement;
    if (!link) return;

    link.href = link.href.replace(`theme-${oldTheme}`, `theme-${newTheme}`);
    theme = newTheme;
    localStorage.setItem('theme', newTheme);
}

// if ((process as any).browser) {
    // theme = localStorage.getItem('theme') || 'kpc';

    // if (theme !== 'kpc') {
        // changeTheme(theme, 'kpc');
    // }
// } else {
    // theme = 'kpc';
// }

export interface LayoutProps {
    theme: string
    version: string
}

export default class Layout<T extends LayoutProps = LayoutProps> extends Component<T> {
    static template = template;
    static defaults: Partial<LayoutProps> = {
        theme: theme,
        version: 'v1.1.1'
    }

    private border: HTMLElement | null = null;
    protected element = createRef<HTMLDivElement>();

    init() {
        this.on('$change:theme', (v, o) => {
            console.log(v, o)
            changeTheme(v, o);
        });
    }

    mounted() {
        this.border = this.element.value!.querySelector('.border');
        // this.updateBorder();

        window.scrollTo(0, 0);
    }

    private updateBorder() {
        const nav = this.element.value!.querySelector('.active') as HTMLDivElement;
        let width = 0;
        let left = 0;
        if (nav) {
            left = nav.offsetLeft;
            width = nav.offsetWidth;
        }
        this.border!.classList.add('transition');
        this.border!.style.width = `${width}px`;
        this.border!.style.left = `${left}px`;
    }
}
