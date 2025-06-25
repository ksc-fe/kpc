---
title: 基础用法
order: 0
---

```vdt
import {Tour, Button} from 'kpc';

<div>
    <div class="example-container">
        <Button id="btn1">示例元素1</Button>
        <Button id="btn2" style="margin-left: 20px;">示例元素2</Button>
    </div>
    <Tour
        v-model="currentStep"
        visible={this.get('showTour')}
        data={this.get('tourData')} 
        ev-finish={this.close}
    />
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
import {TourStepProps} from 'kpc';

export default class extends Component {
    static template = template;
    static defaults() {
        return {
            currentStep: 0 as number,
            showTour: false,  // 默认不显示
            tourData: [
                {
                    target: '#btn1',
                    title: '第一步',
                    content: '这是第一步的引导说明',
                    position: 'bottom'
                },
                {
                    target: '#btn2',
                    title: '第二步',
                    content: '这是第二步的引导说明',
                    position: 'right'
                }
            ]
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