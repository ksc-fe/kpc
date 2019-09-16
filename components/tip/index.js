import Intact from 'intact';
import Tag from '../tag';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class Tip extends Tag {
    @Intact.template()
    static template = template;

    static blocks = ['title', 'close'];
}

export {Tip};
