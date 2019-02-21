---
title: 
    zh-CN: 加载状态按钮
    en-US: Loading
order: 2
---

## zh-CN

添加`loading`属性，可以将按钮设为加载状态，此时按钮不可点。

> 请给图标元素添加`k-icon`类名，或者使用`Icon`组件，用于定位图标元素，
> 以便按钮变为`loading`状态时能够将它替换为loading图标

## en-US

Add a `loading` property to set the button to loading state, at which point the button is not clickable.

> Add a `k-icon` class name to the icon element, or use `Icon` component to locate the icon element so that 
> it can be replaced with the loading icon when the button has changed to loading state.

```vdt
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';

<div>
    <Button type="primary" loading>Confirm</Button>
    <Button icon circle loading><i class="k-icon ion-ios-search"></i></Button>
    <br /> <br />
    <Button type="primary" 
        loading={{ self.get('loading1') }}
        ev-click={{ self.onClick.bind(self, 'loading1') }}
    >Click to Load</Button>
    <Button type="primary" 
        loading={{ self.get('loading2') }}
        ev-click={{ self.onClick.bind(self, 'loading2') }}
    ><Icon class="ion-ios-search" />Click to Load</Button>
    <Button icon circle
        loading={{ self.get('loading3') }}
        ev-click={{ self.onClick.bind(self, 'loading3') }}
    ><Icon class="ion-ios-search" /></Button>
    <Button type="primary" 
        loading={{ self.get('loading4') }}
        ev-click={{ self.onClick.bind(self, 'loading4') }}
    >Icon on the right<Icon class="ion-ios-search" /></Button>
</div>
```

```styl
.k-btn
    margin-right 20px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    onClick(name) {
        this.set(name, true);
    }
}
```
