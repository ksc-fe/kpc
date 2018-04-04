---
title: 行选中
order: 3
---

* `rowKey`：设置行的`key`值，类型：`Function`，默认：行的`index`
* `checkedKey`：设置/获取表格被选中的行信息（针对`radio`），类型：任何，控制是否选中会根据rowKey的设置判断。
* `checkedKeys`：设置/获取表格被选中的行信息（针对`checkbox`）类型：`Array`，可以设置多个，控制是否选中会根据rowKey的设置判断。

```vdt
import Table from 'kpc/components/table';
var data1 = [{a: '赋默认值选中'}, {a: '不选中'}];
var data2 = [{text: '选中', id: 'yes'}, {text: '不选中', id: 'no'}];
var data3 = [{a: '赋默认值选中'}, {a: '不选中'}, {a: '赋默认值选中，可设置多个'}];


<div>
    <div class='no-data-template'>
        <Table scheme={{ {a: 'radio不指定rowKey'} }} data={{data1}} checkedKey={{0}} checkType='radio'/>
        <Table scheme={{ {text: 'radio指定为item的id'} }} data={{data2}} checkType='radio' rowKey={{self.setRowKey}}  checkedKey={{'yes'}}/>
    </div>
    <div class='no-data-template'>
        <Table scheme={{ {a: 'checkbox不指定rowKey'} }} data={{data3}} checkedKeys={{[0, 2]}}/>
        <Table scheme={{ {text: 'checkbox指定为item的id'} }} data={{data2}} rowKey={{self.setRowKey}} checkedKeys={{['yes']}}/>
    </div>
</div>
```

```styl
.no-data-template
   display: flex
   margin-bottom: 10px
   .k-table-wrapper
       margin-left: 10px
```

```js

export default class extends Intact {
    @Intact.template()
    static template = template;

    setRowKey(value, index) {
        return value.id;
    }

}
```





