---
title: 服务器端渲染
order: 1
---

`App`组件还可以管理服务器端渲染，服务器端渲染时，调用`render(Page, [data])`方法，来将组件渲染成
字符串，参数与`load`方法一样。然后前端进行加载时，需要在实例化`App`时传入`ssr: true`来
标明当前页面为服务器端渲染，首次加载时进行混合`hydrate`

本例中，点击`Render in server`来模拟`PageA`服务器端渲染结果，插入`container`下面，然后点击`PageA`来混合
结果，可以看到混合时，页面并不会发生任何改变

```vdt
// @file pageA.vdt 
<div>page a</div>
```

```js
// @file pageA.js
import Intact from 'intact';
import template from './pageA.vdt';

export default class PageA extends Intact {
    @Intact.template()
    static template = template;
}
```

```vdt
// @file pageB.vdt 
<div>page b title: {{ self.get('title') }}</div>
```

```js
// @file pageB.js
import Intact from 'intact';
import template from './pageB.vdt';

export default class PageB extends Intact {
    @Intact.template()
    static template = template;
}
```

```vdt
import {ButtonGroup, Button} from 'kpc/components/button';


<div>
    <Button ev-click={{ self._renderString }}
        style="margin-right: 10px;"
        ref="ssr"
    >Render in server</Button>
    <ButtonGroup>
        <Button ev-click={{ self._changePage.bind(self, 'a') }}>PageA</Button>
        <Button ev-click={{ self._changePage.bind(self, 'b') }}>PageB</Button>
    </ButtonGroup>
    <div ref="container"></div>
</div>
```

```js
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
```
