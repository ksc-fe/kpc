---
title: 改变className前缀
order: 0
---

通过配置`classNamePrefix`，可以改变样式名className的前缀，组件默认是`k`开头，如: `k-datepicker`

> 本例中，我们将前缀设为`kd`，可以打开调试工具查看

```vdt
import {ConfigProvider, Button, Input} from 'kpc';

<ConfigProvider value={{classNamePrefix: 'kd'}}>
    <Button>Button</Button>
    <div style="margin-top: 8px;">
        <Input />
    </div>
</ConfigProvider>
```
