---
title: 
    zh-CN: 图标按钮
    en-US: Icon Button
order: 1
---

## zh-CN

给`Button`添加`icon`属性，可以展示图标按钮。图标按钮仅仅是使按钮的宽高相等，
此时你可以将任意图标元素作为它的子元素。`circle`属性可以展示圆形图标。如果
你不需要宽高相等的图标按钮，而仅仅是带图标的文字按钮，去掉`icon`属性即可。

## en-US

Add a `icon` property to `Button` to diplay icon button. The icon button means the width and height 
are equal, and you can use any icon element as its child. The `circle` property can display circular 
icon button. If you don't need an icon button with the same width and height, but just a text button 
with an icon, remove the `icon` property.

```vdt
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';

<div>
    <Button icon><Icon class="ion-ios-search" /></Button>
    <Button icon circle><Icon class="ion-ios-search" /></Button>
    <Button type="primary"><Icon class="ion-ios-search" size="small" />Search</Button>
    <Button circle type='primary'><Icon class="ion-ios-search" size="small" />Search</Button>
</div>
```

```styl
.k-btn
    margin-right 20px
```
