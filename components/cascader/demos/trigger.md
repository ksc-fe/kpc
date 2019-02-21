--- 
title:
    zh-CN: 触发方式
    en-US: Trigger Mode
order: 2
---

## zh-CN

子菜单的触发的方式默认是`click`点击展开，通过设置`trigger`属性为`hover`，可以指定为移入展开

## en-US

The trigger mode of the submenu is `click` to expand by default, by setting the `trigger` property 
to `hover`, you can specify it to expand by mouse move in.

```vdt
import Cascader from 'kpc/components/cascader';

<Cascader data={{ self.get('data') }} trigger="hover" />
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
