---
title: 步骤控制
order: 3
---

```vdt
import {Tour, Button, Input} from 'kpc';

<div>
    <div class="example-container">
        <Button id="step1">步骤1</Button>
        <Button id="step2" style="margin-left: 20px;">步骤2</Button>
        <div style="margin-top: 20px;">
            <Input class="step3-input" placeholder="通过验证才能进入下一步" v-model="inputValue" />
        </div>
        <Button id="step4" style="margin-top: 20px;">步骤4</Button>
    </div>
    
    <Tour
        v-model="currentStep"
        visible={this.get('showTour')}
        data={this.get('tourData')} 
        beforeChange={this.handleBeforeChange}
        ev-finish={this.finishTour}
    />
    
    <div style="margin-top: 20px;">
        <Button ev-click={this.startTour}>
            启动引导
        </Button>
        <span style="margin-left: 10px;">
            当前步骤: {this.get('currentStep') >= 0 ? this.get('currentStep') + 1 : '未启动'}
        </span>
        <div style="margin-top: 10px; color: #f56c6c" v-if={this.get('errorMsg')}>
            {this.get('errorMsg')}
        </div>
    </div>
</div>
```

```ts
import {bind, Message} from 'kpc';

export default class extends Component {
    static template = template;
    static defaults() {
        return {
            currentStep: 0,
            showTour: false,
            inputValue: '',
            errorMsg: '',
            tourData: [
                {
                    target: '#step1',
                    title: '第一步',
                    content: '这是第一步的引导说明',
                    position: 'bottom'
                },
                {
                    target: '#step2',
                    title: '第二步',
                    content: '这是第二步的引导说明',
                    position: 'right'
                },
                {
                    target: '.step3-input',
                    title: '第三步',
                    content: '请在输入框中输入"next"以继续',
                    position: 'bottom'
                },
                {
                    target: '#step4',
                    title: '最后一步',
                    content: '恭喜您完成了所有步骤',
                    position: 'top'
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
    finishTour() {
        this.set({
            showTour: false
        });
    }
    

    @bind
    handleBeforeChange(current: number) {
        const inputValue = this.get('inputValue') as string;
        if (current === 3) {
            if (inputValue !== 'next') {
                Message.error('请在输入框中输入"next"才能进入下一步');
                return false;
            }
        }
        return true;
    }
}
``` 