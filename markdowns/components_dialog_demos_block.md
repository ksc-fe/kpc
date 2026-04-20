---
title: 自定义头部和底部
order: 1
---

组件提供了`header`和`footer`扩展点（block），通过它们可以自定义头部和底部。有时候我们可能想
完整去掉整个底部`footer`，这可以通过置空`footer-wrapper`这个扩展点做到。

> vue会忽略所有空`slot`，所以如果要重置`footer-wrapper`可以传一个空`div`代替

```vdt
import {Button, Dialog} from 'kpc';

<div>
    <Button ev-click={this.set.bind(this, 'show', true)}
        type="primary"
    >Show Dialog</Button>
    <Button ev-click={this.set.bind(this, 'show1', true)}
        type="primary"
    >Show Dialog without Footer</Button>
    <Dialog v-model="show">
        <b:header>
            <div class="k-title">
                <i class="ion-person"></i>
                Custom Header
            </div>
        </b:header>

        Dialog Body 

        <b:footer>
            Custom Footer
            {$super()}
        </b:footer>
    </Dialog>
    <Dialog v-model="show1" title="No Footer">
        <b:body>body</b:body>
        <b:footer-wrapper></b:footer-wrapper>
    </Dialog>
</div>
```

```styl
.k-btn
    margin-right 16px
```

```vue-template
<div>
    <Button @click="show = true" type="primary">Show Dialog</Button>
    <Button @click="show1 = true" type="primary">Show No Footer Dialog</Button>
    <Dialog v-model="show">
        <template slot="header">
            <div class="k-title">
                <i class="ion-person"></i>
                Custom Header
            </div>
        </template>

        Dialog Body 

        <template slot="footer">
            Custom Footer
            <Button type="primary" @click="show = false">确认</Button>
            <Button @click="show = false">取消</Button>
        </template>
    </Dialog>
    <Dialog v-model="show1" title="No Footer">
        <template slot="body">body</template>
        <template slot="footer-wrapper">
            <div></div>
        </template>
    </Dialog>
</div>
```

```vue-data
data() {
    return {
        show: false,
        show1: false,
    }
},
```

```tsx
import React from 'react';
import {Button, Dialog} from '@king-design/react';
import './index.styl';

export default class Demo extends React.Component {
    state = {
        show: false,
        show1: false,
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.setState({show: true})}
                    type="primary"
                >Show Dialog</Button>
                <Button onClick={() => this.setState({show1: true})}
                    type="primary"
                >Show No Footer Dialog</Button>
                <Dialog value={this.state.show}
                    onChangeValue={(show) => this.setState({show})}
                    slotHeader={
                        <div className="k-title">
                            <i className="ion-person"></i>
                            Custom Header
                        </div>
                    }
                    slotFooter={
                        <React.Fragment>
                            Custom Footer
                            <Button type="primary" onClick={() => this.setState({show: false})}>确认</Button>
                            <Button onClick={() => this.setState({show: false})}>取消</Button>
                        </React.Fragment>
                    }
                >
                    Dialog Body 
                </Dialog>
                <Dialog value={this.state.show1}
                    onChangeValue={(show1) => this.setState({show1})}
                    title="No Footer"
                    slotBody="body"
                    slotFooterWrapper=""
                >
                </Dialog>
            </div>
        )
    }
}
```
