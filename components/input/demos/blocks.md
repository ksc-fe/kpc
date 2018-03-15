---
title: 追加内容
order: 1
---

使用`append`，`prepend`，`suffix`，`prefix`扩展点，可以往组件追加内容

```vdt
import Input from 'kpc/components/input';
import Button from 'kpc/components/button';

<div>
    <Input placeholder="please enter">
        <b:prepend>http://</b:prepend>
        <b:append>.com</b:append>
    </Input>
    <Input placeholder="please enter">
        <b:append><Button icon type="none"><i class="ion-ios-search"></i></Button></b:append>
    </Input>
    <Input placeholder="please enter">
        <b:append><Button icon type="primary"><i class="ion-ios-search"></i></Button></b:append>
    </Input>
    <Input placeholder="please enter">
        <b:append><Button type="primary">搜索</Button></b:append>
    </Input>
    <Input placeholder="please enter">
        <b:prefix><i class="ion-earth"></i></b:prefix>
        <b:suffix><i class="ion-ios-search"></i></b:suffix>
    </Input>
    <Input placeholder="please enter">
        <b:prepend>http://</b:prepend>
        <b:append>.com</b:append>
        <b:prefix><i class="ion-earth"></i></b:prefix>
        <b:suffix><i class="ion-ios-search"></i></b:suffix>
    </Input>
</div>
```

```styl
.k-input
    margin 5px
```
