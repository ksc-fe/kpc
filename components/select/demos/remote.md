---
title: 远程搜索
order: 4.1
---

监听`$change:keywords`事件，可以在关键词变化时进行远程搜索，此时需要将过滤函数设为`() => true`
让它不要真正去过滤结果。

```vdt
import {Select, Option} from 'kpc/components/select';

<Select filterable filter={{ () => true }} ev-$change:keywords={{ self.search }}>
    <Option v-for={{ self.get('users') }} 
        value={{ value.login.username }}
    >{{ value.name.first }} {{ value.name.last }}</Option>
</Select>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            users: []
        }
    }

    _init() {
        this.lastFetchId = 0;
    }

    search(select, keywords) {
        console.log(keywords);

        if (!keywords) return;

        const fetchId = ++this.lastFetchId
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(body => {
                if (fetchId !== this.lastFetchId) return;
                this.set('users', body.results);
            });
    }
}
```

```vue-script
beforeCreate() {
    this.lastFetchId = 0;
},
```
