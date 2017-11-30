import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    get template() { return template; }
}

if (module.hot) {
    module.hot.accept();
}
