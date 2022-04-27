import {Component, createRef} from 'intact';
import Document from '../document';
import template from './index.vdt';

export default class extends Document {
    static template = template;

    updateCatalogue() {
        const Article = this.get('Article');
        const setting = this.articleRef.value!.get('setting') as any;
        const catalogs = Article.data.catalogs;

        this.set({
            catalogue: [
                {text: setting.title, level: 1, id: 'article-title'},
                ...catalogs,
            ],
            catalogueId: 'article-title',
        });
    }
}
