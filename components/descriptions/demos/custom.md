---
title: 自定义内容
order: 1
---

两种使用方式均支持自定义内容。DescriptionItem提供了append插槽便于自定义内容, 若通过items形式传入则需要配置append字段作为自定义渲染内容。

```vdt
import {Descriptions, DescriptionItem, Copy, Button, Tooltip, Icon} from 'kpc';

<div>
    <Descriptions title="基础信息">
        <b:title>
            <span>自定义标题</span>
            <Tooltip content="custom title">
                <Icon class="k-icon-question" />
            </Tooltip>
        </b:title>
        <DescriptionItem label="label1">
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            <b:append>
                <Copy text="success" />
            </b:append>
        </DescriptionItem>
        <DescriptionItem label="label2">
            测试
        </DescriptionItem>
        <DescriptionItem label="label3">
            <b:label>
                <span>自定义label</span>
                <Tooltip content="custom label">
                    <Icon class="k-icon-question" />
                </Tooltip>
            </b:label>
            测试
        </DescriptionItem>
        <DescriptionItem label="label4">
            <span>测试4</span>
            <Button type="link">分配项目</Button>
        </DescriptionItem>
        <DescriptionItem label="label5">测试5</DescriptionItem>
        <DescriptionItem label="label6">测试6</DescriptionItem>
    </Descriptions>
</div>
```

```styl
.k-descriptions
    padding 10px
```

