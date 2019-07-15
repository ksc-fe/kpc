---
title: 基本用法
order: 0
---

通过`data`给组件传入数据，`v-model`进行数据双向绑定，绑定的结果是选中的每一项组成的数组。
其中`data`的数据格式如示例所示：
1. `value`选中后的值
2. `label`展示的文案
3. `children`如果存在子选项，需要递归地指定该属性
4. `disabled`禁用该项

```vdt
import Cascader from 'kpc/components/cascader';

<div>
    <Cascader data={{ self.get('data') }} v-model="value" />
    You selected: {{ JSON.stringify(self.get('value')) }}
    <br />
    <br />
    <Cascader loading />
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
