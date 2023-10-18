---
title: 可清除
order: 4
---

指定`clearable`可以展示快速清除按钮，如果同时指定`stackClearIcon`则将清空按钮覆盖在`suffix`按钮上展示来节省空间

```vdt
import {Input, Icon} from 'kpc';

<div>
    <Input clearable placeholder="please enter" />
    <br />
    <Input value="disabled" clearable disabled />
    <br />
    <Input clearable placeholder="please enter">
        <b:suffix><Icon class="k-icon-search" hoverable /></b:suffix>
    </Input>
    <br />
    <Input clearable stackClearIcon placeholder="please enter">
        <b:suffix><Icon class="k-icon-search" hoverable /></b:suffix>
    </Input>
</div>
```

```styl
.k-input
    margin 5px
```
