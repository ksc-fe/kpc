import Intact from 'intact';
import template from './index.vdt';
import TimelineItem from './item';
import '../../styles/kpc.styl';
import './index.styl';

export default class Timeline extends Intact {
    @Intact.template()
    static template = template;

    static blocks = ['dot'];
}

export {Timeline, TimelineItem};
