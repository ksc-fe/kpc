---
title: 菜单项添加Checkbox
order: 6
---

`DropdownItem`嵌套`Checkbox`使用

```vdt
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import {Checkbox} from 'kpc/components/checkbox';
import {Button} from 'kpc/components/button';

<div>
    <Dropdown>
        <Button>More ></Button>
        <DropdownMenu class="checkbox-menu">
            <DropdownItem hideOnSelect={false}>
                <Checkbox v-model="checked" trueValue="1">item 1</Checkbox>
            </DropdownItem>
            <DropdownItem hideOnSelect={false}>
                <Checkbox v-model="checked" trueValue="2">item 2</Checkbox>
            </DropdownItem>
            <DropdownItem hideOnSelect={false}>
                <Checkbox v-model="checked" trueValue="3">item 3</Checkbox>
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
</div>
```

```ts
export default class extends Component {
    static template = template;

    static defaults() {
        return { checked: [] };
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
