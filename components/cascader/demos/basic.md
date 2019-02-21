---
title: 
    zh-CN: 基本用法
    en-US: Basic Usage
order: 0
---

## zh-CN

通过`data`给组件传入数据，`v-model`进行数据双向绑定，绑定的结果是选中的每一项组成的数组。
其中`data`的数据格式如示例所示：
1. `value`选中后的值
2. `label`展示的文案
3. `children`如果存在子选项，需要递归地指定该属性
4. `disabled`禁用该项

## en-US

Pass data to the component by `data` property, you can use `v-model` for two-way binding. 
The resulat is an array of each value selected. Wherein the format of `data` as shown in the example:
1. `value` selected value
2. `label` displayed text
3. `children` if there are suboptions, you need to specify this property recursively
4. `disabled` disable this item

```vdt
import Cascader from 'kpc/components/cascader';

<div>
    <Cascader data={{ self.get('data') }} v-model="value" />
    You selected: {{ JSON.stringify(self.get('value')) }}
</div>
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
                    label: 'Beijing',
                    children: [
                        {
                            value: 'haidian',
                            label: 'Haidian'
                        },
                        {
                            value: 'chaoyang',
                            label: 'Chaoyang'
                        },
                        {
                            value: 'fengtai',
                            label: 'Fengtai'
                        }
                    ]
                },
                {
                    value: 'hunan',
                    label: 'Hunan',
                    children: [
                        {
                            value: 'changsha',
                            label: 'Changshai',
                            children: [
                                {
                                    value: 'yuelu',
                                    label: 'Yuelu',
                                }
                            ]
                        },
                        {
                            value: 'yueyang',
                            label: 'Yueyang',
                            children: [
                                {
                                    value: 'yueyanglou',
                                    label: 'Yueyanglou',
                                },
                                {
                                    value: 'yueyangxian',
                                    label: 'Yueyangxian',
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
