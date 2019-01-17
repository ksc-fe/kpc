import React from 'react';
import Icon from 'kpc/components/icon';

export default class extends React.Component {
    render() {
        return (
            <div>
                {['36', 'large', 'default', 'small', 'mini'].map((value, key) => {
                    return (
                        <Icon
                             className="ion-happy-outline" 
                             size={value}
                        />
                    )
                })}
            </div>
        )
    }
}