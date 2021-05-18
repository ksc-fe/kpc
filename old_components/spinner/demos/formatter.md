---
title: 格式化展示 
order: 4
---

格式化展示的值有两种方式：

1. 通过`formatter`和`parser`来定义格式化和解析的函数
2. 对于简单的添加单位的情况，组件提供了简单的使用方式，通过`prefix`定义前缀，`suffix`定义后缀

> 当`formatter / parser`和`prefix / suffix`同时定义时，前者的优先级更高

```vdt
import Spinner from 'kpc/components/spinner';

<div>
    <Spinner vertical 
        v-model="money"
        formatter={{ value => ('￥' + value).replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}
        parser={{ value => value.replace(/￥|,/g, '') }}
    />
    <Spinner vertical 
        prefix="增长率 "
        suffix="%"
        v-model="percent"
    />
</div>
```

```styl
.k-spinner
    margin-right 16px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            money: 1000,
            percent: 78,
        };
    }
}
```
