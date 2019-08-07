import React from 'react';
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Button icon><Icon className="ion-ios-search" /></Button>
                <Button icon circle><Icon className="ion-ios-search" /></Button>
                <Button type="danger" size="large" icon circle><Icon className="ion-ios-search" size="large" /></Button>
                <Button type="primary"><Icon className="ion-ios-search" size="small" />搜索</Button>
                <Button circle type='primary'><Icon className="ion-ios-search" size="small" />搜索</Button>
            </div>
        )
    }
}