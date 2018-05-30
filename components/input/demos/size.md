---
title: 尺寸
order: 2
---

添加`size`属性，定义如下尺寸：`large`, `default`，`small`，`mini`

```vdt
import Input from 'kpc/components/input';
import Button from 'kpc/components/button';

<div>
    <Input size="large" value="large" />
    <br />
    <Input value="default" />
    <br />
    <Input value="small" size="small" />
    <Input size="small" placeholder="please enter">
        <b:prepend>http://</b:prepend>
        <b:append>.com</b:append>
    </Input>
    <Input size="small" placeholder="please enter">
        <b:append><Button size="small" icon type="primary"><i class="ion-ios-search"></i></Button></b:append>
    </Input>
    <Input size="small" placeholder="please enter">
        <b:append><Button type="primary" size="small">Search</Button></b:append>
    </Input>

    <Input value="mini" size="mini" />
</div>
```

```styl
.k-input
    margin 5px
```
