---
title:
    zh-CN: 颜色
    en-US: color
order: 1
---

## zh-CN

使用`color`属性可以定义图标的颜色，组件内置了4中颜色：`primary` `warning` `danger` `success`。你也可以自定义`color`值

## en-US

Use the `color` attribute to define the color of the icon. The component has 4 colors built in it: `primary` `warning` `danger` `success`. You can also customize the `color` value.

```vdt
import Icon from 'kpc/components/icon';

<div>
    <Icon
        v-for={{ ['default', 'primary', 'warning', 'danger', 'success', 'red', '#0000ea', 'rgb(183, 18, 193)'] }}
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
