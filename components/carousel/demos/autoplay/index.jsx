import React from 'react';
import {Carousel, CarouselItem} from 'kpc-react/components/carousel';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <Carousel autoplay>
                <CarouselItem>1</CarouselItem>
                <CarouselItem>2</CarouselItem>
                <CarouselItem>3</CarouselItem>
                <CarouselItem>4</CarouselItem>
            </Carousel>
        )
    }
}