---
title: 基础用法
order: 0
---

通过`size`属性可以指定组件尺寸: `large` `default` `small` `mini`

```vdt
import Spin from 'kpc/components/spin';

<div>
    <Spin v-for={{ ['large', 'default', 'small', 'mini'] }}
        size={{ value }}
    />
</div>
```

```styl
.k-spin
    margin-right 16px
```
