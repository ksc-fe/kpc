---
title: 全局配置
category: 组件
order: 99
sidebar: doc
---

> **v3.1.0 新增**

# 属性

## ConfigProvider

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 全局配置参数 | `ConfigProps` | `undefined` |

```ts
export interface ConfigProps {
    classNamePrefix?: string // 改变组件样式名className的前缀，组件默认是k开头，如: k-datepicker
    disableWave?: boolean // v3.3.2 新增，控制是否禁止水波纹动效，默认false
}
```
