---
title: 菜单
category: 组件
order: 2
sidebar: doc
---

# 属性

## Menu

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| expandedKeys | 定义菜单展开项 | <code>(string &#124; number)[]</code> | `[]` |
| selectedKey | 定义菜单选中项 | <code>string &#124; number</code> | `undefined` |
| theme | 定义菜单主题 | `"light"` &#124; `"dark"` &#124; `"white"` | `"dark"` |
| collapse | 菜单是否折叠 | `boolean` | `false` |
| type | 定义菜单排列方式：垂直，水平 | `"vertical"` &#124; `"horizontal"` | `"vertical"` |
| size | 定义菜单尺寸 | `"large"` &#124; `"default"` &#124; `"small"` | `"default"` |
| accordion | 是否每次只能展开一项 | `boolean` | `false` |
| dot | 是否给菜单项前面添加圆点 | `boolean` | `false` |

## MenuItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 定义全局唯一的`key`，用于标识每一项 | <code>string &#124; number</code> | `undefined` |
| to | 定义超链接菜单项，点击直接跳转 | `string` &#124; `object` | `undefined` |
| dot | 是否给当前菜单项前面添加圆点 | `boolean` | `false` |
| disabled | 是否禁用当前项 | `boolean` | `false` |

# 扩展点

## Menu

| 名称 | 说明 |
| --- | --- |
| header | 扩展菜单头部 |

# 事件

## MenuItem

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| select | 选中没有子菜单的菜单项触发 | `(menuItem: MenuItem, e: MouseEvent) => void` |
