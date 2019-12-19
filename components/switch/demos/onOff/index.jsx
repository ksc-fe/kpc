import React from 'react';
import {Switch} from 'kpc-react/components/switch';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Switch on="开" off="关" />
                <Switch value={true}
                    b-on={<React.Fragment><i className="ion-ios-checkmark-empty"></i></React.Fragment>}
                    b-off={<React.Fragment><i className="ion-ios-close-empty"></i></React.Fragment>}
                >
                </Switch>
            </div>
        )
    }
}