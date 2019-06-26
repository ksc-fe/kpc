---
title: 展示多个内容块
order: 3
---

`CarouselItem`内容块默认宽度是`100%`，当你需要展示多个内容块时，只需要指定内容块的宽度即可。当它的宽度小于
容器的宽度，即可展示多个内容块。为了保持前后可以无限滚动，此时你需要增大`clonedAmount`的值，它默认为`1`，
该值代表前后克隆的内容块数量。你还可以通过`css`指定内容块的`margin`

> 该特性只对`effect="slide"`有效

```vdt
import {Carousel, CarouselItem} from 'kpc/components/carousel';

<Carousel clonedAmount={{ 2 }}>
    <CarouselItem class="one">1</CarouselItem>
    <CarouselItem class="two">2</CarouselItem>
    <CarouselItem class="three">3</CarouselItem>
    <CarouselItem class="four">4</CarouselItem>
</Carousel>
```

```styl
@require('~kpc/styles/themes/default.styl')

.k-carousel-item
    color #fff
    line-height 300px
    text-align center
    font-size 30px
    width 500px
    margin 0 16px
.one
    background $success-color
.two
    background $danger-color
.three
    background $primary-color
.four
    background $warning-color
```
