---
title: 定制主题
order: 1.3
sidebar: doc
---

`King-Design`采用基于`@emotion/css`的css-in-js技术来实现样式渲染，这种方式赋予了我们在运行时即可以修改
主题的功能。

# `setTheme`函数

组件库暴露一个`setTheme`函数，可以让我们动态设置主题，该函数类型如下

```ts
export declare function setTheme(customTheme: Theme): void;

export declare type Theme = {
    [name: string]: string | number | Theme;
};
```

# 默认样式配置

组件默认样式配置分两部分

1. 全局配置：修改会影响全局
2. 组件配置：修改仅仅影响当前组件

## 全局配置

```js
import {palette} from '@king-design/react/styles/utils';

function defaultTheme => ({
    large: {
        height: '40px',
        fontSize: '14px',
        padding: '24px',
    },
    default: {
        height: '32px',
        fontSize: '12px',
        padding: '16px',
    },
    small: {
        height: '24px',
        fontSize: '12px',
        padding: '8px',
    },
    mini: {
        height: '16px',
        fontSize: '12px',
        padding: '8px',
    },
    color: {
        primary: '#0091ea',
        warning: '#ff9800',
        danger: '#ff4133',
        success: '#36b342',
        border: '#ccc',
        text: '#4c4c4c',
        ghost: '#737373',
        bg: '#f1f1f5',
        title: '#333',
        darkBorder: '#b2b2b2',
        placeholder: '#bec3c5',
        get link() { return theme.color.primary },
        get linkHover() { return palette(theme.color.primary, -1) }, 
        disabled: '#bec3c5',
        disabledBg: '#f2f2f2',
        disabledBorder: '#ccc',
        lightBlack: '#737373',
    },
    borderRadius: '2px',
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, .3)',
    fontSize: '12px',
    lineHeight: 1.5,

    maxZIndex: 9999,
    midZIndex: 999,

    transition: {
        small: '.1s cubic-bezier(0.42, 0, 0.58, 1)',
        middle: '.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
        large: '.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
    },
});
```

> `palette`是个调色板函数，可以将一个颜色分别加深和变浅调出4个梯度的颜色

## 组件配置

组件配置分散在各个组件所在的样式文件下，配置较多，请参考源码：如：[`Button`](https://github.com/ksc-fe/kpc/blob/v2/components/button/styles.ts)

# 用法

我们可以通过`setTheme`改变上述默认主题配置，例如：我们如下操作，将主题色改为红色

```ts
import {setTheme} from '@king-design/react';

setTheme({
    color: {
        primary: 'red'
    }
});
```
