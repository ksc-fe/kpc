---
title: 自定义按钮文本
order: 3
---

每个步骤可以单独设置按钮文本，实现更灵活的用户体验。

```vdt
import {Tour, Button} from 'kpc';

<div>
    <div class="example-container">
        <Button id="welcome-btn">欢迎页面</Button>
        <Button id="feature-btn" style="margin-left: 20px;">功能介绍</Button>
        <Button id="finish-btn" style="margin-left: 20px;">完成设置</Button>
    </div>
    <Tour
        v-model="currentStep"
        visible={this.get('showTour')}
        data={this.get('tourData')} 
        doneText="完成"
        ev-finish={this.close}
    />
    <div style="margin-top: 20px;">
        <Button type="primary" ev-click={this.startTour}>
            开始自定义按钮引导
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
            showTour: false,
            tourData: [
                {
                    target: '#welcome-btn',
                    title: '欢迎使用！',
                    content: '欢迎来到我们的应用，让我们开始引导之旅吧！',
                    position: 'bottom',
                    nextText: '开始探索',
                },
                {
                    target: '#feature-btn',
                    title: '功能介绍',
                    content: '这里是主要功能区域，您可以在这里进行各种操作。',
                    position: 'bottom',
                    nextText: '前进',
                    prevText: '回到开始',
                },
                {
                    target: '#finish-btn',
                    title: '设置完成',
                    content: '恭喜！您已经完成了所有设置，现在可以开始使用了。',
                    position: 'top',
                    prevText: '返回上一步',
                }
            ]
        };
    }

    @bind
    startTour() {
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
.example-container
    padding: 20px
    border: 1px dashed #ddd
    border-radius: 4px
    margin-bottom: 20px
``` 