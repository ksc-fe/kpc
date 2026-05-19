---
title: 自定义内容区域
order: 5
---

通过 `content` 插槽可以完全接管气泡主体区域，适合放卡片、检索结果、操作面板等复杂内容。

```vdt
import {Bubble, Button} from 'kpc';

<Bubble
    avatar={true}
    roleName="知识库助手"
    variant="plain"
    maxWidthString="640px"
>
    <b:content>
        <div class="bubble-demo-panel">
            <div class="bubble-demo-panel-head">
                <div>
                    <div class="bubble-demo-panel-title">检索到 3 条相关内容</div>
                    <div class="bubble-demo-panel-subtitle">来源：产品文档 / 设计规范 / FAQ</div>
                </div>
                <div class="bubble-demo-panel-badge">Top 3</div>
            </div>
            <div class="bubble-demo-panel-list">
                <div class="bubble-demo-panel-item">
                    <div class="bubble-demo-panel-item-title">1. Bubble 组件设计说明</div>
                    <div class="bubble-demo-panel-item-desc">包含 props、slots、variant 与 shape 的交互规范。</div>
                </div>
                <div class="bubble-demo-panel-item">
                    <div class="bubble-demo-panel-item-title">2. Markdown 渲染约定</div>
                    <div class="bubble-demo-panel-item-desc">说明聊天内容中的代码块、表格、链接和安全清洗策略。</div>
                </div>
                <div class="bubble-demo-panel-item">
                    <div class="bubble-demo-panel-item-title">3. 对话类组件的 footer 策略</div>
                    <div class="bubble-demo-panel-item-desc">由业务通过 footer 插槽按需接入操作区，避免组件内置过重语义。</div>
                </div>
            </div>
            <div class="bubble-demo-panel-actions">
                <Button type="none">忽略</Button>
                <Button type="primary">插入到回答</Button>
            </div>
        </div>
    </b:content>
    <b:extra>可用于知识卡片、搜索结果、推荐模块等复杂区域</b:extra>
</Bubble>
```

```styl
.bubble-demo-panel
    display flex
    flex-direction column
    gap 12px
    padding 16px
    border 1px solid #dce6f1
    border-radius 16px
    background linear-gradient(180deg, #f8fbff, #eef5ff)

.bubble-demo-panel-head
    display flex
    align-items flex-start
    justify-content space-between
    gap 12px

.bubble-demo-panel-title
    font-size 14px
    font-weight 600
    color #18212a

.bubble-demo-panel-subtitle
    margin-top 4px
    font-size 12px
    color #7a8794

.bubble-demo-panel-badge
    padding 4px 10px
    border-radius 999px
    background #d9eaff
    color #1677ff
    font-size 12px
    font-weight 600

.bubble-demo-panel-list
    display flex
    flex-direction column
    gap 8px

.bubble-demo-panel-item
    padding 10px 12px
    border-radius 12px
    background #fff
    box-shadow 0 1px 2px rgba(15, 23, 42, 0.04)

.bubble-demo-panel-item-title
    font-size 13px
    font-weight 600
    color #22303d

.bubble-demo-panel-item-desc
    margin-top 4px
    font-size 12px
    line-height 1.6
    color #5f6b76

.bubble-demo-panel-actions
    display flex
    justify-content flex-end
    gap 8px
```
