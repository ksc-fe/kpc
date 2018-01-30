import Intact from 'intact';
import template from './index.vdt';
import './index.styl';
import axios from 'axios';

export default class extends Intact {
    @Intact.template()
    static template = template;

    _init() {
        return axios.get(`/${this.get('path')}index.json`).then(data => {
            console.log(data);
        });
    }
}
