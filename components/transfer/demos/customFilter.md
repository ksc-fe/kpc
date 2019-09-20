---
title: 自定义搜索
order: 1.1
---

我们可以通过`filter`扩展点自定义搜索内容，而且通过该扩展点的参数`type`，可以给左侧/右侧/两侧
定义不同的内容

```vdt
import Transfer from 'kpc/components/transfer';
import Input from 'kpc/components/input';
import {Select, Option} from 'kpc/components/select';
import Tag from 'kpc/components/tag';

<div>
    <Transfer data={{ self.get('data') }} 
        filterable
        keyName="name"
        v-model="value"
        ref="__test"
    >
        <b:filter params="type">
            <Input v-if={{ type === 'left' }} size="small"
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
        <b:label params="data, index, type">
            <div>
                <div>
                    {{ data.name }}
                    <Tag type="warning" size="mini" v-if={{ data.policy === 'system' }}>系统策略</Tag>
                </div>
                <p>{{ data.members }}人 / {{ data.desc }}</p>
            </div>
        </b:label>
    </Transfer>
    <p>You selected: {{ JSON.stringify(self.get('value')) }}</p>
</div>
```

```styl
.k-tag
    margin-left 5px
```

```js
function mockApi(policy) {
    const data = [
        {name: 'AdministratorAccess', policy: 'system', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'OSSFullAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'SupportFullAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'BSSFullSupportAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限', disabled: true},
        {name: 'SystemFullAccess', policy: 'system', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'CommonAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
    ];

    return new Promise(resolve => {
        setTimeout(() => {
            if (policy === 'all') resolve(data);
            else resolve(data.filter(item => item.policy === policy));
        }, 500);
    });
}

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            policy: 'all',
            data: []
        }
    }

    _init() {
        // when policy changed, fetch data
        this.on('$change:policy', this._fetch);
        this.on('$change:keywords', this._filter);
        this._fetch();
    }

    _fetch() {
        mockApi(this.get('policy')).then(data => {
            this.originData = data;
            this._filter();
        });
    }

    _filter() {
        const keywords = this.get('keywords');
        const data = keywords ? 
            this.originData.filter(data => {
                return data.name.includes(keywords);
            }) :
            this.originData;
        this.set('data', data);
    }
}
```

```vue-script
created() {
    this._fetch();
},
watch: {
    policy: function() {
        this._fetch();
    },
    keywords: function() {
        this._filter();
    },
},
```

```react-methods
componentDidMount() {
    this._fetch();
}

setState(state, cb) {
    if ('policy' in state) {
        super.setState(state, this._fetch);
    } else if ('keywords' in state) {
        super.setState(state, this._filter);
    } else {
        super.setState(state, cb);
    }
}
```

```angular-properties
private data = [];
private value;
private keywords;
private policy = "all";
private originData;
```

```angular-methods
ngOnChanges(changes) {
    console.log(changes);
}
```
