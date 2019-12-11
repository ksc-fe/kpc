---
title: 线条
order: 2
---

```vdt
import {Diagram, DLine, DRectangle, DStackLayout} from 'kpc/components/diagram';
import {Form, FormItem} from 'kpc/components/form';
import {Button, ButtonGroup} from 'kpc/components/button';
import {Slider} from 'kpc/components/slider';
import {Checkbox} from 'kpc/components/checkbox';

const keys = ['A', 'B', 'C'];

<Form>
    <FormItem v-for={{ ['startArrow', 'endArrow', 'type', 'strokeStyle'] }} label={{ value }}>
        <ButtonGroup checkType="radio" v-model={{ value }}>
            <Button v-for={{ DLine.propTypes[value] }}
                value={{ value }}
            >{{ value }}</Button>
        </ButtonGroup>
    </FormItem>
    <FormItem v-for={{ ['startPoint', 'endPoint'] }} label={{ value }}>
        <template v-for={{ [0, 1] }} v-for-value='index'>
            <Slider
                value={{ self.get(`${value}.${index}`) }}
                min={{ 0 }}
                max={{ 1000 }}
                isShowInput={{ false }}
                showTooltip
                ev-$change:value={{ self._onSliderChange.bind(self, value, index) }}
            >
                <b:tooltip params="value">
                    {{ index === 0 ? 'x: ' : 'y: ' }} {{ value }}
                </b:tooltip>
            </Slider>
            <br />
        </template>
    </FormItem>
    <FormItem v-for={{ ['from', 'to'] }} label={{ value }}>
        <ButtonGroup checkType="radio" v-model={{ value }}>
            <Button v-for={{ keys }} value={{ value }}>{{ value }}</Button>
            <Button value={{ null }}>None</Button>
        </ButtonGroup>
    </FormItem>
    <FormItem v-for={{ ['exit', 'entry'] }} label={{ value }}>
        <b:label>
            <Checkbox v-model={{ `use${value}` }}>{{ value }}</Checkbox>
        </b:label>
        <template v-for={{ [0, 1] }} v-for-value='index'>
            <Slider
                value={{ self.get(`${value}.${index}`) }}
                min={{ 0 }}
                max={{ 1 }}
                step={{ 0 }}
                isShowInput={{ false }}
                showTooltip
                ev-$change:value={{ self._onSliderChange.bind(self, value, index) }}
                disabled={{ !self.get(`use${value}`) }}
            >
                <b:tooltip params="value">
                    {{ index === 0 ? 'x: ' : 'y: ' }} {{ value }}
                </b:tooltip>
            </Slider>
            <br />
        </template>
    </FormItem>
    <FormItem>
        <Diagram>
            <DStackLayout spacing="50" border="20">
                <DRectangle v-for={{ keys }} key={{ value }} label={{ value }} /> 
            </DStackLayout>
            <DLine
                startArrow={{ self.get('startArrow') }}
                endArrow={{ self.get('endArrow') }}
                startPoint={{ self.get('startPoint') }}
                endPoint={{ self.get('endPoint') }}
                type={{ self.get('type') }}
                strokeStyle={{ self.get('strokeStyle') }}
                from={{ self.get('from') }}
                to={{ self.get('to') }}
                exit={{ self.get('useexit') ? self.get('exit') : null }}
                entry={{ self.get('useentry') ? self.get('entry') : null }}
            />
        </Diagram>
    </FormItem>
</Form>
```

```styl
.k-form-item
    margin-bottom 8px
.k-slider
    width 500px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            startArrow: 'none',
            endArrow: 'classic',
            startPoint: [10, 100],
            endPoint: [100, 150],
            type: 'straight',
            strokeStyle: 'solid',
            from: null,
            to: null,
            exit: [0, 0],
            entry: [0, 0],
            useexit: false,
            useentry: false,
        };
    }

    _onSliderChange(name, index, c, value) {
        let propValue = this.get(name).slice(0);
        propValue[index] = value;
        this.set(name, propValue);
    }
}
```
