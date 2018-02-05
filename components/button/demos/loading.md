---
title: 加载状态按钮
order: 2
---

添加`loading`属性，可以将按钮设为加载状态，此时按钮不可点。

```vdt
import Button from 'kpc/components/button';

<div>
    <Button type="primary" loading>确认</Button>
    <Button icon circle loading><i class="k-icon ion-ios-search"></i></Button>
    <br /> <br />
    <Button type="primary" 
        loading={{ self.get('loading1') }}
        ev-click={{ self.onClick.bind(self, 'loading1') }}
    >点击加载</Button>
    <Button type="primary" 
        loading={{ self.get('loading2') }}
        ev-click={{ self.onClick.bind(self, 'loading2') }}
    ><i class="k-icon ion-ios-search"></i>点击加载</Button>
    <Button icon circle
        loading={{ self.get('loading3') }}
        ev-click={{ self.onClick.bind(self, 'loading3') }}
    ><i class="k-icon ion-ios-search"></i></Button>
    <Button type="primary" 
        loading={{ self.get('loading4') }}
        ev-click={{ self.onClick.bind(self, 'loading4') }}
    >图标在右侧<i class="k-icon ion-ios-search"></i></Button>
</div>
```

```styl
.k-btn
    margin-right 20px
```

```js
import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    @Intact.template()
    static template = template;

    onClick(name) {
        this.set(name, true);
    }
}
```
