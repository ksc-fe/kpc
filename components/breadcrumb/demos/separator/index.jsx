import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <Breadcrumb
                b-separator={<React.Fragment><b className="separator">=></b></React.Fragment>}
            >
                <BreadcrumbItem to="/">
                    <i className="ion-home" /> item 1
                </BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb/">
                    <i className="ion-earth" /> item 2
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <i className="ion-planet" /> item 3
                </BreadcrumbItem>
            </Breadcrumb>
        )
    }
}