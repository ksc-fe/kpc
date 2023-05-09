---
title: 禁用某些按钮和页码
order: 7
---

禁用按钮和页码有两种方式

1. `disableBtn`只禁用页码按钮，“上一页”“下一页”按钮依然可点
2. `disablePage`同时禁用页码按钮和“上一页”“下一页”按钮

两个属性类型为：`(page: number, limit: number) => boolean`，返回`true`则禁用

```vdt
import {Pagination} from 'kpc';

<div>
    <Pagination v-model="value1" total={200} disableBtn={this.disableBtn} />
    <Pagination v-model="value2" total={200} showGoto disablePage={this.disablePage} />
</div>
```

```styl
.k-pagination
    margin-bottom 20px 
```

```ts
interface Props {
    value1?: number
    value2?: number
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            value1: 10,
            value2: 10,
        };
    }

    disableBtn(page: number, limit: number) {
        return page > 10;
    }

    disablePage(page: number, limit: number) {
        return page > 10;
    }
}
```
