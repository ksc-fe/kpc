---
title: 定义switch切换前的拦截函数
order: 8
---

给`Switch`添加`beforeChange`函数，来定义开关切换之前的逻辑，如果该函数返回`true`则成功切换，否则忽略本次切换

> 支持异步函数

```vdt
import {Switch} from 'kpc';

<div>
    <Switch v-model="value1" trueValue={1} falseValue={0} beforeChange={this.beforeChange} />
    <Switch v-model="value2" beforeChange={this.beforeChangeFalse} />
</div>
```

```styl
.k-switch
    margin-right 20px
```

```ts
import { Message } from 'kpc';
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            value1: 0,
            value2: false,
        }
    }

    beforeChange(from: any, to: any) {
        return new Promise<boolean>(resolve => {
            Message.warning(`current value is ${from}, to value is ${to}`);
            setTimeout(() => {
                resolve(true);
            }, 1000);
        });
    }
    beforeChangeFalse(from: any, to: any) {
        Message.warning(`current value is ${from}, to value is ${to}`);
        return new Promise<boolean>(resolve => {
            setTimeout(() => {
                resolve(false);
            }, 1000);
        });
    }
}
```
