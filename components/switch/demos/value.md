---
title: 开关值
order: 5
---

`Switch`默认选中的值为`true`，非选中的值为`false`，通过`trueValue`和`falseValue`属性，
我们可以指定选中和非选中的值。

```vdt
import {Switch} from 'kpc/components/switch';

<div>
    <div style="margin-bottom: 20px">
        <Switch v-model="value1" /> {{ JSON.stringify(self.get('value1')) }}
    </div>
    <div>
        <Switch v-model="value2" trueValue={{ 1 }} falseValue="1" /> {{ JSON.stringify(self.get('value2')) }}
    </div>
</div>
```
