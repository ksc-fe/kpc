---
title: 折叠展开
order: 1
---

`Think` 支持折叠和展开功能，通过 `defaultExpanded` 控制非受控默认状态，或通过 `v-model:expanded` / `expanded` 进入受控模式。

```vdt
import {Button, Think} from 'kpc';

<div class="think-demo-collapse">
    <div class="think-demo-collapse-actions">
        <Button ev-click={this.toggleExpanded}>切换展开状态</Button>
    </div>
    <Think
        title="已思考（用时 6 秒）"
        content="DeepSeek 在技术层面采用了混合专家模型（MoE）架构，能够在保持性能的同时降低推理成本。开源版本已经支持多轮对话、代码生成等功能，开发者可以直接部署使用。"
        v-model:expanded="expanded"
    >
        <b:extra>
            <span class="think-demo-collapse-extra">思考深度：高</span>
        </b:extra>
    </Think>
    <div class="think-demo-collapse-status">
        当前状态：{this.get('expanded') ? '已展开' : '已折叠'}
    </div>
</div>
```

```styl
.think-demo-collapse
    display block

.think-demo-collapse-actions
    display flex
    justify-content flex-start
    gap 8px
    margin-bottom 12px

.think-demo-collapse-extra
    color #6b7280
    font-size 12px

.think-demo-collapse-status
    margin-top 8px
    padding 8px 12px
    background #f5f5f5
    border-radius 6px
    color #6b7280
    font-size 12px
```

```ts
import {bind} from 'kpc';

interface Props {
    expanded: boolean | undefined
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            expanded: false,
        };
    }

    @bind
    toggleExpanded() {
        this.set('expanded', !this.get('expanded'));
    }
}
```
