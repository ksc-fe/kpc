---
title: 可搜索
order: 6
---

添加`filterable`属性，即可实现搜索。默认会根据`label`进行搜索，你也可以通过`filter`属性，传入
自定义的搜索逻辑，组件会将当前的搜索关键词和每一项数据作为参数传入

```vdt
import {Cascader} from 'kpc';

<div>
    <Cascader data={this.get('data')} v-model="value" filterable />
    <br /><br />
    <Cascader data={this.get('data')} v-model="values" filterable multiple />
</div>
```

```ts
interface Props {
    value?: string[] | null
    values?: string[][] | null
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            value: [] as string[],
            values: [] as string[][],
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
