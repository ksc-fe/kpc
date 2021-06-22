---
title: 远程搜索
order: 4.1
---

监听`$change:keywords`事件，可以在关键词变化时进行远程搜索，此时需要将过滤函数设为`() => true`
让它不要真正去过滤结果。

```vdt
import {Select, Option} from 'kpc/components/select';

<Select multiple filterable filter={() => true} ev-$change:keywords={this.search}>
    <Option v-for={this.get('users')} 
        value={$value.login.username}
    >{$value.name.first} {$value.name.last}</Option>
</Select>
```

```ts
import {bind} from 'kpc/components/utils';

export default class extends Component {
    static template = template;

    static defaults() {
        return {
            users: []
        }
    }

    init() {
        this.lastFetchId = 0;
    }

    @bind
    search(keywords) {
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

```react-methods
constructor(props) {
    super(props);
    this.state = {users: []};
    this.search = this.search.bind(this);
    this.lastFetchId = 0;
}
```

```angular-properties
private users = [];
private lastFetchId = 0;
```
