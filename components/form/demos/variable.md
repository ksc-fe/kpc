---
title: 可变规则
order: 3
---

规则`rules`的值是响应式的，这意味着我们可以实时改变验证规则。

例如本例中，用户可以不输入姓名，但如果输入了“姓”，就必须输入“名”，反之亦然。

```vdt
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import {Row, Col} from 'kpc/components/grid';

<Form ref="form">
    <FormItem label="姓名">
        <Row gutter="16">
            <Col span="12">
                <FormItem hideLabel model="firstName" rules={{ {
                    // 该规则取值，随着lastName的存在与否而改变
                    required: self.get('lastName')
                } }}> 
                    <Input v-model="firstName" />
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem hideLabel model="lastName" rules={{ {
                    // 该规则取值，随着firstName的存在与否而改变
                    required: self.get('firstName')
                } }}> 
                    <Input v-model="lastName" />
                </FormItem>
            </Col>
        </Row>
    </FormItem>
</Form>
```

```styl
@media (max-width: 768px)
    .k-form-item
        width 100%
        .k-input
            width 100%
```
