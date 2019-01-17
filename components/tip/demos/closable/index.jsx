import React from 'react';
import Tip from 'kpc/components/tip';

export default class extends React.Component {
    render() {
        return (
            <div>
                {['default', 'primary', 'success', 'warning', 'danger'].map((value, key) => {
                    return (
                        <Tip
                            key={value}
                            type={value}
                            closable
                        >{value}</Tip>
                    )
                })}
                <Tip closable
                    b-close={<>No longer show</>}
                >
                    custom closing content
                </Tip>
            </div>
        )
    }
}