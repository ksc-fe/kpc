---
title:
    zh-CN: 基础用法
    en-US: Basic
order: 0
---

## zh-CN

`Pagination`的基本用法，通过`total`指定数据总条数，`limit`指定每页数据条数，`limits`数组定义可供选择的条数。可以通过`change`事件来监听组件`current`和`limit`的变化，组件会将`current`和`limit`以对象的方式传给事件回调函数。

## en-US

The basic usage of `Pagination`, the total number of data is specified by `total`, `limit` specifies the number of data per page, and the `limits` array defines the number of items to choose. You can listen for changes to the components `current` and `limit` through the `change` event. The component passes the `current` and `limit` objects to the event callback function.

```vdt
import Pagination from 'kpc/components/pagination';

<div>
    <Pagination total={{ 200 }} ref="__test" ev-change={{ self._onChange }}/>
    <Pagination total={{ 200 }} limit={{ 20 }} />
    <Pagination total={{ 200 }} limit={{ 20 }} limits={{ [10, 20, 50, 100] }}/>
</div>
```

```styl
.k-pagination
    margin-bottom 20px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    _onChange(v) {
        console.log(v);
    }
}
```
