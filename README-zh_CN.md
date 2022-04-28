<div align="center">

<a href="https://design.ksyun.com" rel="nofollow">
    <img src="/site/src/imgs/header_logo_x2.png" alt="LOGO" />
</a>

<p></p>

[![Build Status](https://github.com/ksc-fe/kpc/workflows/Node.js%20CI/badge.svg?branch=master)](https://github.com/ksc-fe/kpc/actions?query=workflow%3A%22Node.js+CI%22)
[![Codecov](https://codecov.io/gh/ksc-fe/kpc/branch/master/graphs/badge.svg)](https://codecov.io/gh/ksc-fe/kpc/branch/master)
[![npm](https://img.shields.io/npm/v/@king-design/vue.svg)](https://www.npmjs.com/package/@king-design/vue)

[![npm](https://img.shields.io/npm/dm/@king-design/react.svg?label=react%20download)](https://www.npmjs.com/package/@king-design/react)
[![npm](https://img.shields.io/npm/dm/@king-design/vue.svg?label=vue3%20download)](https://www.npmjs.com/package/@king-design/vue)
[![npm](https://img.shields.io/npm/dm/@king-design/vue-legacy.svg?label=vue2%20download)](https://www.npmjs.com/package/@king-design/vue-legacy)

</div>

[English](./README.md) | 简体中文

## 特性

* 支持多框架 [Intact][1] / [Vue][2] / [React][3]
* 支持TypeScript
* 动态主题切换
* 声明式表单验证
* 完善的[文档](https://design.ksyun.com/)和精心的设计
* 90%单元测试覆盖率

## 浏览器支持

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions


## Vue

### 安装

```shell
# Vue3
npm install @king-design/vue --save

# Vue2
npm install @king-desing/vue-legacy --save
```

### 使用

```js
<template>
    <Button>Hello</Button>
</template>
<script>
import {Button} from 'kpc-vue';

export default {
    components: {
        Button
    }
}
</script>
```

## React

### 安装

```shell
npm install @king-design/react--save
```

### 使用

```jsx
import {Button} from '@king-design/react';

function App() {
    return <Button>Hello</Button>
}
```

## 即时反馈

欢迎加入QQ群反馈问题和获得即时帮助，QQ群：529739732 
[![KPC官方交流群](https://pub.idqqimg.com/wpa/images/group.png)](https://shang.qq.com/wpa/qunwpa?idkey=a9ef1aa7e7befbd3eaa61a3f2c3f7ab17436dbd317f6d02c9a643e0049e52cad)

![QQ](/site/src/imgs/qqqun.png)


## 链接

* [KPC 官方文档](https://design.ksyun.com)
* [Intact MVVM框架][1]

## 开发

> 需要`node@10`以及`npm@6.9`以上

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
[4]: https://angular.io/
[5]: https://design.ksyun.com/docs/angular/
