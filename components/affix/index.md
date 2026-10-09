---
title: 图钉
category: 组件
order: 99 
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| top | 指定元素固定距离顶部的位置 | `number` | `undefined` |
| bottom | 指定元素固定距离底部的位置 | `number` | `undefined` |
| shouldFix | 自定义元素固定规则。当返回 `true` 时，元素将变为固定状态 | `(data: ShouldFixParam) => boolean` | `undefined` |
| exclude | 排除某些固定的情况。当返回 `true` 时，元素将取消固定状态 | `(data: ExcludeParam) => boolean` | `undefined` |
| disabled | 是否禁用 | `boolean` | `false` |

```ts
export type ShouldFixParam = {
    /** 对应属性 top 的值 */
    offsetTop?: number,
    /** 对应属性 bottom 的值 */
    offsetBottom?: number,
    /** 视口高度，仅在 offsetBottom 存在时提供 */
    viewportHeight?: number
}

export type ExcludeParam = {
    /** 对应属性 top 的值 */
    offsetTop?: number,
    /** 对应属性 bottom 的值 */
    offsetBottom?: number,
    /** 元素距离视口顶部的距离 */
    top: number,
    /** 元素距离视口底部的距离 */
    bottom: number,
    /** 元素的宽度 */
    width: number,
    /** 元素的高度 */
    height: number,
}
```

```ts
type ShouldFixParam = {
    offsetTop?: number,
    offsetBottom?: number,
    viewportHeight?: number
}

type ExcludeParam = {
    offsetTop?: number,
    offsetBottom?: number,
    top: number,
    bottom: number,
    width: number,
    height: number,
}
```

# 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 固定状态改变时触发 | `(isFixed: boolean) => void` |
