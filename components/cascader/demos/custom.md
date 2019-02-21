---
title: 
    zh-CN: 自定义结果显示
    en-US: Customize the Displayed Content
order: 5
---

## zh-CN

给组件指定`format`扩展点，可以自定义选择结果显示，组件会将当前选择的数据项以数组的格式作为参数传入

> Vue下通过`slot="format" slot-scope="values"`指定

## en-US

You can customize the displayed content of selected values by specifying `format` block, and 
the component will pass all the currently selected values to the function in an array type.

> Use `slot="format" slot-scope="values"` to sepecify in Vue.

```vdt
import Cascader from 'kpc/components/cascader';

<Cascader data={{ self.get('data') }} clearable>
    <b:format params="values">
        <div v-if={{ values.length }}>
            <i class="ion-ios-location" style="line-height: 1; margin-right: 8px;"></i>
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
