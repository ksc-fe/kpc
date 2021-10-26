---
title: 加载状态按钮
order: 2
---

添加`loading`属性，可以将按钮设为加载状态，此时按钮不可点。

> 请给图标元素添加`k-icon`类名，或者使用`Icon`组件，用于定位图标元素，
> 以便按钮变为`loading`状态时能够将它替换为loading图标

```vdt
import {Button} from 'kpc/components/button';
import {Icon} from 'kpc/components/icon';

<div>
    <Button type="primary" loading>确认</Button>
    <Button icon circle loading><i class="k-icon ion-ios-search"></i></Button>
    <br /> <br />
    <Button type="primary" 
        loading={this.get('loading1')}
        ev-click={this.onClick.bind(this, 'loading1')}
    >点击加载</Button>
    <Button type="primary" 
        loading={this.get('loading2')}
        ev-click={this.onClick.bind(this, 'loading2')}
    ><Icon class="ion-ios-search" />点击加载</Button>
    <Button icon circle
        loading={this.get('loading3')}
        ev-click={this.onClick.bind(this, 'loading3')}
    ><Icon class="ion-ios-search" /></Button>
    <Button type="primary" 
        loading={this.get('loading4')}
        ev-click={this.onClick.bind(this, 'loading4')}
    >图标在右侧<Icon class="ion-ios-search" /></Button>
</div>
```

```styl
.k-btn
    margin-right 20px
```

```ts
export default class extends Component {
    static template = template;

    onClick(name) {
        this.set(name, true);
    }
}
```
