import React from 'react';
import Button from 'kpc-react/components/button';
import Icon from 'kpc-react/components/icon';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Button size="large">large</Button>
                <Button>default</Button>
                <Button size="small">small</Button>
                <Button size="mini">mini</Button>
                <br /><br />
                <Button icon circle size="large"><Icon className="ion-ios-search" size="large" /></Button>
                <Button icon circle><Icon className="ion-ios-search" /></Button>
                <Button icon circle size="small"><Icon className="ion-ios-search" size="small" /></Button>
                <Button icon circle size="mini"><Icon className="ion-ios-search" size="mini" /></Button>
            </div>
        )
    }
}