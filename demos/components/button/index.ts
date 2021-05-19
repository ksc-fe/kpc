import {Component} from 'intact';
import template from './index.vdt';
import {bind} from '../../../components/utils';
import theme from '../../../components/styles/default';

export default class extends Component {
    static template = template;

    @bind
    changeTheme() {
        (theme as any).btn.color = 'red';
        this.forceUpdate();
    }
}
