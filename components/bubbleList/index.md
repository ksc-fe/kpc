---
title: 对话气泡列表
category: AI对话组件
order: 110
sidebar: doc
---

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 列表数据。每一项默认按 `Bubble` 的属性子集解释，并支持额外携带业务字段供插槽读取。推荐每条消息都提供稳定 `key`，尤其是在历史前插、流式更新、滚动定位等场景下 | `BubbleListItem[]` | `[]` |
| itemKey | 获取唯一 key。可传字段名或函数；未传时会回退到 `item.key`。若仍缺失，组件会生成内部临时 key，仅用于基础渲染，不建议依赖该行为；涉及历史前插、`scrollToKey`、流式更新等场景时，务必保证 key 稳定 | `string \| ((item, index) => string \| number)` | `undefined` |
| roles | 角色级默认配置。可按 `role` 为一组消息设置统一的头像、位置、样式、打字效果等，单条 item 自身配置优先级更高 | `Record<string, BubbleListRoleConfig \| ((item, index) => BubbleListRoleConfig)>` | `undefined` |
| autoScroll | 是否启用列表级自动贴底。开启后，最后一条消息持续更新、高度变化、Markdown 收敛等场景都会在“仍贴底”时继续跟到底部；用户手动上滑后会自动退出贴底状态 | `boolean` | `true` |
| autoScrollThreshold | 距离底部多少像素内仍视为“在底部” | `number` | `80` |
| maxHeight | 列表最大高度。内容超出后由组件内部滚动区域承接滚动；支持传数字（按 `px` 处理）或任意合法 CSS 高度值 | `number \| string` | `undefined` |
| showScrollToBottom | 当用户离开底部时，是否显示默认的“回到底部”按钮。可通过 `scrollToBottom` 插槽完全自定义 | `boolean` | `true` |
| hasMoreHistory | 是否还有更早历史消息。为 `true` 时，滚动到顶部附近会继续触发 `loadHistory`；为 `false` 时不再触发 | `boolean` | `false` |
| loadingHistory | 历史消息是否正在加载，该状态由业务侧自行维护；组件会据此阻止重复触发 `loadHistory`，并在该状态从 `true` 回到 `false` 后执行历史加载收尾（如恢复视口位置）。若未自定义 `historyLoading` 插槽，组件仅在 `loadingHistory=true` 时显示默认顶部文案“加载历史中...” | `boolean` | `false` |
| historyTriggerOffset | 距离顶部多少像素时触发 `loadHistory` | `number` | `24` |
| scrollBehavior | 组件内部默认滚动动画 | `"auto" \| "smooth"` | `"auto"` |

```ts
import type {BubbleProps} from '../bubble';

type BubbleListKey = string | number;

interface BubbleListRoleConfig extends Partial<BubbleProps> {
    className?: string
    style?: any
    onTyping?: (
        renderedContent: string,
        currentContent: string,
        item: BubbleListItem,
        index: number
    ) => void
    onTypingComplete?: (content: string, item: BubbleListItem, index: number) => void
}

interface BubbleListItem extends Partial<BubbleProps> {
    key?: BubbleListKey
    role?: string
    className?: string
    style?: any
    onTyping?: BubbleListRoleConfig['onTyping']
    onTypingComplete?: BubbleListRoleConfig['onTypingComplete']
    [key: string]: any
}

type BubbleListRoleMap = Record<
    string,
    BubbleListRoleConfig | ((item: BubbleListItem, index: number) => BubbleListRoleConfig)
>;
```

# 事件

| 名称 | 说明 | 回调参数 |
| --- | --- | --- |
| loadHistory | 滚动到顶部附近且满足加载条件时触发。组件内部会做锁定，避免同一轮连续触发；业务侧通常在收到事件后将 `loadingHistory` 置为 `true`，待历史消息插入完成后再置回 `false` | `()` |
| scroll | 列表滚动时触发 | `(event: Event)` |
| scrollBottomChange | “是否处于底部附近”这个状态，发生变化时触发 | `(isAtBottom: boolean)` |
| autoScrollChange | 是否仍处于“自动贴底”状态，发生变化时触发 | `(active: boolean)` |
| typing | 某一条 `Bubble` 的打字动画推进时触发 | `(item, renderedContent, currentContent, index)` |
| typingComplete | 某一条 `Bubble` 当前这一轮内容显示完成时触发 | `(item, content, index)` |

其中 `typing / typingComplete` 里的 `item` 为当前消息项，结构同 `BubbleListItem`。

# 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| scrollToBottom | 滚动到底部 | `(behavior?: ScrollBehavior)` |
| scrollToTop | 滚动到顶部 | `(behavior?: ScrollBehavior)` |
| scrollToKey | 滚动到指定消息，默认会尽量将目标项滚动到顶部。该方法依赖稳定消息 key；若列表使用的是组件内部临时 key，则不适合作为业务定位能力使用 | `(key: string \| number, behavior?: ScrollBehavior)` |
| isAtBottom | 是否处于底部附近 | `() => boolean` |
```ts
type ScrollBehavior = 'auto' | 'smooth'
```

# 扩展点

## 列表级

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| header | 列表头部区域，位于滚动容器上方 | - |
| listFooter | 列表底部区域，位于滚动容器下方 | - |
| empty | 空态内容。仅在 `items` 为空时显示 | - |
| historyLoading | 自定义顶部历史状态区域。适合展示“滑到顶部自动加载 / 正在加载 / 没有更多历史了”等文案；未自定义该插槽时会在 `loadingHistory=true` 显示默认文案“加载历史中...” | `HistoryLoadingSlotParams` |
| scrollToBottom | 自定义“回到底部”入口 | `ScrollToBottomSlotParams` |
| item | 完整自定义一条列表项 | `BubbleListSlotParams` |

```ts
type HistoryLoadingSlotParams = {
    loadingHistory: boolean
    hasMoreHistory: boolean
}

type ScrollToBottomSlotParams = {
    isAtBottom: boolean
    scrollToBottom: () => void
}
```

## 单条 Bubble 透传

以下插槽会直接透传到每一条 `Bubble` 上，参数均为 `BubbleListSlotParams`：

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| avatar | 自定义头像 | `BubbleListSlotParams` |
| roleName | 自定义角色名 | `BubbleListSlotParams` |
| beforeContent | 正文前内容 | `BubbleListSlotParams` |
| attachments | 顶部附件区 | `BubbleListSlotParams` |
| content | 自定义正文 | `BubbleListSlotParams` |
| bottom | 自定义气泡内部底部区域 | `BubbleListSlotParams` |
| loading | 自定义加载态 | `BubbleListSlotParams` |
| footer | 自定义每条消息底部区域 | `BubbleListSlotParams` |
| extra | 自定义每条消息额外信息区 | `BubbleListSlotParams` |

```ts
interface BubbleListSlotParams {
    item: BubbleListItem
    mergedItem: BubbleListItem // 合并了 roles 默认配置后的最终消息数据
    index: number
    key: BubbleListKey
    isFirst: boolean
    isLast: boolean
    isAtBottom: boolean
}
```
