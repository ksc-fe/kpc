---
title: 基础用法 
order: 0
---

通过`top`可以指定元素固定在顶部的位置，通过`bottom`可以指定元素固定在底部的位置，都不指定时，默认固定在最顶部

> 可以通过缩放浏览器查看效果

```vdt
import Affix from 'kpc/components/affix';
import Button from 'kpc/components/button';

<div>
    <Affix top={{ 87 }}>
        <Button>fix at 87px from the top</Button>
    </Affix>
    <Affix bottom={{ 0 }}>
        <Button>fix at the bottom</Button>
    </Affix>
</div>
```

```styl
.k-affix
    margin-bottom 20px
```
