import React from 'react';
import Slider from 'kpc/components/slider';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Slider value={45} step={5} isShowStop isShowInput={false}/>
                <Slider value={[0.3, 0.6]} min={0} max={1} step={0.1} isRange isShowStop />
            </div>
        )
    }
}