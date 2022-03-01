---
title: 禁用状态
order: 1
---

给组件添加`disabled`属性，可以禁用整个组件；给`data`数据项添加`disabled`属性
可以单独禁用该项

```vdt
import {Cascader} from 'kpc';

<div>
    <Cascader data={this.get('data')} disabled/>
    <Cascader data={this.get('data')} />
</div>
```

```styl
.k-cascader
    margin-right 20px
```

```ts
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            data: [
                {
                    value: 'beijing',
                    label: '北京',
                    disabled: true,
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
                            disabled: true,
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
                                    disabled: true,
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

