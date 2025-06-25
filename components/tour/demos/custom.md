---
title: 自定义内容
order: 2
---

通过使用`TourStep`组件的block，可以自定义引导步骤的内容。

```vdt
import {Tour, TourStep, Button, Icon} from 'kpc';

<div>
    <div class="example-container">
        <Button id="btn5">示例元素</Button>
    </div>
    <Tour
        v-model="currentStep"
        visible={this.get('showTour')}
        ev-finish={this.close}
    >
        <TourStep
            target="#btn5"
            position="bottom"
        >
            <b:header>
                <div style="display: flex; align-items: center">
                    <Icon class="ion-android-star" style="margin-right: 5px; color: #f0ad4e" />
                    <span class="custom-title">自定义标题</span>
                    <span style="margin-left: 8px; color: #999; font-size: 12px">带图标和样式</span>
                </div>
            </b:header>
            <div class="custom-content">
                <p>这是一个自定义的复杂内容，可以包含图片、链接等任何元素。</p>
                <a href="javascript:;" style="color: #2d8cf0">了解更多</a>
            </div>
            <b:footer>
                <div class="step-indicator">{this.get('currentStep') + 1} / 1</div>
                <div class="custom-footer">
                    <Button size="small" type="danger" style="margin-right: 8px;" ev-click={this.close}>跳过</Button>
                    <Button size="small" type="primary" ev-click={this.close}>我知道了</Button>
                </div>
            </b:footer>
        </TourStep>
    </Tour>
    <div style="margin-top: 20px;">
        <Button ev-click={this.settour}>
            启动自定义引导
        </Button>
    </div>
</div>
```

```ts
import {bind} from 'kpc';

export default class extends Component {
    static template = template;
    static defaults() {
        return {
            currentStep: 0,
            showTour: false,
        };
    }

    @bind
    settour() {
        this.set({
            showTour: true,
            currentStep: 0
        });
    }

    @bind
    close() {
        this.set({
            showTour: false
        });
    }
}
```

```styl
.custom-title
    font-weight bold
    color #2d8cf0

.custom-content
    text-align center
    padding 8px 0
    
.custom-footer
    display flex
    justify-content space-between
    align-items center
    width 100%
    .k-btn
        margin-right 8px

``` 