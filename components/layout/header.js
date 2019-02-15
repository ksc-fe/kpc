import Intact from 'intact';
import template from './index.vdt';

export default class Header extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        fixed: Boolean,
    };

    defaults() {
        return {
            fixed: false,
            _className: {'k-header': true},
        };
    }

    _beforeCreate() {
        this._updateClassNames();
    }

    _beforeUpdate() {
        this._updateClassNames();
    }

    _updateClassNames() {
        this.set('_className', {
            'k-header': true,
            'k-fixed': this.get('fixed'),
        });
    }

    _detectAside() {
        
    }
}
