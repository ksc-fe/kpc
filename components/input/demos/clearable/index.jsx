import React from 'react';
import Input from 'kpc/components/input';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Input clearable placeholder="please enter" />
                <br />
                <Input clearable placeholder="please enter"
                    b-suffix={<><i className="ion-ios-search"></i></>}
                >
                </Input>
            </div>
        )
    }
}