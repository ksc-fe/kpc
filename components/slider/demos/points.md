---
title: 展示间隔点
order: 4
---

给`Slider`指定`points`属性，可以展示间隔点。组件默认会根据`step`展示间隔点，你也可以通过数组指定哪些点
需要展示间隔点。

```vdt
import {Slider} from 'kpc';

<div>
    <Slider value={45} step={5} points showInput={false}/>
    <Slider value={[0.3, 0.6]} min={0} max={1} step={0.1} range points />
    <Slider value={45} step={5} showInput={false} 
        points={[0, 35, 95, 100]}
    />
</div>
```
