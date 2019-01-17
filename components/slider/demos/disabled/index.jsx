import React from 'react';
import Slider from 'kpc/components/slider';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Slider disabled value={50} />
                <Slider disabled isRange value={[55, 80]} min={50} max={100} />
            </div>
        )
    }
}