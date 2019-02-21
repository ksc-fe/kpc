---
title: 
    zh-CN: 尺寸
    en-US: Size
order: 0.1
---

## zh-CN

添加`size`属性，定义如下尺寸：`large`, `default`，`small`，`mini`

## en-US

Add `size` property,  defines the following sizes: `large`, `default`, `small`,`mini`

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
</div>
```

```vue-data
data() {
    return {
        showlarge: false,
        showdefault: false,
        showsmall: false,
        showmini: false
    }
},
```
