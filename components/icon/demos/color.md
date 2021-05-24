---
title: 颜色 
order: 1
---

使用`color`属性可以定义图标的颜色，组件有6预定义颜色：`default` `primary` `warning` `danger` `success`
`disabled`。你也可以自定义`color`值

```vdt
import Icon from 'kpc/components/icon';

<div>
    <Icon 
        v-for={{ ['default', 'primary', 'warning', 'danger', 'success', 'disabled', 'red', '#0000ea', 'rgb(183, 18, 193)'] }}
        class="ion-happy-outline" 
        size="large"
        color={{ value }}
    />
</div>
```

```styl
.k-icon
    margin-right 8px
```
