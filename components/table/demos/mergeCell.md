---
title: 合并单元格 
order: 8.3
---

`scheme`和`TableColumn`两种方式都可以定义分组的表头。`scheme`方式下，只需要嵌套定义`scheme`字段即可；
`TableColumn`方式下，嵌套使用`TableColumn`即可

> 不管那种方式定义分组表头，`key`必须在当前表格下唯一

```vdt
import {Table, TableColumn} from 'kpc/components/table';

<Table data={{ self.get('data') }} checkType="none" type="grid" resizable>
    <TableColumn title="Weekday" key='weekday' fixed="left"/>
    <TableColumn title="Forenoon" key="forenoon">
        <TableColumn title="time" key="forenoonTime" fixed="left" />
        <TableColumn title="Class 1" key='class1' />
        <TableColumn title="Class 2" key='class2' />
        <TableColumn title="class 3" key='class3' />
        <TableColumn title="class 4" key='class4' />
    </TableColumn>
    <TableColumn title="Afternoon" key="afternoon">
        <TableColumn title="class 5" key='class5' />
        <TableColumn title="class 6" key='class6' />
        <TableColumn title="class 7" key='class7' />
        <TableColumn title="time" key="afternoonTime" fixed="right" />
    </TableColumn>
</Table>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        const weekdays = ['Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday'];
        const classes = ['English', 'Mathematics', 'Chinese', 'History', 'Geopraghy'];
        let index = 0;
        const randomClasses = () => {
            const ret = {};
            for (let i = 0; i < 7; i++) {
                ret[`class${i + 1}`] = classes[Math.floor(Math.random() * classes.length)];
                // ret[`class${i + 1}`] = classes[(i + index) % classes.length];
            }
            index++;
            return ret;
        };
        return {
            data: weekdays.map(weekday => {
                return {
                    weekday, 
                    ...randomClasses(), 
                    forenoonTime: '08:00 ~ 12:00',
                    afternoonTime: '14:00 ~ 17:00',
                };
            })
        };
    }
}
```
