---
title: 
    zh-CN: 动态加载数据
    en-US: Load Data Dynamically
order: 7
---

## zh-CN

如果数据项中的`children`属性为空数组`[]`，则代表该项子数据为动态加载的，此时可以指定`loadData`
属性来定义动态加载的逻辑，组件会将当前展开项的数据当做参数`item`传入，你只需要更新`item`的`children`
属性即可，该函数的返回值为`Promise`对象

## en-US

If the `children` of the data item is an empty array `[]`, it means that the sub-data is loaded dynamically. 
In this case, you can sepecify the logic of loading data by `loadData` property. The component will 
pass the data of the currently expanded item as a parameter `item` to the function, and you only 
need to update the children of it. The return value of the function should be a `Promise` object.

```vdt
import Cascader from 'kpc/components/cascader';

<Cascader data={{ self.get('data') }} loadData={{ self.loadData }}/>
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
                    children: []
                },
                {
                    value: 'hunan',
                    label: 'Hunan',
                    children: []
                }
            ]
        };
    }

    loadData(item) {
        return new Promise(resolve => {
            setTimeout(() => {
                switch (item.value) {
                    case 'beijing':
                        item.children = [
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
                        ];
                        break;
                    case 'hunan':
                        item.children = [
                            {
                                value: 'changsha',
                                label: 'Changsha',
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
                                children: []
                            }
                        ];
                        break;
                    case 'yueyang':
                        item.children = [
                            {
                                value: 'yueyanglou',
                                label: 'Yueyanglou',
                            },
                            {
                                value: 'yueyangxian',
                                label: 'Yueyangxian',
                            }
                        ];
                        break;
                }

                resolve();
            }, 1000);
        });
    }
}
```
