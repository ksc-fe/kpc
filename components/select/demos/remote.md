---
title: 远程搜索
order: 4.1
---

监听`input`事件，可以在关键词变化时进行远程搜索，此时需要将过滤函数设为`() => true`
让它不要真正去过滤结果。

```vdt
import {Select, Option} from 'kpc';

<Select multiple filterable filter={() => true} ev-input={this.search}>
    <Option v-for={this.get('users')} 
        value={$value.login.username}
    >{$value.name.first} {$value.name.last}</Option>
</Select>
```

```ts
import {bind} from 'kpc';

interface Props {
    users: any[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            users: []
        }
    }

    private lastFetchId = 0;

    @bind
    search(e: InputEvent) {
        const keywords = (e.target as HTMLInputElement).value.trim();

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
