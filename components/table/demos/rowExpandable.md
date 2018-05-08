---
title: 行展开
order: 6
---

指定行展开后的模板函数`expand`即可实现点击当前行时，展开内容。是否支持点击该行任何区域都展开内容，
是由`rowExpandable`控制的，默认情况下它为`true`。你也可以将它设为`false`，来自定义展开逻辑。例如：
点击某个`icon`后展开改行，而点击其它元素无效。自定义展开逻辑，需要调用`shrinkRow(key)`和`expandRow(key)`
方法来实现收起和展开，或者修改`expandedKeys`属性值，来指定哪些`key`对应的行展开。


* `expand`：指定行展开后要展示的模板内容，类型`Function`，默认`undefined`
* `rowExpandable`：是否点击整行即展开，类型`Boolean`，默认`true`
* `expandedKeys`：指定哪些`key`对应行展开，类型`Array`，默认`[]`

```vdt
import {Table, TableColumn} from 'kpc/components/table';

var data = [
    {name: 'Javey', email: 'jiawei23716@sina.com'}, 
    {name: 'Jiawei', email: 'zoujiawei@gmail.com'}
];

<div class='no-data-template'>
    <Table 
        data={{ data }} 
        expand={{ function(data, index) {
            return <div>Email: {{ data.email }}</div>
        } }}
        checkType="none"
    >
        <TableColumn title="点击整行展开内容" key="name" />
    </Table>

	<Table 
        data={{ data }} 
        expand={{ function(data, index) {
            return <div>Email: {{ data.email }}</div>
        } }} 
        checkType="none"
        rowExpandable={{ false }}
        expandedKeys={{ self.get('expandedKeys') }}
    >
        <TableColumn title="点击+，展开内容" key="name" 
            template={{ (data, index) => {
                return <div>
                    <i 
                        class={{ {
                            "icon": true,
                            "ion-ios-plus-outline": self.get('expandedKeys').indexOf(index) < 0,
                            "ion-ios-minus-outline": self.get('expandedKeys').indexOf(index) > -1,
                        } }}
                        ev-click={{ self.toggleExpand.bind(self, data, index) }}
                    ></i>
                    {{ data.name }}
                </div>
            } }}
        />
    </Table>
</div>
```

```styl
.no-data-template
    display: flex
    .k-table-wrapper
        margin-left: 10px
.icon
    vertical-align middle
    margin-right 10px
    cursor pointer
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: []
        };
    }

    toggleExpand(data, index) {
        const expandedKeys = this.get('expandedKeys').slice(0);
        const i = expandedKeys.indexOf(index);
        if (i > -1) {
            expandedKeys.splice(i, 1);
        } else {
            expandedKeys.push(index);
        }
        this.set('expandedKeys', expandedKeys);
    }
}
```

