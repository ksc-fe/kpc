---
title: 复杂例子
order: 3
---

这里是个复杂的与`Table`联动的例子，这里演示了怎么通过`drag`扩展点自定义分割线，以及如何动态
调整面板的大小，来模拟显示和隐藏面板的效果

```vdt
import Split from 'kpc/components/split';
import {Table, TableColumn} from 'kpc/components/table';
import {Pagination} from 'kpc/components/pagination';
import {Tabs, Tab} from 'kpc/components/tabs';
import {FormItem} from 'kpc/components/form';
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';

<div class="split-container">
    <Split mode="vertical"
        v-model:lastSize="size"
        class={{ {closed: self.get('size') === '0px'} }}
        min={{ 10 }}
    >
        <b:first>
            <Table data={{ self.get('data') }}
                fixHeader
                ref="table"
                rowCheckable={{ false }}
                v-model:checkedKeys="checkedKeys"
                ev-click:row={{ self._onClickRow }}
                ev-$change:checkedKeys={{ self._togglePanel }}
            >
                <TableColumn title="名称" key="name" />
                <TableColumn title="网段" key="ip" />
                <TableColumn title="操作" key="op">
                    <b:template params="data">
                        <a>删除</a> 
                    </b:template>
                </TableColumn>
            </Table>
            <Pagination total={{ 100 }} size="small" />
        </b:first>
        <b:last>
            <Button type="none" icon class="close"
                ev-click={{ self._close }}
            >
                <Icon class="ion-ios-close-empty" size="40" />
            </Button>
            <Tabs v-model="tab">
                <Tab value="detail">详情</Tab>
                <Tab value="data">流量统计</Tab>
                <Tab value="tag">标签</Tab>
            </Tabs>
            <div v-if={{ self.get('tab') === 'detail' }} class="tab-panel">
                <FormItem label="创建时间：">2018-09-28 17:31:25</FormItem>
                <FormItem label="弹性IP：">{{ self.get('selectedData.ip') }}</FormItem>
                <FormItem label="名称：">{{ self.get('selectedData.name') }}</FormItem>
            </div>
        </b:last>
        <b:drag>
            <Icon class="ion-drag" />
        </b:drag>
    </Split>
</div>
```

```styl
@require('~kpc/styles/themes/default.styl')
@require('~kpc/components/table/variables.styl')

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
```js
import {range} from 'kpc/components/utils';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: range(0, 10).map(item => {
                return {
                    name: 'name ' + item,
                    ip: '127.0.0.' + item
                };
            }),
            tab: 'detail',
            size: '0px',
            selectedData: undefined,
            checkedKeys: [],
        }
    }

    _close() {
        this.set('size', '0px');
    }

    _open() {
        if (this.get('size') === '0px') {
            this.set('size', '200px');
        }
    }

    _togglePanel(table, keys) {
        if (keys.length === 1) {
            // 只选中一行时，展开详情面板
            const data = table.getCheckedData()[0];
            this.set('selectedData', data);
            this._open();
        } else {
            this._close();
        }
    }

    _onClickRow(data, index, key) {
        const checkedKeys = this.get('checkedKeys');
        if (checkedKeys.length === 1 && checkedKeys[0] === key) {
            // 如果只选中了一行，再次点击当前行，则取消选中
            key = [];
        } else {
            // 否则只选中当前行
            key = [key];
        }
        this.set('checkedKeys', key);
    }
}
```

```vue-data
data() {
    return {
        data: range(0, 10).map(item => {
            return {
                name: 'name ' + item,
                ip: '127.0.0.' + item
            };
        }),
        tab: 'detail',
        size: '0px',
        selectedData: {},
        checkedKeys: [],
    }
},
```

```react-methods
constructor(props) {
    super(props);
    this.state = {
        data: range(0, 10).map(item => {
            return {
                name: 'name ' + item,
                ip: '127.0.0.' + item
            };
        }),
        tab: 'detail',
        size: '0px',
        selectedData: {},
        checkedKeys: [],
    };
    this._classNames = this._classNames.bind(this);
    this._close = this._close.bind(this);
    this._open = this._open.bind(this);
    this._togglePanel = this._togglePanel.bind(this);
}
```

```angular-properties
private data = range(0, 10).map(item => {
    return {
        name: 'name ' + item,
        ip: '127.0.0.' + item
    };
});
private tab = 'detail';
private size = '0px';
private selectedData = {};
private checkedKeys = [];
```
