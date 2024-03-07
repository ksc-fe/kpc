---
title: React中使用
order: 1.2
sidebar: doc
---

# 安装

## Npm 

```shell
npm install @king-design/react -S
```

## Yarn

```shell
yarn add @king-design/react 
```

# 使用

```js
import React from 'react';
import {Button, Message} from '@king-design/react';

class App extends React.Component {
    hello() {
        Message.success('Welcome to kpc world!');
    }
    render() {
        return <Button onClick={this.hello}>Hello World</Button>
    }
}
```

# 注意事项

1. 当需要将vNode作为属性传给KingDesign组件时，需要使用`normalize`方法处理vNode

> 如果是作为子元素`children`，则没有必要`normalize`，因为组件默认会normalize子元素

```js
import React from 'react';
import {normalize, Badge} from '@king-design/react';

class App extends React.Component {
    render() {
        return (
            // 作为属性，需要normalize
            <Badge text={normalize(<i>test</i>)}>
                <div>test</div>
            </Badge>
        )
    }
}
```

2. React 17中，因为事件绑定在root元素而非document上，react元素stopPropagation，会导致所有KingDesign组件
相应事件失效，因为KingDesign组件的事件是委派到document上的， root元素stopPropagation会使事件不会继续
冒泡的document。

针对这个情况，需要将react元素转化为KingDesign组件，用`View`组件替换react中的`div` `span`等元素

```jsx
import { View, Checkbox } from '@king-design/react';

export const Demo = () => {
    return <View onClick={(e) => e.stopPropagation()}>
        <Checkbox />
    </View>
}
```

> View组件默认渲染成div，如果需要渲染成其他元素，使用tag属性指定
