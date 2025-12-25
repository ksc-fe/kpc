---
title: 可调整大小
order: 0.3
---

添加`resizable`属性，可以通过拖拽边缘来调整 drawer 的大小。

```vdt
import {Drawer, Button, ButtonGroup} from 'kpc';

<div>
    <ButtonGroup checkType="radio" v-model="placement">
        <Button value="top">top</Button>
        <Button value="bottom">bottom</Button>
        <Button value="left">left</Button>
        <Button value="right">right</Button>
    </ButtonGroup>
    <br /><br />
    <Button ev-click={this.showDrawer}>打开 Drawer</Button>

    <Drawer v-model='show'
        title='可调整大小的 Drawer' 
        placement={this.get('placement')}
        resizable={true}
    >
        <div>
            <p>可以通过拖拽边缘来调整 drawer 的大小：</p>
            <ul>
                <li><strong>top/bottom</strong>：
                    <ul>
                        <li>宽度：可以通过拖拽右侧边缘来调整宽度，调整时会自动保持居中</li>
                        <li>高度：可以通过拖拽底部（top）或顶部（bottom）边缘来调整高度</li>
                    </ul>
                </li>
                <li><strong>left</strong>：可以通过拖拽右侧边缘来调整宽度</li>
                <li><strong>right</strong>：可以通过拖拽左侧边缘来调整宽度</li>
            </ul>
            <p>当前 placement: {this.get('placement')}</p>
        </div>
    </Drawer>
</div>
```

```ts
import {bind, DrawerProps} from 'kpc';

interface Props {
    show?: boolean
    placement: DrawerProps['placement']
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            show: false,
            placement: 'right' as Props['placement'],
        };
    }

    @bind
    showDrawer() {
        this.set('show', true);
    }
}
```
