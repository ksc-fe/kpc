import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'kpc-react/components/breadcrumb';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <Breadcrumb
                b-separator={<React.Fragment><b className="separator">=></b></React.Fragment>}
            >
                <BreadcrumbItem to="/">
                    <i className="ion-home"></i> item 1
                </BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb/">
                    <i className="ion-earth"></i> item 2
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <i className="ion-planet"></i> item 3
                </BreadcrumbItem>
            </Breadcrumb>
        )
    }
}