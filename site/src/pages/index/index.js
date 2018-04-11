import Intact from 'intact';
import template from './index.vdt';
import Layout from '../layout';

export default class extends Layout {
    @Intact.template()
    static template = template;
}
