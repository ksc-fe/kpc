---
title: 
    zh-CN: 选择即改变
    en-US: Change on Select
order: 3
---

## zh-CN

添加`changeOnSelect`属性，即可使组件选择即改变`value`，这样可以只选中父级

## en-US

You can make the component change `value` as long as you select by adding `changeOnSelect` property, 
so you can only select parent item.

```vdt
import Cascader from 'kpc/components/cascader';

<div>
    <Cascader data={{ self.get('data') }} v-model="value" changeOnSelect />
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
