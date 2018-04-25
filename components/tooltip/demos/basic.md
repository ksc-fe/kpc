---
title: 基础用法
order: 0
---

使用`Tooltip`包裹需要展示提示的元素，使用`content`属性指定提示文本即可

> 由于`Tooltip`是一个宏函数，Intact下，会返回两个元素，所以不要当做模板的顶级元素，
> 因为Intact模板只能返回一个元素，此时应该用一个元素将它包起来

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
