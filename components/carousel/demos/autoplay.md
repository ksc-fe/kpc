---
title: 自动切换
order: 1
---

给`Carousel`添加`autoplay`属性，即可实现自动切换，默认切换间隔为`5000`(ms)，你可以给`autoplay`指定切换间隔（ms）
如果间隔为`0`则不自动切换

```vdt
import {Carousel, CarouselItem} from 'kpc/components/carousel';

<Carousel autoplay>
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
