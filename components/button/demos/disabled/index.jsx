import React from 'react';
import Button from 'kpc-react/components/button';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Button disabled>disabled</Button>
                <Button disabled type="none">disabled text</Button>
                <Button disabled icon circle><i className="k-icon ion-ios-search"></i></Button>
                <Button disabled type="link">link</Button>
            </div>
        )
    }
}