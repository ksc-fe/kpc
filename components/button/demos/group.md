---
title: 
    zh-CN: 按钮组
    en-US: Button Group
order: 1
---

## zh-CN

将`Button`作为`ButtonGroup`的子元素，可以展示按钮组。给`ButtonGroup`添加`vertical`属性，
可以是按钮组纵向排列。给`ButtonGroup`添加`checkType`属性，可以使按钮组拥有单选或复选能力。

## en-US

Use `Button` as the children of `ButtonGroup` to display group buttons. You can arrange the buttons 
vertically by adding `vertical` property to `ButtonGroup`, and you can make the button group have the 
ability to check like `radio` or `checkbox` by adding `checkType` property.

```vdt
import {Button, ButtonGroup} from 'kpc/components/button';

<div>
    <ButtonGroup>
        <Button>Boot</Button>
        <Button>Shut down</Button>
        <Button>Reboot</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary">Boot</Button>
        <Button type="primary">Shut down</Button>
        <Button type="primary">Reboot</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary">
            <i class="k-icon ion-ios-arrow-left"></i>Previous page
        </Button>
        <Button type="primary">
            Next page<i class="k-icon ion-ios-arrow-right"></i>
        </Button>
    </ButtonGroup>
    <br /><br />
    <p>Vertical button group</p>
    <ButtonGroup vertical>
        <Button type="primary">Boot</Button>
        <Button type="primary">Shut down</Button>
        <Button type="primary">Reboot</Button>
    </ButtonGroup>
    <br /><br />
    <p>radio type button group</p>
    <ButtonGroup checkType="radio" v-model="city">
        <Button value="beijing">Beijing</Button>
        <Button value="shanghai" ref="__radioShanghai">Shanghai</Button>
        <Button value="guangzhou">Guangzhou</Button>
        <Button value="shenzhen">Shenzhen</Button>
    </ButtonGroup>
    <p>checkbox type button group</p>
    <ButtonGroup checkType="checkbox" v-model="cities">
        <Button value="beijing" size="small">Beijing</Button>
        <Button value="shanghai" size="small" ref="__checkboxShanghai">Shanghai</Button>
        <Button value="guangzhou" size="small">Guangzhou</Button>
        <Button value="shenzhen" size="small">Shenzhen</Button>
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
            city: 'beijing',
            cities: [],
        };
    }
}
```
