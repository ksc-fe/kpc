import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    get template() { return template; }

    defaults() {
        return {
            current: 1,
            size: 10,
            total: 100
        }
    }
}
