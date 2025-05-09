---
title: 虚拟表格
order: 36
---

添加`virtual`属性，并且指定滚动元素的高度（通过`fixHeader`指定）即可开启虚拟滚动模式

> 虚拟列表内部需要根据rowKey做缓存，不指定rowKey可能存在奇怪问题（默认rowKey为索引值）

```vdt
import {Table, TableColumn} from 'kpc';

<div>
    <h4>表格</h4>
    <Table data={this.get('data')} virtual fixHeader="400">
        <TableColumn key="a" title="Title 1" minWidth={200}/>
        <TableColumn key="b" title="Title 2" minWidth={300} />
    </Table>
    <h4>树形表格</h4>
    <Table ref="table" data={this.get('variableHeightData')} virtual rowKey={data => data.name} fixHeader="400">
        <TableColumn key="name" title="Title 1" minWidth={200}/>
        <TableColumn key="size" title="Title 2" minWidth={300} />
    </Table>
</div>
```

```styl
.no-data-template
    display: flex
    gap: 10px
.icon
    vertical-align middle
    margin-right 10px
    cursor pointer
.name
    vertical-align middle
.expand
    padding 16px
```
```ts
interface Props {
    data: any[]
    variableHeightData: any[]
}
import {range, bind} from 'kpc/components/utils';
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            data: [],
            variableHeightData: []
        } as Props;
    }
    init() {
        const arr = [];
        for (let index = 0; index < 10000; index++) {
            arr.push({
                a: `Cell ${index}-1`,
                b: `Cell ${index}-2`
            });
        }
        this.set({data: arr});

        const generateTreeData = (count: number) => {
            const result = [];
            
            for (let i = 0; i < count; i++) {
                const hasChildren = Math.random() > 0.5;
                const node: any = {
                    name: `Node-${i}`,
                    key: `node-${i}`,
                    size: Math.floor(Math.random() * 100),
                };

                if (hasChildren) {
                    node.children = Array.from({ length: 2 }, (_, j) => ({
                        name: `Node-${i}-${j}`,
                        key: `node-${i}-${j}`,
                        size: Math.floor(Math.random() * 100),
                        children: Math.random() > 0.5 ? [
                            {
                                name: `Node-${i}-${j}-0`,
                                key: `node-${i}-${j}-0`,
                                size: Math.floor(Math.random() * 100),
                            }
                        ] : undefined
                    }));
                }

                result.push(node);
            }

            return result;
        };

        const data = generateTreeData(10000);
        this.set({ variableHeightData: data });
    }

    @bind
    scrollToRowByKey() {
        this.refs.table.scrollToRowByKey('Node-400');
    }
}
```
