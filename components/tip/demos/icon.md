---
title: 支持Icon
order: 3
---

标签类型：`default`, `primary`, `success`, `warning` `danger`

```vdt
import {Tip, Icon} from 'kpc';

<div>
    <Tip v-for={this.get('types')}
        type={$value}
        showIcon
        closable
    >{$value}</Tip>
    <Tip type="success" showIcon closable>
        这是一条测试内容，这是一条测试内容，这是一条测试内容，这是一条测试内容，这是一条测试内容，这是一条测试内容，这是一条测试内容，这是一条测试内容，这是一条测试内容，这是一条测试内容，这是一条测试内容，这是一条测试内容，这是一条测试内容，这是一条测试内容，这是一条测试内容，这是一条测试内容，这是一条测试内容，这是一条测试内容，这是一条测试内容。
    </Tip>
    <h3>自定义Icon</h3>
    <Tip>
        <b:icon><Icon class="k-icon-internet" /></b:icon>
        custom Icon
    </Tip>
    <h3>标题带Icon</h3>
    <Tip type="primary" showIcon>
        <b:title>这是标题</b:title>
        This is a tip.
    </Tip>
    <h3>标题自定义Icon</h3>
    <Tip type="primary" showIcon closable>
        <b:icon><Icon class="k-icon-internet" /></b:icon>
        <b:title>这是标题</b:title>
        This is a tip.
    </Tip>
</div>
```

```styl
.k-tip
    margin-bottom 8px
```

```ts
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            types: ['default', 'primary', 'success', 'warning', 'danger'] as const
        };
    }
}
```
