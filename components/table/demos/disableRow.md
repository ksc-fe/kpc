---
title: 禁用行可选
order: 9
---

`disableRow`：禁用某一行可选状态，类型：`Function`，默认：`function(data, index) { return false }`，该函数
如果返回`true`，则表示禁用该行可选

对于`disabled`的行，它的选中状态不会随全选/反全选而改变

> 禁用的行会添加`k-disabled`样式名

```vdt
import Table from 'kpc/components/table';

<Table scheme={{ {a: '奇数行不可点击'} }}
    data={{ [{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}] }}
    disableRow={{ (data, index) => index % 2 === 0 }}
    v-model:checkedKeys="checkedKeys"
    rowKey={{ data => data.a }}
    ref="__test"
/>
```

```styl
.k-disabled
   background-color: #d9d9d9 !important
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            checkedKeys: ['3']
        }
    }
}
```
