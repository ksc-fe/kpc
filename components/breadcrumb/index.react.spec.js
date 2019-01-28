import React from 'react';
import ReactDOM from 'react-dom';
import {mount, unmount} from '../../test/utils';
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';
import {BrowserRouter, Route, Link} from 'react-router-dom';

describe('Breadcrumb', () => {
    it('should render Link', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        let link;
        const Test = () => (
            <Breadcrumb>
                <BreadcrumbItem to="/index" ref={i => link = i}>Home</BreadcrumbItem>
                <BreadcrumbItem>Detail</BreadcrumbItem>
            </Breadcrumb>
        );

        ReactDOM.render(
            <BrowserRouter>
                <Route component={Test} />
            </BrowserRouter>,
            container
        );

        const dom = ReactDOM.findDOMNode(link);
        dom.querySelector('a').click();
        expect(location.pathname).to.eql('/index');
        history.back();
        document.body.removeChild(container);
    });
});
