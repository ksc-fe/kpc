---
title: 按钮组
order: 1
---

将`Button`作为`ButtonGroup`的子元素，可以展示按钮组。给`ButtonGroup`添加`radio`属性
可以使按钮组拥有类似radio的单选能力。

```vdt
import {Button, ButtonGroup} from 'kpc/components/button';

<div>
    <ButtonGroup>
        <Button>开机</Button>
        <Button>关机</Button>
        <Button>重启</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary" size="small">开机</Button>
        <Button type="primary" size="small">关机</Button>
        <Button type="primary" size="small">重启</Button>
    </ButtonGroup>
    <ButtonGroup vertical>
        <Button type="primary" size="small">开机</Button>
        <Button type="primary" size="small">关机</Button>
        <Button type="primary" size="small">重启</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary" size="small">
            <i class="k-icon ion-ios-arrow-left"></i>上一页
        </Button>
        <Button type="primary" size="small">
            下一页<i class="k-icon ion-ios-arrow-right"></i>
        </Button>
    </ButtonGroup>
    <br /><br />
    <p>radio按钮组</p>
    <ButtonGroup radio v-model="city">
        <Button value="beijing" type="small">北京</Button>
        <Button value="shanghai" type="small">上海</Button>
        <Button value="guangzhou" type="small">广州</Button>
        <Button value="shenzhen" type="small">深圳</Button>
    </ButtonGroup>
</div>
```

```styl
.k-btns
    margin-right 20px
```

```js
import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            city: 'beijing'
        };
    }
}
```

```vue
<template>
    <div>
        <ButtonGroup>
            <Button>开机</Button>
            <Button>关机</Button>
            <Button>重启</Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button type="primary" size="small">开机</Button>
            <Button type="primary" size="small">关机</Button>
            <Button type="primary" size="small">重启</Button>
        </ButtonGroup>
        <ButtonGroup vertical>
            <Button type="primary" size="small">开机</Button>
            <Button type="primary" size="small">关机</Button>
            <Button type="primary" size="small">重启</Button>
        </ButtonGroup>
    </div>
</template>
<style src="./index.styl" lang="stylus"></style>
<script>
import {Button, ButtonGroup} from 'kpc/components/button';

export default {
    components: {
        Button, ButtonGroup
    }
}
</script>
```
