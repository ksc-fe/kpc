---
title: 颜色
order: 3
---

`color` 属性支持 `type` 的所有类型、内置颜色（`purple`, `teal`, `blue`, `yellow`）或自定义颜色值。

```vdt
import {Tag} from 'kpc';

<div class="container">
    <Tag v-for={this.get('colors')} color={$value}>
        {$value}
    </Tag>
</div>
```

```styl
.container
    display flex
    gap 8px
    flex-wrap wrap
```

```ts
import {TagProps} from 'kpc';

interface Props {
    colors: string[]
}

export default class extends Component {
    static template = template;
    static defaults() {
        return {
            colors: ['default', 'primary', 'danger', 'success', 'warning', 'purple', 'teal', 'blue', 'yellow', '#f50', '#87d068', 'rgb(255, 0, 179)'],
        } as Props;
    }
}
```