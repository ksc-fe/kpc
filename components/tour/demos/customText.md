---
title: 自定义按钮文本
order: 4
---

```vdt
import {Tour, Button} from 'kpc';

<div>
    <div class="example-container">
        <Button id="customText1">第一步</Button>
        <Button id="customText2" style="margin-left: 20px;">第二步</Button>
        <Button id="customText3" style="margin-left: 20px;">第三步</Button>
    </div>
    
    <Tour
        v-model="currentStep"
        visible={this.get('showTour')}
        data={this.get('tourData')} 
        nextText={this.get('nextText')} 
        prevText={this.get('prevText')} 
        doneText={this.get('doneText')} 
        ev-finish={this.finishTour}
    />
    
    <div style="margin-top: 20px;">
        <Button ev-click={this.startTour} style="margin-left: 10px;">
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
            nextText: '前进',
            prevText: '返回',
            doneText: '完成设置',
            tourData: [
                {
                    target: '#customText1',
                    title: '自定义按钮文本',
                    content: '您可以看到底部的按钮已经被自定义了',
                    position: 'bottom'
                },
                {
                    target: '#customText2',
                    title: '支持更改文本',
                    content: '可以根据不同的语言环境定制按钮文本',
                    position: 'bottom'
                },
                {
                    target: '#customText3',
                    title: '最后一步',
                    content: '完成按钮也可以自定义',
                    position: 'bottom'
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