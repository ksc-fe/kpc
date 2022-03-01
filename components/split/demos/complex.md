---
title: 复杂例子
order: 3
---

这里是个复杂的与`Table`联动的例子，这里演示了怎么通过`drag`扩展点自定义分割线，以及如何动态
调整面板的大小，来模拟显示和隐藏面板的效果

```vdt
import {Split, Table, TableColumn, Tabs, Tab, FormItem, Button, Icon} from 'kpc';

<div class="split-container">
    <Split mode="vertical"
        v-model:lastSize="size"
        class={{closed: this.get('size') === '0px'}}
        min={10}
    >
        <b:first>
            <Table data={this.get('data')}
                fixHeader
                ref="table"
                rowCheckable={false}
                checkedKeys={this.get('checkedKeys')}
                ev-clickRow={this._onClickRow}
                ev-$change:checkedKeys={this._togglePanel}
            >
                <TableColumn title="名称" key="name" />
                <TableColumn title="网段" key="ip" />
                <TableColumn title="操作" key="op">
                    <b:template args="[value, index]" >
                        <a>删除</a> 
                    </b:template>
                </TableColumn>
            </Table>
        </b:first>
        <b:last>
            <Button type="none" icon class="close"
                ev-click={this._close}
            >
                <Icon class="ion-ios-close-empty" size="40" />
            </Button>
            <Tabs v-model="tab">
                <Tab value="detail">详情</Tab>
                <Tab value="data">流量统计</Tab>
                <Tab value="tag">标签</Tab>
            </Tabs>
            <div v-if={this.get('tab') === 'detail' && this.get('selectedData')} class="tab-panel">
                <FormItem label="创建时间：">2018-09-28 17:31:25</FormItem>
                <FormItem label="弹性IP：">{this.get('selectedData.ip')}</FormItem>
                <FormItem label="名称：">{this.get('selectedData.name')}</FormItem>
            </div>
        </b:last>
        <b:drag>
            <Icon class="ion-drag" />
        </b:drag>
    </Split>
</div>
```

```styl

.split-container
    height 500px 
    padding 20px
    font-size 12px
    .k-first
        border 1px solid $table-border-color
        border-top none
        height 100%
        display flex
        flex-direction column
    .k-table
        flex 1
        height 100%
    .k-table-wrapper 
        height 100%
    .k-pagination
        padding 10px
        border-top 1px solid $table-border-color
    .tab-panel
        padding 10px
        .k-form-item
            margin 0
    .close
        position absolute
        right 0
        top 0
        z-index 1
    .k-split.closed
        .k-line-wrapper
            display none
    .ion-drag
        position relative
        z-index 1
```
```ts
import {range, bind} from 'kpc/components/utils';
import {nextTick} from 'intact';

interface Props {
    data: DataItem[]
    tab?: string
    size?: string
    selectedData?: DataItem
    checkedKeys?: number[]
}

type DataItem = {
    name: string
    ip: string
}

const data =  range(0, 10).map(item => {
    return {
        name: 'name ' + item,
        ip: '127.0.0.' + item
    };
});

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            data,
            tab: 'detail',
            size: '0px',
            selectedData: undefined,
            checkedKeys: [],
        } as Props;
    }

    @bind
    _close() {
        this.set('size', '0px');
    }

    _open() {
        if (this.get('size') === '0px') {
            this.set('size', '200px');
        }
    }

    @bind
    _togglePanel(keys: number[] | undefined) {
        if (keys!.length === 1) {
            // 只选中一行时，展开详情面板
            const data = this.refs.table.getCheckedData()[0];
            this.set({
                selectedData: data,
                checkedKeys: keys,
            });
            this._open();
        } else {
            this._close();
        }
    }

    @bind
    _onClickRow(data: DataItem, index: number, key: number) {
        let checkedKeys = this.get('checkedKeys')!;
        if (checkedKeys.length === 1 && checkedKeys[0] === key) {
            // 如果只选中了一行，再次点击当前行，则取消选中
            checkedKeys = [];
        } else {
            // 否则只选中当前行
            checkedKeys = [key];
        }
        this.set('checkedKeys', checkedKeys);
        nextTick(() => {
            this._togglePanel(checkedKeys);
        });
    }
}
```

```react-methods
@bind
_onClickRow(data: DataItem, index: number, key: number) {
    let checkedKeys = this.state.checkedKeys!;
    if (checkedKeys.length === 1 && checkedKeys[0] === key) {
        // 如果只选中了一行，再次点击当前行，则取消选中
        checkedKeys = [];
    } else {
        // 否则只选中当前行
        checkedKeys = [key];
    }
    this.setState({checkedKeys}, () => {
        this._togglePanel(checkedKeys);
    });
}
```
