---
title: 指定按钮tagName
order: 5
---

`Button`默认渲染成`button`元素，通过`tagName`，我们可以渲染成任意元素或组件。
此时，我们可以通过`tagProps`属性，给指定的`tagName`传递与`Button`属性名相冲突的属性。
__注意：当给`Button`指定`href`属性时，则它会强制渲染成`a`标签__

```vdt
import Button from 'kpc/components/button';

<div>
    <Button tagName="div" type="primary">div元素按钮</Button>
    <Button href="https://www.ksyun.com" 
        style="margin-left: 20px;"
        target="_blank"
    >超链接按钮</Button>
</div>
```
