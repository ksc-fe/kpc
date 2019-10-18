---
title: 可清除
order: 4
---

指定`clearable`可以展示快速清除按钮

```vdt
import Input from 'kpc/components/input';

<div>
    <Input clearable placeholder="please enter" />
    <br />
    <Input clearable placeholder="please enter">
        <b:suffix><i class="ion-ios-search"></i></b:suffix>
    </Input>
    <br />
    <Input clearable stackClearIcon placeholder="please enter">
        <b:suffix><i class="ion-ios-search"></i></b:suffix>
    </Input>
</div>
```

```styl
.k-input
    margin 5px
```
