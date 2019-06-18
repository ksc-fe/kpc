---
title: 切换动画
order: 1
---

组件目前支持两种切换动画：`slide`（默认），`fade`

```vdt
import {Carousel, CarouselItem} from 'kpc/components/carousel';

<Carousel autoplay effect="fade">
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
