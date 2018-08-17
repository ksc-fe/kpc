---
title: 基础用法
order: 0
---

`App`组件是个应用管理组件，用它可以当做整个单页应用的骨架，用来切换各个子页面，在切换的过程中，
组件会展示loading动画来作为过渡。该组件实例化时，需要传入`container`属性来指明组件的挂载点，然后
通过`load(Page, [data])`方法来记载页面

1. @param `Page` 当前要加载的页面组件
2. @param `data` 传入组件的数据
3. @return `Promise` 返回Promise对象

本例中，我们假设有两个页面`PageA`和`PageB`，然后通过点击不同的按钮加载不同的页面，实际使用中，
可以根据不同的路由来加载不同的页面。

> 该组件只适用于Intact框架，Vue下无需该组件来管理页面，应该使用`vue-router`

```vdt
// @file pageA.vdt 
<div>page a</div>
```

```js
// @file pageA.js
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
import template from './pageB.vdt';

export default class PageB extends Intact {
    @Intact.template()
    static template = template;
}
```

```vdt
import {ButtonGroup, Button} from 'kpc/components/button';


<div>
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
        this.app = new App({container: this.refs.container});
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
