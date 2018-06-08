import Intact from 'intact';
import Document from '../document';
import template from './index.vdt';
import './index.styl';
import mixin from '!raw-loader!styles/mixin.styl';

export default class extends Document {
    @Intact.template()
    static template = template;

    _mount() {
        console.log(stylus.render(`${mixin}
.test
    color palette(red, 1)
`));
    }
}
