---
title: 菜单项添加Checkbox
order: 6
---

`DropdownItem`嵌套`Checkbox`使用，你可能需要指定`hideOnSelect=false`来使点击菜单项时不隐藏菜单

```vdt
import {Dropdown, DropdownMenu, DropdownItem, Checkbox, Button, Icon} from 'kpc';

<div>
    <Dropdown>
        <Button>More<Icon class="ion-ios-arrow-right" /></Button>
        <DropdownMenu class="checkbox-menu">
            <DropdownItem hideOnSelect={false}>
                <Checkbox v-model="checked"
                    trueValue="1"
                >item 1</Checkbox>
            </DropdownItem>
            <DropdownItem hideOnSelect={false}>
                <Checkbox v-model="checked"
                    trueValue="2"
                >item 2</Checkbox>
            </DropdownItem>
            <DropdownItem hideOnSelect={false}>
                <Checkbox v-model="checked"
                    trueValue="3"
                >item 3</Checkbox>
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
