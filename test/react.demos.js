import React from 'react';
import ReactDOM from 'react-dom';
import Intact from 'intact';
import {mount, unmount, testDemos, wait, nextFrame} from './utils';
import {matchSnapshot} from 'chai-karma-snapshot';
import '../styles/kpc.styl';
import './test.styl';

chai.use(matchSnapshot);

const testsContext = require.context('../components/', true, /index\.react\.spec\.js/);
testsContext.keys().forEach(testsContext);

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
    testDemos(reactReq, async (Demo) => {
        demo = mount(wrap(Demo));
        await nextFrame();
        expect(demo.element.innerHTML).to.matchSnapshot();
    });
});
