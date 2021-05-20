import {Component} from 'intact';
import template from './index.vdt';
import {bind} from '../../../components/utils';
import {theme} from '../../../components/styles/theme';

export default class extends Component {
    static template = template;

    @bind
    changeTheme() {
        theme.color.primary = 'orange';
        this.forceUpdate();
    }
}
