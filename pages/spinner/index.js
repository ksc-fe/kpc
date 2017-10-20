import template from './index.vdt';

export default class extends Intact {
    get template() { return template; }
    _init() {
        this.set('value', 2);
    }
    changeValue(value, e) {
    	console.log(value, e);
    	this.set('value', value);
    }
}

// if (module.hot) {
//     module.hot.accept();
// }