---
title: 
    zh-CN: 自定义内容
    en-US: Custom content
order: 3
---

## zh-CN

使用`content`扩展点，可以自定义复杂的提示内容

## en-US

you can customize the complex tooltip content by `content` block.

```vdt
import Tooltip from 'kpc/components/tooltip';
import {Slider} from 'kpc/components/slider';
import {Button} from 'kpc/components/button';

<div>
    <Tooltip trigger="click">
        <Button>Adjust Volume</Button>
        <b:content>
            <Slider v-model="volume" 
                style="width: 200px;"
                isShowInput={{ false }} 
                isShowEnd={{ false }}
            />
        </b:content>
    </Tooltip>
</div>
```
