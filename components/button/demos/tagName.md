---
title: 
    zh-CN: 指定按钮tagName
    en-US: Specify tagName
order: 5
---

## zh-CN

`Button`默认渲染成`button`元素，通过`tagName`，我们可以渲染成任意元素或组件。
此时，我们可以通过`tagProps`属性，给指定的`tagName`传递与`Button`属性名相冲突的属性。

> 当给`Button`指定`href`属性时，则它会强制渲染成`a`标签

## en-US

The default `Button` is rendered to an `button` element. It can render to any element or component 
through `tagName` property. At this point, we can pass properties that conflict with the `Button` 
to the specified element through `tagProps` property.

> When add a `href` property to `Button`, it will render to a `a` element forcely.

```vdt
import Button from 'kpc/components/button';

<div>
    <Button tagName="div" type="primary">div element button</Button>
    <Button tagName="div" disabled>disabled div button</Button>
    <Button href="https://www.ksyun.com" target="_blank">hyperlink button</Button>
</div>
```

```styl
.k-btn
    margin-right 20px
```
