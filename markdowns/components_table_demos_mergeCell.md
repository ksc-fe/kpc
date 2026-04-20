---
title: 合并单元格 
order: 15
---

通过`merge`属性指定一个函数来定义合并单元格的逻辑，函数返回的结果`{colspan?: number, rowspan?: number}`用来定义单元格占用的行列数。
组件传入函数的参数如下：

1. `row` 当前行数据
2. `column` 当前列数据
3. `rowIndex` 当前行索引
4. `columnIndex` 当前列索引

> 合并多选框时，可以通过`checkedKeys`来设置选中行，多选框是支持半选状态的；
> 合并单选框时，与合并多选框不同的是，单选框是不支持半选状态的，只要一行被选中，
> 那么整个合并行都会被选中
> 
> 注意：禁选行和选中行默认没有给出高亮，如果需要请自行设置高亮。

```vdt
import {Table, TableColumn} from 'kpc';

<div class='merge-cell'>
    <Table data={this.get('data')}
        checkType="checkbox" 
        checkedKeys={[3]}
        type="grid"
        resizable
        merge={this.merge}
        disableRow={this.disableRow}
        ref="__test1"
    >
        <TableColumn title="Weekday" key='weekday' fixed="left" />
        <TableColumn title="Forenoon" key="forenoon">
            <TableColumn title="Time" key="forenoonTime" />
            <TableColumn title="Class 1" key='class1' />
            <TableColumn title="Class 2" key='class2' />
            <TableColumn title="Class 3" key='class3' />
            <TableColumn title="Class 4" key='class4' />
        </TableColumn>
        <TableColumn title="Afternoon" key="afternoon">
            <TableColumn title="Class 5" key='class5' />
            <TableColumn title="Class 6" key='class6' />
            <TableColumn title="Class 7" key='class7' />
            <TableColumn title="Time" key="afternoonTime" fixed="right" />
        </TableColumn>
    </Table>
    <Table data={this.get('data')}
        checkType="radio"
        checkedKeys={[0, 1]} 
        type="grid"
        resizable
        merge={this.merge}
        disableRow={this.disableRow}
        ref="__test2"
    >
        <TableColumn title="Weekday" key='weekday' fixed="left" />
        <TableColumn title="Forenoon" key="forenoon">
            <TableColumn title="Time" key="forenoonTime" />
            <TableColumn title="Class 1" key='class1' />
            <TableColumn title="Class 2" key='class2' />
            <TableColumn title="Class 3" key='class3' />
            <TableColumn title="Class 4" key='class4' />
        </TableColumn>
        <TableColumn title="Afternoon" key="afternoon">
            <TableColumn title="Class 5" key='class5' />
            <TableColumn title="Class 6" key='class6' />
            <TableColumn title="Class 7" key='class7' />
            <TableColumn title="Time" key="afternoonTime" fixed="right" />
        </TableColumn>
    </Table>
</div>
```

```styl
.k-table
    margin-bottom 20px
    tr.k-checked td
        background antiquewhite
    tr.k-disabled td
        background #eaeaea
```

```ts
import {bind, TableColumnProps} from 'kpc';

interface Props {
    data: DataItem[]
}

type DataItem = {
    weekday: string
    class1: string
    class2: string
    class3: string
    class4: string
    class5: string
    class6: string
    class7: string
    forenoonTime: string
    afternoonTime: string
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            data: [
                {
                    "weekday": "Monday",
                    "class1": "English",
                    "class2": "Mathematics",
                    "class3": "History",
                    "class4": "English",
                    "class5": "History",
                    "class6": "English",
                    "class7": "History",
                    "forenoonTime": "08:00 ~ 12:00",
                    "afternoonTime": "14:00 ~ 17:00"
                },
                {
                    "weekday": "Tuesday",
                    "class1": "English",
                    "class2": "English",
                    "class3": "Geopraghy",
                    "class4": "History",
                    "class5": "English",
                    "class6": "History",
                    "class7": "Mathematics",
                    "forenoonTime": "08:00 ~ 12:00",
                    "afternoonTime": "14:00 ~ 17:00"
                },
                {
                    "weekday": "Wendesday",
                    "class1": "History",
                    "class2": "Chinese",
                    "class3": "History",
                    "class4": "English",
                    "class5": "English",
                    "class6": "Chinese",
                    "class7": "History",
                    "forenoonTime": "08:00 ~ 12:00",
                    "afternoonTime": "14:00 ~ 17:00"
                },
                {
                    "weekday": "Thursday",
                    "class1": "History",
                    "class2": "English",
                    "class3": "Geopraghy",
                    "class4": "Mathematics",
                    "class5": "Geopraghy",
                    "class6": "English",
                    "class7": "Mathematics",
                    "forenoonTime": "08:00 ~ 12:00",
                    "afternoonTime": "14:00 ~ 17:00"
                },
                {
                    "weekday": "Friday",
                    "class1": "Geopraghy",
                    "class2": "English",
                    "class3": "Geopraghy",
                    "class4": "Geopraghy",
                    "class5": "Geopraghy",
                    "class6": "Geopraghy",
                    "class7": "English",
                    "forenoonTime": "08:00 ~ 12:00",
                    "afternoonTime": "14:00 ~ 17:00"
                },
                {
                    "weekday": "Saturday",
                    "class1": "Geopraghy",
                    "class2": "English",
                    "class3": "Geopraghy",
                    "class4": "Geopraghy",
                    "class5": "Geopraghy",
                    "class6": "Geopraghy",
                    "class7": "English",
                    "forenoonTime": "08:00 ~ 12:00",
                    "afternoonTime": "14:00 ~ 17:00"
                }
            ] 
        };
    }

    @bind
    merge(row: DataItem, column: TableColumnProps | null, rowIndex: number, columnIndex: number) {
        if (columnIndex === 0) {
            // is check column
            if (rowIndex === 0) {
                return {
                    rowspan: 2,
                    colspan: 1,
                }
            }

            if (rowIndex === 2) {
                return {
                    rowspan: 3,
                    colspan: 1,
                }
            }

            return;
        }

        const data = this.get('data');
        if (column!.key === 'forenoonTime' || column!.key === 'afternoonTime') {
            return {
                rowspan: data.length,
                colspan: 1,
            };
        }

        // merge the same classes horizontally
        const columns: (keyof DataItem)[] = [];
        for (let i = 1; i <= 7; i++) columns.push(`class${i}` as keyof DataItem);

        let colspan = 1;
        const value = row[column!.key as keyof DataItem];
        for (let i = columns.indexOf(column!.key as keyof DataItem) + 1; i < 7; i++) {
            const nextValue = row[columns[i]];
            if (nextValue !== value) break;
            colspan++;
        }

        return {colspan};
    }

    @bind
    disableRow(data: DataItem, index: number) {
        return index === 1 || index === 5;
    }
}
```
