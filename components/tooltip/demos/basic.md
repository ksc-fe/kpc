---
title: 基础用法
order: 0
---

使用`Tooltip`包裹需要展示提示的元素，使用`content`属性指定提示文本即可，组件默认为深色主题`dark`，你可以通过
`theme`指定浅色主题`light`，通过`disabled`属性可以禁用提示，通过`size`可以指弹层的大小：`small` `default`

> 由于`Tooltip`是一个宏函数，Intact下，会返回两个元素，所以不要当做模板的顶级元素，
> 因为Intact模板只能返回一个元素，此时应该用一个元素将它包起来

> `@since 1.0.0` `Tooltip`在`Vue/React`下渲染不会被元素包裹，这可能会影响你之前项目中定义的样式，
> 如需渲染包裹元素，请做如下配置
> ```js
> // @code 
> import {configure} from 'kpc/components/utils';
>
> // 该配置全局生效
> configure({useWrapper: true});
> ```


```vdt
import Tooltip from 'kpc/components/tooltip';

<div>
    <Tooltip content="hello">
        hover the text
    </Tooltip>
    <br /><br />
    <Tooltip content="hello" size="small">
        small size
    </Tooltip>
    <br /><br />
    <Tooltip>
        don't show anything if content is empty 
    </Tooltip>
    <br /><br />
    <Tooltip content="hello" theme="light">
        light theme 
    </Tooltip>
    <br /><br />
    <Tooltip content="hello" disabled>
        disabled
    </Tooltip>
</div>
```
