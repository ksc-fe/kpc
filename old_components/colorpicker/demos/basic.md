---
title: 基本用法
order: 0
---

组件接收任意合法的颜色字符串当做`value`值

```vdt
import Colorpicker from 'kpc/components/colorpicker';

<div>
    <Colorpicker v-model="color" />
    <span style={{ {color: self.get('color'), marginLeft: '10px', verticalAlign: 'middle'} }}>
        Hello, Colorpicker!
    </span>
</div>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            color: '#d99123'
        }
    }
}
```
