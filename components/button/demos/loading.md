---
title: 加载状态按钮
order: 2
---

添加`loading`属性，可以将按钮设为加载状态，此时按钮不可点。

```vdt
import Button from 'kpc/components/button';

<div>
    <Button type="primary" loading>确认</Button>
    <Button icon circle loading><i class="k-icon ion-ios-search"></i></Button>
    <br /> <br />
    <Button type="primary" 
        loading={{ self.get('loading1') }}
        ev-click={{ self.onClick.bind(self, 'loading1') }}
    >点击加载</Button>
    <Button type="primary" 
        loading={{ self.get('loading2') }}
        ev-click={{ self.onClick.bind(self, 'loading2') }}
    ><i class="k-icon ion-ios-search"></i>点击加载</Button>
    <Button icon circle
        loading={{ self.get('loading3') }}
        ev-click={{ self.onClick.bind(self, 'loading3') }}
    ><i class="k-icon ion-ios-search"></i></Button>
    <Button type="primary" 
        loading={{ self.get('loading4') }}
        ev-click={{ self.onClick.bind(self, 'loading4') }}
    >图标在右侧<i class="k-icon ion-ios-search"></i></Button>
</div>
```

```styl
.k-btn
    margin-right 20px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    onClick(name) {
        this.set(name, true);
    }
}
```

```vue
<template>
    <div>
        <Button type="primary" loading>确认</Button>
        <Button icon circle loading><i class="k-icon ion-ios-search"></i></Button>
        <br /> <br />
        <Button type="primary" 
            :loading="loading1"
            @click="onClick('loading1')"
        >点击加载</Button>
        <Button type="primary" 
            :loading="loading2"
            @click="onClick('loading2')"
        ><i class="k-icon ion-ios-search"></i>点击加载</Button>
        <Button icon circle
            :loading="loading3"
            @click="onClick('loading3')"
        ><i class="k-icon ion-ios-search"></i></Button>
        <Button type="primary" 
            :loading="loading4"
            @click="onClick('loading4')"
        >图标在右侧<i class="k-icon ion-ios-search"></i></Button>
    </div>
</template>
<script>
import Button from 'kpc/components/button';

export default {
    components: {
        Button
    },

    data() {
        return {
             loading1: false,
             loading2: false,
             loading3: false,
             loading4: false,
        }
    },

    methods: {
        onClick(name) {
            this[name] = true;
        }
    }
}
</script>
```

```jsx
import React from 'react';
import Button from 'kpc/components/button';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClick(name) {
        this.setState({[name]: true});
    }

    render() {
        return (
            <div>
                <Button type="primary" loading>确认</Button>
                <Button icon circle loading><i className="k-icon ion-ios-search"></i></Button>
                <br /> <br />
                <Button type="primary" 
                    loading={this.state.loading1}
                    onClick={this.onClick.bind(this, 'loading1')}
                >点击加载</Button>
                <Button type="primary" 
                    loading={this.state.loading2}
                    onClick={this.onClick.bind(this, 'loading2')}
                ><i className="k-icon ion-ios-search"></i>点击加载</Button>
                <Button icon circle
                    loading={this.state.loading3}
                    onClick={this.onClick.bind(this, 'loading3')}
                ><i className="k-icon ion-ios-search"></i></Button>
                <Button type="primary" 
                    loading={this.state.loading4}
                    onClick={this.onClick.bind(this, 'loading4')}
                >图标在右侧<i className="k-icon ion-ios-search"></i></Button>
            </div>
        )
    }
}
```
