import {Component, createRef, nextTick} from 'intact';
import Layout, {LayoutProps} from '../layout';
import template from './index.vdt';
import '../../styles/highlight.styl';
import type {CatalogueProps} from '../../components/catalogue';
import type Article from '../../components/article';

export const req = require.context('~/', true, /^\.\/(components|docs)\/.*index.ts$/);

export interface DocumentProps extends LayoutProps {
    hasRead: string | boolean | null 
    expanded: boolean
    path: string
    Article: Component & {data: ArticleData},
    activeExample: string,
    borderStyle?: BorderStyle,
    catalogue: CatalogueProps['data']
    catalogueId: string
}

type ArticleData = {
    catalogs: CatalogueProps['data']
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
    static defaults = (): Partial<DocumentProps> => ({
        ...Layout.defaults(),
        hasRead: null,
        expanded: false,
        path: '',
    });
   
    private path: string | null = null;
    private examples: NodeListOf<HTMLDivElement> | null = null;
    protected articleRef = createRef<Article>();

    async init() {
        // for debug
        (window as any).__page = this;

        const updateArticle = async () => {
            let path = this.get('path').replace('index.html', '').replace('\\', '/');
            path = path.slice(0, -1);

            this.path = path;

            const Article = (await req(`.${path}/index.ts`)).default as any;
            this.set({
                Article: Article,
                expanded: false,
            });
            if (this.$mounted) {
                nextTick(() => {
                    this.updateCatalogue();
                });
            }
        };

        this.watch('path', updateArticle, {inited: true});

        return await updateArticle();
    }

    beforeMount() {
        this.set('hasRead', localStorage.getItem(process.version));
        if (this.path === '/docs/changelog') {
            this.set('hasRead', true);
            localStorage.setItem(process.version, '1');
        }
    }

    mounted() {
        this.updateCatalogue();
    }

    updateCatalogue() {
        const Article = this.get('Article');
        const demos = this.articleRef.value!.get('demos') as any[];
        const setting = this.articleRef.value!.get('setting') as any;
        const catalogs = Article.data.catalogs;
        const isDoc = this.path!.startsWith('/docs/');

        this.set({
            catalogue: [
                isDoc ? 
                    {text: setting.title, level: 1, id: 'article-title'} :
                    {text: '示例', level: 1, id: 'demos'},
                ...demos.map(({data}) => {
                    return {
                        text: data.setting.title,
                        level: 2,
                        id: data.index,
                    };
                }),
                ...catalogs,
            ],
            catalogueId: isDoc ? 'article-title' : 'demos',
        });
    }
}
