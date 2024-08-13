---
title: 尺寸
order: 2
---

添加`size`属性，定义如下尺寸：`large`, `default`，`small`，`mini`；`textarea`使用`size`时，仅支持`rows`为`auto`

```vdt
import {Input, Button, Icon} from 'kpc';

<div>
    <Input size="large" value="large" />
    <br />
    <Input value="default" />
    <br />
    <Input value="small" size="small" />
    <br />
    <Input size="small" placeholder="please enter">
        <b:prepend>http://</b:prepend>
        <b:append>.com</b:append>
    </Input>
    <br />
    <Input size="small" placeholder="please enter">
        <b:prefix><i class="ion-earth"></i></b:prefix>
        <b:append><Button size="small" icon type="primary"><Icon class="k-icon k-icon-search" size="small" /></Button></b:append>
    </Input>
    <br />
    <Input size="small" placeholder="please enter" clearable>
        <b:append><Button type="primary" size="small">Search</Button></b:append>
    </Input>
    <br />
    <Input value="mini" size="mini" />
    <br />
    <Input value="textarea auto mini" size="mini" type="textarea" rows="auto"/>
    <br />
    <Input value="textarea auto small" size="small" type="textarea" rows="auto"/>
    <br />
    <Input value="textarea auto default" size="default" type="textarea" rows="auto"/>
    <br />
    <Input value="textarea auto large" size="large" type="textarea" rows="auto"/>
</div>
```

```styl
.k-input
    margin 5px
```
