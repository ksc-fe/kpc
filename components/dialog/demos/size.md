---
title: 尺寸
order: 0.1
---

添加`size`属性，定义如下尺寸：`large`, `default`，`small`，`mini`

```vdt
import Button, {ButtonGroup} from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';

<div>
    <ButtonGroup>
        {{ do {
            ['large', 'default', 'small', 'mini'].map(value => {
                return [
                    <Button ev-click={{ self.set.bind(self, `show${value}`, true) }}>Show {{ value }} Dialog</Button>,
                    <Dialog v-model={{ `show${value}` }} title="Dialog Title" size={{ value }}>
                        Size: {{ value }}
                    </Dialog>
                ]
            })
        } }}
    </ButtonGroup>
</div>
```
