---
title: 开关值
order: 5
---

* `value`，类型`Any`，默认`false`
* `trueValue`，类型`Any`，默认`true`
* `falseValue`，类型`Any`，默认`false`

```vdt
import {Switch} from 'kpc/components/switch';

<div>
    <Switch on={{'开'}} off={{'关'}} value={{true}}></Switch>
    <Switch on={{'开'}} off={{'关'}} value={{1}} trueValue={{1}} ></Switch>
    <Switch on={{'开'}} off={{'关'}} value={{'a'}} trueValue={{1}} falseValue={{'a'}}></Switch>
</div>
```
