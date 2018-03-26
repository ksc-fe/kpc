---
title: 自定义头部和底部
order: 1
---

组件提供了`header`和`footer`扩展点（block），通过它们可以自定义头部和底部。

> 可以通过`parent()`引用到组件定义的默认内容

```vdt
import Button from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';

<div>
    <Button ev-click={{ self.set.bind(self, 'show', true) }}
        type="primary"
    >Show Dialog</Button>
    <Dialog v-model="show">
        <b:header>
            <div class="k-title">
                <i class="ion-person"></i>
                Custom Header
            </div>
        </b:header>

        Dialog Body 

        <b:footer>
            Custom Footer
            {{ parent() }}
        </b:footer>
    </Dialog>
</div>
```
