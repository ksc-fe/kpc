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
                            b-title={<React.Fragment>{value}</React.Fragment>}
                            key={value}
                            type={value}
                            closable
                        >
                            This is a {value} tip.
                        </Tip>
                    )
                })}
            </div>
        )
    }
}