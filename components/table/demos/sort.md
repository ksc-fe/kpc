---
title: 排序
order: 10
---

`sort`：排序，类型`Object`，`{}`(默认)
* `sort`接收的对象包含两个属性,`key`表示你要排序的是哪一列，`type`表示需要将这一列升序还是降序排列。（`desc`降序，`asc`升序）
* 如果希望某列可以排序的话，在定义它的`scheme`时，需要添加`sortable: true`键值对。

另一种定义表头信息方式`<TableColumn sortable={{true}}></TableColumn>`

```vdt
import Table, {TableColumn} from 'kpc/components/table';

var scheme = {
	name: {
		title: '姓名',
		template: function(data) {
			return data.name;
		},
		sortable: true
	},
	time: {
		title: '时间',
		template: function(data) {
			return data.time;
		},
		sortable: true
	}
};
var defaultSort = {key: 'time', type: 'asc'};
var data1 = [{name: 'a默认按照时间升序', time: '2'}, {name: 'b 箭头方向默认的是向上的', time: '1'}];
var data2 = [{name: 'a无默认排序', time: '2'}, {name: 'b 观察箭头方向都是双向的', time: '1'}];

<div class='no-data-template'>
    <Table scheme={{ scheme }} data={{ data1 }} sort={{ defaultSort }}/>
    <Table scheme={{ scheme }} data={{ data2 }} />
    <Table data={{ data1 }} sort={{ defaultSort }}>
      <TableColumn title='姓名' key='name'></TableColumn>
      <TableColumn title='时间(标签形式定义排序)' key='time' sortable={{true}}></TableColumn>
    </Table>
</div>
```

```styl
.no-data-template
   display: flex
   .k-table-wrapper
       margin-left: 10px

```






