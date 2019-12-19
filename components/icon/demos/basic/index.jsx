import React from 'react';
import Icon from 'kpc-react/components/icon';
import './index.styl';

export default class Demo extends React.Component {
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