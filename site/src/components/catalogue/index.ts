import {Component} from 'intact';
import template from './index.vdt';
import {bind} from 'kpc';

export interface CatalogueProps {
    data: DataItem[]
    value: string
}

type DataItem = {
    text: string
    level: number
    id: string
}

const TOP = 84;

export class Catalogue extends Component<CatalogueProps> {
    static template = template;

    mounted() {
        window.addEventListener('scroll', this.onScroll);
    }

    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    scrollTo(data: DataItem) {
        this.set('value', data.id); 

        const dom = document.getElementById(data.id);
        if (!dom) return;

        const top = dom!.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo(0, top - TOP);
    }

    @bind
    onScroll() {
        const ids = document.querySelectorAll('[id]');
        const scrollTop = window.pageYOffset;
        for (let i = ids.length - 1; i >= 0; i--) {
            const dom = ids[i];
            const top = dom.getBoundingClientRect().top + scrollTop; 

            if (top > 0 && top - TOP - 1 <= scrollTop) {
                const id = dom.id;
                if (this.get('data').find(item => item.id === id)) {
                    this.set('value', id);
                    return;
                }
            }
        }
    }
}
