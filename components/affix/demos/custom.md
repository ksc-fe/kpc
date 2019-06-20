---
title: 自定义固定规则
order: 1
---

通过`shouldFix`可以自定义元素固定的规则，此时设置的`top` `bottom`属性，仅仅用来设置固定的位置，并不用于固定
规则的判断，当`shouldFix`返回`true`时，元素就会固定，否则不固定。本例中：只要滚动超过`100px`就会固定

通过`exclude`可以在内部判断元素应该固定时，排除某些情况，让它不固定。本例中：当当前示例容器超出视野（viewport）
之外时，不启用固定

```vdt
import Affix from 'kpc/components/affix';
import Button from 'kpc/components/button';

<div ref="node">
    <Affix top={{ 150 }} shouldFix={{ self._shouldFix }}>
        <Button type="primary">fix at 150px from the top while scroll top 100px</Button>
    </Affix>
    <Affix bottom={{ 0 }} exclude={{ self._exclude }}>
        <Button type="primary">fix at the bottom only while this demo is in viewport</Button>
    </Affix>
</div>
```

```styl
.k-affix
    margin-bottom 20px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    _shouldFix() {
        // when scroll top greater than or equal to 100
        // fix it at 150px from top
        return window.pageYOffset >= 100;
    }

    _exclude() {
        // when this demo is not in the viewport
        // don't fix it
        const example = this.refs.node.closest('.example');
        const {top} = example.getBoundingClientRect();
        const viewport = document.documentElement.clientHeight;

        return top > viewport; 
    }
}
```
