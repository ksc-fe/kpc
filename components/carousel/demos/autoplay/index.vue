<template>
    <Carousel autoplay>
        <CarouselItem>1</CarouselItem>
        <CarouselItem>2</CarouselItem>
        <CarouselItem>3</CarouselItem>
        <CarouselItem>4</CarouselItem>
    </Carousel>
</template>
<script>
import {Carousel, CarouselItem} from 'kpc-vue/components/carousel';

export default {
    components: {
        Carousel, CarouselItem
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>