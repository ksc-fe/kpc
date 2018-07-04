---
title: 动态加载数据
order: 7
---

如果数据项中的`children`属性为空数组`[]`，则代表该项子数据为动态加载的，此时可以指定`loadData`
属性来定义动态加载的逻辑，组件会将当前展开项的数据当做参数`item`传入，你只需要更新`item`的`children`
属性即可，该函数的返回值为`Promise`对象

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
                    label: '北京',
                    children: []
                },
                {
                    value: 'hunan',
                    label: '湖南',
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
                        ];
                        break;
                    case 'hunan':
                        item.children = [
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
                                children: []
                            }
                        ];
                        break;
                    case 'yueyang':
                        item.children = [
                            {
                                value: 'yueyanglou',
                                label: '岳阳楼区',
                            },
                            {
                                value: 'yueyangxian',
                                label: '岳阳县',
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
