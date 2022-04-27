---
title: 禁用状态
order: 3
---


```vdt
import {Colorpicker} from 'kpc';

<Colorpicker v-model="color" disabled />
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
