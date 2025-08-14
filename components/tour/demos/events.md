---
title: 事件处理
order: 5
---

```vdt
import {Tour, Button, Message} from 'kpc';

<div>
    <div class="example-container">
        <Button id="event-btn1">第一步</Button>
        <Button id="event-btn2" style="margin-left: 20px;">第二步</Button>
        <Button id="event-btn3" style="margin-left: 20px;">第三步</Button>
    </div>
    <Tour
        v-model="currentStep"
        visible={this.get('showTour')}
        data={this.get('tourData')} 
        ev-prev={this.handlePrev}
        ev-next={this.handleNext}
        ev-finish={this.handleFinish}
    />
    <div style="margin-top: 20px;">
        <Button ev-click={this.startTour}>
            开始引导
        </Button>
        <span style="margin-left: 10px;">
            当前步骤: {this.get('currentStep') >= 0 ? this.get('currentStep') + 1 : '未启动'}
        </span>
    </div>
</div>
```

```ts
import {bind} from 'kpc';
import {Message} from 'kpc';

export default class extends Component {
    static template = template;
    static defaults() {
        return {
            currentStep: 0,
            showTour: false,
            tourData: [
                {
                    target: '#event-btn1',
                    title: '第一步',
                    content: '点击"下一步"按钮，将触发next事件',
                },
                {
                    target: '#event-btn2',
                    title: '第二步',
                    content: '点击"上一步"按钮，将触发prev事件',
                },
                {
                    target: '#event-btn3',
                    title: '第三步',
                    content: '点击"完成"按钮或关闭图标，将触发finish事件',
                }
            ]
        };
    }

    @bind
    startTour() {
        this.set({
            showTour: true,
            currentStep: 0,
        });
    }

    @bind
    handlePrev(index: number) {
        Message.success(`上一步事件触发: 当前步骤 ${index + 1}`);
    }

    @bind
    handleNext(index: number) {
        Message.success(`下一步事件触发: 当前步骤 ${index + 1}`);
    }

    @bind
    handleFinish() {
        Message.success('引导结束事件触发');
        this.set({
            showTour: false
        });
    }

}
```

```styl
.event-log
    margin-top 5px
    padding 10px
    border 1px solid #eee
    border-radius 4px
    max-height 150px
    overflow-y auto
``` 