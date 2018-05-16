---
title: 定义文案
order: 1
---

定义开关开启/关闭时文案，可以通过以下两种方式来定义：
1. 通过属性`on` `off`来定义，可以传入字符串或者`vNode`对象
2. 通过扩展点`on` `off`来定义

```vdt
import {Switch} from 'kpc/components/switch';

<div>
    <Switch on="开" off="关" />
    <Switch value={{ true }}>
        <b:on><i class="ion-ios-checkmark-empty"></i></b:on>
        <b:off><i class="ion-ios-close-empty"></i></b:off>
    </Switch>
</div>
```

```styl
.k-switch
    margin-right 20px
```
