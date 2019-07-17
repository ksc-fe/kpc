import React from 'react';
import Input from 'kpc/components/input';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Input clearable placeholder="please enter" />
                <br />
                <Input clearable placeholder="please enter"
                    b-suffix={<React.Fragment><i className="ion-ios-search"></i></React.Fragment>}
                >
                </Input>
            </div>
        )
    }
}