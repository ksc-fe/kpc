---
title: 控制全局水波纹动效
order: 1
---

通过配置`disableWave`，可以控制是否开启水波纹动效，默认`false`

```vdt
import {ConfigProvider, Button, Input, Checkbox, Radio, Select, Option} from 'kpc';

<ConfigProvider value={{disableWave: true}}>
    <Button>Button</Button>
    <Input />
    <Checkbox v-model="value">checkbox</Checkbox>
    <Radio v-model="value">radio</Radio>
    <Select v-model="day">
        <Option value="Monday">星期一</Option>
        <Option value="Tuesday">星期二</Option>
        <Option value="Wednesday">星期三</Option>
        <Option value="Thursday">星期四</Option>
        <Option value="Friday">星期五</Option>
        <Option value="Saturday">星期六</Option>
        <Option value="Sunday">星期天</Option>
    </Select>
</ConfigProvider>
```

```styl
.k-input, .k-input, .k-checkbox, .k-radio
    margin 0 10px
```

```ts
interface Props {
    value?: boolean,
    day?: string | null
}
export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            value: false,
            day: ''
        }
    }
}
```