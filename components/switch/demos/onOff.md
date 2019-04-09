---
title: 
    zh-CN: 定义文案
    en-US: Defining copy
order: 1
---

## zh-CN

定义开关开启/关闭时文案，可以通过以下两种方式来定义：
1. 通过属性`on` `off`来定义，可以传入字符串或者`vNode`对象
2. 通过扩展点`on` `off`来定义

## en-US

Defining the copy on/off switch can be defined in two ways:
1. Defined by the attribute `on` `off`, you can pass in a string or a `vNode` object.
2. Define by extending the point `on` `off`

```vdt
import {Switch} from 'kpc/components/switch';

<div>
    <Switch on="on" off="off" />
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
