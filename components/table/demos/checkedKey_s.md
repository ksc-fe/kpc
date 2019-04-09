---
title: 
    zh-CN: 行选中
    en-US: Row selected
order: 3
---

## zh-CN

通过`checkedKey`（radio类型）或者`checkedKeys`（checkbox类型）来控制哪些行被选中，默认他们的取值
为行的索引或索引数组。但我们也可以通过`rowKey`函数为每一行指定唯一的`key`，此时他们的取值为`key`值
或`key`值的数组

## en-US

You can control which rows to be selected through `checkedKey` (radio type) or `checkedKeys` (checkbox type), their values ​​are the index or index array of the row. but we can also specify a unique `key` for the each of row by `rowKey` function, then their values are `key` values or `key` values array.

```vdt
import Table from 'kpc/components/table';

<div>
    <div class='no-data-template'>
        <Table scheme={{ {a: "radio don't specify rowKey"} }}
            data={{ self.get('data1') }}
            checkedKey={{ 0 }}
            checkType='radio'
        />
        <Table scheme={{ {text: 'radio is specified as the id of item'} }} 
            data={{ self.get('data2') }} 
            checkType='radio' 
            rowKey={{ self.setRowKey }}  
            checkedKey="yes"
        />
    </div>
    <div class='no-data-template'>
        <Table scheme={{ {a: "checkbox don't specify rowKey"} }} 
            data={{ self.get('data3') }} 
            checkedKeys={{ [0, 2] }}
        />
        <Table scheme={{ {text: 'checkbox is specified as the id of item'} }} 
            data={{ self.get('data2') }} 
            rowKey={{ self.setRowKey }} 
            checkedKeys={{ ['yes'] }}
        />
    </div>
</div>
```

```styl
.no-data-template
    display: flex
    margin-bottom: 20px
    .k-table-wrapper
        margin-left: 20px
```

```js

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data1: [{a: 'default value selected'}, {a: 'unselected'}],
            data2: [{text: 'selected', id: 'yes'}, {text: 'unselected', id: 'no'}],
            data3: [{a: 'default value selected'}, {a: 'unselected'}, {a: 'default value selected，it can set many value'}],
        }
    }

    setRowKey(value, index) {
        return value.id;
    }
}
```
