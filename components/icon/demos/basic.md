---
title:
    zh-CN: 基本用法
    en-US: Basic Usage
order: 0
---

## zh-CN

字体的开源库：[ionicons]（http://ionicons.com/v2/）
使用`size`属性可以定义图标尺寸，组件内置了4中尺寸: `large` `default` `small` `mini`。你可以通过数字或者数字字符串自定义图标的大小

## en-US

Open source library for fonts: [ionicons](http://ionicons.com/v2/)
Use the `size` attribute to define the icon size. The component has 4 built-in sizes: `large` `default` `small` `mini`. You can customize the size of the icon by numeric or numeric string

```vdt
import Icon from 'kpc/components/icon';

<div>
    <Icon v-for={{ ['36', 'large', 'default', 'small', 'mini'] }}
         class="ion-happy-outline"
         size={{ value }}
    />
</div>
```

```styl
.k-icon
    margin-right 8px
```
