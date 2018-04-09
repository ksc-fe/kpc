---
title: 分组
order: 11
---

`group`：分组，类型`Array`，`{}`(默认)
* `group`接收一个数组，数组每一项接收一个`{label: '展示内容', value: '值'}`的对象来定义分组信息。


另一种定义表头信息方式`<TableColumn group={{[]}}></TableColumn>`

```vdt
import Table, {TableColumn} from 'kpc/components/table';

var defaultGroup = [
    {label: 'Monday', value: 1},
    {label: 'Tuesday', value: 2},
    {label: 'Wednesday', value: 3}
];
var scheme = {
	name: {
		title: '姓名',
		template: function(data) {
			return data.name;
		}
	},
	time: {
		title: '时间',
		template: function(data) {
			return data.time;
		},
		group: defaultGroup
	}
};


var data = [{name: 'lihua', time: '10-12-12'}];
var data1 = [{name: 'lihua(标签形式定义表头信息)', time: '10-12-12'}];

<div class='no-data-template'>
    <Table scheme={{ scheme }} data={{ data }}/>
    <Table data={{ data1 }}>
      <TableColumn title='姓名' key='name'></TableColumn>
      <TableColumn title='时间' key='time' group={{defaultGroup}}></TableColumn>
    </Table>
</div>
```

```styl
.no-data-template
   display: flex
   .k-table-wrapper
       margin-left: 10px

```






