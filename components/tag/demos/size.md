---
title: 组件尺寸
order: 2
---

```vdt
import Tag from 'kpc/components/tag';

<div>
    <Tag v-for={{ ['large', 'default', 'small', 'mini'] }}
        size={{ value }}
    >{{ value }}</Tag>
    <br /><br />
    <Tag v-for={{ [['large', 'primary'], ['default', 'warning'], ['small', 'success'], ['mini', 'danger']] }}
        size={{ value[0] }}
        type={{ value[1] }}
    >{{ value[0] }}</Tag>
    <br /><br />
    <Tag v-for={{ ['large', 'default', 'small', 'mini'] }}
        type="primary"
        size={{ value }}
        closable
    >{{ value }}</Tag>
</div>
```

```styl
.k-tag
    margin-right 16px
```
