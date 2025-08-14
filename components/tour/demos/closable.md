---
title: 禁用关闭图标
order: 7
---

```vdt
import {Tour, Button, Switch} from 'kpc';

<div>
    <div class="example-container">
        <Button id="closabelDemo">目标元素1</Button>
    </div>
    
    <Tour
        v-model="currentStep"
        visible={this.get('showTour')}
        data={this.get('tourData')} 
        closable={this.get('closable')}
        ev-finish={this.finishTour}
    />
    
    <div style="margin-top: 20px;">
        <div style="margin-bottom: 10px;">
            <Switch v-model="closable" /> 
            <span style="margin-left: 10px;">关闭图标: {this.get('closable') ? '启用' : '禁用'}</span>
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
            closable: false,
            tourData: [
                {
                    target: '#closabelDemo',
                    title: '禁用关闭图标',
                    content: '当closable为true时，header区域关闭图标隐藏',
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