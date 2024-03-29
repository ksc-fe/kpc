---
title: 基础用法
order: 0
---

`Select`嵌套`Option`使用，用`v-model`进行双向数据绑定。支持键盘选择。当数据正在加载中时，可以添加
`loading`属性来标示加载状态

```vdt
import {Select, Option} from 'kpc';

<div>
    <Select v-model="day">
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
    You selected: {this.get('day')}
    <br /><br />
    <Select loading></Select>
    <br /><br />
    <Select flat>
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
</div>
```

```ts
interface Props {
    day?: string | null
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            day: null,
        } as Props;
    }
}
```
