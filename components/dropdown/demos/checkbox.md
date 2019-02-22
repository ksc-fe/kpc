---
title: 
    zh-CN: 菜单项添加Checkbox
    en-US: Add Checkbox to Menu Item
order: 6
---

## zh-CN

在`DropdownItem`中使用`Checkbox`，需要注意的是：

如果给`DropdownItem`绑定`select`事件，该事件会触发两次，这是因为，`Checkbox`会使用`label`包裹
`input`元素，两次事件，一次来源于`label`，另一次来源于`input`，所以当你需要自己在`select`中
处理选中的值时，需要阻止`label` `click`事件的默认行为

> `Radio`也类似

## en-US

To add `Checkbox` to `DropdownItem`, you need to pay attention to:

If bind `select` event on `DropdownItem`, the vent will fire twice, becasue  `Checkbox` uses 
`label` to wrap the `input` element, the two events, one from `label`, the other one from `input`.
You need to prevent the default behavior of the `click` event from `label` when you want to handle 
the selected value in `select` by yourself.

> `Radio` is also similar.

```vdt
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import Checkbox from 'kpc/components/checkbox';
import Button from 'kpc/components/button';

<div>
    <Dropdown>
        <Button>More ></Button>
        <DropdownMenu class="checkbox-menu">
            <DropdownItem hideOnSelect={{ false }} ev-select={{ self._onSelect }}>
                <Checkbox v-model="checked" trueValue="1">item 1</Checkbox>
            </DropdownItem>
            <DropdownItem hideOnSelect={{ false }} ev-select={{ self._onSelectAndPreventDefault }}>
                <Checkbox v-model="checked" trueValue="2">item 2</Checkbox>
            </DropdownItem>
            <DropdownItem hideOnSelect={{ false }}>
                <Checkbox v-model="checked" trueValue="3">item 3</Checkbox>
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
</div>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return { checked: [] };
    }

    _onSelect(c, e) {
        console.log('allowDefault', e);
    }

    _onSelectAndPreventDefault(c, e) {
        e.preventDefault();
        console.log('preventDefault', e);

        const checked = this.get('checked').slice(0);
        const index = checked.indexOf('2');
        if (index > -1) {
            checked.splice(index, 1);
        } else {
            checked.push('2');
        }
        this.set('checked', checked);
    }
}
```

```vue-methods
_onSelectAndPreventDefault(c, e) {
    e.preventDefault();
    console.log('preventDefault', e);

    const checked = this.checked;
    const index = checked.indexOf('2');
    if (index > -1) {
        checked.splice(index, 1);
    } else {
        checked.push('2');
    }
}
```
