---
title: 位置
order: 0.1
---

添加`placement`属性，定义如下位置：`top`,`bottom`,`left`,`right`。默认`right`从右侧出现

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
                value: '从上侧出现'
            }, {
                key: 'bottom',
                value: '从下侧出现'
            }, {
                key: 'left',
                value: '从左侧出现'
            }, {
                key: 'right',
                value: '从右侧出现'
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
