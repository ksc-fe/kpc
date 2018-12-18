---
title: 按钮组
order: 1
---

将`Button`作为`ButtonGroup`的子元素，可以展示按钮组。给`ButtonGroup`添加`vertical`属性，
可以是按钮组纵向排列。给`ButtonGroup`添加`checkType`属性，可以使按钮组拥有单选或复选能力。

```vdt
import {Button, ButtonGroup} from 'kpc/components/button';

<div>
    <ButtonGroup>
        <Button>开机</Button>
        <Button>关机</Button>
        <Button>重启</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary">开机</Button>
        <Button type="primary">关机</Button>
        <Button type="primary">重启</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary">
            <i class="k-icon ion-ios-arrow-left"></i>上一页
        </Button>
        <Button type="primary">
            下一页<i class="k-icon ion-ios-arrow-right"></i>
        </Button>
    </ButtonGroup>
    <br /><br />
    <p>纵向按钮组</p>
    <ButtonGroup vertical>
        <Button type="primary">开机</Button>
        <Button type="primary">关机</Button>
        <Button type="primary">重启</Button>
    </ButtonGroup>
    <br /><br />
    <p>radio按钮组</p>
    <ButtonGroup checkType="radio" v-model="city">
        <Button value="beijing">北京</Button>
        <Button value="shanghai" ref="__radioShanghai">上海</Button>
        <Button value="guangzhou">广州</Button>
        <Button value="shenzhen">深圳</Button>
    </ButtonGroup>
    <p>checkbox按钮组</p>
    <ButtonGroup checkType="checkbox" v-model="cities">
        <Button value="beijing" size="small">北京</Button>
        <Button value="shanghai" size="small" ref="__checkboxShanghai">上海</Button>
        <Button value="guangzhou" size="small">广州</Button>
        <Button value="shenzhen" size="small">深圳</Button>
    </ButtonGroup>
</div>
```

```styl
.k-btns
    margin-right 20px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            city: 'beijing',
            cities: [],
        };
    }
}
```

```jsx
import React from 'react';
import {Button, ButtonGroup} from 'kpc/components/button';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {city: 'beijing'}
    }

    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button>开机</Button>
                    <Button>关机</Button>
                    <Button>重启</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button type="primary">开机</Button>
                    <Button type="primary">关机</Button>
                    <Button type="primary">重启</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button type="primary">
                        <i className="k-icon ion-ios-arrow-left"></i>上一页
                    </Button>
                    <Button type="primary">
                        下一页<i className="k-icon ion-ios-arrow-right"></i>
                    </Button>
                </ButtonGroup>
                <br /><br />
                <p>纵向按钮组</p>
                <ButtonGroup vertical>
                    <Button type="primary">开机</Button>
                    <Button type="primary">关机</Button>
                    <Button type="primary">重启</Button>
                </ButtonGroup>
                <br /><br />
                <p>radio按钮组</p>
                <ButtonGroup checkType="radio"
                    value={this.state.city}
                    on$change-value={(c, city) => this.setState({city})}
                >
                    <Button value="beijing">北京</Button>
                    <Button value="shanghai">上海</Button>
                    <Button value="guangzhou">广州</Button>
                    <Button value="shenzhen">深圳</Button>
                </ButtonGroup>
                <p>checkbox按钮组</p>
                <ButtonGroup checkType="checkbox"
                    value={this.state.cities}
                    on$change-value={(c, cities) => this.setState({cities})}
                >
                    <Button value="beijing" size="small">北京</Button>
                    <Button value="shanghai" size="small">上海</Button>
                    <Button value="guangzhou" size="small">广州</Button>
                    <Button value="shenzhen" size="small">深圳</Button>
                </ButtonGroup>
            </div>
        )
    }
}
```
