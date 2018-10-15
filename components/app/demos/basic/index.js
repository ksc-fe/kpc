export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import App from 'kpc/components/app';
import PageA from './pageA';
import PageB from './pageB';

export default class extends Intact {
    @Intact.template()
    static template = template;

    _mount() {
        // 通过container来指明挂载点
        this.app = new App({container: this.refs.container});
    }

    _changePage(name) {
        // 模拟路由切换
        switch (name) {
            case 'a':
                return this.app.load(PageA);
            case 'b':
                return this.app.load(PageB, {title: 'Detail'});
        }
    }
}