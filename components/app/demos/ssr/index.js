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
        // 通过ssr来指明应用为服务器端渲染
        this.app = new App({container: this.refs.container, ssr: true});
    }

    _renderString() {
        // 模拟服务器端渲染
        const app = new App();
        app.render(PageA).then(content => {
            this.refs.container.innerHTML = content;
        });
        this.refs.ssr.disable();
    }

    _changePage(name) {
        // 模拟路由切换
        switch (name) {
            case 'a':
                this.app.load(PageA);
                break;
            case 'b':
                this.app.load(PageB, {title: 'Detail'});
                break;
        }
    }
}