---
title: 
    zh-CN: 行样式
    en-US: Row style
order: 5
---

## zh-CN

`rowClassName`：给行添加样式，类型`Function`，默认：`function(value, index) {  }`，该函数返回的
字符串将被当做`className`添加到该行上

## en-US

`rowClassName`: add style to the row, the type is `Function`, default: `function(value, index) {  }`, the string returned by the function will be added to the row as a `className`.

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







