import React from 'react';
import Button from 'kpc/components/button';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Button size="large">large</Button>
                <Button>default</Button>
                <Button size="small">small</Button>
                <Button size="mini">mini</Button>
                <br /><br />
                <Button icon circle size="large"><i className="k-icon ion-ios-search"></i></Button>
                <Button icon circle><i className="k-icon ion-ios-search"></i></Button>
                <Button icon circle size="small"><i className="k-icon ion-ios-search"></i></Button>
                <Button icon circle size="mini"><i className="k-icon ion-ios-search"></i></Button>
            </div>
        )
    }
}