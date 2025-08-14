---
title: 无目标元素
order: 3
---

当没有指定目标元素或目标元素不存在时，Tour会居中显示。

```vdt
import {Tour, TourStep, Button} from 'kpc';

<div>
    <Tour
        v-model="currentStep"
        visible={this.get('showTour')}
        ev-finish={this.close}
    >
        <TourStep title="无目标元素-第一步">
            <span>当没有指定target属性或者目标元素不存在时，Tour会居中显示在屏幕中央。</span>
        </TourStep>
        <TourStep title="无目标元素-第二步">
            <span>当没有指定target属性或者目标元素不存在时，所有步骤都会居中显示在屏幕中央。</span>
        </TourStep>
    </Tour>
    <div style="margin-top: 20px;">
        <Button ev-click={this.settour}>
            启动无目标引导
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