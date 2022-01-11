---
title: 边框
order: 3
---

通过`border`可以定义边框样式: `solid`(默认) `dashed` `none`

```vdt
import {Tag} from 'kpc';

<div>
    <div v-for={['dashed', 'none']} v-for-value="border" class="row">
        <Tag v-for={['default', 'primary', 'success', 'warning', 'danger']}
            type={$value}
            border={border}
        >{$value}</Tag>
        <Tag disabled border={border}>disabled</Tag>
    </div>
</div>
```

```styl
.k-tag
    margin-right 16px
.row
    margin-bottom 16px
```
