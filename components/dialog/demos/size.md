---
title: 尺寸
order: 0.2
---

添加`size`属性，定义如下尺寸：`large`, `default`，`small`，`mini`；另外你也可以通过`width`属性，给弹窗指定宽度，
如果该值为`Number`类型，则默认单位为`px`，`String`类型时，你需要指定单位

> `width`优先级高于`size`

```vdt
import {Button, ButtonGroup} from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';

<div>
    <ButtonGroup>
        <template v-for={{ ['large', 'default', 'small', 'mini'] }}>
            <Button ev-click={{ self.set.bind(self, `show${value}`, true) }}>Show {{ value }} Dialog</Button>
            <Dialog v-model={{ `show${value}` }} title="Dialog Title" size={{ value }}>
                Size: {{ value }}
            </Dialog>
        </template>
    </ButtonGroup>
    <br /><br />
    <Button ev-click={{ self.set.bind(self, 'customSize', true) }}>Show 300px wide dialog</Button>
    <Dialog v-model="customSize" title="Dialog Title" width={{ 300 }}>
        width: 300px
    </Dialog>
</div>
```

```vue-data
data() {
    return {
        showlarge: false,
        showdefault: false,
        showsmall: false,
        showmini: false,
        customSize: false,
    }
},
```
