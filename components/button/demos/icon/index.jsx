import React from 'react';
import Button from 'kpc/components/button';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Button icon><i className="ion-ios-search"></i></Button>
                <Button icon circle><i className="ion-ios-search"></i></Button>
                <Button type="primary"><i className="k-icon ion-ios-search"></i>搜索</Button>
                <Button circle type='primary'><i className="k-icon ion-ios-search"></i>搜索</Button>
            </div>
        )
    }
}