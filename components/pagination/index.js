import template from './index.vdt'
import './index.styl'

export default class extends Intact{
    get template() { return template; }

    defaults() {
        return {
            total: 0,
            'page-size': 10,
            current: 1
            
        };
    }

    _init() {
        
    }
}
