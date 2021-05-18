---
title: 提示弹层位置
order: 1
---

使用`position`属性改变弹层位置，该属性值为对象，其中`my`指弹层，`at`指触发器。组件同时
提供了4中快捷取值：`left`, `right`, `top`, `bottom`

> 参考`jQuery-UI`实现https://api.jqueryui.com/position/

```vdt
import Tooltip from 'kpc/components/tooltip';
import {ButtonGroup, Button} from 'kpc/components/button';
import {Form, FormItem} from 'kpc/components/form';
import {Select, Option} from 'kpc/components/select';
import {Spinner} from 'kpc/components/spinner';

<Form>
    <FormItem label="position:">
        <ButtonGroup checkType="radio" v-model="position">
            <Button 
                v-for={{ ['left', 'right', 'top', 'bottom', 'custom'] }}
                value={{ value }}
            >{{ value }}</Button>
        </ButtonGroup>
    </FormItem>
    <template v-if={{ self.get('position') === 'custom' }}>
        <FormItem label="my:">
            x: <Select width="100" v-model="pos.myX">
                <Option 
                    v-for={{ self.get('xAxisKeywords') }} 
                    value={{ value }}
                >{{ value }}</Option>
            </Select>
            <Spinner vertical v-model="pos.myXOffset" />
            y: <Select width="100" v-model="pos.myY">
                <Option 
                    v-for={{ self.get('yAxisKeywords') }} 
                    value={{ value }}
                >{{ value }}</Option>
            </Select>
            <Spinner vertical v-model="pos.myYOffset" />
        </FormItem>
        <FormItem label="at:">
            x: <Select width="100" v-model="pos.atX">
                <Option 
                    v-for={{ self.get('xAxisKeywords') }} 
                    value={{ value }}
                >{{ value }}</Option>
            </Select>
            <Spinner vertical v-model="pos.atXOffset" />
            y: <Select width="100" v-model="pos.atY">
                <Option 
                    v-for={{ self.get('yAxisKeywords') }} 
                    value={{ value }}
                >{{ value }}</Option>
            </Select>
            <Spinner vertical v-model="pos.atYOffset" />
        </FormItem>
    </template>
    <FormItem key="opera" fluid>
        <div class="opera">
            <Tooltip
                content={{ self.getContent() }}
                position={{ self.getPosition() }}
                always
                value={{ true }}
                container=".opera"
                canHover
            >
                <Button>at</Button>
            </Tooltip>
        </div>
    </FormItem>
</Form>
```

```styl
.opera
    margin 50px
    text-align center
    position relative
.k-spinner
.k-select
    margin-right 8px
.k-tooltip-content
    white-space nowrap
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            position: 'left',
            xAxisKeywords: ['left', 'center', 'right'],
            yAxisKeywords: ['top', 'center', 'bottom'],
            pos: {
                myX: 'center',
                myXOffset: 0,
                myY: 'bottom',
                myYOffset: -10,
                atX: 'center',
                atXOffset: 0,
                atY: 'top',
                atYOffset: 0,
            },
        }
    }

    getPosition() {
        const position = this.get('position');
        const getNumStr = num => num > 0 ? `+${num}` : num === 0 ? '' : num;

        if (position === 'custom') {
            const pos = this.get('pos');
            return {
                my: `${pos.myX}${getNumStr(pos.myXOffset)} ${pos.myY}${getNumStr(pos.myYOffset)}`,
                at: `${pos.atX}${getNumStr(pos.atXOffset)} ${pos.atY}${getNumStr(pos.atYOffset)}`,
            };
        }

        return position;
    }

    getContent() {
        return JSON.stringify(this.getPosition());
    }
}
```
