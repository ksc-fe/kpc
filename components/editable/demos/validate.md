---
title: 验证输入
order: 1
---

使用`validate`属性，指定输入验证规则，改值可以是函数/正则/正则字符串。验证失败，
输入框会添加className: `k-invalid`，用以改变样式。我们还可以绑定`error`事件
弹出更多错误提示。

```vdt
import Editable from 'kpc/components/editable';

<div>
    <Editable v-model="value" validate={{ value => /\d+/.test(value) }}
        ref="__test1"
    >{{ self.get('value') }}</Editable>
    <br />
    <Editable v-model="value" validate={{ /\d+/ }}
        ref="__test2"
    >{{ self.get('value') }}</Editable>
    <br />
    <Editable v-model="value" validate="\d+"
        ev-error={{ self._showErrorTip }}
        ref="__test3"
    >{{ self.get('value') }}</Editable>
</div>
```

```js
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {value: 100};
    }

    _showErrorTip(c, value) {
        Message.error('Please enter digits.');
    }
} 
```
