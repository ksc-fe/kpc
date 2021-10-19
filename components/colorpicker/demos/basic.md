---
title: 基本用法
order: 0
---

组件接收任意合法的颜色字符串当做`value`值

```vdt
import {Colorpicker} from 'kpc/components/colorpicker';

<div>
    <Colorpicker v-model="color" />
    <span style={{color: this.get('color'), marginLeft: '10px', verticalAlign: 'middle'}}>
        Hello, Colorpicker!
    </span>
</div>
```

```ts
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            color: '#d99123'
        }
    }
}
```
