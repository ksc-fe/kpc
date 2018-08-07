import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import BreadcrumbItem from './item';

export default class Breadcrumb extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        separator: String
    };

    defaults() {
        return {
            separator: undefined,
        };
    }
}

export {Breadcrumb, BreadcrumbItem};
