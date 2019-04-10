---
title:
    zh-CN: 可清除
    en-US: Purgeable
order: 4
---

## zh-CN

指定`clearable`可以展示快速清除按钮

## en-US

Specify ` clearable ` can show quickly remove button

```vdt
import Input from 'kpc/components/input';

<div>
    <Input clearable placeholder="please enter" />
    <br />
    <Input clearable placeholder="please enter">
        <b:suffix><i class="ion-ios-search"></i></b:suffix>
    </Input>
</div>
```

```styl
.k-input
    margin 5px
```
