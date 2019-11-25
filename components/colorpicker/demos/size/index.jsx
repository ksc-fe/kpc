import React from 'react';
import Colorpicker from 'kpc/components/colorpicker';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                {['large', 'default', 'small', 'mini'].map((value, key) => {
                    return (
                        <Colorpicker
                            size={value}
                            value="#36acef"
                        />
                    )
                })}
            </div>
        )
    }
}