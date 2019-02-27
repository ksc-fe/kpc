---
title: 
    zh-CN: 关闭按钮
    en-US: Close button
order: 1
---

## zh-CN

给组件添加`closable`属性，可以关闭标签，关闭后会触发`close`事件

> 如果仅仅指定了`closable`属性，那么组件的开启和关闭是组件内部自己维护的状态，
> 一旦组件被重新创建，那么又会回到默认开启状态，所以如果你需要维持组件的状态，
> 需要自己维护`closed`属性，或者通过`v-if`来控制组件

## en-US

You can close the tag through adding `closable` property to component, it will trigger `close` event when it is closed

> If you only specified the `closable` property, the open and closed states of the component are maintained by the component itself.
> Once the component is recreated, it will back to the default states, so if you need to maintain the states of the component, you need to maintain the `closed` property by yourself, or control the component by `v-if`.

```vdt
import Tag from 'kpc/components/tag';

<div>
    <Tag v-for={{ ['default', 'primary', 'success', 'warning', 'danger'] }}
        key={{ value }}
        type={{ value }}
        closable
    >{{ value }}</Tag>
    <Tag disabled closable>disabled</Tag>
</div>
```

```styl
.k-tag
    margin-right 16px
```
