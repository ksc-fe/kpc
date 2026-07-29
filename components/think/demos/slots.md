---
title: 插槽用法
order: 3
---

`Think` 提供了多个插槽来自定义内容：`icon`、`title`、`extra`、`content`。

```vdt
import {Button, Think, Icon} from 'kpc';

<div class="think-demo-slots">
    <Think>
        <b:icon>
            <Icon class="ion-lightbulb" style="color: #1677ff;" />
        </b:icon>
        <b:title>
            <span>自定义思考标题</span>
        </b:title>
        <b:extra>
            <span class="think-demo-slots-extra">耗时 {this.get('duration')}s</span>
        </b:extra>
        <b:content>
            <div class="think-demo-slots-content">
                <div class="think-demo-slots-item">
                    <strong>问题分析：</strong>
                    <p>用户询问关于 AI 模型选择的问题，需要从性能、成本、易用性等维度综合评估。</p>
                </div>
                <div class="think-demo-slots-item">
                    <strong>技术考量：</strong>
                    <p>模型参数量、推理速度、显存占用是关键指标，需要根据实际使用场景权衡。</p>
                </div>
                <div class="think-demo-slots-item">
                    <strong>建议方案：</strong>
                    <p>建议从开源模型开始尝试，确认效果后再考虑商业化方案。</p>
                </div>
            </div>
        </b:content>
    </Think>
</div>
```

```styl
.think-demo-slots
    display block

.think-demo-slots-extra
    color #6b7280
    font-size 12px

.think-demo-slots-content
    display flex
    flex-direction column
    gap 12px

.think-demo-slots-item
    &
        padding 10px 12px
        border-radius 8px
        background #f8fbff
        border-left 3px solid #1677ff

    strong
        display block
        margin-bottom 6px
        color #1677ff
        font-size 13px

    p
        margin 0
        font-size 13px
        line-height 1.6
        color #4b5563
```

```ts
import {bind} from 'kpc';

interface Props {
    duration: number
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            duration: 3,
        };
    }
}
```