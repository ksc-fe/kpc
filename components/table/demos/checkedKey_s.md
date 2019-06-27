---
title: 行选中
order: 3
---

通过`checkedKey`（radio类型）或者`checkedKeys`（checkbox类型）来控制哪些列被选中，默认他们的取值
为行的索引或索引数组。但我们也可以通过`rowKey`函数为每一行指定唯一的`key`，此时他们的取值为`key`值
或`key`值的数组

```vdt
import Table from 'kpc/components/table';

<div>
    <div class='no-data-template'>
        <Table scheme={{ {a: 'radio不指定rowKey'} }}
            data={{ self.get('data1') }}
            checkedKey={{ 0 }}
            checkType='radio'
        />
        <Table scheme={{ {text: 'radio指定为item的id'} }} 
            data={{ self.get('data2') }} 
            checkType='radio' 
            rowKey={{ self.setRowKey }}  
            checkedKey="yes"
        />
    </div>
    <div class='no-data-template'>
        <Table scheme={{ {a: 'checkbox不指定rowKey'} }} 
            data={{ self.get('data3') }} 
            checkedKeys={{ [0, 2] }}
        />
        <Table scheme={{ {text: 'checkbox指定为item的id'} }} 
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
            data1: [{a: '赋默认值选中'}, {a: '不选中'}],
            data2: [{text: '选中', id: 'yes'}, {text: '不选中', id: 'no'}],
            data3: [{a: '赋默认值选中'}, {a: '不选中'}, {a: '赋默认值选中，可设置多个'}],
        }
    }

    setRowKey(value, index) {
        return value.id;
    }
}
```
