---
title: 自定义内容
order: 3
---

使用`content`扩展点，可以自定义复杂的提示内容

```vdt
import {Tooltip, Slider, Button, Select, Option} from 'kpc';

<div>
    <Tooltip trigger="click">
        <Button>Adjust Volume</Button>
        <b:content>
            <Slider v-model="volume" 
                style="width: 200px;"
                showInput={false} 
                showEnd={false}
            />
        </b:content>
    </Tooltip>
    <Tooltip trigger="click" theme="light">
        <Button>Test Dropdown</Button>
        <b:content>
            <Select v-model="day" width={200}>
                <Option value="Monday">星期一</Option>
                <Option value="Tuesday">星期二</Option>
            </Select>
        </b:content>
    </Tooltip>
</div>
```

```styl
.k-btn 
    margin-right 8px
```

```ts
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            volume: 0,
            day: 'Monday'
        };
    };
}
```
