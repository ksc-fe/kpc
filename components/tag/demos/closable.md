---
title: 关闭按钮
order: 1
---

给组件添加`closable`属性，可以关闭标签，关闭后会触发`close`事件

> 如果仅仅指定了`closable`属性，那么组件的开启和关闭是组件内部自己维护的状态，
> 一旦组件被重新创建，那么又会回到默认开启状态，所以如果你需要维持组件的状态，
> 需要自己维护`closed`属性，或者通过`v-if`来控制组件

```vdt
import Tag from 'kpc/components/tag';

<div>
    <Tag v-for={{ self.get('tags') }}
        key={{ value }}
        type={{ value }}
        closable
        ev-close={{ self.onClose.bind(self, key) }}
    >{{ value }}</Tag>
    <Tag disabled closable>disabled</Tag>
</div>
```

```styl
.k-tag
    margin-right 16px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {tags: ['default', 'primary', 'success', 'warning', 'danger']};
    }

    onClose(index) {
        const tags = this.get('tags').slice(0);
        tags.splice(index, 1);
        this.set('tags', tags);
    }
}
```

```vue-methods
onClose(index) {
    this.tags.splice(index, 1);
}
```
