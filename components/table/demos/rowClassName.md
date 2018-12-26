---
title: 行样式
order: 5
---

`rowClassName`：给行添加样式，类型`Function`，默认：`function(value, index) {  }`，该函数返回的
字符串将被当做`className`添加到该行上

```vdt
import Table from 'kpc/components/table';

<Table scheme={{ {a: '偶数行背景变换'} }} 
    data={{ [{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}] }} 
    rowClassName={{ (value, index) => index % 2 === 0 ? 'even' : 'odd' }}
/>
```

```styl
.even
    background #efefef
```







