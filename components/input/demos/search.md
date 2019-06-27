---
title: 搜索框
order: 6
---

组件库提供了`Search`组件，用于定义点击后展开的搜索框，该组件有两种类型，通过`type`属性指定，
绑定`submit`事件用于提交搜索结果

> 不要将该组件用于表单中，因为它本身就会渲染成独立的表单

```vdt
import {Search} from 'kpc/components/input';

<div>
    <Search ev-submit={{ self._search }} />
    <br />
    <Search type="line" ev-submit={{ self._search }} />
</div>
```

```js
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    _search(keywords) {
        Message.success('Search by keywords: ' + keywords);
    }
}
```
