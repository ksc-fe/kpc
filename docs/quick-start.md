---
title: 快速开始
order: 0
---

# 准备工作

在学习使用kpc之前，假设你已经掌握了一下知识：

1. webpack + babel
2. vue（如果将kpc用于vue项目）或者intact（如果将kpc用于intact项目）

# 使用脚手架

使用Yeoman以及generator-kscpm，可以快速初始化kpc项目

1. 安装yo和generator-kscpm

```shell
npm install -g yo generator-kscpm
```

2. 初始化kpc项目

kscpm提供了很多工程模板，用于初始化项目，页面以及组件等

```shell
yo kscpm # 列出所有可选工程模板
yo kscpm:intact # 使用kpc初始化intact项目
yo kscpm:vue # 使用kpc初始化vue项目

...
```

3. 启动项目

```shell
npm run dev
```

# 手动引入

## 使用源码编译

使用源码的好处是，我们可以非常方便地定制主题，因为可以在编译时改变主题文件定义的变量。
详见[主题定制]()

1. 安装

kpc运行时依赖intact^2.2.0，但使用源码引入时，需要安装编译依赖

```shell
npm install intact kpc --save

# 内网git
npm install intact 'git+http://newgit.op.ksyun.com/ksyun-fe/kpc.git#v4.0' --save
```

安装编译依赖

```shell
npm install webpack babel-core babel-loader \
    babel-plugin-transform-decorators-legacy \
    babel-preset-env \
    babel-preset-stage-0 \
    babel-plugin-transform-runtime \
    css-loader style-loader stylus stylus-loader \
    vdt vdt-loader --save-dev
```
