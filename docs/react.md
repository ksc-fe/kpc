---
title: React中使用
order: 1.1
sidebar: doc
---

使kpc运行在React框架中，我们只需要引入React兼容层[intact-react][1]即可

# 语法说明

文档中针对intact的例子，我们只需要做以下写法上的转换即可

| 类别 | intact写法 | react写法 | 说明 |
| --- | --- | --- | --- |
| 事件 | `ev-click` | `onClick` | 保留React事件命名风格，`on` + 事件名首字母大写 |
| 默认事件 | `ev-$change:value` | `on$change-value` | React属性名不支持冒号(:)，改为连字符(-)即可 |
| 事件回调传参 | `ev-click={{ self.onClick.bind(self, data) }}` | `onClick={this.onClick.bind(this, data)}` | - |
| 属性 | `name={{ self.get('name') }}` | `name={this.state.name}` | - |
| block | `<Dialog><b:header><div>header</div></b:header></Dialog>` | `<Dialog b-header={<div>header</div>} />` | `b:header`block对应React的属性`b-header` |
| block parent() | `<b:header>{{ parent() }}header</b:header>` | 不支持引用父组件定义的内容 | - |
| 带参数的block | `<Transfer><b:label params="data"><div>{{ data.name }}</div></b:label></Transfer>` | `<Transfer b-label={(data) => <div>{data.name}</div>} />` | `b-lablel`属性值为函数 |
| 双向绑定任意属性 `@since intact-vue@0.3.7` | `v-model:name="name"` | `on$change-name={(c, v) => this.setState({name: v})} name={this.state.name}` | React不支持`v-model`语法糖，改为属性和事件的方式即可 |

另外当需要将vNode作为属性传给kpc组件时，需要使用`Intact.normalize()`方法处理vNode

> 如果是作为子元素`children`，则没有必要`normalize`，因为兼容层默认会normalize子元素

```js
import React from 'react';
import Intact from 'intact';
import Badge from 'kpc/components/badge';

class App extends React.Component {
    render() {
        return (
            // 作为属性，需要normalize
            <Badge text={Intact.normalize(<div>test</div>)}>
                <div>test</div>
            </Badge>
        )
    }
}
```

> `Table`组件的`scheme`属性中`template`字段返回的vNode无需`normalize`，因为组件内部做了兼容，
> 不过多次调用`normalize`也没有问题。

# 配置`webpack.config.js`

和在intact中使用的配置类似，只需要设置`alias`让`intact`库指向`intact-react`兼容层

```js
module.exports = {
    ...
    resolve: {
        alias: {
            'intact$': 'intact-react',
        }
    }
}
```

# 使用

```js
import React from 'react';
import {Button} from 'kpc/components/button';
import {Message} from 'kpc/components/message';

class App extends React.Component {
    hello() {
        Message.success('Welcome to kpc world!');
    }
    render() {
        return <Button onClick={this.hello}>Hello World</Button>
    }
}
```

[1]: https://github.com/ksc-fe/intact-react
