---
title: 自定义结果显示
order: 5
---

给组件指定`format`扩展点，可以自定义选择结果显示，组件会将当前选择的数据项以数组的格式作为参数传入

> Vue下通过`slot="format" slot-scope="values"`指定

```vdt
import Cascader from 'kpc/components/cascader';

<Cascader data={{ self.get('data') }} clearable>
    <b:format params="values">
        <div v-if={{ values.length }}>
            <i class="ion-ios-location" style="line-height: 1; margin-right: 8px; vertical-align: middle;"></i>
            {{ values[values.length - 1].label }}
        </div>
    </b:format>
</Cascader>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
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
