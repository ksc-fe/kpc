export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            users: []
        }
    }

    _init() {
        this.lastFetchId = 0;
    }

    search(select, keywords) {
        console.log(keywords);

        if (!keywords) return;

        const fetchId = ++this.lastFetchId
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(body => {
                if (fetchId !== this.lastFetchId) return;
                this.set('users', body.results);
            });
    }
}