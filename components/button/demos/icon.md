---
title: 图标按钮
order: 1
---

给`Button`添加`icon`属性，可以展示图标按钮。图标按钮仅仅是使按钮的宽高相等，
此时你可以将任意图标元素作为它的子元素。`circle`属性可以展示圆形图标。如果
你不需要宽高相等的图标按钮，而仅仅是带图标的文字按钮，去掉`icon`属性即可。

```vdt
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';

<div>
    <Button icon><Icon class="ion-ios-search" /></Button>
    <Button icon circle><Icon class="ion-ios-search" /></Button>
    <Button type="primary"><Icon class="ion-ios-search" size="small" />搜索</Button>
    <Button circle type='primary'><Icon class="ion-ios-search" size="small" />搜索</Button>
</div>
```

```styl
.k-btn
    margin-right 20px
```

```jsx
import React from 'react';
import Button from 'kpc/components/button';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Button icon><i className="ion-ios-search"></i></Button>
                <Button icon circle><i className="ion-ios-search"></i></Button>
                <Button type="primary"><i className="k-icon ion-ios-search"></i>搜索</Button>
                <Button circle type='primary'><i className="k-icon ion-ios-search"></i>搜索</Button>
            </div>
        )
    }
}
```
