---
title: 自定义头部和底部
order: 1
---

组件提供了`header`和`footer`扩展点（block），通过它们可以自定义头部和底部。有时候我们可能想
完整去掉整个底部`footer`，这可以通过置空`footer-wrapper`这个扩展点做到。

> 可以通过`parent()`引用到组件定义的默认内容

> vue会忽略所有空`slot`，所以如果要重置`footer-wrapper`可以传一个空`div`代替

```vdt
import Button from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';

<div>
    <Button ev-click={{ self.set.bind(self, 'show', true) }}
        type="primary"
    >Show Dialog</Button>
    <Button ev-click={{ self.set.bind(self, 'show1', true) }}
        type="primary"
    >Show No Footer Dialog</Button>
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
            {{ parent() }}
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
        <div class="k-title" slot="header">
            <i class="ion-person"></i>
            Custom Header
        </div>

        Dialog Body 

        <template slot="footer">
            Custom Footer
            <!-- vue不支持parent()引用，我们需要重新定义按钮 -->
            <Button @click="show = false">取消</Button>
            <Button type="primary" @click="show = false">确认</Button>
        </template>
    </Dialog>
    <Dialog v-model="show1" title="No Footer">
        <template slot="body">body</template>
        <div slot="footer-wrapper"></div>
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

```jsx
import React from 'react';
import Button from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';
import './index.styl';

export default class Demo extends React.Component {
    state = {}

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
                    ev$change-value={(c, show) => this.setState({show})}
                    b-header={
                        <div className="k-title">
                            <i className="ion-person"></i>
                            Custom Header
                        </div>
                    }
                    b-footer={
                        <React.Fragment>
                            Custom Footer
                            <Button onClick={() => this.setState({show: false})}>取消</Button>
                            <Button type="primary" onClick={() => this.setState({show: false})}>确认</Button>
                        </React.Fragment>
                    }
                >
                    Dialog Body 
                </Dialog>
                <Dialog value={this.state.show1}
                    on$change-value={(c, show1) => this.setState({show1})}
                    title="No Footer"
                    b-body="body"
                    b-footer-wrapper=""
                >
                </Dialog>
            </div>
        )
    }
}
```

```ts
import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button (click)="set('show', true)"
                type="primary"
            >Show Dialog</k-button>
            <k-button (click)="set('show1', true)"
                type="primary"
            >Show No Footer Dialog</k-button>
            <k-dialog [(value)]="show">
                <ng-template #header>
                    <div class="k-title">
                        <i class="ion-person"></i>
                        Custom Header
                    </div>
                </ng-template>
        
                Dialog Body 
        
                <ng-template #footer>
                    Custom Footer
                    <k-button (click)="show = false">取消</k-button>
                    <k-button type="primary" (click)="show = false">确认</k-button>
                </ng-template>
            </k-dialog>
            <k-dialog [(value)]="show1" title="No Footer">
                <ng-template #body>body</ng-template>
                <ng-template #footer_wrapper></ng-template>
            </k-dialog>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private show;
    private show1;

    set(key, value) { this[key] = value; }
}
```
