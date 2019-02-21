---
title: 
    zh-CN: 禁用状态
    en-US: Disabled
order: 1
---

## zh-CN

给组件添加`disabled`属性，可以禁用整个组件；给`data`数据项添加`disabled`属性
可以单独禁用该项

## en-US

Add `disabled` property to component to disable the component, and add `disabled` property to `data` to disable 
the item individually.

```vdt
import Cascader from 'kpc/components/cascader';

<div>
    <Cascader data={{ self.get('data') }} disabled/>
    <Cascader data={{ self.get('data') }} />
</div>
```

```styl
.k-cascader
    margin-right 20px
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
                    disabled: true,
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
                            disabled: true,
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
                                    disabled: true,
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

