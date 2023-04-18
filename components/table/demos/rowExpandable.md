---
title: 行展开
order: 8
---

通过`expand`扩展点指定行展开后的模板内容。是否支持点击该行任何区域都展开内容，
是由`rowExpandable`控制的，默认情况下它为`true`。你也可以将它设为`false`，来自定义展开逻辑。例如：
点击某个`icon`后展开该行，而点击其它元素无效。自定义展开逻辑，修改`expandedKeys`属性值，来指定哪些`key`对应的行展开。

```vdt
import {Table, TableColumn} from 'kpc';

<div class='tables'>
    <Table 
        data={this.get('data')} 
        checkType="none"
        ref="__test1"
    >
        <b:expand args="[data, index]">
            <div class="expand">Email: {data.email}</div>
        </b:expand>
        <TableColumn title="点击整行展开内容" key="name" />
    </Table>

	<Table 
        data={this.get('data')} 
        checkType="none"
        rowExpandable={false}
        expandedKeys={this.get('expandedKeys')}
        ref="__test2"
    >
        <b:expand args="[data, index]">
            <div class="expand">Email: {data.email}</div>
        </b:expand>
        <TableColumn title="点击+，展开内容" key="name">
            <b:template args="[data, index]">
                <div>
                    <i 
                        class={{
                            'icon': true,
                            'ion-ios-plus-outline': this.get('expandedKeys').indexOf(index) < 0,
                            'ion-ios-minus-outline': this.get('expandedKeys').indexOf(index) > -1
                        }}
                        ev-click={this.toggleExpand.bind(this, data, index)}
                    ></i>
                    <span class="name">{data.name}</span>
                </div>
            </b:template>
        </TableColumn>
    </Table>
</div>
```

```styl
.no-data-template
    display: flex
    gap: 10px
.icon
    vertical-align middle
    margin-right 10px
    cursor pointer
.name
    vertical-align middle
.expand
    padding 16px
```

```ts
import {bind, TableRowKey} from 'kpc';

interface Props {
    expandedKeys: TableRowKey[]
    data: DataItem[]
}

type DataItem = {
    name: string
    email: string
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            expandedKeys: [],
            data: [
                {name: 'Javey', email: 'jiawei23716@sina.com'}, 
                {name: 'Jiawei', email: 'zoujiawei@gmail.com'}
            ],
        } as Props;
    }

    @bind
    toggleExpand(data: DataItem, index: number) {
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

