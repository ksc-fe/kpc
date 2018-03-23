---
title: 按钮组
order: 1
---

将`Button`作为`ButtonGroup`的子元素，可以展示按钮组。给`ButtonGroup`添加`vertical`属性，
可以是按钮组纵向排列。给`ButtonGroup`添加`checkType`属性，可以使按钮组拥有单选或复选能力。

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
    <ButtonGroup>
        <Button type="primary" size="small">
            <i class="k-icon ion-ios-arrow-left"></i>上一页
        </Button>
        <Button type="primary" size="small">
            下一页<i class="k-icon ion-ios-arrow-right"></i>
        </Button>
    </ButtonGroup>
    <br /><br />
    <p>纵向按钮组</p>
    <ButtonGroup vertical>
        <Button type="primary" size="small">开机</Button>
        <Button type="primary" size="small">关机</Button>
        <Button type="primary" size="small">重启</Button>
    </ButtonGroup>
    <br /><br />
    <p>radio按钮组</p>
    <ButtonGroup checkType="radio" v-model="city">
        <Button value="beijing" type="small">北京</Button>
        <Button value="shanghai" type="small" ref="__radioShanghai">上海</Button>
        <Button value="guangzhou" type="small">广州</Button>
        <Button value="shenzhen" type="small">深圳</Button>
    </ButtonGroup>
    <p>checkbox按钮组</p>
    <ButtonGroup checkType="checkbox" v-model="cities">
        <Button value="beijing" type="small">北京</Button>
        <Button value="shanghai" type="small" ref="__checkboxShanghai">上海</Button>
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
