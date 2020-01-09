<div align="center">

<a href="https://ksc-fe.github.io/kpc/" rel="nofollow">
    <img src="/site/src/imgs/logo.png" alt="LOGO" width="150">
</a>

<p></p>

[![Build Status](https://travis-ci.org/ksc-fe/kpc.svg?branch=master)](https://travis-ci.org/ksc-fe/kpc)
[![Codecov](https://codecov.io/gh/ksc-fe/kpc/branch/master/graphs/badge.svg)](https://codecov.io/gh/ksc-fe/kpc/branch/master)
[![gzip size: js](http://img.badgesize.io/https://cdn.jsdelivr.net/npm/kpc/dist/kpc.min.js?compression=gzip&label=gzip%20size:%20js)](https://cdn.jsdelivr.net/npm/kpc/dist/)
[![gzip size: css](http://img.badgesize.io/https://cdn.jsdelivr.net/npm/kpc/dist/kpc.css?compression=gzip&label=gzip%20size:%20css)](https://cdn.jsdelivr.net/npm/kpc/dist/)

[![npm](https://img.shields.io/npm/dm/kpc.svg)](https://www.npmjs.com/package/kpc)
[![npm](https://img.shields.io/npm/v/kpc.svg)](https://www.npmjs.com/package/kpc)

</div>

[English](./README.md) | 简体中文

## 特性

* 支持多框架 [Intact][1] / [Vue][2] / [React][3] / [Angular][4]
* 完全可自定义的主题系统
* 360°全方位定位系统
* 声明式表单验证
* 完善的[文档](https://ksc-fe.github.io/kpc/)和静心的设计
* 90%单元测试覆盖率

## 浏览器支持

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions


## Vue

### 安装

```shell
npm install kpc-vue --save
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
npm install kpc-react --save
```

### 使用

```jsx
import React from 'react';
import {Button} from 'kpc-react';

class App extends React.Component {
    render() {
        return <Button>Hello</Button>
    }
}
```

## Intact

### 安装

```shell
npm install kpc --save
```

### 使用

```js
import {Button} from 'kpc';

<Button>Hello</Button>
```

## Angular [详情][5]

### 安装

```shell
npm install kpc-angular -S
```

### 配置`webpack.config.js`

Angular CLI 初始化的项目必须使用`@angular-builders/custom-webapck`来配置webpack

```js
const path = require('path');

module.exports = function(config) {
  config.module.rules.find(rule => {
    if (rule.test.toString() === '/\\.css$/') {
      rule.exclude.push(path.resolve(__dirname, 'node_modules/kpc-angular'));
      return true;
    }
  });

  return config;
};
```

### 使用

`src/app/app.module.ts`

```ts
import { KpcBrowserModule, KpcModule } from 'kpc-angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    KpcBrowserModule,
    AppRoutingModule,
    KpcModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```

```ts
import { Component, ViewEncapsulation } from '@angular/core';
import { MessageComponent } from 'kpc-angular';

@Component({
  selector: 'app-root',
  template: `
    <k-button type="primary" (click)="onClick()">Hello World</k-button>
  `,
  style: `
    .k-button {
      margin: 10px;
    }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  onClick() {
    MessageComponent.success('Welcome to kpc world!');
  }
}
```

## 即时反馈

欢迎加入QQ群反馈问题和获得即时帮助，QQ群：529739732 
[![KPC官方交流群](https://pub.idqqimg.com/wpa/images/group.png)](https://shang.qq.com/wpa/qunwpa?idkey=a9ef1aa7e7befbd3eaa61a3f2c3f7ab17436dbd317f6d02c9a643e0049e52cad)

![QQ](/site/src/imgs/qqqun.png)


## 链接

* [KPC 官方文档](https://design.ksyun.com)
* [Intact MVVM框架][1]
* [Vdt 模板引擎](http://javey.github.io/vdt.js/)
* [Intact-Vue 兼容层](https://github.com/Javey/intact-vue)
* [Intact-React 兼容层](https://github.com/ksc-fe/intact-react)
* [Intact-Angular 兼容层](https://github.com/ksc-fe/intact-angular)

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
