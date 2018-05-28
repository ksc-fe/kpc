---
title: 分组
order: 11
---

分组需要两个`group`来指定：

1. 第一个是`Table`上的`group`属性，该属性指定当前分组的方式，形式为：`{["分组的列的key"]: ["当前列选择的分组的值"]}`
2. 第二个是`TableColumn`或者`scheme`上的`group`属性，该属性指定当前列有哪些可选的分组方式，
如果该列支持多选，还可以添加`multiple`属性，默认为单选。形式为：`[{label: "分组展示文案", value: "选择后的值"}]`

当分组方式改变时，可以监听默认事件`$change:group`来执行自定义分组逻辑

```vdt
import Table, {TableColumn} from 'kpc/components/table';

const scheme = {
	name: '名称',
	status: {
		title: '状态',
        template(data) {
            return data.status === 'active' ? '运行中' : '已关闭';
        },
		group: [
            {label: '全部', value: ''},
            {label: '运行中', value: 'active'},
            {label: '已关闭', value: 'stopped'},
        ]
	}
};


<div class='no-data-template'>
    <Table scheme={{ scheme }} 
        data={{ self.get('data') }} 
        group={{ self.get('group') }}
        ev-$change:group={{ self._onChangeGroup }}
    />
    <Table data={{ self.get('data') }} 
        group={{ self.get('group') }}
        ev-$change:group={{ self._onChangeGroup }}
    >
        <TableColumn title='名称' key='name' />
        <TableColumn title='状态' key='status' 
            template={{ (data) => data.status === 'active' ? '运行中' : '已关闭' }}
            group={{ [ 
                {label: '全部', value: ''},
                {label: '运行中', value: 'active'},
                {label: '已关闭', value: 'stopped'},
            ] }}
        />
    </Table>
</div>
```

```styl
.no-data-template
    display: flex
    .k-table-wrapper
        margin-left: 10px
```

```js
const oData = [
    {name: '主机1', status: 'active'},
    {name: '主机2', status: 'stopped'},
    {name: '主机3', status: 'active'},
];

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: oData, 
            group: {status: ''}
        }
    }

    _onChangeGroup(c, group) {
        console.log(group);
        const data = oData.filter(item => {
            let matched = true;
            for (let key in group) {
                const value = group[key];
                if (value && item[key] !== value) {
                    matched = false;
                    break;
                }
            }
            return matched;
        });

        this.set({data, group});
    }
}
```
