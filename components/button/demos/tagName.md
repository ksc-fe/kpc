---
title: 指定按钮tagName
order: 5
---

`Button`默认渲染成`button`元素，通过`tagName`，我们可以渲染成任意元素或组件。

> 当给`Button`指定`href`属性时，则它会强制渲染成`a`标签

```vdt
import {Button} from 'kpc';

<div>
    <Button tagName="div" type="primary">div元素按钮</Button>
    <Button tagName="div" disabled>disabled div button</Button>
    <Button href="https://www.ksyun.com" target="_blank">超链接按钮</Button>
</div>
```

```styl
.k-btn
    margin-right 20px
```
