import React from 'react';
import Slider from 'kpc-react/components/slider';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Slider disabled value={50} />
                <Slider disabled isRange value={[55, 80]} min={50} max={100} />
            </div>
        )
    }
}