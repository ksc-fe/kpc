import {Component, createRef} from 'intact';
import Layout, {LayoutProps} from '../layout';
import template from './index.vdt';
import './index.styl';
// import 'kpc/components/table/index.styl';

// export const req = require.context('~/', true, /^\.\/(components|docs)\/.*index\.js$/, 'lazy');
// export const req = require.context('~/', true, /^\.\/(components|docs)\/.*index.ts$/);
export const req = require.context('~/', true, /^\.\/(components)\/.*index.ts$/);

export interface DocumentProps extends LayoutProps {
    hasRead: string | boolean | null 
    expanded: boolean
    path: string
    Article: Component,
    demos: Component,
    activeExample: string,
    borderStyle?: BorderStyle
}

type BorderStyle = {
    height: string
    top: string
}

type ActiveHeader = {
    header: string,
    top: number,
    elem: HTMLDivElement | null
}

export default class Document<T extends DocumentProps = DocumentProps> extends Layout<T> {
    static template = template;
    static defaults: Partial<DocumentProps> = {
        ...Layout.defaults,
        hasRead: null,
        expanded: false,
        path: '',
    }
   
    private path: string | null = null;
    private examples: NodeListOf<HTMLDivElement> | null = null;

    async init() {
        super.init();

        let path = this.get('path').replace('index.html', '').replace('\\', '/');
        path = path.slice(0, -1);// .replace(process.URL_PREFIX, '');

        this.path = path;

        const Article = (await req(`.${path}/index.ts`)).default as any;
        this.set({Article: Article});
    }

    beforeMount() {
        this.set('hasRead', localStorage.getItem(process.version));
        if (this.path === '/docs/changelog') {
            this.set('hasRead', true);
            localStorage.setItem(process.version, '1');
        }
    }

    mounted() {
        super.mounted();
        this.examples = this.element.value!.querySelectorAll('.example');
        document.title = this.get('Article.data.setting.title');
        if (this.refs.article) {
            this.set('demos', this.refs.article.get('demos'));
        }

        // window.addEventListener('scroll', this.onScroll);
    }

    beforeUnmount() {
        // window.removeEventListener('scroll', this.onScroll);
    }

    private onScroll = () => {
        const example = this.findActive(this.examples!, 0);
        this.set('activeExample', example.header);

        let active = this.refs.tableContents.querySelectorAll('.active');
        active = active[active.length - 1];
        if (active) {
            this.set('borderStyle', {
                height: active.offsetHeight + 'px',
                top: active.offsetTop + 8 + 'px', // fix top +8px
            });
        } else {
            this.set('borderStyle', undefined);
        }
    }

    private findActive(hs: NodeListOf<HTMLDivElement>, minTop = 0): ActiveHeader {
        const scrollTop = window.pageYOffset;

        for (let i = hs.length - 1; i >= 0; i--) {
            const h = hs[i];
            const top = h.getBoundingClientRect().top + scrollTop;

            if (top > minTop && top - 88 <= scrollTop) {
                return {header: h.id, top: top, elem: h};
            }
        }

        return {header: '', top: 0, elem: null};
    }

    private scrollToView(demo) {
        const index = demo.data.index;
        const dom = this.element.value!.querySelector(`#${index}`);
        const top = dom!.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo(0, top - 87);
    }
}
