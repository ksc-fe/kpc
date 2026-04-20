---
title: 基础用法 
order: 0
---

`Carousel`与`CarouselItem`嵌套使用即可，你可以通过`v-model`双向绑定当前展示的内容块，`CarouselItem`默认
取值为`$0` `$1`的索引形式，你也可以通过`value`指定任意值

```vdt
import {Carousel, CarouselItem} from 'kpc';

<Carousel>
    <CarouselItem>1</CarouselItem>
    <CarouselItem>2</CarouselItem>
    <CarouselItem>3</CarouselItem>
    <CarouselItem>4</CarouselItem>
</Carousel>
```

```styl
.k-carousel-item
    background #333 
    color #fff
    line-height 300px
    text-align center
    font-size 30px
```
