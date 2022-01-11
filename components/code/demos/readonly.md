---
title: 只读 
order: 1
---

添加`readOnly`属性，置为只读状态

```vdt
import {Code} from 'kpc';

<Code v-model="value" height="200px" readOnly />
```

```ts
const code = `function test() {
    console.log('hello world');
}`;
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            value: code
        }
    }
}
```
