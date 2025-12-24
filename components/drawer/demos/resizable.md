---
title: 可调整大小
order: 0.3
---

添加`resizable`属性，可以通过拖拽边缘来调整 drawer 的大小。
`resizable` 支持两种用法：
**布尔值**：`true`可调整大小，`false`不可调整大小。
**函数**：如果您同时传入`width`属性，又需要可调整宽度，可传入一个函数，在拖拽时通过回调拿到最新宽度，由外部自行更新 `width`。


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
    <Button ev-click={() => this.set('show', true)}>打开 Drawer</Button>
    <br /><br />
    <Button ev-click={() => this.set('showControlled', true)}>打开 宽度受控Drawer</Button>

    <!-- 非受控：内部自己维护宽度 -->
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

    <br /><br />

    <!-- 受控：通过回调拿到最新宽度，自己维护 state -->
    <Drawer v-model='showControlled'
        title='受控宽度 Drawer'
        placement={this.get('placement')}
        width={this.get('controlledWidth')}
        resizable={(w) => this.set('controlledWidth', w)}
    >
        <div>
            <p>这是一个<strong>受控</strong>的可调整大小 Drawer：</p>
            <p>当前宽度：{this.get('controlledWidth')}px</p>
        </div>
    </Drawer>
</div>
```

```ts
import {DrawerProps} from 'kpc';

interface Props {
    show?: boolean
    showControlled?: boolean
    placement: DrawerProps['placement']
    controlledWidth: number
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            show: false,
            showControlled: false,
            placement: 'right',
            controlledWidth: 240,
        } as Props;
    }
}
```

