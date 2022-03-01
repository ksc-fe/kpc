---
title: 自定义内容
order: 3
---

使用`content`扩展点，可以自定义复杂的提示内容

```vdt
import {Tooltip, Slider, Button} from 'kpc';

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
</div>
```

```ts
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            volume: 0
        };
    };
}
```
