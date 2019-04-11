---
title: 新增和关闭标签
order: 6
---

给`Tabs`添加`closable`属性，可以使所有标签可以关闭，当然你也可以通过`Tab`的`closable`属性单独
控制该`Tab`是否可关闭。当点击关闭按钮时，`Tabs`会触发`remove`事件，并且将关闭的`Tab`的`value`
作为参数传给事件回调函数

```vdt
import {Tabs, Tab} from 'kpc/components/tabs';
import {Button, ButtonGroup} from 'kpc/components/button';

<div>
    <ButtonGroup v-model="size" checkType="radio">
        <Button v-for={{ ['large', 'default', 'small', 'mini'] }}
            value={{ value }}
        >{{ value }}</Button>
    </ButtonGroup>
    <br /><br />
    <Button ev-click={{ self._add }}>新增Tab</Button>
    <Tabs v-model="tab"
        closable={{ self.get('tabs').length > 1 }}
        ev-remove={{ self._remove }}
        v-for={{ ['default', 'card', 'border-card', 'no-border-card'] }}
        type={{ value }}
        size={{ self.get('size') }}
    >
        <Tab v-for={{ self.get('tabs') }}
            value={{ value.value }}
            key={{ value.value }}
            closable={{ value.value !== 10 }}
        >{{ value.label }}</Tab>
    </Tabs>
</div>
```

```styl
.k-tabs
    margin 16px 0
.k-no-border-card
    background #f1f1f5
```

```js
let id = 3;
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            tab: 1,
            tabs: [
                {value: 1, label: 'Tab 1'},
                {value: 2, label: 'Tab 2'},
                {value: 3, label: 'Tab 3'},
            ],
            size: 'large',
        }
    }

    _remove(value) {
        const tabs = this.get('tabs').slice(0);
        const index = tabs.findIndex(item => item.value === value);
        tabs.splice(index, 1);

        // 如果删除当前tab，则切换至下一个
        let tab = this.get('tab');
        if (value === tab) {
            tab = (tabs[index] || tabs[index - 1]).value
        }

        this.set({tabs, tab});
    }

    _add() {
        const tabs = this.get('tabs').slice(0);
        id++;
        tabs.push({
            value: id,
            label: `Tab ${id}`,
        });
        this.set({tabs, tab: id});
    }
}
```


```vue-methods
_remove(value) {
    const index = this.tabs.findIndex(item => item.value === value);
    this.tabs.splice(index, 1);

    // 如果删除当前tab，则切换至下一个
    if (value === this.tab) {
        this.tab = (this.tabs[index] || this.tabs[index - 1]).value
    }
}

_add() {
    id++;
    this.tabs.push({
        value: id,
        label: `Tab ${id}`,
    });
    this.tab = id;
}
```
