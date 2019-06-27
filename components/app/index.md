---
title: 应用管理
order: -1
category: 组件
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| view | 当前要展示的Intact组件实例 | `Intact` | `undefined` |
| container | 当前应用的挂载点 | `HtmlElement` | `undefined` |
| loading | 展示或隐藏loading动画 | `Boolean` | `false` |
| ssr | 当前应用是否进行了服务器端渲染，如果为`true`，则首次加载时，前端会进行混合`hydrate` | `Boolean` | `false` |

# 扩展点

| 名称 | 说明|
| --- | --- |
| loading | 自定义页面加载动画，可以通过继承`App`组件扩展 |

# 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| showLoading | 展示loading动画 | - | `undefined` |
| hideLoading | 隐藏loading动画 | - | `undefined` |
| load | 加载页面组件 | `Page`, `data` | `Promise` |
| render | 服务器端渲染，将组件渲染成字符串 | `Page`, `data` | `Promise[String]` |
