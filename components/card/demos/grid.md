---
title: 分栏卡片
order: 3
---

```vdt
import {Card, CardColumn} from 'kpc/components/card';
import Icon from 'kpc/components/icon';

<div>
    <Card>
        <CardColumn width="100px"><Icon class="ion-person" /></CardColumn>
        <CardColumn>用户名：test</CardColumn>
    </Card>
</div>
```

```styl
.k-card
    margin-bottom 16px
```
