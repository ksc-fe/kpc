---
title: 自定义结果显示
order: 5
---

和`Select`类似，给组件指定`value`扩展点，可以自定义选择结果显示，组件会将当前选择的值和标签传入。
当前展示的标签会通过'`/`'分隔，如果你想改变标签的展示字符串，通过`format`属性指定

```vdt
import {Cascader} from 'kpc';

<Cascader data={this.get('data')} clearable
    format={labels => labels[labels.length - 1]}
    v-model="value"
>
    <b:value args="[value, label]">
        <div>
            <i class="ion-ios-location"
                style="line-height: 1; margin-right: 8px; vertical-align: middle;"
            ></i>
            {label}
        </div>
    </b:value>
</Cascader>
```

```ts
interface Props {
    value?: string[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            data: [
                {
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'haidian',
                            label: '海淀区'
                        },
                        {
                            value: 'chaoyang',
                            label: '朝阳区'
                        },
                        {
                            value: 'fengtai',
                            label: '丰台区'
                        }
                    ]
                },
                {
                    value: 'hunan',
                    label: '湖南',
                    children: [
                        {
                            value: 'changsha',
                            label: '长沙市',
                            children: [
                                {
                                    value: 'yuelu',
                                    label: '岳麓区',
                                }
                            ]
                        },
                        {
                            value: 'yueyang',
                            label: '岳阳市',
                            children: [
                                {
                                    value: 'yueyanglou',
                                    label: '岳阳楼区',
                                },
                                {
                                    value: 'yueyangxian',
                                    label: '岳阳县',
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }
}
```
