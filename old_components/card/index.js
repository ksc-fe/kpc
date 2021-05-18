import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import CardColumn from './column';

export default class Card extends Intact {
    @Intact.template()
    static template = template;

    static blocks = ['header', 'title', 'extra'];

    static propTypes = {
        type: ['shadow', 'none', 'border']
    };

    defaults() {
        return {
            title: undefined,
            type: 'shadow',
        }
    }
}

export {Card, CardColumn};
