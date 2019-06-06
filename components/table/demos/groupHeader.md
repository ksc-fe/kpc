---
title: 表头分组
order: 8.2
---

```vdt
import {Table, TableColumn} from 'kpc/components/table';

<div>
    <Table data={{ self.get('data') }}  type="grid"
        scheme={{ {
            weekday: {title: 'Weekday'},
            forenoon: {
                title: 'Forenoon',
                scheme: {
                    time: {title: 'Time'},
                    classes: {
                        title: 'Classes',
                        scheme: {
                            class1: {title: 'Class 1'},
                            class2: {title: 'Class 2'},
                            class3: {title: 'Class 3'},
                            class4: {title: 'Class 4'},
                        }
                    }
                } 
            },
            afternoon: {
                title: 'Afternoon',
                scheme: {
                    class5: {title: 'Class 5'},
                    class6: {title: 'Class 6'},
                    class7: {title: 'Class 7'},
                } 
            }
        } }}
    />
    <Table data={{ self.get('data') }} checkType="none" type="grid">
        <TableColumn title="Weekday" key='weekday' />
        <TableColumn title="Forenoon" key="forenoon">
            <TableColumn title="Class 1" key='class1' />
            <TableColumn title="Class 2" key='class2' />
            <TableColumn title="class 3" key='class3' />
            <TableColumn title="class 4" key='class4' />
        </TableColumn>
        <TableColumn title="Afternoon" key="afternoon">
            <TableColumn title="class 5" key='class5' />
            <TableColumn title="class 6" key='class6' />
            <TableColumn title="class 7" key='class7' />
        </TableColumn>
    </Table>
</div>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        const weekdays = ['Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday'];
        const classes = ['English', 'Mathematics', 'Chinese', 'History', 'Geopraghy'];
        const randomClasses = () => {
            const ret = {};
            for (let i = 0; i < 7; i++) {
                ret[`class${i + 1}`] = classes[Math.floor(Math.random() * classes.length)];
            }
            return ret;
        };
        return {
            data: weekdays.map(weekday => {
                return {weekday, ...randomClasses()};
            })
        };
    }
}
```
