---
title: 
    zh-CN: 基础用法
    en-US: Basic usage
order: 0
---

## zh-CN

使用`Tooltip`包裹需要展示提示的元素，使用`content`属性指定提示文本即可

> 由于`Tooltip`是一个宏函数，Intact下，会返回两个元素，所以不要当做模板的顶级元素，
> 因为Intact模板只能返回一个元素，此时应该用一个元素将它包起来

## en-US

You need to show prompt element when using `Tooltip` package, and you can specify prompt content by `content` property.

> Because `Tooltip` is a macro function, it will return two elements in Intact,so it don't be used as the top element of the template.
> Because Intact template only returns one element, so it should be wrapped with an element

```vdt
import Tooltip from 'kpc/components/tooltip';

<div>
    <Tooltip content="hello">
        hover the text
    </Tooltip>
    <br /> <br />
    <Tooltip>
        don't show anything if content is empty 
    </Tooltip>
</div>
```
