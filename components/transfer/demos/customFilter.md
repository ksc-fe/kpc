---
title: 自定义搜索
order: 2
---

我们可以通过`filter`扩展点自定义搜索内容，而且通过该扩展点的参数`type`，可以给左侧/右侧/两侧
定义不同的内容

```vdt
import {Transfer, Input, Select, Option, Tag} from 'kpc';

<div>
    <Transfer data={this.get('data')} 
        filterable
        keyName="name"
        v-model="value"
        ref="__test"
    >
        <b:filter args="type">
            <Input v-if={type === 'left'} size="small"
                placeholder="请输入"
                clearable
                v-model="keywords"
            >
                <b:prepend>
                    <Select v-model="policy" width="100" size="small">
                        <Option value="all">全部策略</Option>
                        <Option value="system">系统策略</Option>
                        <Option value="common">通用策略</Option>
                    </Select>
                </b:prepend>
            </Input>
        </b:filter>
        <b:label args="[data, index, type]">
            <div>
                <div>
                    {data.name}
                    <Tag type="warning" size="mini" v-if={data.policy === 'system'}>系统策略</Tag>
                </div>
                <p>{data.members}人 / {data.desc}</p>
            </div>
        </b:label>
    </Transfer>
    <p>You selected: {JSON.stringify(this.get('value'))}</p>
</div>
```

```styl
.k-tag
    margin-left 5px
.k-select
    width 100px
```

```ts
import {bind} from 'kpc';

interface Props {
    policy?: string | null
    data: DataItem[]
    keywords?: string
    value?: string[]
}

type DataItem = {
    name: string
    policy: string
    members: number
    desc: string
    disabled?: boolean
}

function mockApi(policy: string) {
    const data: DataItem[] = [
        {name: 'AdministratorAccess', policy: 'system', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'OSSFullAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'SupportFullAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'BSSFullSupportAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限', disabled: true},
        {name: 'SystemFullAccess', policy: 'system', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'CommonAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
    ];

    return new Promise<DataItem[]>(resolve => {
        setTimeout(() => {
            if (policy === 'all') resolve(data);
            else resolve(data.filter(item => item.policy === policy));
        }, 500);
    });
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            policy: 'all',
            data: [],
            keywords: '',
            value: [],
        } as Props;
    }

    private originData: DataItem[] | null = null;

    init() {
        // when policy changed, fetch data
        this.watch('policy', this.fetch);
        this.watch('keywords', this.filter);
        this.fetch();
    }

    @bind
    fetch() {
        mockApi(this.get('policy')!).then(data => {
            if (this.$unmounted) return;
            this.originData = data;
            this.filter();
        });
    }
    
    @bind
    filter() {
        const keywords = this.get('keywords');
        const data = keywords ? 
            this.originData!.filter(data => {
                return data.name.includes(keywords);
            }) :
            this.originData!;
        this.set('data', data);
    }
}
```

```vue-script
created() {
    this.fetch();
},
watch: {
    policy: function() {
        this.fetch();
    },
    keywords: function() {
        this.filter();
    },
},
```

```react-methods
private $unmounted: boolean = false;

componentDidMount() {
    this.fetch();
}

componentWillUnmount() {
    this.$unmounted = true;
}

setState(state: any, cb?: () => void) {
    if ('policy' in state) {
        super.setState(state, this.fetch);
    } else if ('keywords' in state) {
        super.setState(state, this.filter);
    } else {
        super.setState(state, cb);
    }
}
```

```angular-properties
private data = [];
private value;
private _keywords;
private policy = "all";
private originData;
```

```angular-methods
set keywords(v) {
    this._keywords = v;
    this._filter();
}

get keywords() {
    return this._keywords;
}

ngOnInit() {
    this._fetch();
}
```
