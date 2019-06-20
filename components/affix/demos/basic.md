---
title: 基础用法 
order: 0
---

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
