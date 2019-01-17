import React from 'react';
import Tip from 'kpc/components/tip';

export default class extends React.Component {
    render() {
        return (
            <div>
                {['default', 'primary', 'success', 'warning', 'danger'].map((value, key) => {
                    return (
                        <Tip
                            type={value}
                        >{value}</Tip>
                    )
                })}
            </div>
        )
    }
}