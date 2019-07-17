<template>
    <Carousel :clonedAmount="2">
        <CarouselItem class="one">1</CarouselItem>
        <CarouselItem class="two">2</CarouselItem>
        <CarouselItem class="three">3</CarouselItem>
        <CarouselItem class="four">4</CarouselItem>
    </Carousel>
</template>
<script>
import {Carousel, CarouselItem} from 'kpc/components/carousel';

export default {
    components: {
        Carousel, CarouselItem
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>