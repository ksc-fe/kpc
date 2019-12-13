---
title: 图形选择联动
order: 4
---

当图形支持选择时`selectable`时，用户选择不同的图形`Diagram`会触发`selectionChange`事件，组件会将选择的图形以
数组的形式传给事件回调函数，如果图形添加了`data`属性，则我们可以通过图形对象获取到该数据`shape.data`

```vdt
import {Diagram, DTreeLayout, DCircle, DLine, DText} from 'kpc/components/diagram';

const Loop = ({children, parent, disabled}) => {
    const ret = [];
    for (let i = 0; i < children.length; i++) {
        const data = children[i];

        // if parent is disabled, disable all children
        if (!disabled && data.disabled) disabled = true; 

        ret.push(
            <DCircle key={{ data.key }} 
                label={{ data.key }} 
                selectable={{ !disabled }}
                data={{ data }}
            />
        );

        // add line if it has parent
        if (parent) {
            ret.push(<DLine from={{ parent.key }} to={{ data.key }} type="rounded" />);
        }
        if (data.children) {
            ret.push(<Loop children={{ data.children }} parent={{ data }} disabled={{ disabled }} />);
        }
    }
    return ret;
}

<Diagram ev-selectionChange={{ self._onSelect }}>
    <DTreeLayout type="vertical">
        <Loop children={{ [self.get('data')] }} />
    </DTreeLayout>
</Diagram>
```

```js
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: {
                key: 'Database',
                children: [
                    {
                        key: 'Table1',
                        children: [
                            {
                                key: 'Column1-1',
                            },
                            {
                                key: 'Column1-2',
                            }
                        ]
                     },
                     {
                        key: 'Table2',
                        disabled: true,
                        children: [
                            {
                                key: 'Column2-1',
                            },
                            {
                                key: 'Column2-2',
                            }
                        ]
                     },
                ] 
            }
        }
    }

    _onSelect(shapes) {
        if (!shapes.length) {
            Message.info('You selected nothing.');
        } else {
            const data = shapes[0].data;
            Message.info(`You selected ${data.key}.`);
        }
    }
}
```
