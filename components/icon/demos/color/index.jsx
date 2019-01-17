import React from 'react';
import Icon from 'kpc/components/icon';

export default class extends React.Component {
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