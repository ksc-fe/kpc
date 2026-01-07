---
title: 颜色 
order: 1
---

使用`color`属性可以定义图标的颜色，组件内置了4种颜色：`primary` `warning` `danger` `success`。你也
可以自定义`color`值；给组件添加`hoverable`属性，可以展示`hover`效果

```vdt
import {Icon} from 'kpc';

<div>
    <Icon 
        v-for={['default', 'primary', 'warning', 'danger', 'success', 'red', '#0000ea', 'rgb(183, 18, 193)']}
        class="ion-happy-outline" 
        size="large"
        color={$value}
    />
    <br />
    <br />
    <Icon 
        v-for={['default', 'primary', 'warning', 'danger', 'success', 'red', '#0000ea', 'rgb(183, 18, 193)']}
        class="ion-happy-outline" 
        size="large"
        color={$value}
        hoverable
    />
</div>
```

```styl
.k-icon
    margin-right 8px
```
