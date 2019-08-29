import React from 'react';
import ReactDOM from 'react-dom';
import {mount, unmount} from '../../test/utils';
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {BrowserRouter as BrowserRouterV5, Route as RouteV5, Link as LinkV5} from 'react-router-dom-v5';

describe('Breadcrumb', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
    });

    it('should render Link', () => {
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
    });

    it('should render in react-router-dom@v5', () => {
        let link;
        const Test = () => (
            <Breadcrumb>
                <BreadcrumbItem to="/index" ref={i => link = i}>Home</BreadcrumbItem>
                <BreadcrumbItem>Detail</BreadcrumbItem>
            </Breadcrumb>
        );

        ReactDOM.render(
            <BrowserRouterV5>
                <RouteV5 component={Test} />
            </BrowserRouterV5>,
            container
        );

        const dom = ReactDOM.findDOMNode(link);
        dom.querySelector('a').click();
        expect(location.pathname).to.eql('/index');
        history.back();
    });
});
