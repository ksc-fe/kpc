---
title: 文本框自适应高度
order: 3.1
---

当`textarea`组件`rows`属性设置成`'auto'`时，组件的高度将会自适应，此时组件从1行高度开始，根据内容自动调整高度。
你也可以通过对象`{min, max}`来设置文本框最小和最大的自动调整行数。

> 自适应高度，文本框将禁用鼠标拖拽调整大小

```vdt
import {Input} from 'kpc';

<div>
    <Input
        v-model="value1"
        type="textarea"
        placeholder="please enter"
        fluid
        rows="auto"
    />
    <br />
    <br />
    <Input
        v-model="value2"
        type="textarea"
        placeholder="please enter"
        fluid
        rows={{min: 3, max: 5}}
    />
</div>
```

```ts
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            value1: '',
            value2: '',
        }
    }
}
```
