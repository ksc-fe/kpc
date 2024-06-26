---
title: 图形
order: 1
---

该示例展示了所有内置的图形，并且开启了`Diagram`的一些功能，你可以拖动和连线它们，关于图形组件的属性，见API部分

> `movable/resizable/ratatable`功能需要同时开启`selectable`才能生效

```vdt
import {
    Diagram, DStackLayout,
    DRectangle, DSquare, DCircle, DEllipse,
    DImage, DText, DDiamond, DParallelogram,
    DHexagon, DTriangle, DCylinder, DCloud,
    DDocument, DCallout,
} from 'kpc/components/diagram';
import {Button, ButtonGroup} from 'kpc';

const states = this.get('states');
<div>
    <ButtonGroup checkType="checkbox" v-model="selectedStates">
        <Button v-for={states} value={$key}>
            {$key}
        </Button>
    </ButtonGroup>
    <br />
    <Diagram>
        <DStackLayout spacing="20" wrap="500" border="20">
            <DRectangle {...states} /> 
            <DSquare {...states} />
            <DCircle {...states} />
            <DEllipse {...states} />
            <DImage src="https://design.ksyun.com/fonts/logo.png" {...states} />
            <DText label="text" {...states} />
            <DDiamond {...states} />
            <DParallelogram {...states} />
            <DHexagon {...states} />
            <DTriangle {...states} />
            <DCylinder {...states} />
            <DCloud {...states} />
            <DDocument {...states} />
            <DCallout {...states} />
        </DStackLayout>
    </Diagram>
</div>
```

```ts
interface Props {
    states: States
    selectedStates: (keyof States)[]
}

type States = {
    selectable: boolean
    movable: boolean
    connectable: boolean
    resizable: boolean
    rotable: boolean
    editable: boolean
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            states: {
                selectable: false,
                movable: false,
                connectable: false,
                resizable: false,
                rotatable: false,
                editable: false,
            },
            selectedStates: [],
        }
    }

    init() {
        this.on('$change:selectedStates', (v) => {
            const states = {} as States;
            for (let key in this.get('states')) {
                states[key as keyof States] = v.indexOf(key as keyof States) > -1;
            }
            this.set('states', states);
        });
    }
}
```

```vue-ignore
请参考index.vdt
```

```react-ignore
请参考index.vdt
```

```angular-ignore
请参考index.vdt
```
