import React from 'react';
import {Carousel, CarouselItem} from 'kpc-react/components/carousel';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <Carousel clonedAmount={2}>
                <CarouselItem className="one">1</CarouselItem>
                <CarouselItem className="two">2</CarouselItem>
                <CarouselItem className="three">3</CarouselItem>
                <CarouselItem className="four">4</CarouselItem>
            </Carousel>
        )
    }
}