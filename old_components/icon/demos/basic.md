---
title: 基础用法
order: 0
---

字体采用开源字体库：[ionicons](http://ionicons.com/v2/)

使用`size`属性可以定义图标尺寸，组件内置了4中尺寸: `large` `default` `small` `mini`。你可以通过
数字或这数字字符串自定义图标的大小

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
