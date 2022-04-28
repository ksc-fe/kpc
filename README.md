<div align="center">

<a href="https://design.ksyun.com" rel="nofollow">
    <img src="/site/src/imgs/header_logo_x2.png" alt="LOGO" width="150">
</a>

<p></p>

[![Build Status](https://github.com/ksc-fe/kpc/workflows/Node.js%20CI/badge.svg?branch=master)](https://github.com/ksc-fe/kpc/actions?query=workflow%3A%22Node.js+CI%22)
[![Codecov](https://codecov.io/gh/ksc-fe/kpc/branch/master/graphs/badge.svg)](https://codecov.io/gh/ksc-fe/kpc/branch/master)
[![npm](https://img.shields.io/npm/v/@king-design/vue.svg)](https://www.npmjs.com/package/@king-design/vue)

[![npm](https://img.shields.io/npm/dm/@king-design/react.svg)](https://www.npmjs.com/package/@king-design/react)
[![npm](https://img.shields.io/npm/dm/@king-design/vue.svg)](https://www.npmjs.com/package/@king-design/vue)
[![npm](https://img.shields.io/npm/dm/@king-design/vue-legacy.svg)](https://www.npmjs.com/package/@king-design/vue-legacy)

</div>

English | [简体中文](./README-zh_CN.md)

## Features 

* Support multiple frameworks: [Intact][1] / [Vue][2] / [React][3].
* Support TypeScript.
* Change theme on runtime. 
* Declarative form validation.
* Excellent [documents](https://design.ksyun.com) and design
* 90% coverage unit tests.

## Browsers Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## Vue

### Installation

```shell
# Vue3
npm install @king-design/vue --save

# Vue2
npm install @king-desing/vue-legacy --save
```

### Usage 

```js
<template>
    <Button>Hello</Button>
</template>
<script>
import {Button} from '@king-design/vue';

export default {
    components: {
        Button
    }
}
</script>
```

## React

### Installation 

```shell
npm install @king-design/react--save
```

### Usage 

```jsx
import {Button} from '@king-design/react';

function App() {
    return <Button>Hello</Button>
}
```

## Immediate Feedback

Welcome to join us by QQ. Group Number: 529739732 

[![KPC Official QQ Group](https://pub.idqqimg.com/wpa/images/group.png)](https://shang.qq.com/wpa/qunwpa?idkey=a9ef1aa7e7befbd3eaa61a3f2c3f7ab17436dbd317f6d02c9a643e0049e52cad)

![QQ](/site/src/imgs/qqqun.png)


## Links 

* [KPC Document](https://design.ksyun.com)
* [Intact MVVM Framework][1]

## Develop 

> Require `node@10` and `npm@6.9` or above.

```shell
git clone https://github.com/ksc-fe/kpc.git
cd kpc
npm install
npm run dev:doc

# test 
npm run test
# update snapshots 
npm run snapshot
# deploy documents
npm run deploy:doc
# release new version 
npm run release
```

## License 

MIT


[1]: http://javey.github.io/intact/
[2]: https://vuejs.org/
[3]: https://reactjs.org/
[4]: https://angular.io/
[5]: https://design.ksyun.com/docs/angular/
