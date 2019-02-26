---
title: 
    zh-CN: 关闭按钮
    en-US: Close button
order: 1
---

## zh-CN

给组件添加`closable`属性，可以关闭标签，关闭后会触发`close`事件；可以通过`close`扩展点来自定义
关闭按钮的内容

> 如果仅仅指定了`closable`属性，那么组件的开启和关闭是组件内部自己维护的状态，
> 一旦组件被重新创建，那么又会回到默认开启状态，所以如果你需要维持组件的状态，
> 需要自己维护`closed`属性，或者通过`v-if`来控制组件

## en-US

You can close the tag through adding `closable` property to component, it will trigger `close` event when it is closed; you can customize the content of the close button by `close` block.

> If you only specify `closable` property, the opening and closing status of component need to maintain by component itself.
> Once the component is be recreated ,it will return to the default status, so if you need to maintain the state of the component,and you need to maintain `closed` property by yourself, or controling the component by `v-if`.

```vdt
import Tip from 'kpc/components/tip';

<div>
    <Tip v-for={{ ['default', 'primary', 'success', 'warning', 'danger'] }}
        key={{ value }}
        type={{ value }}
        closable
    >{{ value }}</Tip>
    <Tip closable>
        custom closing content
        <b:close>No longer show</b:close>
    </Tip>
</div>
```

```styl
.k-tag
    margin-bottom 8px
```
