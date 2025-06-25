---
title: 声明式用法
order: 1
---

使用`TourStep`子组件可以声明式地定义引导步骤，更加灵活。

```vdt
import {Tour, TourStep, Button} from 'kpc';

<div>
    <div class="example-container">
        <Button id="btn3">示例元素1</Button>
        <Button id="btn4" style="margin-left: 20px;">示例元素2</Button>
    </div>
    <Tour
        v-model="currentStep"
        visible={this.get('showTour')}
        ev-finish={this.close}
    >
        <TourStep
            target="#btn3"
            title="第一步"
            content="这是使用子组件方式的第一步说明"
            position="left"
        />
        <TourStep
            target="#btn4"
            title="第二步"
            position="top"
        >这是使用子组件方式的第二步说明</TourStep>
    </Tour>
    <div style="margin-top: 20px;">
        <Button ev-click={this.settour}>
            启动引导
        </Button>
        <span style="margin-left: 10px;">
            当前步骤: {this.get('currentStep') >= 0 ? this.get('currentStep') + 1 : '未启动'}
        </span>
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
            showTour: false,  // 默认不显示
        };
    }

    @bind
    settour() {
        // 重置步骤并显示Tour
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