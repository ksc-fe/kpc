---
title: 
    zh-CN: 基本用法
    en-US: Basic Usage

order: 0
---
## zh-CN

通过`size`属性可以指定组件尺寸: `large` `default` `small` `mini`

## en-US

The component size can be specified by the `size` attribute: `large` `default` `small` `mini`

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
