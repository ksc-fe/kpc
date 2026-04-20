---
title: tooltip位置
order: 1
---

`position`属性可以设置`tooltip`的位置，参看[Tooltip](https://design.ksyun.com/components/tooltip/?_blank){target="_blank"}组件的`position`属性。

```vdt
import {Ellipsis} from 'kpc';

<div>
    <Ellipsis position="right" style={{width: '90px'}}>tooltip在右侧tooltip在右侧</Ellipsis>
    <Ellipsis position="bottom" style={{width: '90px'}}>tooltip在下方tooltip在下方</Ellipsis>
</div>  
```

```styl
.k-split
    border 1px solid #ccc
    height 200px
    margin-bottom 20px
.panel
    margin 10px
```
