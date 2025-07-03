---
title: 单行显示
order: 7
---
`nowrap`属性可以控制是否换行显示，`isMerge`属性可以控制不换行显示时是否交叉自动合并

```vdt
import {Datepicker} from 'kpc';

<div>
    <Datepicker multiple nowrap range v-model="dateRange" />
    You selected: {JSON.stringify(this.get('dateRange'))}
    <br /><br />
    <Datepicker multiple nowrap isMerge range v-model="mergeDateRange" />
    You selected: {JSON.stringify(this.get('mergeDateRange'))}
    <br /><br />
</div>
```

```ts
interface Props {
    dateRange?: [string, string][]
    mergeDateRange?: [string, string][]
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {  
            dateRange: [],
            mergeDateRange: [],
        } as Props;
    }
}
```
