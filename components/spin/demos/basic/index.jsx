import React from 'react';
import Spin from 'kpc/components/spin';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                {['large', 'default', 'small', 'mini'].map((value, key) => {
                    return (
                        <Spin
                            size={value}
                        />
                    )
                })}
            </div>
        )
    }
}