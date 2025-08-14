---
title: 遮罩层交互
order: 5
---

```vdt
import {Tour, Button, Switch} from 'kpc';

<div>
    <div class="example-container">
        <Button id="maskDemo1">目标元素1</Button>
        <Button id="maskDemo2" style="margin-left: 20px;">目标元素2</Button>
    </div>
    
    <Tour
        v-model="currentStep"
        visible={this.get('showTour')}
        data={this.get('tourData')} 
        maskClosable={this.get('maskClosable')}
        ev-finish={this.finishTour}
    />
    <div style="margin-top: 20px;">
        <div style="margin-bottom: 10px;">
            <Switch v-model="maskClosable" />
            <span style="margin-left: 10px;">点击遮罩关闭引导: {this.get('maskClosable') ? '启用' : '禁用'}</span>
        </div>
        <Button ev-click={this.startTour}>
            启动引导
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
            maskClosable: true,
            tourData: [
                {
                    target: '#maskDemo1',
                    title: '遮罩层交互',
                    content: '当maskClosable为true时，点击遮罩层可关闭引导',
                    position: 'bottom'
                },
                {
                    target: '#maskDemo2',
                    title: '禁用遮罩层关闭',
                    content: '当maskClosable为false时，点击遮罩层无反应，必须使用按钮进行操作',
                    position: 'right'
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
    finishTour() {
        this.set({
            showTour: false
        });
    }
}
``` 