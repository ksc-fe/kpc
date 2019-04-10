---
title:
    zh-CN: textarea文本框
    en-US: Textarea box
order: 3
---

## zh-CN

指定`type`为`textarea`渲染成文本框，同时可以用`rows`来指定展示的行数

## en-US

Specify ` type ` for ` textarea ` rendering into the text box, at the same time can use ` rows ` to specify the number of rows


```vdt
import Input from 'kpc/components/input';

<div>
    <Input type="textarea" placeholder="please enter" />
    <br />
    <Input type="textarea" rows="5" placeholder="please enter" />
</div>
```
