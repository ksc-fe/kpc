---
title: 位置
order: 0.1
---

添加`placement`属性，定义如下位置：`top`,`bottom`,`left`,`right`。默认`right`从右侧出现

```vdt
import {Drawer, Button, ButtonGroup} from 'kpc';

<div>
    <ButtonGroup>
        <Button v-for={this.get('showList')}
            ev-click={this.showDrawer.bind(self, $value.key)}
        >{$value.value}</Button>
    </ButtonGroup>

    <Drawer v-model='show'
        title='Drawer Title' 
        ref='__demoTwo' 
        placement={this.get('showPosition')}
        size='small'
    >
        Drawer Body
    </Drawer>
</div>
```

```ts
import {bind, DrawerProps} from 'kpc';

interface Props {
    show?: boolean
    showPosition: DrawerProps['placement'] 
    showList: ListItem[]
}

type ListItem = {
    key: DrawerProps['placement'] 
    value: string
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            show: false,
            showPosition: 'right',
            showList: [
                {
                    key: 'top',
                    value: '从上侧出现'
                },
                {
                    key: 'bottom',
                    value: '从下侧出现'
                },
                {
                    key: 'left',
                    value: '从左侧出现'
                },
                {
                    key: 'right',
                    value: '从右侧出现'
                }
            ]
        } as Props;
    }

    @bind
    showDrawer(value: DrawerProps['placement']) {
        this.set({
            'showPosition': value,
            'show': true
        });
    }
}
```

```vue-methods
showDrawer(value) {
    this.showPosition = value;
    this.show = true;
}
```
