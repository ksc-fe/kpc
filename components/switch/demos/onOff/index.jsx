import React from 'react';
import {Switch} from 'kpc/components/switch';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Switch on="开" off="关" />
                <Switch value={true}
                    b-on={<><i className="ion-ios-checkmark-empty"></i></>}
                    b-off={<><i className="ion-ios-close-empty"></i></>}
                >
                </Switch>
            </div>
        )
    }
}