---
title: 
    zh-CN: 尺寸
    en-US: Size
order: 4
---

## zh-CN

组件提供4中尺寸：`large` `default` `small` `mini`

## en-US

There are 4 sizes: `large` `default` `small` `mini`

```vdt
import Cascader from 'kpc/components/cascader';

<div>
    <Cascader v-for={{ ['large', 'default', 'small', 'mini'] }} 
        size={{ value }}
        data={{ self.get('data') }} 
    />
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
