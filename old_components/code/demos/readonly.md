---
title: 只读 
order: 1
---

添加`readonly`属性，置为只读状态

```vdt
import Code from 'kpc/components/code';

<Code v-model="value" height="200px" readonly />
```

```js
const code = `function test() {
    console.log('hello world');
}`;
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value: code
        }
    }
}
```
