---
title: 行样式
order: 5
---

`rowClassName`：给行添加样式，类型`Function`，默认：`function(value, index) {  }`，该函数返回的
字符串将被当做`className`添加到该行上

你也可以直接添加`stripe`属性，使相邻行展示不同的背景色

```vdt
import Table from 'kpc/components/table';

<div>
    <Table scheme={{ {a: '偶数行背景变换'} }} 
        data={{ [{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}] }} 
        rowClassName={{ (value, index) => index % 2 === 0 ? 'odd' : 'even' }}
    />
    <Table scheme={{ {a: '偶数行背景变换'} }} 
        data={{ [{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}] }} 
        stripe
    />
</div>
```

```styl
.k-table
    margin-bottom 20px
.even
    background #f9f9fc
```







