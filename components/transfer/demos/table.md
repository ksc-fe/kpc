---
title: 与表格控件结合
order: 7
---

与【完全自定义】示例一样，`Transfer`也可以与`Table`结合使用。当需要在表格中展示数据并支持分页和筛选时，可以在`b:list`插槽中使用带分页的`Table`组件，并且在`b:filter`扩展点自定义筛选输入框，实现筛选逻辑。

```vdt
import {Transfer, Table, TableColumn, Input, Icon} from 'kpc';

<Transfer
    filterable
    enableAdd={this.enableAdd}
    enableRemove={this.enableRemove}
    ev-add={this.onAdd}
    ev-remove={this.onRemove}
    class="custom-table-transfer"
>
    <b:header args="type">
        <div v-if={type === 'left'}>
            <span>可选数据</span>
            <span>{ `${this.get('leftCheckedKeys').length} / ${this.get('leftData').length}` }</span>
        </div>
        <div v-else>
            <span>已选数据</span>
            <span>{ `${this.get('rightCheckedKeys').length} / ${this.get('rightData').length}` }</span>
        </div>
    </b:header>
    <b:filter args="type">
        <Input v-if={type === 'left'}
            placeholder="搜索名称、IP或状态"
            clearable
            size="small"
            v-model="leftKeywords"
        >
            <b:prefix>
                <Icon class="k-icon-search" size="small" />
            </b:prefix>
        </Input>
        <Input v-else
            placeholder="搜索名称、IP或状态"
            clearable
            size="small"
            v-model="rightKeywords"
        >
            <b:prefix>
                <Icon class="k-icon-search" size="small" />
            </b:prefix>
        </Input>
    </b:filter>
    <b:list args="type">
        <Table v-if={type === 'left'}
            data={this.get('leftFilteredData')}
            rowKey={item => item.id}
            v-model:checkedKeys="leftCheckedKeys"
            pagination={{limit: 5, showLimits: false, showTotal: false}}
            ref="leftTable"
            fixHeader
        >
            <TableColumn key="name" title="名称" />
            <TableColumn key="ip" title="IP地址" />
            <TableColumn key="status" title="状态" />
        </Table>
        <Table v-else
            data={this.get('rightFilteredData')}
            rowKey={item => item.id}
            v-model:checkedKeys="rightCheckedKeys"
            pagination={{limit: 5, showLimits: false, showTotal: false}}
            ref="rightTable"
            fixHeader
        >
            <TableColumn key="name" title="名称" />
            <TableColumn key="ip" title="IP地址" />
            <TableColumn key="status" title="状态" />
        </Table>
    </b:list>
</Transfer>
```

```styl
.custom-table-transfer
    .k-transfer-panel
        width 320px
        .k-transfer-title
            div
                display flex
                justify-content space-between
        .k-input
            margin 8px 16px
    .k-table-wrapper
        max-height 228px
        table
            thead
                tr
                    th
                        background #fff
    .k-table
        .k-pagination
            display flex
            justify-content flex-end
            align-items center
            margin 8px 0
```

```ts
import {bind, Table, TableColumn} from 'kpc';
import {range} from 'kpc/components/utils';

interface Props {
    allData: DataItem[]
    leftData: DataItem[]
    rightData: DataItem[]
    leftCheckedKeys?: number[]
    rightCheckedKeys?: number[]
    leftKeywords?: string
    rightKeywords?: string
    leftFilteredData?: DataItem[]
    rightFilteredData?: DataItem[]
}

type DataItem = {
    id: number
    name: string
    ip: string
    status: string
}

// 生成模拟数据
const generateData = (start: number, count: number): DataItem[] => {
    return range(start, start + count - 1).map(item => ({
        id: item,
        name: `服务器${item}`,
        ip: `10.10.1.${item}`,
        status: item % 3 === 0 ? '运行中' : item % 3 === 1 ? '已停止' : '维护中'
    }));
};

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        const allData = generateData(1, 50);
        return {
            allData: allData,
            leftData: allData,
            rightData: [],
            leftCheckedKeys: [],
            rightCheckedKeys: [],
            leftKeywords: '',
            rightKeywords: '',
            leftFilteredData: allData,
            rightFilteredData: [],
        } as Props;
    }

    init() {
        // 监听关键词变化，更新筛选后的数据
        this.watch('leftKeywords', () => {
            this.updateLeftFilteredData();
        });
        this.watch('rightKeywords', () => {
            this.updateRightFilteredData();
        });
        // 监听原始数据变化，更新筛选后的数据
        this.watch('leftData', () => {
            this.updateLeftFilteredData();
        });
        this.watch('rightData', () => {
            this.updateRightFilteredData();
        });
    }

    // 筛选函数：根据关键词过滤数据
    filterData(data: DataItem[], keywords: string): DataItem[] {
        if (!keywords) return data;
        const lowerKeywords = keywords.toLowerCase();
        return data.filter(item => 
            item.name.toLowerCase().includes(lowerKeywords) ||
            item.ip.includes(keywords) ||
            item.status.includes(keywords)
        );
    }

    // 更新左侧筛选后的数据
    updateLeftFilteredData() {
        const leftData = this.get('leftData')!;
        const leftKeywords = this.get('leftKeywords') || '';
        this.set('leftFilteredData', this.filterData(leftData, leftKeywords));
    }

    // 更新右侧筛选后的数据
    updateRightFilteredData() {
        const rightData = this.get('rightData')!;
        const rightKeywords = this.get('rightKeywords') || '';
        this.set('rightFilteredData', this.filterData(rightData, rightKeywords));
    }

    @bind
    enableAdd() {
        return this.get('leftCheckedKeys')!.length > 0;
    }

    @bind
    enableRemove() {
        return this.get('rightCheckedKeys')!.length > 0;
    }

    @bind
    onAdd() {
        const leftCheckedKeys = this.get('leftCheckedKeys')!;
        const leftData = this.get('leftData')!;
        const rightData = this.get('rightData')!;
        // 获取选中的数据
        const selectedItems = leftData.filter(item => 
            leftCheckedKeys.includes(item.id)
        );
        // 从左侧移除
        const newLeftData = leftData.filter(item => 
            !leftCheckedKeys.includes(item.id)
        );
        // 添加到右侧
        const newRightData = [...rightData, ...selectedItems];
        
        this.set({
            leftData: newLeftData,
            rightData: newRightData,
            leftCheckedKeys: [],
        });
    }

    @bind
    onRemove() {
        const rightCheckedKeys = this.get('rightCheckedKeys')!;
        const allData = this.get('allData')!;
        const rightData = this.get('rightData')!;
        
        // 从右侧移除选中的数据
        const newRightData = rightData.filter(item => 
            !rightCheckedKeys.includes(item.id)
        );
        
        // 左侧数据
        const rightDataIds = new Set(newRightData.map(item => item.id));
        const newLeftData = allData.filter(item => !rightDataIds.has(item.id));
        
        this.set({
            leftData: newLeftData,
            rightData: newRightData,
            rightCheckedKeys: [],
        });
    }
}
```

