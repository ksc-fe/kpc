import React from 'react';
import Icon from 'kpc-react/components/icon';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                {['default', 'primary', 'warning', 'danger', 'success', 'red', '#0000ea', 'rgb(183, 18, 193)'].map((value, key) => {
                    return (
                        <Icon 
                            className="ion-happy-outline" 
                            size="large"
                            color={value}
                        />
                    )
                })}
            </div>
        )
    }
}