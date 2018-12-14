<div align="center">

<a href="https://ksc-fe.github.io/kpc/" rel="nofollow">
    <img src="/site/src/imgs/logo.png" alt="LOGO" width="150">
</a>

<p></p>

[![Build Status](https://travis-ci.org/ksc-fe/kpc.svg?branch=master)](https://travis-ci.org/ksc-fe/kpc)
[![Codecov](https://codecov.io/gh/ksc-fe/kpc/branch/master/graphs/badge.svg)](https://codecov.io/gh/ksc-fe/kpc/branch/master)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/ksc-fe/kpc.svg)](http://isitmaintained.com/project/ksc-fe/kpc "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/ksc-fe/kpc.svg)](http://isitmaintained.com/project/ksc-fe/kpc "Percentage of issues still open")

[![npm](https://img.shields.io/npm/dm/kpc.svg)](https://www.npmjs.com/package/kpc)
[![npm](https://img.shields.io/npm/v/kpc.svg)](https://www.npmjs.com/package/kpc)
[![gzip size: js](http://img.badgesize.io/ksc-fe/kpc/master/dist/kpc.min.js?compression=gzip&label=gzip%20size:%20js)](https://cdn.jsdelivr.net/npm/kpc/dist/)
[![gzip size: css](http://img.badgesize.io/ksc-fe/kpc/master/dist/kpc.css?compression=gzip&label=gzip%20size:%20css)](https://cdn.jsdelivr.net/npm/kpc/dist/)

</div>

## 特性

* 支持多框架 [Intact][1] / [Vue][2] / [React][3]
* 完全可自定义的主题系统
* 360°全方位定位系统
* 声明式表单验证
* 完善的文档和单元测试 [文档](https://ksc-fe.github.io/kpc/)

## 安装

### 在Intact下

```shell
npm install intact kpc --save
```

### 在Vue下

```shell
npm install kpc intact intact-vue --save
```

webpack配置

```js
module.exports = {
    ...
    resolve: {
        alias: {
            'intact$': 'intact-vue',
        }
    }
}
```

### 在React下

```shell
npm install kpc intact intact-react --save
```

webpack配置

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

## 使用

### 在Intact下

```js
import {Button} from 'kpc';

<Button>Hello</Button>
```

### 在Vue下

```js
<template>
    <Button>Hello</Button>
</template>
<script>
import {Button} from 'kpc';

export default {
    components: {
        Button
    }
}
</script>
```

### 在React下

```jsx
import React from 'react';
import {Button} from 'kpc';

class App extends React.Component {
    render() {
        return <Button>Hello</Button>
    }
}
```

## 链接

* [官方文档](https://ksc-fe.github.io/kpc/)
* [Intact MVVM框架][1]
* [Vdt 模板引擎](http://javey.github.io/vdt.js/)
* [Intact-Vue 兼容层](https://github.com/Javey/intact-vue)
* [Intact-React 兼容层](https://github.com/ksc-fe/intact-react)

## 开发

```shell
git clone https://github.com/ksc-fe/kpc.git
cd kpc
npm install
npm run dev:doc

# 测试
npm run test
# 更新测试快照
npm run snapshot
# 部署文档
npm run deploy:doc
# 发版
npm run release
```

## 许可

MIT


[1]: http://javey.github.io/intact/
[2]: https://vuejs.org/
[3]: https://reactjs.org/
