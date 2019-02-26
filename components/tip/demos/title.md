---
title: 
    zh-CN: 展示标题
    en-US: Show title
order: 2
---

## zh-CN

通过`title`扩展点，可以自定义标题内容

## en-US

You can customize title content by `title` block.

```vdt
import Tip from 'kpc/components/tip';

<div>
    <Tip v-for={{ ['default', 'primary', 'success', 'warning', 'danger'] }}
        key={{ value }}
        type={{ value }}
        closable
    >
        <b:title>{{ value }}</b:title>
        This is a {{ value }} tip.
    </Tip>
</div>
```

```styl
.k-tag
    margin-bottom 8px
```
