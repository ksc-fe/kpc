---
title: 
    zh-CN: 可搜索
    en-US: Filterable
order: 6
---

## zh-CN

添加`filterable`属性，即可实现搜索。默认会根据`label`进行搜索，你也可以通过`filter`属性，传入
自定义的搜索逻辑，组件会将当前的搜索关键词和每一项数据作为参数传入

## en-US

Add `filterable` to make the component searchable. The default searching behavior is based on `label`, 
you can also add `filter` property to customize the search logic, the component will pass the 
current search keyword and each item of data to that function.

```vdt
import Cascader from 'kpc/components/cascader';

<div>
    <Cascader data={{ self.get('data') }} filterable />
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
