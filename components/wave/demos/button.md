---
title: 按钮类型
order: 0
---

有如下几种类型：默认按钮，主按钮，次按钮，警告按钮，危险按钮，成功按钮，文字按钮，超链接按钮

```vdt
import {Button} from 'kpc/components/button';
import {Wave} from 'kpc/components/wave';
import {Select, Option} from 'kpc/components/select';
import {Input} from 'kpc/components/input';

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
    <br />
    <Input v-model="value" placeholder="please enter" ref="__test" /> {this.get('value')}
    <br />
    <Input disabled placeholder="disabled" />
    <br />
    <Button type="primary">点击加载</Button>
    <Button type="default">secondary</Button>
    <Button type="secondary">secondary</Button>
    <Button type="warning">warning</Button>
    <Button type="danger">danger</Button>
    <Button type="success">success</Button>
    <Button type="none">none</Button>
    <Button type="link">link</Button>
</div>
```

```styl
.k-btn
    margin-right 20px
.k-select, .k-input
    margin-bottom 20px
```

```ts
import {bind} from 'kpc/components/utils';

export default class extends Component {
    static template = template;
    static defaults = () => ({
        disabled: true,
    });
}
```