import Document from '../document';
import template from './index.vdt';
import './index.styl';

export default class extends Document {
    @Intact.template()
    static template = template;

}
