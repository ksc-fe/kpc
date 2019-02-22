---
title: 
    zh-CN: 右键菜单
    en-US: Context Menu
order: 7
---

## zh-CN

将`DropdownMenu`作为顶层元素，而不是`Dropdown`的子元素，然后指定`of`属性为事件对象，即可以实现
跟随鼠标位置的弹出菜单

> 这里将`position`属性指定为`left+1`是为了避免弹出菜单立即被选中第一项

> `React`下事件对象会复用，我们不能在异步函数中调用事件对象的属性和方法，如果需要保留事件
> 对象，需要调用`event.persist()`方法 https://reactjs.org/docs/events.html#event-pooling

## en-US

Use `DropdownMenu` as the top-level element, rather than the child element of `Dropdown`, and then 
specify `of` property to the event object, which can implement the dropdown menu that follow the 
mouse position.

> Here the `position` property is specified to `left+1` is to avoid selecting the first item of the 
> the menu when it pops up.

> The event object will be reused in `React`, so we can't get properties and call methods of the event 
> object in a asynchronous function. If we need to reserve the event object, we need to call the 
> `event.persit()` method. https://reactjs.org/docs/events.html#event-pooling

```vdt
import {DropdownMenu, DropdownItem} from 'kpc/components/dropdown';

<div>
    <div class="contextmenu-area" ev-contextmenu={{ self._showMenu }}>
        right click this area to show context menu
    </div>
    <DropdownMenu v-model="show" 
        of={{ self.get('event') }}
        position={{ {my: 'left+1 top', at: 'right bottom'} }}
    >
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Option 3</DropdownItem>
    </DropdownMenu>
</div>
```

```styl
.contextmenu-area
    height 100px
    background #f0f0f0
    text-align center
    line-height 100px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return { 
            show: false,
            event: null,
        };
    }

    _showMenu(event) {
        event.preventDefault();
        this.set({
            show: true,
            event: event,
        });
    }
}
```

```vue-methods
_showMenu(event) {
    event.preventDefault();
    this.show = true;
    this.event = event;
}
```

```react-methods
_showMenu(event) {
    // https://reactjs.org/docs/events.html#event-pooling
    event.persist();
    event.preventDefault();
    this.set({
        show: true,
        event: event,
    });
}
```
