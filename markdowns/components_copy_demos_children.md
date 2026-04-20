---
title: 自定义复制按钮
order: 1
---

传入一个唯一的子元素当作`children`，则点击该子元素即可复制相应内容

> `Copy`组件不会产生任何额外的元素

```vdt
import {Copy, Button, Icon} from 'kpc';

<div>
    <Copy text="Hello King Desgin!">
        Copy
    </Copy>
    <Copy text="Hello King Desgin!">
        <Button>Copy</Button>
    </Copy>
    <Copy text="Hello King Desgin!">
        <Button type="link" size="mini">Copy</Button>
    </Copy>
    <Copy text="Hello King Desgin!">
        <Icon class="ion-ios-copy" size="large" hoverable />
    </Copy>
    <Copy text="Hello King Desgin!">
        <Button icon circle>
            <Icon class="ion-ios-copy-outline" />
        </Button>
    </Copy>
</div>
```

```styl
.k-copy
    margin-right 18px
```
