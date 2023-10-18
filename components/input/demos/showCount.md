---
title: 展示提示数字
order: 11
---

添加`showCount`属性，展示字符长度提示数字

```vdt
import {Input} from 'kpc';

<div>
    <Input placeholder="Please enter" showCount maxlength="10" />
    <br /><br />
    <Input type="textarea" placeholder="please enter" showCount maxlength="10" />
</div>
```
