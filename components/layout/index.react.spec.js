import React from 'react';
import ReactDOM from 'react-dom';
import {mount, unmount} from '../../test/utils';
import {Layout, Body} from 'kpc/components/layout';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom-v5';

describe('Layout', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        // document.body.removeChild(container);
    });

    it('should change route', () => {
        ReactDOM.render(
            <Router>
                <Layout>
                    <Link to="/">Home</Link>
                    <Link to="/test">Test</Link>
                    <Switch>
                        <Route path="/" exact>Home Page</Route>
                        <Route path="/test" exact>Test Page</Route>
                    </Switch>
                </Layout>
            </Router>,
            container
        );
    })
});
