import React from 'react';
import Spin from 'kpc/components/spin';

export default class extends React.Component {
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