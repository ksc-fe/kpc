import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';

export default class extends React.Component {
    render() {
        return (
            <Breadcrumb
                b-separator={<><b className="separator">=></b></>}
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