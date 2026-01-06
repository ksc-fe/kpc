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
## CDN引入

通过[https://cdn.jsdelivr.net/npm/@king-design/react](https://cdn.jsdelivr.net/npm/@king-design/react)可以直接引入最新版KingDesign，建议使用锁定版本地址，
例如：[https://cdn.jsdelivr.net/npm/@king-design/react@3.7.0](https://cdn.jsdelivr.net/npm/@king-design/react@3.7.0)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>kingdesign-react</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
</head>
<body>
    <div id="app"></div>

    <script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/babel-standalone/babel.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@king-design/react"></script>

    <script type="text/babel">
        const {Button, Message} = Kpc;

        class Demo extends React.Component {
            hello() {
                Message.success('Welcome to the world of KingDesign and React!');
            }

            render() {
                return <Button onClick={this.hello.bind(this)}>test</Button>
            }
        }

        ReactDOM.render(<Demo />, document.getElementById('app'));
    </script>
</body>
</html>
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
