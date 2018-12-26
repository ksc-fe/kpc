---
title: 自定义展示内容
order: 2
---

当需要自定义提示的内容时，我们可以将`Message`当做组件定义在模板中，而非调用它的静态方法。
此时我们需要给`Message`指定唯一的`key`。

```vdt
import Message from 'kpc/components/message';
import {Button} from 'kpc/components/button';
import {Progress} from 'kpc/components/progress';

<div>
    <Button ev-click={{ self.set.bind(self, 'show', true) }}>custom message</Button>
    <Message v-model="show" key="message" 
        duration={{ 0 }} 
        type={{ self.get('percent') >= 100 ? 'success' : 'info' }}
        hideIcon
    >
        <Progress style="width: 200px" 
            percent={{ self.get('percent') }}
            ev-click={{ self.add }}
        />
    </Message>
</div>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            percent: 10, 
            show: false
        };
    }

    add() {
        this.set('percent', this.get('percent') + 5);
    }
}
```

```vue-methods
add() {
    this.percent += 5;
}
```
