import React from 'react';
import Tip from 'kpc-react/components/tip';
import './index.styl';

export default class Demo extends React.Component {
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
                    b-close={<React.Fragment>No longer show</React.Fragment>}
                >
                    custom closing content
                </Tip>
            </div>
        )
    }
}