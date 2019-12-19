import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'kpc-react/components/breadcrumb';

export default class Demo extends React.Component {
    render() {
        return (
            <Breadcrumb>
                <BreadcrumbItem to="#/">item 1</BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb/">item 2</BreadcrumbItem>
                <BreadcrumbItem>item 3</BreadcrumbItem>
            </Breadcrumb>
        )
    }
}