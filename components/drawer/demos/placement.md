---
title:
    zh-CN: 位置
    en-US: Position
order: 0.1
---

## zh-CN

添加`placement`属性，定义如下位置：`top`,`bottom`,`left`,`right`。默认`right`从右侧出现

## en-US

Add the `placement` property to define the following positions: `top` `bottom` `left` `right`. 
The default value is `right`.

```vdt
import Drawer from 'kpc/components/drawer';
import {Button, ButtonGroup} from 'kpc/components/button';

<div>
    <ButtonGroup>
        <Button v-for={{ self.get('showList') }} 
            ev-click={{ self.showDrawer.bind(self, value.key) }}
        >{{ value.value }}</Button>
    </ButtonGroup>

    <Drawer v-model='show'
        title='Drawer Title' 
        ref='__demoTwo' 
        placement={{ self.get('showPosition') }} 
        size='small'
    >
        Drawer Body
    </Drawer>
</div>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            show: false,
            showPosition: 'right',
            showList: [{
                key: 'top',
                value: 'Appear from Top'
            }, {
                key: 'bottom',
                value: 'Appear from Bottom'
            }, {
                key: 'left',
                value: 'Appear from Left'
            }, {
                key: 'right',
                value: 'Appear from Right'
            },]
        }
    }

    showDrawer(value) {
        this.set({
            'showPosition': value,
            'show': true
        });
    }
}
```

```vue-methods
showDrawer(value) {
    this.showPosition = value;
    this.show = true;
}
```
