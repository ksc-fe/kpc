---
title: 图标按钮
order: 1
---

给`Button`添加`icon`属性，可以展示图标按钮。图标按钮仅仅是使按钮的宽高相等，
此时你可以将任意图标元素作为它的子元素。`circle`属性可以展示圆形图标。如果
你不需要宽高相等的图标按钮，而仅仅是带图标的文字按钮，去掉`icon`属性即可。
__注意：请给图标元素添加`k-icon`类名，用于定位图标元素，以便按钮变为`loading`状态
时能够将它替换为loading图标__

```vdt
import Button from 'kpc/components/button';

<div>
    <Button icon><i class="ion-ios-search"></i></Button>
    <Button icon circle><i class="ion-ios-search"></i></Button>
    <Button type="primary"><i class="k-icon ion-ios-search"></i>搜索</Button>
    <Button circle type='primary'><i class="k-icon ion-ios-search"></i>搜索</Button>
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
}
```
