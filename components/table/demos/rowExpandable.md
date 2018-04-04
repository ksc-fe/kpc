---
title: 行展开
order: 6
---

* `rowExpandable`：是否点击展开行，类型`Boolean`，`true`(默认)
* `expand`：行展开条件，类型`Function`，`undefined`(默认)
* `expandedKeys`：展开哪行，类型`Array`，`true`(默认)

```vdt
import Table from 'kpc/components/table';

var scheme = {a: '奇数行展开'};
var data = [{a: '返回虚拟DOM'}, {a: '返回字符串'}];
var data2 = [{a: '不展开'}, {a: '默认展开'}];


<div class='no-data-template'>
    <Table scheme={{ {a: '定义expand函数返回你要展示的内容'} }} data={{ data }} expand={{function(data, index) {
    	if (index%2 == 0) {
			return <div>偶数行(DOM)</div>
    	}
    	if (index%2 != 0) {
			return '奇数行(字符串)'
    	}
	}}}/>
	<Table scheme={{ {a: 'rowExpandable为false，总开关'} }} data={{ data }} expand={{function(data, index) {
    	if (index%2 == 0) {
			return <div>偶数行(DOM)</div>
    	}
    	if (index%2 != 0) {
			return '奇数行(字符串)'
    	}
	}}} rowExpandable={{false}}/>
	<Table scheme={{ {a: '设置默认展开'} }} data={{ data2 }} expand={{function(data, index) {
    	if (index%2 == 0) {
			return <div>偶数行(DOM)</div>
    	}
    	if (index%2 != 0) {
			return '这里是默认展开的那一行的内容'
    	}
	}}} expandedKeys={{[1]}}/>

</div>
```

```styl
.no-data-template
   display: flex
   .k-table-wrapper
       margin-left: 10px

```







