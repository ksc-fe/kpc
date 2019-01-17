import React from 'react';
import ReactDOM from 'react-dom';
import {mount, unmount, testDemos} from './utils';
import {matchSnapshot} from 'chai-karma-snapshot';

chai.use(matchSnapshot);

const reactReq = require.context('~/components/', true, /demos\/.*index\.jsx$/);

describe('React Demos', () => {
    let demo;

    afterEach(() => {
        unmount(demo);
    });

    function wrap(Demo) {
        return class extends Intact {
            @Intact.template()
            static template = '<div></div>';

            _mount() {
                ReactDOM.render(
                    React.createElement(Demo),
                    this.element
                );
            }

            _destroy() {
                ReactDOM.unmountComponentAtNode(this.element);
            }
        }
    }
    testDemos(reactReq, (Demo, done) => {
        demo = mount(wrap(Demo));
        setTimeout(() => {
            expect(demo.element.innerHTML).to.matchSnapshot();
            done();
        });
    });
});
