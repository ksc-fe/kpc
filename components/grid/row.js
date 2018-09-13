import Intact from 'intact';
import template from './row.vdt';

export default class Row extends Intact {
    @Intact.template()
    get template() { return template; }

    static propTypes = {
        gutter: [String, Number],
    }

    defaults() {
        return {
            gutter: 0,
            justify: undefined,
        }
    }

    _init() {
        this.useFlex = false;
        ['justify', 'align'].forEach(item => {
            this.on(`$receive:${item}`, (c, v) => {
                this.useFlex = this.get('justify') || this.get('align');
            });
        });
    }
}
